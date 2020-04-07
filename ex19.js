// 함수 객체를 생성하는 방법1
function f1(a,b) {
    return a+b;
}
console.log(f1(10,20));

function f2(a,b) {
    return a+b;
}
console.log(typeof(f2), f2(10,20));

var f3 = new Function('a','b','return a+b;');
console.log(typeof(f3), f3(10,20));

setTimeout(function(){
    console.log('time out!');
}, 1000);