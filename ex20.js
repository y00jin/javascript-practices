var o = {
    name: 'eong'
}

var f = function(s) {
    console.log(s + " " + this.name);
}

f("hello");