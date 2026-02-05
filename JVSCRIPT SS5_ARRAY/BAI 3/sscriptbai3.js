let booksArray = [];
let BooksId = [];
let BooksLeft = [];
let inventoryBooks = 0;
let lowerthan5 = 0;
let noinInvent = 0;


do {
    inventoryBooks = +prompt("Nhập số sách cần kiểm tra")
}while(isNaN(inventoryBooks) || inventoryBooks <= 0 );


  for(let i = 0 ; i < inventoryBooks ; i++){
    do{
     booksArray[i]  = prompt(`Nhập quyển sách thứ ${i + 1}`);
     console.log(booksArray);
    }while(booksArray[i] == "");
    do{
        BooksId[i] = prompt(`Nhập ID quyển sách thứ ${i + 1}`);
    } while(BooksId[i] == "");
    do{
        BooksLeft[i] = prompt(`Nhập số lượng sách ${i + 1}`);
    }while((isNaN(BooksLeft[i])));
  
  }
  for(let i = 0 ; i < inventoryBooks ; i++){
      if(BooksLeft[i] <= 5 ){
        lowerthan5++;
      } else if(BooksLeft[i] == 0 ) {
        noinInvent++;
      } else {
        BooksLeft[i] = "Khong xac dinh" 
      }
  }

  for(let i = 0 ; i < inventoryBooks ; i++){
        
        console.log(`Mã ${BooksId[i]} - Tên ${booksArray[i]} - Còn ${BooksLeft[i]} bản`)
  }

  console.log("tổng số sách dưới 5" + lowerthan5);
  console.log("tổng số sách không có trong kho" + noinInvent);


