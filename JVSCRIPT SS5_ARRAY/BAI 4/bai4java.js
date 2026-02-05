let booksIdStr = "";
let booksNameStr = "";
let booksStatusStr = "";
let bookInventory = 0;
do {
    bookInventory = +prompt("Có bao nhiêu cuốn sách cần kiểm tra?");
} while (isNaN(bookInventory) || bookInventory <= 0);

for (let i = 0; i < bookInventory; i++) {
    let id, name, status, choice;

    do { id = prompt(`Nhập mã sách ${i + 1}:`).trim(); } while (id === "");
    do { name = prompt(`Nhập tên sách ${i + 1}:`).trim(); } while (name === "");
    do {
        choice = prompt(`Tình trạng cho ${name}:\n1-Hỏng nhẹ, 2-Hỏng nặng, 3-Cần sửa gấp`);
    } while (!["1", "2", "3"].includes(choice));

    status = (choice === "1") ? "Hỏng nhẹ" : (choice === "2") ? "Hỏng nặng" : "Cần sửa gấp";


    booksIdStr += id + "|";
    booksNameStr += name + "|";
    booksStatusStr += status + "|";
}


let userAction;
do {
    let ids = booksIdStr.split("|");
    let names = booksNameStr.split("|");
    let statuses = booksStatusStr.split("|");
    
    let currentList = "DANH SÁCH HIỆN TẠI:\n";
    for(let i = 0; i < ids.length - 1; i++) {
        currentList += `${i+1}. ID: ${ids[i]} - Tên: ${names[i]} - [${statuses[i]}]\n`;
    }
    alert(currentList);

    userAction = prompt("Chọn thao tác:\n1 - Sửa trạng thái\n2 - Xóa sách\n0 - Báo cáo & Thoát");

    if (userAction === "1" || userAction === "2") {
        let searchId = prompt("Nhập mã sách cần tìm:").trim();
        let foundIndex = -1;

        for (let i = 0; i < ids.length - 1; i++) {
            if (ids[i] === searchId) {
                foundIndex = i;
                break;
            }
        }

        if (foundIndex !== -1) {
            if (userAction === "1") {
           
                let newChoice;
                do {
                    newChoice = prompt("Chọn mới:\n1-Hỏng nhẹ, 2-Hỏng nặng, 3-Cần sửa gấp, 4-Đã sửa xong, 5-Loại bỏ");
                } while (!["1", "2", "3", "4", "5"].includes(newChoice));
                
                let states = ["Hỏng nhẹ", "Hỏng nặng", "Cần sửa gấp", "Đã sửa xong", "Loại bỏ"];
                statuses[foundIndex] = states[parseInt(newChoice) - 1];
            } else {
               
                ids.splice(foundIndex, 1);
                names.splice(foundIndex, 1);
                statuses.splice(foundIndex, 1);
            }

           
            booksIdStr = ids.join("|");
            booksNameStr = names.join("|");
            booksStatusStr = statuses.join("|");
        } else {
            alert("Không tìm thấy mã sách!");
        }
    }
} while (userAction !== "0");

let finalIds = booksIdStr.split("|");
let finalStatus = booksStatusStr.split("|");
let countFixed = 0, countRemoved = 0;

for(let s of finalStatus) {
    if(s === "Đã sửa xong") countFixed++;
    if(s === "Loại bỏ") countRemoved++;
}

alert(`BÁO CÁO:\n- Còn lại: ${finalIds.length - 1}\n- Đã sửa xong: ${countFixed}\n- Loại bỏ: ${countRemoved}`);