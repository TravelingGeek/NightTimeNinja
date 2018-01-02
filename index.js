let eyes = [
{
	"outer": document.getElementById("left_eye_outer"),
	"inner": document.getElementById("left_eye")
},
{
	"outer": document.getElementById("right_eye_outer"),
	"inner": document.getElementById("right_eye")
}
]

function onMouseMove(e) {
	calculateEye(eyes[0], e.clientX, e.clientY);
	calculateEye(eyes[1], e.clientX, e.clientY);	
}

function calculateEye(eye, x, y) {
	let rect_outer = eye.outer.getBoundingClientRect();
	let rect_inner = eye.inner.getBoundingClientRect();

	let centerX = rect_outer.x + rect_outer.width / 2;
	let centerY = rect_outer.y + rect_outer.height / 2;
	let percentX = (x - centerX) / window.innerWidth + .5;
	let percentY = (y - centerY) / window.innerHeight + .5;

	eye.inner.style.left = percentX * rect_outer.width - rect_inner.width / 2;
	eye.inner.style.top = percentY * rect_outer.height - rect_inner.height / 2;
}

document.addEventListener('mousemove', onMouseMove);
