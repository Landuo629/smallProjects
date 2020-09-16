const app = document.getElementById('app');
let x = 0;
let y = 0;
for (let i = 0; i < 25; i++) {
	const div = document.createElement('div');
	const atr = document.createAttribute("name");
	x = i % 5 + 1;
	y = Math.floor(i / 5 + 1)
	atr.nodeValue = [x, y];
	div.setAttributeNode(atr);
	app.appendChild(div);
}
app.onclick = function(e) {
	let value = e.target.attributes[0].value;
	let x = value.slice(0, 1);
	let y = value.slice(2, 3);
	if (x != 'a') {
		let a1 = document.getElementsByName([x, y])[0]
		let a2 = document.getElementsByName([x - 1, y])[0]
		let a3 = document.getElementsByName([x * 1 + 1, y])[0]
		let a4 = document.getElementsByName([x, y * 1 + 1])[0]
		let a5 = document.getElementsByName([x, y - 1])[0]
		try {
			a2.style = a2.className == 1 ? 'background-color: #000' : 'background-color: #fff';
			a2.className = a2.className == 1 ? 2 : 1;
		} catch {}
		try {
			a3.style = a3.className == 1 ? 'background-color: #000' : 'background-color: #fff';
			a3.className = a3.className == 1 ? 2 : 1;
		} catch {}
		try {
			a4.style = a4.className == 1 ? 'background-color: #000' : 'background-color: #fff';
			a4.className = a4.className == 1 ? 2 : 1;
		} catch {}
		try {
			a5.style = a5.className == 1 ? 'background-color: #000' : 'background-color: #fff';
			a5.className = a5.className == 1 ? 2 : 1;
		} catch {}
		a1.style = a1.className == 1 ? 'background-color: #000' : 'background-color: #fff';
		a1.className = a1.className == 1 ? 2 : 1;
		for (let i = 0; i < 25; i++) {
			var child = app.children[i];
			console.log(child.className);
			if (child.className != 1) {
				return;
			}
		}
		alart('你成功了')
	}
}
