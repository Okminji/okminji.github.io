// ==========================DATE===============================

// Bài 1: Viết một hàm JavaScript để lấy ngày hiện tại
// Lưu ý: Truyền dấu phân tách làm đối số.
// getCurrentDate("/") => 17/08/2020

var curday = function (sp) {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();
  
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (mm + sp + dd + sp + yyyy);
  };
  
  
  // Bài 2: Viết một hàm JavaScript để lấy số ngày trong tháng
  // getDaysInMonth(8, 2020) => 31
  
  var getDaysInMonth = function (month, year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
    // Here January is 0 based
    // return new Date(year, month+1, 0).getDate();
  };
  
  
  // Bài 3: Viết một hàm JavaScript để kiểm tra xem một ngày có phải là ngày cuối tuần hay không.
  
  var is_weekend = function (date1) {
    var dt = new Date(date1);
    if (dt.getDay() == 6 || dt.getDay() == 0) {
      return "weekend";
    }
  }
  
  // Bài 4: Viết một hàm JavaScript để kiểm tra xem một `input` có phải là một đối tượng ngày tháng hay không
  var is_date = function (input) {
    if (Object.prototype.toString.call(input) === "[object Date]")
      return true;
    return false;
  };
  
  // Bài 5: Viết một hàm JavaScript sẽ trả về số phút theo giờ và phút
  function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
  }
  
  // Bài 6: Viết một hàm JavaScript để đếm số ngày đã trôi qua kể từ đầu năm.
  function days_passed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 0, 1);
    return Math.ceil((current - previous + 1) / 86400000);
  }
  
  // Bài 7: Viết chương trình JavaScript để tính tuổi.
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  
  console.log(calculate_age(new Date(1982, 11, 4)));
  console.log(calculate_age(new Date(1962, 1, 1)));
  
  // Bài 8: Viết hàm JavaScript để nhận chênh lệch thời gian tính bằng phút giữa hai ngày
  
  function diff_minutes(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }
  
  dt1 = new Date("October 13, 2014 11:11:00");
  dt2 = new Date("October 13, 2014 11:13:00");
  console.log(diff_minutes(dt1, dt2));
  
  // Bài 9: Viết một hàm JavaScript để lấy ngày bắt đầu của tuần.
  function startOfWeek(date) {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }
  dt = new Date();
  console.log(startOfWeek(dt).toString());
  
  
  // Bài 10: Viết một hàm JavaScript để lấy ngày kết thúc tháng
  function endOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }
  
  dt = new Date();
  console.log(endOfMonth(dt).toString());
  
  //=========================ES6==================================
  
  // Bài 1: Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng
  const sample = arr => arr[Math.floor(Math.random() * arr.length)];
  console.log(sample([3, 7, 9, 11]));
  
  // Bài 2: Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
  
  // Bài 3: Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng
  const similarity = (arr, values) => arr.filter(v => values.includes(v));
  console.log(similarity([1, 2, 3], [1, 2, 4]));
  
  // Bài 4: Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng
  const symmetricDifference = (a, b) => {
    const sA = new Set(a),
      sB = new Set(b);
    return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
  };
  console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));
  
  // Bài 5: Xóa n phần tử khỏi phần cuối của một mảng nhất định
  const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
  
  console.log(takeRight([1, 2, 3], 2));
  console.log(takeRight([1, 2, 3]));
  
  // Bài 6: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
  const union = (a, b) => Array.from(new Set([...a, ...b]));
  console.log(union([1, 2, 3], [4, 3, 2]));
  console.log(union([1, 2, 3], [1, 2, 3]));
  
  // Bài 7: Viết chương trình JavaScript để tạo mã màu HEX ngẫu nhiên.
  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  console.log(random_hex_color_code())
  
  // Bài 8: Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi.
  String.prototype.sub_String = function() 
  {
    var subset = [];
    for (var m = 0; m < this.length; m++) 
    {
      for (var n = m+1; n<this.length+1; n++) 
      {
        subset.push(this.slice(m,n));
      }
    }
    return subset;
  };
  
  console.log("dog".sub_String()); // => ["d","do","dog","o","og","g"]
  
  // Bài 9: Bài 3: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''.
  
  // Bài 10: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên). Ví dụ với tham số 53751 thì kết quả là 13557.
  
  // Bài 11: Kiểm tra 1 chuỗi có phải là chuỗi viết hoa hay không?
  function isUpperCaseAt(str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
       }
   console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
  
   // Bài 12: Kiểm tra mảng xem có phải mảng tăng dần hay không
  
   // Bài 13 Kiểm tra mảng xem có phải mảng sô lẻ giảm dần hay không
  
   // Bài 14 Viết hàm đếm ngược thời gian đến tết dương lịch
  
  
  // Bài 3: Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng
  const similarity = (arr, values) => arr.filter(v => values.includes(v));
  
   // Bài 4: Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng
   const symmetricDifference1 = (a, b) => {
     let arr1 = a.filter(u => !b.includes(u))
     let arr2 = b.filter(v => !a.includes(v))
     return [...arr1, ...arr2]
   }
  
  // Bài 5: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
  const union = (a, b) => Array.from(new Set([...a, ...b]));