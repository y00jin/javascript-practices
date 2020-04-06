/*
 * 자바 스크립트의 객체는 function type과 object type 2가지가 있다.
 그런데, 보통 function 타입 객체는 함수라 부른다.
 따라서, 자바스크립트 객체라 부르는 것은 object 타입의 객체를 가리킨다.
 */
 
 //생성방법1 - new 키워드를 사용하는 방법
 var o1 = new Object();
 o1.name = '둘리';
 o1.age = 10;
 console.log(o1);
 
 //생성방법2 - {} literal로 표시
 var o2 = {};
 o2.name = '둘리';
 o2.age = 10;
 console.log(o2);
 
 //생성방법3 - JavaScript ObjectNotation : 자바스크립트 객체 표기법
 var o3 = {
   name:'둘리',
    age:10,
    another:{
       name:'마이콜',
       age:20
    }
 };
 console.log(o3);
 
 //eval()은 문자로 표현된 JavaScript 코드를 실행하는 함수입니다.
 //XmlHttpRequest 호스트 객체를 사용해서 통신한다.
var json = '{ "no":1, "name":"안대현", "email":"kickscar" }';
 var userVo = eval("("+json+")");
 console.log(userVo.no + ":" + userVo.name);