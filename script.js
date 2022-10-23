const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// Fill Listeners
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// Loop through & Call drag events

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}
// Drag Functions

function dragStart () {
    console.log('start')
    this.className += ' hold'
    setTimeout(( () => this.className = 'invisible'), 0)
}

function dragEnd () {
    console.log('end')
    this.className = 'fill'
}

function dragOver (e) {
    e.preventDefault() // have to add this or else it wont call drop
    this.className += ' hovered'
    console.log('over')
}

function dragEnter () {
    console.log('enter')
}

function dragLeave () {
    console.log('leave')
    this.className = 'empty'
}

function dragDrop () {
    console.log('drop')
    this.className = 'empty'
    this.append(fill) // put the fill element into the new box
}