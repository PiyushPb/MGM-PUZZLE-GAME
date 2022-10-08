const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.droppable_container')

draggables.forEach(draggable => {
	draggable.addEventListener('dragstart', () => {
		console.log("Drag Started")
	})
})