import lodash from "lodash";
import scope from "./variableScope";

const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function (boxEl, index) {
    boxEl.classList.add(`order-${index + 1}`);
    console.log(index, boxEl);
});


// 요소 하나만 select
const boxEl = document.querySelector('.box');

// Getter, 값을 얻는 용도
console.log(boxEl.textContent); // Box!!

// Setter, 값을 지정하는 용도
boxEl.textContent = 'Seo Js Study!!'; // 문자열 데이터를 지정
console.log(boxEl.textContent); // Box!!

// 메소드 체이닝
const testText = 'Seo~';
// split : 문자를 인수 기준으로 쪼개서 배열로 반환.
// reverse : 배열을 뒤집기.
// join : 배열을 인수 기준으로 분자로 병합해 반환.
const methodChaining = testText.split('').reverse().join(''); // 메소드 체이닝

console.log(testText);
console.log(methodChaining);

// 1. CamelCase test
console.log(lodash.camelCase('The quick brown fox'));

// 2. let fruits = ['Apple', 'banana', '21fffwe']; 에서 banana 출력
let fruits = ['Apple', 'banana', '21fffwe']; 
console.log(fruits[1]);

// 3. 값이 의도적으로 비어있는것을 의미 - null

// 4. 값을 재할당 할수 없는 키워드 = const / 재할당이 필요할 경우 = let

// 5. 인수와 매개변수의 차이 - 매개변수는 함수나 메서드의 정의에 포함되는 변수이고, 인수는 함수나 메서드를 호출할 때 실제로 전달되는 값

// 6. hello 라는 이름의 함수 표현을 작성 및 호출
/* const hello = function () {}; */
/* *함수 선언 func - function name(params) {} */

// 7. 가져온 js 파일을 HTML 문서 분석 이후에 실행하도록 지시하는 HTML 속성 = defer / ex) <script defer src="./js/study.js"></script>

/* =================================== */

// 2023-10-09 study
// 변수의 유효 범위
console.log(scope());

// JS 함수
// * 화살표 함수
// () => {} vs function () {}
const doubleArrow = x => x*2

// 객체 데이터를 다룰때는 소괄호로 감싸야 한다.
const textContent = x => ({name : 'Seo'});

console.log('doubleArrow', doubleArrow(7));  
console.log('objectData', textContent());

// * 즉시 실행 함수 (IFFE)
const iffeFunc = 7;

(function () {
    console.log('즉시 실핸 함수 결과값 - ',iffeFunc*2);
})();

// * 함수의 호이스팅
// - 함수의 선언부가 유효범위의 최상단으로 끌어올려지는 현상

const hoisting = 7;

hoistingDouble() // -> 함수의 선언보다 위로 끌어올려져 작성해도 정상 작동.

// 함수의 선언 
function hoistingDouble() {
    console.log('호이스팅으로 끌어올려진 실행값 :', hoisting * 2)
}

// * 타이머 함수
// -setTimeout(함수, 시간): 일정 시간 후 함수 실행
// -setInterval(함수, 시간): 시간 간격마다 함수 실행
// -clearTimeout(): 설정된 Timeout 함수를 종료
// -clearInterval(): 설정된 Interval 함수를 종료

// setTimeout(function () {console.log('setTimeout 3초');}, 3000)
const timer = setTimeout(() => {console.log('화살표 함수 setTimeout 3초')}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
    clearTimeout(timer)
})
    
// * 콜백 함수(callback Function)
// 함수의 인수로 사용되는 함수

// ex) setTimeout(함수, 시간)
function timeout() {
    setTimeout(() => {
        console.log('seo')
    }, 3000)
};

timeout(() => {
    console.log('Done');
})
// *** 다른 함수가 실행을 끝낸뒤 실행되는 함수 -> js에서 함수는 object(객체)로 취급 
// 고차함수라고도 한다.



