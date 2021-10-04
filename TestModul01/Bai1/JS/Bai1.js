// Câu 1 : Viết hàm giải phương trình bậc 1:
function giaiPtBac1(a,b) {
    if (a==0) {
        if (b==0) {
            alert('Phương trình vô số nghiệm');
        } else {
            alert('Phương trình vô nghiệm');
        }
    } else { 
        return (-b)/a;
    }
}
let a = 5;
let b = 8;
document.write(`Nghiệm của phương trình ${a}x + ${b} = 0 là:  x = ${giaiPtBac1(a,b)} `);
