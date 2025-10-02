# PowerShell Script: Đổi tên hàng loạt tệp ảnh theo số thứ tự gốc

Đây là một kịch bản PowerShell mạnh mẽ để đổi tên hàng loạt các tệp ảnh (ví dụ: `.png`, `.jpg`) dựa trên một số ở cuối tên tệp gốc.

## Mục đích

Kịch bản này giải quyết vấn đề khi bạn có nhiều tệp với tên dài và phức tạp, nhưng chứa số thứ tự slide ở cuối, ví dụ:

- `1756988870836-64e...and Unity3D Basics_38.png`
- `Another-File-Name_With_Different_Prefix_9.png`

Nó sẽ chuyển đổi chúng thành một định dạng sạch sẽ và thống nhất, ví dụ:

- `slide_38.png`
- `slide_9.png`

## Tại sao nên dùng kịch bản này?

- **Không cần cài đặt:** PowerShell được tích hợp sẵn trên tất cả các phiên bản Windows hiện đại.
- **Cực kỳ linh hoạt:** Kịch bản tự động xử lý mọi loại tiền tố (phần tên tệp phía trước), miễn là tên tệp tuân theo cấu trúc `[bất kỳ]_[số].png`.
- **An toàn:** Lệnh chỉ tác động đến các tệp khớp với mẫu, không ảnh hưởng đến các tệp khác.

## Hướng dẫn sử dụng

> **QUAN TRỌNG:** Luôn luôn tạo một bản sao (backup) hoặc thử nghiệm trên một thư mục copy trước khi chạy lệnh trên dữ liệu gốc của bạn!

1.  **Điều hướng đến thư mục:** Mở thư mục chứa các tệp ảnh bạn muốn đổi tên.
2.  **Mở PowerShell:** Giữ phím `Shift` trên bàn phím, sau đó nhấp chuột phải vào một khoảng trống trong thư mục và chọn **"Open PowerShell window here"** (Mở cửa sổ PowerShell tại đây).
3.  **Copy kịch bản:** Sao chép toàn bộ khối mã bên dưới.
4.  **Dán và chạy:** Dán kịch bản vào cửa sổ PowerShell vừa mở và nhấn `Enter`. Quá trình đổi tên sẽ diễn ra ngay lập tức.

## Kịch bản PowerShell

# BƯỚC 1: Đổi tên tất cả các file .png sang một tên tạm thời
Get-ChildItem -Filter *.png | ForEach-Object {
    if ($_.Name -match '(.*)_(\d+)\.png') {
        # Thêm tiền tố "temp_" vào trước tên mới
        $tempName = "temp_slide_{0}.png" -f $matches[2]
        
        # Thêm -Force để ghi đè nếu cần, và -ErrorAction SilentlyContinue để bỏ qua lỗi
        Rename-Item -Path $_.FullName -NewName $tempName -ErrorAction SilentlyContinue
    }
}
Write-Host "Buoc 1 Hoan tat! Tat ca cac tep da duoc doi ten tam thoi."

# BƯỚC 2: Đổi tên từ tên tạm thời về tên cuối cùng
Get-ChildItem -Filter "temp_*.png" | ForEach-Object {
    # Tạo tên mới bằng cách loại bỏ "temp_"
    $finalName = $_.Name.Replace("temp_", "")
    
    Rename-Item -Path $_.FullName -NewName $finalName
}
Write-Host "Buoc 2 Hoan tat! Da doi ten xong."