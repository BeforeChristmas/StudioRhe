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
/* 이미지 박스 영역 선언 */
const introImg = document.querySelector('.imgBox img');
const startWorkBox = document.querySelector('.artwork img');
const ndartWorkBox = document.querySelector('.artwork:nth-child(2) img');
const rdartWorkBox = document.querySelector('.artwork:nth-child(3) img');
/* h2Title 제목부분 영역 선언 */
const titRight = document.querySelector('.titRight');
const titLeft = document.querySelector('.titLeft');

/* 가로스크롤 이벤트 */
/* 델타값을 이용하여 스크롤 되도록 값도 저장되게 */
/* function transNum (e){
    let scrNum = 0;
    scrNum += e.deltaY;
    console.log(scrNum);
//    for(let scrNum = 0; scrNum < container.clientWidth; scrNum-100){
//         scrNum += e.deltaY;
//         console.log(scrNum);
//     } 
    container.style.transfrom = `translateX(-${scrNum}px)`;
} */
//container.addEventListener('wheel', transNum);
const scrollLeft = (e) =>{
    
    
     let transNum = container.scrollLeft += e.deltaY;
        // e.preventDefault();
        console.log(container.scrollLeft);
        // container.style.transform = `translateX(-${transNum}px)`;

    /* 델타Y 중첩값이 일정 이상이 될때 조건문 */
    switch (container.scrollLeft) {
        case 100:
            logoArea.style.opacity = '0'
            haeder.style.borderLeft = '1px solid #bfbfbf'
            logoChange.classList.add('off')
            break;
        case 500:
            introImg.style.animation = '1s ease 0s 1 normal none running imgScale'
            break;
        case 1000:
            startWorkBox.style.animation = '1s ease 0s 1 normal none running imgScale'
            break;
        case 1000:
            startWorkBox.style.animation = '1s ease 0s 1 normal none running imgScale'
            break;
        case 1700:
            ndartWorkBox.style.animation = '1s ease 0s 1 normal none running imgScale'
            break;
        case 2500:
            rdartWorkBox.style.animation = '1s ease 0s 1 normal none running imgScale'
            break;
        default:
            break;
    }
     if(transNum >= 100){
         
     } else{
         logoArea.style.opacity = '1'
         haeder.style.borderLeft = '0'
         logoChange.classList.remove('off')
     }
}  
container.addEventListener('wheel', scrollLeft);


/* 페이지 로딩 스크린 이벤트 */
setTimeout(() => {
   pScreen.style.display ='none' 
}, 1100);

/* 헤더 영역 클릭시 off 클래스 추가 */
btn.addEventListener('click', e =>{
    e.preventDefault();
    haeder.classList.toggle('active');
});

