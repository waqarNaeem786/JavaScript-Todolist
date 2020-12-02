
const form = document.querySelector("#user_input");
const list = document.querySelector("#list")
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const user_input = form.input.value
   
    
    const data = document.createTextNode(user_input)
    const li = document.createElement('li')
    const delet = document.createElement('button')
    delet.innerHTML='delete'
    const app = li.appendChild(data);
    li.appendChild(delet)
    console.log(app)
    list.appendChild(li)
    delet.addEventListener('click', (e) =>{
        li.remove();
        delet.remove();
        
    })
    
    
})


