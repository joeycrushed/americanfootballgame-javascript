
const form = document.querySelector('#form')
const pickCoin = document.querySelector('#cointoss')
const coinToss = document.getElementById('flipcoin')
const playButton = document.querySelector(".playbutton")
const theFlip = document.querySelector(".the_flip")
const theGame = document.querySelector("#container-game")
const kickOff = document.querySelector(".kickoff")
const gameInfo = document.querySelector(".gameinfo")

// Team Objects

let yourTeam = {
    name: "Your Team",
    position: 0,
    hasBall: false,
    coin: ""
}   

let otherTeam = {
    name: "Rival Team",
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
})

kickOff.addEventListener('click', (e) => {
    kickOffDistance = Math.floor(Math.random() * 50) + 1
    otherTeam.position = kickOffDistance
    console.log(otherTeam.position)
    console.log(kickOffDistance)
    gameInfo.innerHTML = `${yourTeam.name} have kicked the ball, the ${otherTeam.name} have caught it on the ${otherTeam.position} yard line`
    kickOff.classList.add('hidden')
    Play.classList.remove('hidden')

})

nextPlay.addEventListener('click', (e) => {
     
})


