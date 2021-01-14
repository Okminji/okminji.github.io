/////////////Xử lý số/////////////

// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function calculateVolumeOfSphere(radius) {
    return 4 / 3 * Math.PI * Math.pow(radius, 3)
}
// let result = calculateVolumeOfSphere(2)
// console.log(result)

// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với 
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function sumBetweenTwoInteger(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    let sum = 0;

    for (let i = min + 1; i < max; i++) {
        sum += i;
    }

    return sum;
}


// Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function isPrimeNumber(x) {
    // Nếu tham số truyền vào không phải là số nguyên hoặc nhỏ hơn 2 thì không phải là SNT
    if (!Number.isInteger(x) || x < 2) {
        return false;
    }

    // Kiểm tra từ 2 đến x - 1 xem có số nào là ước của x hay không, nếu có thì x không phải là SNT.
    for (let i = 2; i < Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }

    // Các trường hợp còn lại là SNT
    return true;
}

// Bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham 
// số truyền vào.
function sumPrimeNumbers(x) {
    let sum = 0;

    for (let i = 2; i <= x; i++) {
        if (isPrimeNumber(i) == true) {
            sum = sum + i;
        }
    }

    return sum;
}

// Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function sumOfUC(num) {
    let sum = 0
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
            sum += i
        }
    }
    return sum
}
// console.log(sumOfUC(8))


//////////////Xử lý Object//////////////
// Bài 6. Viết hàm để lấy danh sách các key của object
// vd :
let user = {
    name: "Trương Minh Thúy",
    age: 25,
    email: 'support@techmaster.vn'
};


// => name,age,email
function getListKeyObject(obj) {
    let listKey = Object.keys(obj)
    return listKey.join(",")
}
// console.log(getListKeyObject(user))

// Bài 7. Viết hàm để lấy danh sách các value của object
// vd :
// var user = {
//     name : "Trương Minh Thúy",
//     age : 25,
//     email : 'support@techmaster.vn'
// };
// => 'Trương Minh Thúy',25,'support@techmaster.vn'
function getListValueObject(obj) {
    let listValue = Object.values(obj)
    return listValue.join(",")
}
// console.log(getListValueObject(user))


// bài 8. Viết hàm kiểm tra key có tồn tại trong Object không
// vd :
// var user = {
//     name : "Trương Minh Thúy",
//     age : 25,
//     email : 'support@techmaster.vn'
// };
// => checkKey('name') => true
// checkKey('study') => false
function checkKey(obj, key) {
    return obj.hasOwnProperty(key)
}
// console.log(checkKey(user,'age'))
// console.log(checkKey(user,'address'))


// bài 9. Viết hàm kiểm tra Object có độ dài bao nhiêu
// vd :
// var user = {
//     name : "Trương Minh Thúy",
//     age : 25,
//     email : 'support@techmaster.vn'
// };
// => getLengthObject(user) => 3

function getLengthObject(obj) {
    let size = 0
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            size++;
        }
    }
    return size;
}
// console.log(getLengthObject(user))


// Bài 10. Cho mảng các user
// mỗi object có cấu trúc như sau
// user = {
//     name : string,
//     age : number,
//     isStatus : bool
// }
let users = [
    {
        name: "Trương Minh Thúy",
        age: 25,
        isStatus : true,
    },
    {
        name: "Bùi Văn Hiên",
        age: 23,
        isStatus : false,
    },
    {
        name: "Nguyễn Thanh Hương",
        age: 28,
        isStatus : true,
    }
]


// Viết function lấy ra những user có tuổi > 25 và isStatus = true
// function getUsers(users) {
//     return users.filter(user => user.age > 25 && user.isStatus == true)
// }
// console.log(getUsers(users))

function getUsers(users) {
    let newArrUsers = []
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 25 && users[i].isStatus == true) {
            newArrUsers.push(users[i])
        }
    }
    return newArrUsers
}
// console.log(getUsers(users))

// Bài 11. Tương tự bài 5
// Viết function sắp xếp các user theo tuổi tăng dần
function getUsersWithAgeASC(users) {
    return users.sort((a, b) => a.age - b.age)
}
// console.log(getUsersWithAgeASC(users))