//consumindo a API do backend
async function getData(){
        await fetch('http://localhost:5500/commingdata').then(async (response)=>{
             data = await response.json()
            document.querySelector('#drag1').src = `${data.imageCaptured.base64Image}`

        }).catch(()=>{
            console.error(`sorry there was a error: ${error}`) 
        })
        return data
}

var data=getData()

