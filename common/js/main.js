/* 메인최상위 선언 및 하위 컨텐츠 박스 선언 */
const box = document.querySelector('.scrollBox');
const container = document.querySelector('#mainWrapper');
const fstcontainer = document.querySelector('#FirstContainer');
const sndcontainer = document.querySelector('#secondContainer');
const trdcontainer = document.querySelector('#thirdContainer');
const fthcontainer = document.querySelector('#fourthContainer');
/* 페이지 로딩 영역 선언 */
const pScreen = document.querySelector('.pageScreen');
/* 헤더 영역 선언 */
const haeder = document.querySelector('.headerLeft');
const logoChange = document.querySelector('.Head');
const btn = document.querySelector('.HeaderBtn');
const logoArea = document.querySelector('#logoContainer');

/* 가로스크롤 이벤트 */
const scrollLeft = (e) =>{
    let scrLeft = container.scrollLeft += e.deltaY;
    console.log(scrLeft);

    if(scrLeft > 100){
        logoArea.style.opacity = '0'
    } else {
        logoArea.style.opacity = '1'
    }
}  
container.addEventListener('wheel', scrollLeft)

// function delht(e){
//     let deltaht = 0;
//     deltaht = deltaht + e.deltaY
// }
// box.addEventListener('wheel', (e) =>{
//     container.style.transform = `translateX(-${fthcontainer.offsetLeft += e.deltaY}px)`;
// });

/* 페이지 로딩 스크린 이벤트 */
setTimeout(() => {
   pScreen.style.display ='none' 
}, 1100);

/* 헤더 영역 클릭시 off 클래스 추가 */
btn.addEventListener('click', e =>{
    e.preventDefault();
    haeder.classList.toggle('active');
});

