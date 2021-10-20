
const form = document.querySelector('#form')
const pickCoin = document.querySelector('#cointoss')
const coinToss = document.getElementById('flipcoin')
const playButton = document.querySelector(".playbutton")
const theFlip = document.querySelector(".the_flip")
const theGame = document.querySelector("#container-game")

// Team Objects

let yourTeam = {
    position: 0,
    hasBall: false,
    coin: ""
}   

let otherTeam = {
    position:  0,
    hasBall: false,
    coin: ""
}

// Pick coin

form.addEventListener('submit', (e) => {
    e.preventDefault()
    yourTeam.coin = pickCoin.value
    document.querySelector('#yourpick').innerHTML = `You have picked ${pickCoin.value}`
    console.log(yourTeam)
})

// Coin Flip


coinToss.addEventListener('click', flipCoin)

function flipCoin(event) {
    let num = Math.random();
    let coin = ""
    results = document.getElementById("heads_tails")
     if(num < 0.5) {
        coin = "Heads"
        } else {
        coin = "Tails"
     }
     if(coin == yourTeam.coin) {
         console.log("you win")
         results.innerHTML = `It was ${coin}, You get the ball`
         yourTeam.hasBall = true
     } else if (coin != yourTeam.coin) {
         results.innerHTML = `It was ${coin}, The other team get the ball`
         otherTeam.hasBall = true
     }
     playButton.classList.remove('hidden')
}

// Kick off

playButton.addEventListener('click', (e) => {
    theFlip.classList.add('hidden')
    theGame.classList.remove('hidden')
})
