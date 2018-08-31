//create variables and select elements
const wiki_link = 'https://en.wikipedia.org/wiki'
const randomEndpoint = '/Special:Random'


const searchTerm = document.querySelector(".searchTerm")
const search = document.querySelector(".search")
const output = document.querySelector(".output")
const random = document.querySelector(".random")
///function definitons
function getWiki() {
   const api_url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm.value}&format=json&callback=?`
   // console.log("Getting wiki")
   $.ajax({
       url: api_url,
       dataType: "json",
       success: data => {
           output.innerHTML = '';
           console.log(data)
           //data[1] is the titles
           //data[2] is the description
           //data[3] is the links
           for (let i = 0; i < data.length; i++) {
               for (let j = 0; j <data.length; j++){
                   output.innerHTML += `
                   <li>
                     <a href="${data[3][i]}">${data[1][i]}</a>
                     <p>${data[2][i]}</p>
                   </li>
                 `
           }
       }
       },
       error: error => {
           console.log("There was an error");
       }
   })
}

//call functions and event listeners
search.addEventListener("click", getWiki)