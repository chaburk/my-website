//HTML Elements
const addBtn = document.querySelector(".add")
const clearBtn = document.querySelector(".clear")
const input = document.querySelector(".inputTxt")
const fireworkBtn = document.querySelector(".fireworks")
const rainBtn = document.querySelector(".rain")
const displayWords = document.querySelector(".display")
const container = document.querySelector(".container")

//Word Array
const wordArr = ["You", "Can", "Do", "It!"];
displayWords.innerHTML = wordArr.reduce((acc, current) => {
    return acc + `<p>${current}</p>`
}, "")

const rainGen = (word) => {
    var randomLeft = Math.random() * window.innerWidth;
    let element = document.createElement('div')
    element.setAttribute('class', 'rainExample')
    element.style.position = "absolute"

    element.style.left = `${randomLeft}px`
    element.innerHTML = `<h1>${word}</h1>`
    element.style.zIndex = -1;
    document.body.appendChild(element);
    element.style.color = "blue"

    setTimeout(()=> {
        element.style.animation = 'none'
        element.offsetHeight
        element.style.animation = null
        rainGen(word)
        element.remove()
    }, 2000)
}

//fireworkGen takes in a word, creates an element, and then assigns it a random position on the screen.
//changes color and font-size and then disappears
const fireworkGen = (word) => {
    var randomTop = Math.random() * window.innerHeight;
    var randomLeft = Math.random() * window.innerWidth;
    let element = document.createElement('div')
    element.setAttribute('class', 'fireworkExample')
    element.style.position = "absolute"
    element.style.top = `${randomTop}px`
    element.style.left = `${randomLeft}px`
    element.innerHTML = `<h1>${word}</h1>`
    element.style.zIndex = -1;
    document.body.appendChild(element);

    var randomR = Math.random() * 255;
    var randomG = Math.random() * 255;
    var randomB = Math.random() * 255;

    let lowerLimit = 10
    let upperLimit = 100
    var randomFontSize = Math.random() * (upperLimit - lowerLimit) + lowerLimit
    element.style.color = `rgba(${randomR}, ${randomG}, ${randomB})`

    setTimeout(() => {
        element.style.fontSize = `${randomFontSize}px`
    }, 100);
    setTimeout( () => {
        element.remove()
    }, 2500)
}

//Add words to array
addBtn.addEventListener("click", () => {
    wordArr.unshift(input.value)
    input.value = ""
    console.log(wordArr)
    displayWords.innerHTML = wordArr.reduce((acc, current) => {
        return acc + `<p>${current}</p>`
    }, "")
})

document.addEventListener("keydown", (event) => {
    if(event.key === 'Enter'){
        wordArr.unshift(input.value)
        input.value = ""
        console.log(wordArr)
        displayWords.innerHTML = wordArr.reduce((acc, current) => {
            return acc + `<p>${current}</p>`
        }, "")
    }
})

clearBtn.addEventListener('click', () => {
    wordArr.length = 0;
    displayWords.innerHTML = ""
})

fireworkBtn.addEventListener("click", () => {
    wordArr.forEach((x)=> {
        fireworkGen(x)
        fireworkGen(x)
        fireworkGen(x)
    })
})

rainBtn.addEventListener('click', () => {
    wordArr.forEach((x) => {
        rainGen(x);
    })
})
