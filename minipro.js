
let libraries = ["Toán", "Văn", "Anh"];
const ADMIN_USER = "admin";
const ADMIN_PASS = "12345";
let loginAttempts = 0;
let isLoggedIn = false;


while (loginAttempts < 3) {
    let user = prompt("Nhập tài khoản:");
    let pass = prompt("Nhập mật khẩu:");

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        isLoggedIn = true;
        alert("Đăng nhập thành công!");
        break;
    } else {
        loginAttempts++;
        alert(`Sai tài khoản hoặc mật khẩu! Bạn còn ${3 - loginAttempts} lần thử.`);
    }
}

if (!isLoggedIn) {
    alert("Tài khoản đã bị khóa!");
} else {
    // --- B. HỆ THỐNG MENU (Chỉ chạy khi đăng nhập thành công) ---
    let choice;
    do {
        choice = prompt(
            "--- QUẢN LÝ THƯ VIỆN ---\n" +
            "1. Nhập thêm lô sách mới\n" +
            "2. Hiển thị danh sách sách\n" +
            "3. Tìm kiếm sách\n" +
            "4. Cập nhật tên sách\n" +
            "5. Đảo ngược thứ tự kệ sách\n" +
            "6. Nhập kho từ nguồn khác\n" +
            "0. Thoát chương trình\n" +
            "Bạn chọn:"
        );

        switch (choice) {
            case "1": 
                let batchInput = prompt("Nhập danh sách sách (phân cách bởi dấu phẩy):");
                if (batchInput) {
                    let newBatch = batchInput.split(","); // Tách chuỗi thành mảng
                    for (let i = 0; i < newBatch.length; i++) {
                        libraries.push(newBatch[i].trim()); // Thêm từng cuốn vào kho
                    }
                    alert(`Đã thêm thành công ${newBatch.length} cuốn sách vào kho.`);
                }
                break;

            case "2": 
                console.log("\n--- DANH SÁCH SÁCH HIỆN CÓ ---");
                if (libraries.length === 0) {
                    console.log("Kho sách trống.");
                } else {
                    libraries.forEach((book, index) => {
                        console.log(`${index + 1}. ${book}`);
                    });
                }
                break;

            case "3": 
                let searchName = prompt("Nhập tên sách cần tìm:").trim();
                let foundIndex = libraries.indexOf(searchName);
                if (foundIndex !== -1) {
                    alert(`Sách [${searchName}] được tìm thấy tại vị trí (index): ${foundIndex}`);
                } else {
                    alert("Không tìm thấy sách trong kho.");
                }
                break;

            case "4": 
                let oldName = prompt("Nhập tên sách cần sửa:").trim();
                let editIdx = libraries.indexOf(oldName);
                if (editIdx !== -1) {
                    let newName = prompt("Nhập tên mới:").trim();
                    libraries[editIdx] = newName;
                    alert("Cập nhật thành công!");
                } else {
                    alert("Sách không tồn tại, không thể sửa.");
                }
                break;

            case "5": 
                libraries.reverse();
                console.log("\n--- KỆ SÁCH SAU KHI ĐẢO NGƯỢC ---");
                libraries.forEach((book, index) => {
                    console.log(`Index ${index}: ${book}`);
                });
                alert("Đã đảo ngược thứ tự kệ sách (Xem console).");
                break;

            case "6": // Nhập kho từ nguồn khác
                let otherBranch = ["Sách Kỹ Năng", "Truyện Tranh"];
                libraries = libraries.concat(otherBranch); // Gộp 2 mảng
                alert("Đã gộp kho sách thành công!");
                break;

            case "0":
                alert("Hẹn gặp lại!");
                break;

            default:
                if (choice !== null) alert("Lựa chọn không hợp lệ!");
        }
    } while (choice !== "0" && choice !== null);
}