let booksArray = [];
let numberBooks ;
let count = 0;


do{
    numberBooks = +prompt("Nhập số sách bạn muốn nhập")
}while(isNaN(numberBooks) || numberBooks <= 0 );


for(let i = 0 ; i < numberBooks ; i++){
    let bookName = prompt("Nhập tên sách của bạn : ");
    booksArray.push(bookName);
    count++;
    
}

console.log(`Tổng só sách đã trả ${count}`);
console.log(`${booksArray}`)

