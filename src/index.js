// console.log('%c HI', 'color: firebrick')

// Challenge 1 

document.addEventListener('DOMContentLoaded', function () {
    fetchImages()
    fetchBreeds()
})

function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(function (response) {
            return response.json()
        })
        .then(function (results) {
            addImages(results)
        })
}

function addImages(urls) {
    const dogImageContainer = document.querySelector('#dog-image-container')
    urls.message.forEach(imageURL => {
        let newImg = document.createElement('img')
        newImg.src = imageURL
        dogImageContainer.appendChild(newImg)
    })
}

// Challenge 2

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function (response) {
            return response.json()
        })
        .then(function (results) {
            addBreeds(results)
        })
}

function addBreeds(results) {
    const dogBreedsContainer = document.querySelector('#dog-breeds')
    for (const name in results.message) {
        let newBreed = document.createElement('li')
        newBreed.addEventListener('click', changeColor)
        newBreed.innerHTML = `${name}`
        dogBreedsContainer.appendChild(newBreed)
    }
}

// Challenge 3

// 1. Select
// done in Challenge 2 function scope

// 2. Listen
// done in Challeng 2 function scope

// 3. Do

function changeColor(e) {
    e.target.style.color = 'red'
}

// Challenge 4
// Select
// Listen

function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
        filterBreeds(event.target.value);
    });
}

// Do
// Couldn't get it working!

function filterBreeds(letter) {
    updateBreeds(results.filter(newBreed => newBreed.startsWith(letter)))
} 

function updateBreeds(breeds) {
    let ul = document.querySelector('#dog-breeds')
    removeChildren(ul)
    breeds.forEach(results => addBreeds(results))
}