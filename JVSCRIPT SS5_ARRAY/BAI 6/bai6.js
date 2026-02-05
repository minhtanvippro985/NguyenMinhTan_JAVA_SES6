let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let peopl = 0;


do {
    peopl = +prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn (ngày 13/01/2026)?");
} while (isNaN(n) || n <= 0);

for (let i = 0; i < peopl; i++) {
    console.log(`--- Nhập thông tin bạn đọc thứ ${i + 1} ---`);

    let cardId;
    while (true) {
        cardId = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1}:`).trim();
        let isDuplicate = false;
        
        for (let j = 0; j < readerCardIds.length; j++) {
            if (readerCardIds[j] === cardId) {
                isDuplicate = true;
                break;
            }
        }

        if (cardId === "") {
            alert("Mã thẻ không được để trống!");
        } else if (isDuplicate) {
            alert("Mã thẻ này đã tồn tại, vui lòng nhập mã khác!");
        } else {
            readerCardIds.push(cardId);
            break;
        }
    }

    let name;
    do {
        name = prompt(`Nhập tên bạn đọc thứ ${i + 1}:`).trim();
    } while (name === "");
    readerNames.push(name);

    let bookCodes;
    do {
        bookCodes = prompt(`Nhập mã các sách mượn của ${name} (cách nhau bởi dấu phẩy):`).trim();
    } while (bookCodes === "");
    borrowedBookCodes.push(bookCodes);

    let days;
    do {
        days = +prompt(`Nhập số ngày quá hạn của ${name}:`);
    } while (isNaN(days) || days < 0);
    overdueDays.push(days);
}

console.log("\n--- KẾT QUẢ PHÂN TÍCH DỮ LIỆU ---");

let count10Days = 0;
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 10) count10Days++;
}
console.log(`a. Tổng số bạn đọc có quá hạn ≥ 10 ngày: ${count10Days}`);

console.log("b. Mã thẻ bạn đọc mượn cả sách mã 'JS' và 'PYT':");
for (let i = 0; i < borrowedBookCodes.length; i++) {
    let codes = borrowedBookCodes[i].toUpperCase();

    if (codes.includes("JS") && codes.includes("PYT")) {
        console.log(`- ${readerCardIds[i]}`);
    }
}

let maxDays = overdueDays[0];
let maxIndex = 0;
for (let i = 1; i < overdueDays.length; i++) {
    if (overdueDays[i] > maxDays) {
        maxDays = overdueDays[i];
        maxIndex = i;
    }
}
console.log(`c. Bạn đọc có ngày quá hạn cao nhất: ${readerNames[maxIndex]} (${maxDays} ngày)`);


let countWarning = 0;
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 7) countWarning++;
}

console.log("d. Cảnh báo hệ thống:");
if (countWarning === 0) {
    console.log("=> Tình hình trả sách hôm nay khá tốt!");
} else if (countWarning >= 1 && countWarning <= 4) {
    console.log("=> Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
    console.log("=> Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}