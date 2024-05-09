const open = document.querySelector('#open')
const close = document.querySelector('#close')
const container = document.querySelector('.container')

open.addEventListener('click', () => {
	container.classList.add('show-nav')
	document.body.style.overflow = 'hidden'
	open.style.display = 'none'
	close.style.display = 'block'
})

close.addEventListener('click', () => {
	container.classList.remove('show-nav')
	document.body.style.overflow = 'visible'
	open.style.display = 'block'
	close.style.display = 'none'
})
