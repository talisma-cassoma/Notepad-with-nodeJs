
document.querySelectorAll('.card').forEach(item =>{
    var modify = {
        form: item,
        inputTitle : item.querySelector('input[name = "inputTitle'),
        titleOldContent: item.querySelector('h3 p'),
        title: false,
        deleteBtn: item.querySelector('form a'),
        checkBtn: item.querySelector('.exitBtn'),
        inputPost: item.querySelector('textarea[name = "inputPost"]'), 
        postOldContent: item.querySelector('.filledbar p'),
        post: false
                };

                function checked(){
                    modify.deleteBtn.href = "#" 
                    modify.checkBtn.addEventListener('mouseover',()=>{
                    modify.checkBtn.classList.add('check')
                                })
                    modify.checkBtn.addEventListener('click',()=>{
                    modify.form.submit()
                                })
                }
                modify.inputPost.value = modify.postOldContent.innerText    //save old content
                modify.inputTitle.value = modify.titleOldContent.innerText 
    
        //title
        modify.titleOldContent.addEventListener('dblclick',()=>{//editar o titulo
            modify.title = true
            let titleOldtext = modify.titleOldContent.innerText
            modify.titleOldContent.innerText = ''            
           
            modify.inputTitle.style.display = 'block'
            modify.inputTitle.value = titleOldtext

            
            if(modify.title == true){
                checked()          
                }
          
        })

        //content 
        modify.postOldContent.addEventListener('dblclick',()=>{//editar o titulo
            modify.post = true
            let postOldtext = modify.postOldContent.innerText
            modify.postOldContent.innerText = ''            
           
            modify.inputPost.style.display = 'block'
            modify.inputPost.value = postOldtext

            
            if(modify.post == true){
                checked()          
                }
           
        })
})
 