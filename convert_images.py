import os
import re
from PIL import Image

def convert_to_webp(directory, quality=85):
    converted_files = {} # original_rel_path: new_rel_path
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                original_path = os.path.join(root, file)
                name, ext = os.path.splitext(file)
                new_file = f"{name}.webp"
                new_path = os.path.join(root, new_file)
                
                try:
                    with Image.open(original_path) as img:
                        # Convert to RGB if necessary (e.g. for RGBA PNGs)
                        # Actually WebP supports alpha, so we can keep it.
                        img.save(new_path, "WEBP", quality=quality)
                    
                    old_size = os.path.getsize(original_path)
                    new_size = os.path.getsize(new_path)
                    reduction = (old_size - new_size) / (1024 * 1024)
                    print(f"Converted: {original_path} -> {new_path} (Saved {reduction:.2f} MB)")
                    
                    # Store mapping for replacement
                    rel_original = os.path.relpath(original_path, start=".")
                    rel_new = os.path.relpath(new_path, start=".")
                    # Use forward slashes for web paths
                    rel_original_web = rel_original.replace("\\", "/")
                    rel_new_web = rel_new.replace("\\", "/")
                    converted_files[rel_original_web] = rel_new_web
                    
                except Exception as e:
                    print(f"Error converting {original_path}: {e}")
                    
    return converted_files

def update_references(target_files, mapping):
    for file_path in target_files:
        if not os.path.exists(file_path):
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            updated_count = 0
            
            # Sort mapping keys by length (longest first) to avoid partial replacements
            # e.g. "image.png" vs "small_image.png"
            for old_path, new_path in sorted(mapping.items(), key=lambda x: len(x[0]), reverse=True):
                # Use regex to find the file extension and replace it if it matches our list
                # Specifically targeting paths that look like "images/.../*.png"
                # But simple string replacement for the specific filename is safer here
                if old_path in content:
                    content = content.replace(old_path, new_path)
                    updated_count += 1
            
            # Generic replacement for extensions if they are used as part of dynamically built paths
            # e.g. some_path + ".png" -> some_path + ".webp"
            # But let's stick to the specific mapping first.
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated references in: {file_path} ({updated_count} replacements)")
        except Exception as e:
            print(f"Error updating {file_path}: {e}")

def cleanup_originals(mapping):
    for old_path_web in mapping.keys():
        old_path = old_path_web.replace("/", os.sep)
        if os.path.exists(old_path):
            try:
                os.remove(old_path)
                print(f"Deleted: {old_path}")
            except Exception as e:
                print(f"Error deleting {old_path}: {e}")

if __name__ == "__main__":
    print("Starting Image Conversion to WebP...")
    mapping = convert_to_webp("images")
    
    if not mapping:
        print("No images found to convert.")
    else:
        print(f"\nConverted {len(mapping)} images. Updating references...")
        
        # Files to sweep for references
        target_files = [
            "index.html", "subject.html", "header.html", "footer.html",
            "js/courses.json", "js/game_dev.json", "js/computer_vision.json",
            "js/calculus.json", "js/computer_organization.json", "js/script.js", "js/main.js"
        ]
        
        update_references(target_files, mapping)
        
        print("\nCleanup phase: deleting original image files...")
        # cleanup_originals(mapping) # Uncomment after verification if needed, 
        # but I'll run it now since the user asked for it.
        cleanup_originals(mapping)
        
        print("\nAll tasks completed!")
