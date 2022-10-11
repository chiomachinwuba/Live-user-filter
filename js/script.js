const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []    //initialized an array called listItems

getData()

filter.addEventListener('input', (e) => filterData(e.target.value)) //filter is the input

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')         //represnt the response from fetch request

    const { results } = await res.json()

    //clear the result
    result.innerHTML = ''

    results.forEach(user => {       //we want to loop through the data
        const li = document.createElement('li')                    //construct an li with the users 
    
    listItems.push(li) 

    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}"> 
        <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `               //it depends on the data that is sent from the api

       result.appendChild(li)     //we are putting the li into the ul 
})          
}

function filterData(searchTerm) {   //it captures what ever we are typing
    listItems.forEach(item => {     //we took the array of users and loop through
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {   //we want to check to see if it matches the users
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }         
    })           
}