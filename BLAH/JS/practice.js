// Bài tập string
// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// - Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra
// Ví dụ: checkStringExist("i love you", "you") => true
// checkStringExist("i love you", "hate") => false

// Hàm indexOf trả về vị trí đầu tiên xuất hiện trong chuỗi
// Nếu không tìm thấy thì trả về  -1
// Cách 1
function checkStringExist(str, subStr) {
    if (str.indexOf(subStr) != -1) {
        return true
    }
    return false
}

// Cách 2
function checkStringExist(str,subStr) {
    return str.includes(subStr)
}


// Bài 2. Viết hàm rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. 
// Ví dụ: shortenString('Xin chào các bạn') => Kết quả trả về là 'Xin chào...'
function shortenString(str) {
    if (typeof str !== "string") return false
    if (str.length <= 8) return str
    return str.substring(0, 8) + "..."
    // return `${str.substring(0, 8)}...` (Cách 2 : sử dụng template string ES6)
}


// Bài 3. Viết hàm có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên. 
// Ví dụ: capitalizeString('chÀo MừnG đẾn với techMaster') => Kết quả trả về là 'Chào Mừng Đến Với Techmaster'
// Bước 1: Chuyển chuỗi => mảng
// Bước 2: Sử dụng for để in hoa chữ cái đầu tiên của từng phần tử trong mảng => convert từ mảng sang chuỗi
// Sử dụng method slice() để cắt chuỗi
function capitalizeString(str) {
    let strToArr = str.split(' ')
    for (let i = 0; i < strToArr.length; i++) {
        strToArr[i] = strToArr[i].slice(0,1).toUpperCase() + strToArr[i].slice(1).toLowerCase()
    }
    return strToArr.join(' ')
}
console.log(capitalizeString('chÀo MừnG đẾn với techMaster'))

// Bài 4. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.
// Cách 1
function repeatStringTenTimes(str) {
    return str.repeat(10)
}


// Cách 2
function repeatStringTenTimes(str) {
    let result = ""
    for (let i = 0; i < 10; i++) {
        result += str
    }
    return result
}

console.log(repeatStringTenTimes('a-'))

// Bài 5. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'

// Cách 1
function repeatString(str) {
    let result = str
    for(let i =0; i< 9; i++) {
        result += "-" + str
    }
    return result
}

function repeatString(str) {
    let result = ""
    for(let i =0; i< 10; i++) {
        result += "-" + str
    }
    return result.slice(1)
}


// Bài 6. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'

function repeatStringNTimes(str, n) {
    let result = str
    for (let i = 0; i < (n - 1); i++) {
        result += "-" + str
    }
    return result
}

// Bài 7. Viết hàm đảo ngược chuỗi. Viết dunction với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseString('Hello') => Kết quả trả về là 'olleH'

// Cách 1
function reverseString(str) {
    return str.split('').reverse().join('')
}

// Cách 2
function reverseString(str) {
    let result = ""
    for(let i of str) {
        result = i + result
    }
    console.log(result)
}

// Cách 3
function reverseString(str) {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result += [...str][i]
    }
    console.log(result)
}

// Có thể dùng while, do while

// Bài 8. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc

// false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.

// Dòng 1: remove các khoảng trắng, rồi chuyển thành in thường
// Dòng 2: So sánh chuỗi đó với chuỗi đảo ngược của nó
function ifEqual(str) {
    let removedSpacesText = str.split(" ").join("").toLowerCase()
    return removedSpacesText === removedSpacesText.split("").reverse().join("")
}

console.log(ifEqual('hello world'))
