
const form = document.querySelector('#form')
const pickCoin = document.querySelector('#cointoss')
const flipCoin = document.querySelector("#flipcoin")
const playButton = document.querySelector(".playbutton")
const coinTossInfo = document.querySelector("#heads_tails")
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
    console.log(yourTeam.coin)
})

// Coin Flip

flipCoin.addEventListener('click', (e) => {
    const num = Math.floor(Math.random() * 10)
    console.log(num)
    let coin = ""
        if(num < 5 ) {
            coin = "Heads"
        } else {
            coin = "Tails"
        }
        coinTossInfo.innerHTML = "The referee is flipping the coin ... "
        setTimeout(function() {
            console.log(`the coin was ${coin}`)
            if(coin == yourTeam.coin) {
                coinTossInfo.innerHTML = "You won the toss, you get the ball"
                yourTeam.hasBall = true
            } else {
                coinTossInfo.innerHTML = "You lost the toss, you other team get the ball"
                otherTeam.hasBall = true
            }
        },3000)
    
})
// coinToss.addEventListener('click', flipCoin)
// function flipCoin(event) {
//     let num = Math.random();
//     console.log(num)
//     let coin = ""
//     results = document.getElementById("heads_tails")
//      if(num < 0.5) {
//         coin = "Heads"
//         } else {
//         coin = "Tails"
//      }
//      console.log(coin)
//      playButton.classList.remove('hidden')
// }



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

// Next Play

nextPlay.addEventListener('click', (e) => {
    if (otherTeam.tenYards < 10 && otherTeam.down != 4) {
        runPlay()
        if(otherTeam.tenYards >= 10 || yards >= 10) {
            otherTeam.down = 0
        } else {
            otherTeam.down ++
        }
    } else {
        gameInfo.innerHTML = "It's fourth down! Kick or go for it?"
    }
})   
     // update the text to say what kind of play it was
     // run or pass
     // create a chance of stopping
     // if over 10 yards downs reset 
     // if over 3 tries they don't get over 10 yards team kicks balls if nearer to the endzone, field goal or punt




// Run Play

const runPlay = () => {
    let chance = Math.random()
    if(chance > 0.60) {
        let yards = Math.floor(Math.random() * 5);
        otherTeam.position += yards
        gameInfo.innerHTML = `${otherTeam} ran the ball for a gain of ${yards}. They are on the ${otherTeam.position}`
    }
    else if (chance > 0.50) {
        let yards = Math.floor(Math.random() * 11)
        otherTeam.position += yards
        gameInfo.innerHTML = `${otherTeam.name} ran the ball for a gain of ${yards}. They are on the ${otherTeam.position}`
    }
    else if (chance > 0.10){
        let yards = Math.floor(Math.random() * 25);
        otherTeam.position += yards
        gameInfo.innerHTML = `${otherTeam.name} ran the ball for a gain of ${yards}. They are on the ${otherTeam.position}`
    }
    else {
        console.log('No Gain')
        gameInfo.innerHTML = `No Gain`
    }
}