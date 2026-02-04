let students = "Qúy,Nam,Lan,Hùng,Nam";
let studentsBaseArray = students.split(",")
let newStudentArray = students.split(",");
console.log(newStudentArray)

newStudentArray.reverse()
console.log(newStudentArray)


if(newStudentArray.includes("Lan"),true){
    console.log("Tên Lan Tồn tại trong Mảng")
} else {
    console.log("Tên Lan không tồn tại trong mảng")
}

for(let i = 0 ; i < studentsBaseArray.length ;i++){
    if(studentsBaseArray[i] == "Nam"){
        console.log(`Nam ở vị trí thứ ${i}`);
        break;
    }
}