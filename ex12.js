var o = {
	name: '마이콜',
	age: 20,
	hasProperty: function(property) {
		return property in this;
	}
}
console.log(o.hasProperty("name"));
console.log(o.hasProperty("age"));
console.log(o.hasProperty("email"));
console.log("-----hasOwnProperty----");
console.log(o.hasOwnProperty("name"));
console.log(o.hasOwnProperty("age"));
console.log(o.hasOwnProperty("email"));
console.log("-------with()----------");
with(o) {
	console.log(name + ":" + age);
}
console.log("-------for ~ in--------");
var data="";
for(var property in o) {
	if(typeof(o[property]))
		data += (o[property] + ":");
}
console.log(data);