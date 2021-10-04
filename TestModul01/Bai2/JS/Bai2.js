
// Câu 2: Viết hàm tìm vị trí của số cho trước có trong mảng:
function findIndex(arr,number) {
   for (let i = 0; i < arr.length; i++) {
       if (number == arr[i]) {
           return i;
       } 
   }
    return -1;
}
let array = [1,4,5,6,7,9];
let number = Number(prompt('Nhập số nguyên bất kỳ'));
document.write(`${number} nằm ở vị trí ${findIndex(array,number)} của mảng [${array}]`);

