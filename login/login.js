let lazy = true;
const left = document.getElementsByClassName('boxLeft')[0];
const right = document.getElementsByClassName('boxRight')[0];
const animation = document.getElementById('animation');
const title = document.getElementsByClassName('title')[0];
const title1 = document.getElementsByClassName('title')[1];
const content = document.getElementsByClassName('content')[0];
const inputSubmit = document.getElementsByClassName('inputSubmit')[0];
const inputPasswordBox1 = document.getElementsByClassName('inputPasswordBox1')[0];
const inputPasswordBox = document.getElementsByClassName('inputPasswordBox')[0];

// 点击注册/登陆 开始动画
animation.onclick = function() {
	left.style = 'animation-play-state: running';
	right.style = 'animation-play-state: running';
	animation.style = 'animation-play-state: running';
	setTimeout(() => {
		animation.value = lazy ? '登陆' : '注册';
		inputSubmit.value = lazy ? '注册' : '登陆';
		title.innerHTML = lazy ? '账号注册' : '账号登陆'
		title1.innerHTML = lazy ? '欢迎, 回来' : '你好, 朋友!'
		content.innerHTML = lazy ? '与我们保持联系, 请登陆你的账号' : '开始注册, 和我们一起旅游吧。',
			inputPasswordBox1.style = lazy ? 'display:inline' : 'display: none'
		inputPasswordBox.style = lazy ? 'top: 44%' : 'top: 50%'
		lazy = !lazy;
	}, 500)
}
// 监听重复运动开始
left.addEventListener("webkitAnimationIteration", () => {
	left.style = 'animation-play-state: paused';
	right.style = 'animation-play-state: paused';
	animation.style = 'animation-play-state: paused';
})


// inputSubmit.onclick = function loadXMLDoc() {
// 	var xmlhttp;
// 	if (window.XMLHttpRequest) {
// 		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
// 		xmlhttp = new XMLHttpRequest();
// 	} else {
// 		// IE6, IE5 浏览器执行代码
// 		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
// 	}
// 	xmlhttp.onreadystatechange = function() {
// 		// if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
// 			console.log(xmlhttp.responseText)
// 		// }
// 	}
// 	xmlhttp.open("GET", "http://localhost:3000/user?account=1", false);
// 	xmlhttp.send();
// }

	
function showJsonp(e) {
	console.log(e)
}

var url = 'http://localhost:3000/user?func=showJsonp&account=1';
var script = document.createElement('script');
script.setAttribute('src', url);
script.setAttribute('type', "text/javascript");
document.getElementsByTagName('head')[0].appendChild(script);

