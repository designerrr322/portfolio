const menuBtn = document.querySelector('.navbar_burger')
const menu = document.querySelector('.navbar')

if (menuBtn && menu) {
	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active')
		menu.classList.toggle('active')
	})

	menu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			menuBtn.classList.toggle('active')
			menu.classList.toggle('active')
		})
	})
}
