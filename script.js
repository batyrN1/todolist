const state = {
    notes: []
}

const toDoForm = document.querySelector('form')
const toDoTitle = document.querySelector('#toDoTitle')
const toDoText = document.querySelector('#toDoText')

function addList(){
    const title = toDoTitle.value;
    const text = toDoText.value;

    const note = {title , text}

    state.notes.push(note)

    toDoTitle.value = ''
    toDoText.value = ''
}

function renderToDoList(){
   noteList.innerHTML = `               `

   state.notes.forEach((note , index) => {

    const li = document.createElement('li')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const button = document.createElement('button')

    h2.textContent = note.title
    p.textContent = note.text

    li.appendChild(h2)
    li.appendChild(p)
    li.appendChild(button)
    noteList.appendChild(li)
    
   })
}

toDelete.addEventListener('click' , () => {
    element.remove(index)
})