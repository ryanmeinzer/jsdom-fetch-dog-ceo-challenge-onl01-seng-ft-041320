// console.log('%c HI', 'color: firebrick')

// Challenge 1 

document.addEventListener('DOMContentLoaded', function () {
    fetchImages()
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




