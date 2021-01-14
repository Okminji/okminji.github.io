let button = document.querySelector(`#btn-submit`);
let image = document.querySelector(`.image-box`);
let hinput = document.querySelector(`#height`).parentNode;
let winput = document.querySelector(`#weight`).parentNode;
const data = [
  {
    title: "Chỉ số BMI dưới 18,5 là thiếu cân",
    content: "Bạn cần áp dụng chế độ ăn và thể thao để tăng cân.",
    image:
      "https://images.unsplash.com/photo-1541306912932-f6bed7f462eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "Chỉ số BMI từ 18,5 đến 24,9 là bình thường",
    content: "Bạn có một cơ thể tốt.",
    image:
      "https://images.unsplash.com/photo-1579047440583-43a690fe2243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "Chỉ số BMI ở giữa 25,0 và 29,9 được coi là thừa cân",
    content:
      "Tuy nhiên, tình trạng chưa quá trầm trọng nên bạn có thể tìm ngay các phương pháp giảm cân hiệu quả tự nhiên và kết hợp luyện tập. Nếu áp dụng điều độ và kiên trì, chỉ cần tốn khoảng vài tháng là bạn có ngay vóc dáng rất ưng ý rồi đó.",
    image:
      "https://images.unsplash.com/photo-1573879541250-58ae8b322b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "Chỉ số BMI bằng hoặc trên 30 được xem là béo phì",
    content:
      "Với mức cân nặng này, cơ thể của bạn phải gặp rất nhiều áp lực hàng ngày, đặc biệt trọng lượng mỡ tạo áp lực lên cơ xương và các cơ quan làm ảnh hưởng đến sinh hoạt và sức khỏe của bạn.",
    image:
      "https://images.unsplash.com/photo-1573879026263-0ae3b9599d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80",
  },
];

button.addEventListener(`click`, function () {
  let h = document.querySelector(`#height`).value;
    let w = document.querySelector(`#weight`).value;
    if (h == `` || w == ``) {
        // document.querySelector(`.input-box`).firstChild.classList.add(`error`);
        if (h == `` && w == ``) {
            document.querySelector(`#height`).parentNode.classList.add(`error`);
            document.querySelector(`#height`).parentNode.lastChild.innerHTML=`Input field empty`
            document.querySelector(`#weight`).parentNode.classList.add(`error`);
            document.querySelector(`#weight`).parentNode.lastChild.innerHTML=`Input field empty`
        } else if (h == ``) {
            document.querySelector(`#weight`).parentNode.classList.remove(`error`);
            document.querySelector(`#height`).parentNode.classList.add(`error`);
            document.querySelector(`#height`).parentNode.lastChild.innerHTML=`Input field empty`
        } else if (w == ``) {
            document.querySelector(`#height`).parentNode.classList.remove(`error`);
            document.querySelector(`#weight`).parentNode.classList.add(`error`);document.querySelector(`#weight`).parentNode.lastChild.innerHTML=`Input field empty`
        }
    } else if (isNaN(h) == true || isNaN(w) == true) {
        if (isNaN(h) == true && isNaN(w) == true) {
            document.querySelector(`#height`).parentNode.classList.add(`error`);
            document.querySelector(`#height`).parentNode.lastChild.innerHTML=`Input number only`
            document.querySelector(`#weight`).parentNode.classList.add(`error`);
            document.querySelector(`#weight`).parentNode.lastChild.innerHTML=`Input number only`
        } else if (isNaN(h) == true) {
            document.querySelector(`#weight`).parentNode.classList.remove(`error`);
            document.querySelector(`#height`).parentNode.classList.add(`error`);
            document.querySelector(`#height`).parentNode.lastChild.innerHTML=`Input number only`
        } else if (isNaN(w) == true) {
            document.querySelector(`#height`).parentNode.classList.remove(`error`);
            document.querySelector(`#weight`).parentNode.classList.add(`error`);
            document.querySelector(`#weight`).parentNode.lastChild.innerHTML=`Input number only`
        }
    } else {
        document.querySelector(`#height`).parentNode.classList.remove(`error`);
        document.querySelector(`#height`).parentNode.classList.add(`success`);
        document.querySelector(`#weight`).parentNode.classList.remove(`error`);
        document.querySelector(`#weight`).parentNode.classList.add(`success`);
        let BMI = (w * 10000) / h ** 2;
    
        if (BMI < 18.5) {
            document.querySelector(`.say-hello`).classList.add(`hide`);
            document.querySelector(`.result-container`).classList.remove(`hide`);
            document.querySelector(`.result-num`).innerHTML = BMI;
            document.querySelector(`.result-title`).innerHTML = data[0].title;
            document.querySelector(`.result-content`).innerHTML = data[0].content;
            image.style.backgroundImage = `url(${data[0].image})`;
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            document.querySelector(`.say-hello`).classList.add(`hide`);
            document.querySelector(`.result-container`).classList.remove(`hide`);
            document.querySelector(`.result-num`).innerHTML = BMI;
            document.querySelector(`.result-title`).innerHTML = data[1].title;
            document.querySelector(`.result-content`).innerHTML = data[1].content;
            image.style.backgroundImage = `url(${data[1].image})`;
        } else if (BMI >= 24.9 && BMI <= 29.9) {
            document.querySelector(`.say-hello`).classList.add(`hide`);
            document.querySelector(`.result-container`).classList.remove(`hide`);
            document.querySelector(`.result-num`).innerHTML = BMI;
            document.querySelector(`.result-title`).innerHTML = data[2].title;
            document.querySelector(`.result-content`).innerHTML = data[2].content;
            image.style.backgroundImage = `url(${data[2].image})`;
        } else if (BMI > 29.9) {
            document.querySelector(`.say-hello`).classList.add(`hide`);
            document.querySelector(`.result-container`).classList.remove(`hide`);
            document.querySelector(`.result-num`).innerHTML = BMI;
            document.querySelector(`.result-title`).innerHTML = data[3].title;
            document.querySelector(`.result-content`).innerHTML = data[3].content;
            image.style.backgroundImage = `url(${data[3].image})`;
        }
    }
});
