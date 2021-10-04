// Câu 3 : Viết hàm đếm số ký tự nguyên âm trong chuỗi cho trước 
function countVowelCharacter(Str) {
    let count = 0;
    for (let i = 0; i < Str.length; i++) {
        if (Str[i] == "a" || Str[i] == "o" || Str[i] == "e" || Str[i] == "u" || Str[i] == "i") {
            count += 1;
        }
    }
    if (count == 0) {
        return false;
    } else {
        return count;
    }
}
let str = prompt('Nhập chuỗi');
document.write(countVowelCharacter(str));