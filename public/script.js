
function getRandomColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

const btnAddNote = document.querySelector('.addNote')
const newNote = document.querySelector('.newNote')
const checkBtn = document.querySelector('.deleteBtn')

newNote.style.backgroundColor = getRandomColor()

btnAddNote.addEventListener('click', () => {
    newNote.style.display = 'flex';
})

function onSubmitAddNewNoteColor() {
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
async function deleteNote(noteId){
    await axios({
        method: 'get',
        url: `http://localhost:5500/delete/${noteId}`
    })
}
async function submitModifiedNote(noteId, title, content) {
    await axios({
        method: 'post',
        url: `http://localhost:5500/modify/${noteId}`,
        data: {
            title: title.value,
            content: content.value,
            color: '#333'
        }
    });
}

 function modifyNote(textContent, input, checkBtn) {

    //change delete button animation to check button animation
        checkBtn.classList.add('check')
        textContent.style.display = 'none';
        input.classList.remove('hidden')
        
        console.log(textContent)
        input.value = textContent.innerText
    
}

const createdNotes = document.querySelectorAll('.Note')

createdNotes.forEach(item => {
    const noteId = parseInt(item.action.replace('http://localhost:5500/modify/', ''), 10);
    const title = item.childNodes[3]
    const content = item.childNodes[5]
    const checkBtn = item.childNodes[1]

    const inputTitle = item.childNodes[3].childNodes[3]
    const inputContent = item.childNodes[7]

    //console.log(title)    

    //turn title editable
    title.addEventListener('dblclick', () => modifyNote(title.childNodes[1], inputTitle, checkBtn))
    //turn content editable
    content.addEventListener('dblclick', () => modifyNote(content, inputContent, checkBtn))

    
    checkBtn.addEventListener('click', ()=>{
        if(checkBtn.classList.contains('check')) {
            //console.log('checkbutn active')
            submitModifiedNote(noteId, inputTitle, inputContent)
        }else{
            checkBtn.addEventListener('click', () => deleteNote(noteId))
        }
    })

})