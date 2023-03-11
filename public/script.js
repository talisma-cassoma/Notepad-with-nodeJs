
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

