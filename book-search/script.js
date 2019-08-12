const input = document.querySelector('#input')
const search = document.querySelector('#search')
const list = document.querySelector('.container')


let inputValue;

input.addEventListener('input', (ev) => {
   inputValue = ev.target.value
  list.innerHTML = ''
})

function renderBooks(books) {
    return books.forEach((book) => {
      list.innerHTML += `<div class="book">
      <img src=${book.best_book.image_url} width="200">
      <h4>Title: ${book.best_book.title}<h4/>
      <h3>Author: ${book.best_book.author.name}<h3/>
      </div>`
    })
 }

function fetchData() {
  return fetch(`https://dotdash-goodread-api--akramhelil.repl.co/search/${inputValue}`)
  .then(res => res.json())
  .then(booksArry => renderBooks(booksArry)) 
}

search.addEventListener('click', () => fetchData())