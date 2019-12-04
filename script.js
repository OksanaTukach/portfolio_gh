let contentList = document.querySelector('.education__list');
let btnDown = document.querySelector('#button-down');
let btnUp = document.querySelector('#button-up');


btnDown.addEventListener('click', function(){
    contentList.style.display = "block";
    btnUp.style.display = 'block';
    btnDown.style.display = 'none';
})
btnUp.addEventListener('click', function(){
    contentList.style.display = "none";
    btnUp.style.display = 'none';
    btnDown.style.display = 'block';
});

btnDown.addEventListener('touchstart', function(){
    contentList.style.display = "block";
    btnUp.style.display = 'block';
    btnDown.style.display = 'none';
})
btnUp.addEventListener('touchstart', function(){
    contentList.style.display = "none";
    btnUp.style.display = 'none';
    btnDown.style.display = 'block';
});


let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

const swipedetect = (el) => {
  
	let surface = el;
	let startX = 0;
	let startY = 0;
	let distX = 0;
	let distY = 0;
	let startTime = 0;
	let elapsedTime = 0;

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 300;

	surface.addEventListener('mousedown', function(e){
		startX = e.pageX;
		startY = e.pageY;
		startTime = new Date().getTime();
		e.preventDefault();
	}, false);

	surface.addEventListener('mouseup', function(e){
		distX = e.pageX - startX;
		distY = e.pageY - startY;
		elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime <= allowedTime){
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
				if ((distX > 0)) {
					if (isEnabled) {
						previousItem(currentItem);
					}
				} else {
					if (isEnabled) {
						nextItem(currentItem);
					}
				}
			}
		}
		e.preventDefault();
	}, false);

	surface.addEventListener('touchstart', function(e){
		if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
			if (e.target.classList.contains('left')) {
				if (isEnabled) {
					previousItem(currentItem);
				}
			} else {
				if (isEnabled) {
					nextItem(currentItem);
				}
			}
		}
			var touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime();
			//e.preventDefault();
	}, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX;
			distY = touchobj.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime){
					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
							if ((distX > 0)) {
								if (isEnabled) {
									previousItem(currentItem);
								}
							} else {
								if (isEnabled) {
									nextItem(currentItem);
								}
							}
					}
			}
			//e.preventDefault();
	}, false);
}

var el = document.querySelector('.carousel');
swipedetect(el);


let project_cnt_one = document.querySelector('#project-name_one');
let projectImg_one = document.querySelector('#project-img_one')
let btnShow_one = document.querySelector('#btn-show_one');
let btnDel_one = document.querySelector('#btn-del_one');

btnDel_one.style.display = 'none';

btnShow_one.addEventListener('touchstart', function(){
	project_cnt_one.style.display = "block";
	projectImg_one.style.display = "none";
    btnDel_one.style.display = 'inline';
    btnShow_one.style.display = 'none';
})
btnDel_one.addEventListener('touchstart', function(){
    project_cnt_one.style.display = "none";
	projectImg_one.style.display = "block";
    btnDel_one.style.display = 'none';
    btnShow_one.style.display = 'inline';
});

let project_cnt_two = document.querySelector('#project-name_two');
let projectImg_two = document.querySelector('#project-img_two')
let btnShow_two = document.querySelector('#btn-show_two');
let btnDel_two = document.querySelector('#btn-del_two');

btnDel_two.style.display = 'none';

btnShow_two.addEventListener('touchstart', function(){
	project_cnt_two.style.display = "block";
	projectImg_two.style.display = "none";
    btnDel_two.style.display = 'inline';
    btnShow_two.style.display = 'none';
})
btnDel_two.addEventListener('touchstart', function(){
    project_cnt_two.style.display = "none";
	projectImg_two.style.display = "block";
    btnDel_two.style.display = 'none';
    btnShow_two.style.display = 'inline';
});

