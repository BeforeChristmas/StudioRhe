/* 메인최상위 선언 및 하위 컨텐츠 박스 선언 */
const container = document.querySelector('#mainWrapper');
const boxes = document.querySelectorAll('#mainWapper section');

/* 가로스크롤 이벤트 */
const scrollLeft = (e) =>{
    container.scrollLeft += e.deltaY;
}  
container.addEventListener('wheel', scrollLeft)