
function getRandomColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

let createNote = document.querySelectorAll('.createNote, .createNote input, .createNote textarea')

document.querySelector('.addNote').addEventListener('click', () => {
    createNote[0].style.display = 'flex';
})

const newNote = document.querySelector('.createNote')
newNote.style.backgroundColor = getRandomColor()

function submitNoteColor() {

    newNote.appendChild(
        Object.assign(
            document.createElement('input'),
            {
                name: 'color',
                type: 'text',
                value: `${newNote.style.backgroundColor}`
            }
        )
    )
}


document.querySelectorAll('.Note').forEach(item => {

    var modify = {
        form: item,
        title: item.querySelector('input[name = "title"]'),
        titleOldContent: item.querySelector('.titleContent'),
        title: false,
        deleteBtn: item.querySelector('form a'),
        checkBtn: item.querySelector('.exitBtn'),
        post: item.querySelector('textarea[name = "post"]'),
        postOldContent: item.querySelector('.postContent'),
        post: false
    };


    //edit Button

    let editButton = modify.form.querySelector('.editBtn')

    function checked() {
        modify.deleteBtn.href = "#"
        modify.checkBtn.addEventListener('mouseover', () => {
            modify.checkBtn.classList.add('check')
        })
        modify.checkBtn.addEventListener('click', () => {
            modify.form.submit()
        })
    }
    modify.post.value = modify.postOldContent.innerText    //save old content
    modify.title.value = modify.titleOldContent.innerText

    //title
    function editTitle() {//editar o titulo
        modify.title = true
        let titleOldtext = modify.titleOldContent.innerText
        modify.titleOldContent.style.display = 'none'

        modify.title.style.display = 'block'
        modify.title.value = titleOldtext

        if (modify.title == true) {
            checked()
        }
    }

    //edit title
    modify.titleOldContent.addEventListener('dblclick', editTitle)

    //content 
    function editContent() {//editar o titulo
        modify.post = true
        let postOldtext = modify.postOldContent.innerText
        modify.postOldContent.style.display = 'none'

        modify.post.style.display = 'block'
        modify.post.value = postOldtext

        if (modify.post == true) {
            checked()
        }
    }
    //double click on content 
    modify.postOldContent.addEventListener('dblclick', editContent)

    //editButton function
    editButton.addEventListener('click', () => {
        editTitle();
        editContent();
    })
})

