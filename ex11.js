// var s1 = "hello1";
// s1.myFunction();
String.prototype.myFunction = function() {
	console.log('mystring:' + this);
}
var s2 = "hello2";
s2.myFunction();