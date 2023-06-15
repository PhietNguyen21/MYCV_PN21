let $ = document.querySelector.bind(document);

let $$ = document.querySelectorAll.bind(document);

let obj = {
  arrTimeLine: [
    {
      year: 2020,
      title: "Khởi đầu hành trình",
      content: "Bỡ ngỡ bước vào đại học,học các kiến thức cở bản của lập trình",
      id: "2020",
    },
    {
      year: 2021,
      title: "Năm 2 đại học",
      content: "Tiếp tục học",
      id: "2021",
    },
    {
      year: 2022,
      title: "Nghỉ học đi làm",
      content:
        "Làm mọi công việc miễn kiếm ra được đồng tiền để phụ giúp trang trải các công việc trong gia đình,trong thời gian đi làm có tự học ở nhà các kiến thức về web",
      id: "2022",
    },
    {
      year: 2023,
      title: "Theo học tại MINDX từ tháng 5",
      content:
        "Vẫn đang tiếp tục và hiện tại đang tìm 1 công việc thực tập FrontEnd để phát triển những kiến thức đã học và đi sâu hơn trong ngành lập trình web ",
      id: "2023",
    },
  ],

  arrProduct: [
    {
      name: "Wooder",
      src: "./img/Wooder.png",
      href: "https://phietnguyen21.github.io/Wooder-P21/",
      title: "Wooder",
      description: "HTML/CSS,SASS,JS",
    },
    {
      name: "Elearning",
      src: "./img/Elearning.png",
      href: "https://phietnguyen21.github.io/Elearning/",
      title: "Elearning",
      description: "HTML/CSS,SASS",
    },
  ],
};

// Thanh TimeLine
let listTimeLine = $$(".item-time");
// console.log(listTimeLine);
listTimeLine.forEach((item, index) => {
  item.onclick = function () {
    let vitri = index;
    for (let i = 0; i <= vitri; i++) {
      listTimeLine[i].classList.add("active");
      if (vitri < listTimeLine.length - 1) {
        if (listTimeLine[i + 1].classList.contains("active")) {
          listTimeLine[i + 1].classList.remove("active");
          listTimeLine[listTimeLine.length - 1].classList.remove("active");
        }
      }
      if (vitri === 0) {
        for (let j = 1; j < listTimeLine.length; j++) {
          listTimeLine[j].classList.remove("active");
        }
      }
    }
  };
});

// Click button innerHTML
let listBtn = $$("button.btn-click");
console.log(listBtn);

let contentTimeLine = $(".timeLine-content");

listBtn.forEach((item, index) => {
  let html = "";
  item.onclick = function () {
    let index = obj.arrTimeLine.findIndex((obj) => obj.id === item.id);
    if (index !== -1) {
      html = `
        <p>${obj.arrTimeLine[index].year}</p>
        <p>${obj.arrTimeLine[index].title}</p>
        <p>${obj.arrTimeLine[index].content}</p>
        `;
    }

    contentTimeLine.innerHTML = html;
  };
});

// FETCH PRODUCT

let listProduct = $(".product-list");

listProduct.innerHTML = obj.arrProduct.map((item, index) => {
  return `
  <div class="col-4 card-product">
  <a class="img" href=${item.href} target="_blank">
      <img src=${item.src} alt="">
  </a>
  <div class="card-content">
      <a href="">${item.title}</a>
      <p>${item.description} </p>
  </div>
</div>
  `;
});


// DARK THEME

let sidebar=$('.sidebarmini');
console.log(sidebar);

let sidebarBtn=$('.sidebar__button');

console.log(sidebarBtn)
sidebarBtn.onclick=function(){
  sidebar.classList.toggle('is-opened');
}

let bubbles=$$('.bubbles');
let checkBox=$('#checkbox');
let listBox=$$('.item-box');
let main=$('.main');
checkBox.onclick=function(){
  main.classList.toggle('darkMode');
  bubbles.forEach((item,index)=>{
    item.classList.toggle('close-bubbles');
  })
  listBox.forEach((item,index)=>{
    item.classList.toggle('close-box');
  })

}




