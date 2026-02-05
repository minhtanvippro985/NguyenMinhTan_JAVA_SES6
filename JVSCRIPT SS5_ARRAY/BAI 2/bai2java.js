let booksArray = [];
let numberBooks ;
let count = 0;
let morethan20 = 0;

do{
    numberBooks = +prompt("Nhập số trả muộn")
}while(isNaN(numberBooks) || numberBooks <= 0 );


for(let i = 0 ; i < numberBooks ; i++){
    let bookName = prompt("Nhập tên sách của bạn : ");
    booksArray.push(bookName);
    if(bookName.length >= 20){
        morethan20++;
    }
    count++;
    
}

console.log(`Tổng só sách đã trả muộn ${count}`);
for(let i = 0 ; i < booksArray.length ; i++){
    console.log(`${i} . ${booksArray[i]} `)
}
console.log(`Tổng só sách cố tên dài hơn 20 ký tự ${morethan20}`);

