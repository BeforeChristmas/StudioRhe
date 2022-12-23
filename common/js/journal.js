// 메뉴아이콘 클릭했을 때
const toggleBtn = document.querySelector("#toggleBtn");
const menuBar = document.querySelector(".menuBar");
const gnb = document.querySelector("#gnb");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menuBar.classList.toggle("on");
  gnb.classList.toggle("active");
});

// 메뉴 한부분 클릭하면 닫힘 (닫힐 때 이상하게 닫힘..)

gnb.addEventListener("click", (e) => {
  gnb.classList.remove("active");
});

// 우측 바 로고

const rhe = document.querySelector(".rhe");
const rheLogo = document.querySelector(".rhe svg");
const rheTxt = document.querySelector(".rhe p");

addEventListener("wheel", (e) => {
  e.preventDefault();
  if (wrapper.scrollLeft <= 1000) {
    rheLogo.style.opacity = 0;
    rheTxt.style.opacity = 1;
  } else {
    rheLogo.style.opacity = 1;
    rheTxt.style.opacity = 0;
  }
});

// 우측 바 스크롤 인디케이터 (99가 최대임..)
const sIndi = document.querySelector(".scrollIndi");

function progress() {
  const scrollLeft = wrapper.scrollLeft;
  const scrollWidth = wrapper.scrollWidth;
  const clientWidth = wrapper.clientWidth;

  let width = (scrollLeft / (scrollWidth - clientWidth)) * 100;
  sIndi.innerHTML = Math.floor(width) + "%";
}
progress();
addEventListener("wheel", progress);
