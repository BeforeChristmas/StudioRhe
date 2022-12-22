/* 메인최상위 선언 및 하위 컨텐츠 박스 선언 */
const container = document.querySelector('#mainWrapper');
const boxes = document.querySelectorAll('#FirstContainer');
/* 페이지 로딩 영역 선언 */
const pScreen = document.querySelector('.pageScreen');


/* 가로스크롤 이벤트 */
const scrollLeft = (e) =>{
    container.scrollLeft += e.deltaY;
}  
container.addEventListener('wheel', scrollLeft)

/* 페이지 로딩 스크린 이벤트 */
setTimeout(() => {
   pScreen.style.display ='none' 
}, 1100);

/* 첫번째 섹션 */
