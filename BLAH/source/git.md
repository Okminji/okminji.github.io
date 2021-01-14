<style>
    body {
        font-family: Cascadia Code, san-serif;
        font-weight: 400;
        background-color: #f9f9f9;
        color: #111111;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
    }
    h2 {
        margin-top: 30px;
        margin-bottom: 20px;
    }
    h3 {
        margin-top: 30px;
        margin-bottom: 20px;
    }
    img {
        display: block;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>

# Git

## Version Control System - Hệ thống quản lý phiên bản

Là hệ thống **_ghi lại các thay đổi_** đối với tệp, hoặc thư mục theo thời gian, cho phép:

-   Hoàn lại các thay đổi
-   Đưa toàn bộ dự án về phiên bản trước đó
-   Lấy lại các tệp tin bị mất, lỡ xoá

## Quản lý phiên bản cục bộ

Đơn giản nhất là copy tệp tin ra các thư mục khác nhau (tạo các phiên bản khác nhau)

![Local Version Control System](https://git-scm.com/book/en/v2/images/local.png "Quản lý phiên bản cục bộ")

## Quản lý phiên bản tập trung

Cho phép nhiều máy tính cùng làm việc trên một dự án, sử dụng một máy chủ để quản lý phiên bản và chỉ có duy nhất máy chủ lưu trữ toàn bộ dự án, nếu máy chủ die???

![Centralized Version Control System](https://git-scm.com/book/en/v2/images/centralized.png "Quản lý phiên bản tập trung")

## Quản lý phiên bản phân tán

Máy chủ và tất cả máy khách đều chứa kho lưu trữ đầy đủ các phiên bản của tệp, khi máy chủ gặp sự cố, có thể sao chép từ bất kỳ máy khách nào.

![Distributed Version Control System](https://git-scm.com/book/en/v2/images/distributed.png "Quản lý phiên bản phân tán")

## Git

Git là hệ thống quản lý phiên bản phân tán. Nó lưu trữ dữ liệu về các tệp tin, thư mục bằng các bản chụp (snapshoot) tại thời điểm dữ liệu được cam kết thay đổi, và tạo một tham chiếu đến bản chụp đó.

Với những tệp có thay đổi, Git sẽ tạo ra một bản chụp mới tệp đó.

Với những tệp không có thay đổi, Git chỉ đơn giản tạo tham chiếu đến bản chụp trước đó của tệp.

![Git](https://git-scm.com/book/en/v2/images/snapshots.png)

Git sử dụng kho lưu trữ cục bộ trên máy tính (trong thư mục .git)

## Cấu trúc thư mục làm việc của Git

Có 3 khu vực của tệp tin trong Git.

-   Working Directory - Thư mục làm việc

-   Staging Area - Nơi lưu bản chụp tạm thời

-   Thư mục .git - Kho lưu trữ các bản chụp

![](https://git-scm.com/book/en/v2/images/areas.png)

## Cài đặt

<https://git-scm.com/downloads>

## Thiết lập thông tin cơ bản

Git sử dụng công cụ `git config` để thiết lập cấu hình hoạt động của nó, được lưu trong các tệp `gitconfig`.

Name: `git config --global user.name "name"`

Email: `git config --global user.email "email@...com"`

Tip: `git config --global credential.helper store`

## Các lệnh cơ bản với Git

-   Khởi tạo kho lưu trữ: `git init`
-   Kiểm tra trạng thái: `git status`
-   Chụp lại các thay đổi hiện tại: `git add .`
-   Cam kết (lưu) vào kho lưu trữ: `git commit -m "mô tả"`

## Các trạng thái của tệp

-   **_untracked_** các tệp không được Git theo dõi (được khai báo trong tệp .gitignore)
-   **_unmodified_** các tệp đã được cam kết vào kho lưu trữ, và chưa có sự thay đổi so với bản chụp gần nhất
-   **_modified_** các tệp đã được cam kết vào kho lưu trữ và đã có sự thay đổi so với bản chụp gần nhất, nhưng chưa cam kết (lưu) vào kho lưu trữ Git
-   **_staged_** sự thay đổi của tệp đã được chụp lại (snapshoot), có thể cam kết (lưu) vào kho lưu trữ

![](https://git-scm.com/book/en/v2/images/lifecycle.png)

## Một số lệnh cơ bản khác

-   Bỏ qua bước `git add`: `git commit -a -m "..."`
-   Xem chi tiết thay đổi trong tệp: `git diff`
-   Xoá tệp khỏi thư mục git: `git rm filename`
-   Xoá tệp bản chụp tạm (stagging area): `git restore --staged filename`
-   Xoá các thay đổi: `git restore filename`
-   Xem lịch sử cam kết: `git log`
-   Xem lịch sử cam kết và chi tiết các thay đổi: `git log -p`

## Github

![Distributed Version Control System](https://git-scm.com/book/en/v2/images/distributed.png "Quản lý phiên bản phân tán")

-   Thêm một kho lưu trữ từ xa: `git remote add name ...`
-   Đẩy dữ liệu đến kho lưu trữ: `git push name master`
-   Clone 1 repo từ Github: `git clone link.git`
-   Clone và đổi tên: `git clone link.git name`
-   Lấy dữ liệu mới nhất từ kho lưu trữ từ xa: `git pull name master`
-   Xem chi tiết remote: `git remote show name`
-   Đổi tên remote: `git remote rename oldname newname`
-   Xoá remote: `git remote remove name`
-   Gắn thẻ _version_: `git tag tagname`
-   Đẩy thẻ lên Github: `git push remote master tagname`
-   Xoá thẻ: `git tag -d tagname`
-   Xoá thẻ trên Github: `git push remotes --delete tagname`
-   Kiểm tra một phiên bản / commit: `git checkout commit/tagname`
-   Trở về phiên bản mới nhất: `git checkout -`
