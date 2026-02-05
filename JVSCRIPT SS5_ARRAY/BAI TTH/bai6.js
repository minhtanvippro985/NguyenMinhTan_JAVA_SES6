let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let choice;

do {
    // Hiển thị Menu
    choice = prompt(
        "--- THƯ VIỆN KHOA HỌC ---\n" +
        "1. Xem danh sách\n" +
        "2. Nhập sách mới\n" +
        "3. Mượn sách (Xóa)\n" +
        "4. Sửa tên sách\n" +
        "5. Sắp xếp kệ\n" +
        "0. Thoát\n\n" +
        "Bạn chọn (0-5):"
    );

    switch (choice) {
        case "1": // Hiển thị sách
            if (books.length === 0) {
                alert("=> Kho hiện đang trống!");
            } else {
                let result = `=> Danh sách hiện tại (${books.length} cuốn):\n`;
                for (let i = 0; i < books.length; i++) {
                    result += `${i + 1}. ${books[i]}\n`;
                }
                alert(result);
            }
            break;

        case "2": // Thêm sách mới
            let newBook = prompt("Nhập tên cuốn sách mới:").trim();
            if (newBook !== "") {
                books.push(newBook);
                alert("=> Đã thêm thành công!");
            } else {
                alert("=> Tên sách không được để trống!");
            }
            break;

        case "3": // Mượn sách (Xóa)
            let borrowName = prompt("Nhập tên sách muốn mượn:").trim();
            let borrowIndex = books.indexOf(borrowName);

            if (borrowIndex !== -1) {
                books.splice(borrowIndex, 1);
                alert(`=> Đã cho mượn cuốn '${borrowName}'.`);
            } else {
                alert(`=> Lỗi: Không tìm thấy sách '${borrowName}'!`);
            }
            break;

        case "4": // Cập nhật sách
            let oldName = prompt("Nhập tên sách cũ cần sửa:").trim();
            let editIndex = books.indexOf(oldName);

            if (editIndex !== -1) {
                let updatedName = prompt(`Nhập tên mới cho cuốn '${oldName}':`).trim();
                if (updatedName !== "") {
                    books[editIndex] = updatedName;
                    alert("=> Đã cập nhật thành công!");
                } else {
                    alert("=> Tên mới không được để trống!");
                }
            } else {
                alert("=> Lỗi: Không tìm thấy sách cần sửa!");
            }
            break;

        case "5": 
            books.sort();
            alert("=> Đã sắp xếp lại kệ sách theo bảng chữ cái!");
           
            let sortedList = "Danh sách sau khi sắp xếp:\n";
            for (let i = 0; i < books.length; i++) {
                sortedList += `${i + 1}. ${books[i]}\n`;
            }
            alert(sortedList);
            break;

        case "0":
            alert("Cảm ơn bạn đã sử dụng hệ thống!");
            break;

        default:
            if (choice !== null) alert("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }

} while (choice !== "0" && choice !== null);