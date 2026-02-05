let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let n = 0;

do {
    n = +prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?");
} while (isNaN(n) || n <= 0);

for (let i = 0; i < n; i++) {
    console.log(`--- Nhập thông tin sách thứ ${i + 1} ---`);

    let id;
    while (true) {
        id = prompt(`Nhập mã sách thứ ${i + 1}:`).trim();
        if (id === "") {
            alert("Mã sách không được để trống!");
        } else if (booksId.includes(id)) {
            alert("Mã sách này đã tồn tại, vui lòng nhập mã khác!");
        } else {
            booksId.push(id);
            break;
        }
    }

    let name;
    do {
        name = prompt(`Nhập tên sách thứ ${i + 1}:`).trim();
    } while (name === "");
    booksName.push(name);
    let category;
    do {
        category = prompt(`Nhập các thể loại của sách ${name} (cách nhau bởi dấu phẩy):`).trim();
    } while (category === "");
    booksCategory.push(category);

    let qty;
    do {
        qty = +prompt(`Nhập số lượng tồn kho của sách ${name}:`);
    } while (isNaN(qty) || qty < 0);
    inventoryQuantity.push(qty);
}

let lapTrinhCount = 0;
for (let i = 0; i < booksCategory.length; i++) {
    if (booksCategory[i].toLowerCase().includes("lập trình")) {
        lapTrinhCount++;
    }
}
console.log(`Tổng số sách thuộc thể loại 'Lập trình': ${lapTrinhCount}`);

console.log("Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':");
for (let i = 0; i < booksCategory.length; i++) {
    let catLower = booksCategory[i].toLowerCase();
    if (catLower.includes("javascript") && catLower.includes("web")) {
        console.log(booksId[i]);
    }
}

let minIndex = 0;
for (let i = 1; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] < inventoryQuantity[minIndex]) {
        minIndex = i;
    }
}
console.log("Loại sách có số lượng tồn kho thấp nhất:");
console.log(`Mã sách: ${booksId[minIndex]}, Tên sách: ${booksName[minIndex]}, Tồn kho: ${inventoryQuantity[minIndex]}`);