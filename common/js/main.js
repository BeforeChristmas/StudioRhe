const container = document.querySelector('#container');
const boxes = document.querySelectorAll('#container li');

    const scrollLeft = (e) =>{
        //wheel.Event.deltaY 세로 스크롤시 값 반환, 읽기전용
        // console.log(e.deltaY);
        container.scrollLeft += e.deltaY;
        // console.log(num);
    }
    
container.addEventListener('wheel', scrollLeft)