console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function (e) {

  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(dogData => postDog(dogData['message']))
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(breedData => addBreed(breedData['message']))


})


function postDog(dogData) {
  const dogImagePosts = document.querySelector('div#dog-image-container')
  for (i = 0; i < dogData.length; i++) {
    newImg = document.createElement('p')
    newImg.innerHTML = `<img src = "${dogData[i]}">`
    dogImagePosts.appendChild(newImg)

  }


}

function addBreed(breedData) {
  const dogBreedsUl = document.querySelector('ul#dog-breeds')
  let dogs = Object.entries(breedData)
  const dropDown = document.querySelector('select')
  for ([key, value] of dogs) {
    newLi = document.createElement('li')
    newLi.addEventListener('click', (e => e.target.style.color = 'red'))
    newLi.textContent = key, value
    dogBreedsUl.appendChild(newLi)
  }
  dropDown.addEventListener('click', function () {
    const optionSelect = document.querySelectorAll('option')
    const getLi = document.querySelectorAll('li')
    for (a = 0; a < getLi.length; a++) {
      let dogLiContent = getLi[a].textContent
      for (i = 0; i < optionSelect.length; i++) {
        let abcd = optionSelect[i].textContent
        if (this.value === abcd) {
          if (dogLiContent.startsWith(abcd) === false) {
            getLi[a].style.display = "none"
          } else {
            getLi[a].style.display = 'list-item'
          }
        }
      }
    }
  })
}





