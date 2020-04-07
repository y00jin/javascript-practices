// URL 다루기

// 1. escape(x)
var url = 'http://localhost:8080/mysite03?n=전유진';
var url2 = escape(url);
console.log(url2);

// 2. encodeURI(o) : parameter 부분만 encoding
var url3 = encodeURI(url);
console.log(url3);

// 3. encodingURIComponent
var url4 = encodeURIComponent(url);
console.log(url4);

// 4. using encodeURIComponent example
var url = 'http://localhost:8080/mysite03';

var o = {
    no: 10,
    name: '전유진',
    email: 'wjs2510@naver.com'
}

var toQueryString = function(o) {
    var qs = [];
    for(property in o) {
        qs.push(property + "=" + encodeURIComponent(o[property]));
    }
    return qs.join('&');
}
var url5 = url + "?" + toQueryString(o);
console.log(url5);