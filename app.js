
const form = document.querySelector('#form')
const pickCoin = document.querySelector('#cointoss')
const coinToss = document.getElementById('flipcoin')
const playButton = document.querySelector(".playbutton")
const theFlip = document.querySelector(".the_flip")
const theGame = document.querySelector("#container-game")
const kickOff = document.querySelector(".kickoff")
const gameInfo = document.querySelector(".gameinfo")
const nextPlay = document.querySelector(".nextplay")
const gameInPlay = document.querySelector(".game-in-play")

// Team Objects

let yourTeam = {
    name: "Your Team",
    position: 0,
    down: 0,
    hasBall: false,
    coin: ""
}   

let otherTeam = {
    name: "Rival Team",
    position:  0,
    down: 0,
    tenYards: 0,
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
    kickOff.classList.remove('hidden')
    nextPlay.classList.remove('hidden')
    
})

kickOff.addEventListener('click', (e) => {
    kickOffDistance = Math.floor(Math.random() * 50) + 1
    otherTeam.position = kickOffDistance
    gameInfo.innerHTML = `${yourTeam.name} have kicked the ball, the ${otherTeam.name} have caught it on the ${otherTeam.position} yard line`
    kickOff.classList.add('hidden')
    gameInPlay.innerHTML = "Game Ongoing"

})

nextPlay.addEventListener('click', (e) => {
     // update the text to say what kind of play it was
     // run or pass
     // create a chance of stopping
     // if over 10 yards downs reset 
     // if over 3 tries they don't get over 10 yards team kicks balls if nearer to the endzone, field goal or punt

})

const runPlay = () => {
    if(otherTeam.down <= 4) {
        const chance = Math.random()
        console.log(chance)
    if(chance > 0.90) {
        let yards = Math.floor(Math.random() * 10);
        otherTeam.position += yards
        otherTeam.down ++
        console.log(`50% - Run play 1-10 yards - Total Yards: ${yards}`)
        console.log(`This is the other teams position on the field - ${otherTeam.position} yard line`)
    }
    else if (chance > 0.75) {
        let yards = Math.floor(Math.random() * 15)
        otherTeam.position += yards
        console.log(`50% chance run play ${yards}`)
        otherTeam.down ++
    }
    else if (chance > 0.20){
        let yards = Math.floor(Math.random() * 25);
        otherTeam.position += yards
        console.log(`10% chance run play ${yards}`)
        otherTeam.down ++
    }
    else {
        console.log('No Gain')
        otherTeam.down ++
        }
    }
    else {
        console.log(`You should kick the ball or try on 4th`)
    }
}

runPlay()
runPlay()
runPlay()
runPlay()

