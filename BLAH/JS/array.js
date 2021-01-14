// Bài tập phần Array

// Bài 1. Viết hàm tìm ra số nhỏ nhất trong mảng các số. Ví dụ:
// minNumbers([2, 1, 3]) => Kết quả trả về là 1

function minNumbers(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min
}

function minNumbers(arr) {
    return Math.min(...arr)
}

function minNumbers(arr) {
    return arr.sort(function(a,b) {
        return a-b
    })[0]
}

// Bài 2. Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
// max2Numbers([2, 1, 3, 4]) => Kết quả trả về là 3

function max2Numbers(arr) {
    let distinctArr = arr.filter((el, index) => arr.indexOf(el) == index) // Cách 1
    return distinctArr.sort(function (a, b) {
        return b - a
    })[1]
}

function max2Numbers(arr) {
    let distinctArr = [...new Set(arr)] // Cách 2
    return distinctArr.sort(function (a, b) {
        return b - a
    })[1]
}


// Bài 3. Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. Ví dụ:
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => Kết quả trả về là ['Tuấn', 'Nam', 'Hoa']
function sortStudents(arr) {
    return arr.sort((a, b) => b.localeCompare(a));
}

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100

function sum() {
    let result = 0
    for (let i = 0; i <= 100; i++) {
        if (i % 5 == 0) {
            result += i
        }
    }
    return result
}

// Bài 5. Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

function modulo2(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(i % 2)
    }
    return result
}

let modulo2 = (arr) => {
    return arr.map(ele => ele % 2)
}

// Bài 6. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số

// [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].
function maxLengthOfArr(arr) {
    let arrLength = arr.map(ele => ele.length)
    let maxLength = Math.max(...arrLength)
    return arr.filter(ele => ele.length == maxLength)
}

