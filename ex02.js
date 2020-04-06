/*
[기본타입(primitive type), 유사객체]
1.number
2.boolean
3.string
4.undefined
[객체: new 생성자 함수를 사용해서 객체를 생성]
Number()   -> object type의 객체 생성 
Boolen()   -> object type의 객체 생성 
String()   -> object type의 객체 생성 
Function() -> function type의 객체 생성 
Object()   -> object type의 객체 생성 
Array()    -> object type의 객체 생성 
자바스크립트의 객체를 구분하는 또다른 방법
1. 내장(Built-In, Native)객체 (자바스크립트 엔진 안에 미리 정의되어 있는 객체)
   Number, Boolean, Date, RegEx... 과 같은 생성자 함수...
   parseInt(), setTimeout, setInterval 와 같은 일반 함수들~
   window 객체
2. 호스트 객체
      자바스크립트가 접근하는 브라우저의 객체
   document, location, XmlHttpRequest....   
3. 사용자 객체
      자바스크립트 코드가 엔진에 의해 실행되면서 생성되는 객체들
*/


var u;
var i = 10;
var b = true;
var s = 'Hello World';

var fn = function(a, b){ return a+b; };
var o = {};
var a = [];

console.log(u + ":" + typeof(u));
console.log(i + ":" + typeof(i));
console.log(b + ":" + typeof(b));
console.log(s + ":" + typeof(s));
console.log(fn + ":" + typeof(fn));
console.log(o + ":" + typeof(o));
console.log(a + ":" + typeof(a));


console.log("==========================");
var i2 = new Number(10);
var b2 = new Boolean(false);
var s2 = new String('Hello World');

var fn2 = new Function("a", "b", "return a+b;");
var o2 = new Object();
var a2 = new Array();

console.log(i2 + ":" + typeof(i2));
console.log(b2 + ":" + typeof(b2));
console.log(s2 + ":" + typeof(s2));
console.log(fn2 + ":" + typeof(fn));
console.log(o2 + ":" + typeof(o));
console.log(a2 + ":" + typeof(a));

// 원시타입과 원시타입을 Wrapper객체는 별 구분없이 연산 가능하다.
console.log(i + i2);
console.log(s + s2);

// 원시타입도 메소드 호출이 가능하다(?)
// 원시타입에 메소드가 호출 될 때 임시 객체가 만들어 져서 메소드르 호출한 다음에 사라진다.
console.log(b.valueOf()); 
console.log(b2.valueOf());
