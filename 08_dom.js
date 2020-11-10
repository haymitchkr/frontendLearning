// window.alert('1')
// window.confirm('1')
const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0] //! Dont use this method
// const heading2 = document.getElementsByClassName('h2-class')[0] //! old method
const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello') //* Возвращает один элемент. Всегда первый элемент
// const heading2 = document.querySelector('h2')
// console.dir(heading2)
// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
const heading3 = h2List[h2List.length - 1]
console.log(heading3);
// console.log(heading);
// console.dir(heading.textContent)

setTimeout( () => {
	addStylesTo(heading, 'JavaScript')
}, 1500)
setTimeout( () => {
	addStylesTo(heading2, 'Практикуйся', 'green')
}, 3000)
const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
	event.preventDefault()
	console.log('Click on link', event.target.getAttribute('href'));
	const url = event.target.getAttribute('href')

	window.location = url
})
setTimeout( () => {
	addStylesTo(heading3.children[0], 'И все получится!', 'yellow', '2rem')
}, 4500)


function addStylesTo(node, text, color = 'red', fontSize) {
	node.textContent = text
	node.style.color = color
	node.style.textAlign = 'center'
	node.style.backgroundColor =  'black'
	node.style.padding = '2rem'
	node.style.display = 'block'
	if (fontSize){
		node.style.fontSize = fontSize
	}
}

heading.onclick = () =>{
	if (heading.style.color === 'red') {
		heading.style.color = '#000'
		heading.style.backgroundColor = '#fff'
	} else {
		heading.style.color = 'red'
		heading.style.backgroundColor = '#000'
	}
}
heading2.addEventListener('dblclick', () => {
	if (heading2.style.color === 'green') {
		heading2.style.color = '#000'
		heading2.style.backgroundColor = '#fff'
	} else {
		heading2.style.color = 'green'
		heading2.style.backgroundColor = '#000'
	}
})
