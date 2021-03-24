let url = "http://localhost:3000/ramens";
let ramenMenuDiv = document.querySelector("div#ramen-menu")


let getRamen = function() { 
   fetch(url)
   .then(response => {
      response.json().then(data => {  
      
      data.forEach(ramen => {
         let div = document.createElement('div')
         div.innerHTML = `<img src="${ramen.image}"/>`
         ramenMenuDiv.append(div)
      })
    })
})
.catch((err) => console.log('error', err))
}

getRamen();