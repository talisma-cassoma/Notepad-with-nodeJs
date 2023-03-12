
function getRandomColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

const btnAddNote = document.querySelector('.addNote')
const newNote    = document.querySelector('.newNote')
const checkBtn   = document.querySelector('.deleteBtn')

newNote.style.backgroundColor = getRandomColor()

btnAddNote.addEventListener('click', () => {
    newNote.style.display = 'flex';
})

function submitNoteColor() {
    //add the note color to post request
    newNote.appendChild(
        Object.assign(
            document.createElement('input'),
            {
                name: 'color',
                value: `${newNote.style.backgroundColor}`
            }
        )
    )
}

//-------------- MODIFY NOTES --------
function modifyNote(champName,id,text, checkBtn){


    //change delete button animation to check button animation
    checkBtn.classList.add('check')
    console.log(id,text)  
}

const createdNotes = document.querySelectorAll('.Note')

createdNotes.forEach(item => {
    const noteId = parseInt(item.action.replace('http://localhost:5500/modificar/',''), 10);
    const title = item.childNodes[3]
    const content = item.childNodes[5]
    const checkBtn = item.childNodes[1].childNodes[1]
   
    //console.log(title)    
    
    //turn title editable
    title.addEventListener('dblclick', ()=>modifyNote(champName ='title', noteId, title.innerText, checkBtn))
    //turn content editable
    content.addEventListener('dblclick', ()=>modifyNote(champName ='content', noteId, title.innerText, checkBtn))
    
})