const books = document.querySelectorAll('.book')
const titles = document.querySelectorAll('a')
const book2Chapters = books[0].querySelectorAll('li')
const book5Chapters = books[5].querySelectorAll('li')
const book6Chapters = books[2].querySelectorAll('li')
const advert = document.querySelector('.adv')

// Восстановить порядок книг.
books[0].before(books[1])
books[4].after(books[3])
books[5].after(books[2])

// Заменить картинку заднего фона на другую из папки image
const bground = document.querySelector('body')
bground.style.backgroundImage = "url(image/you-dont-know-js.jpg)"

// Исправить заголовок в книге 3
titles[4].textContent = 'Книга 3. this и Прототипы Объектов'

//Удалить рекламу со страницы
advert.remove()

// Восстановить порядок глав во второй и пятой книге 
book2Chapters[3].after(book2Chapters[6])
book2Chapters[6].after(book2Chapters[8])
book2Chapters[9].after(book2Chapters[2])

book5Chapters[3].before(book5Chapters[9])
book5Chapters[4].after(book5Chapters[2])
book5Chapters[8].before(book5Chapters[5])

//В шестой книге добавить главу 8
const newBk6Chapter = document.createElement('li')
newBk6Chapter.textContent = 'Глава 8: За пределами ES6'
book6Chapters[8].append(newBk6Chapter)



