// String

var str = 'hello world';
for(var i=0; i<str.length; i++) {
    console.log(str[i]);
}

var str1 = 'hello';
var str2 = 'world';
var str3 = str1 + ':' + str2;
console.log(str3);

var str4 = 5 + "5";
console.log(str4);

var str5 = "boolean" + true;
console.log(str5);

var str = 'string1 string2 string3';
console.log(str);

var index = str.indexOf('string2');
console.log(index);

var index = str.indexOf('string4');
console.log(index); // 찾지 못하면 -1

var str6 = str.substring(10); // 찾는 위치 10번째
console.log(str5);

var str7 = str.substr(10,3);
console.log(str7);

var str8 = str.substring(10, 13);
console.log(str8);

var a = str.split(' ');
console.log(a);

var str9 = 'a:b:c:d:e:f';
var a = str9.split(':');
console.log(a);