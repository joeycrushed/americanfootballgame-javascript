
const form = document.querySelector('#form')
const pickCoin = document.querySelector('#cointoss')
const flipCoin = document.querySelector("#flipcoin")
const letsPlay = document.querySelector(".playbutton")
const coinTossInfo = document.querySelector("#heads_tails")
const theGame = document.querySelector("#container-game")
const kickOff = document.querySelector(".kickoff")
const gameInfo = document.querySelector(".gameinfo")
const gameInPlay = document.querySelector(".game-in-play")
const run = document.querySelector(".run")
const pass = document.querySelector(".pass")
const punt = document.querySelector(".punt")
const kick = document.querySelector('.kick')

// Team Objects

let game = {
    down: 0,
    coin: "",
    position: 0,
    tenYards: 0
}

let yourTeam = {
    name: "Your Team",
    position: 0,
    hasBall: true,
    coin: "Heads"
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
})

// Coin Flip

flipCoin.addEventListener('click', (e) => {
    const num = Math.floor(Math.random() * 10)
    let coin = ""
        if(num < 5 ) {
            coin = "Heads"
        } else {
            coin = "Tails"
        }
        game.coin = coin
        console.log(game)
        coinTossInfo.innerHTML = "The referee is flipping the coin ... "
        setTimeout(function() {
            if(coin == yourTeam.coin) {
                coinTossInfo.innerHTML = "You won the toss, you get the ball"
                yourTeam.hasBall = true
            } else {
                coinTossInfo.innerHTML = "You lost the toss, you other team get the ball"
                otherTeam.hasBall = true
            }
            letsPlay.classList.remove('hidden')
        },1000)
    
})

// Lets Play

letsPlay.addEventListener('click', (e) => {
    form.classList.add('hidden')
    letsPlay.classList.add('hidden')
    kickOff.classList.remove('hidden')
})

// Kick Off

kickOff.addEventListener('click', (e) => {
    if(yourTeam.hasBall == true) {
        kickOffDistance = Math.floor(Math.random() * 50) + 1
        yourTeam.position = kickOffDistance
        gameInfo.innerHTML = `${otherTeam.name} have kicked the ball ...`
        setTimeout(function() {
            gameInfo.innerHTML = `${yourTeam.name} have caught it on the ${yourTeam.position} yard line`
        }, 2000)
        kickOff.classList.add('hidden')
        gameInPlay.innerHTML = "Game Ongoing"
        run.classList.remove('hidden')
        pass.classList.remove('hidden')
    } else if (otherTeam.hasBall == true) {
        kickOffDistance = Math.floor(Math.random() * 50) + 1
        yourTeam.position = kickOffDistance
        gameInfo.innerHTML = `${yourTeam.name} have kicked the ball, the ${otherTeam.name} have caught it on the ${otherTeam.position} yard line`
        kickOff.classList.add('hidden')
        gameInPlay.innerHTML = "Game Ongoing"
        run.classList.remove('hidden')
        pass.classList.remove('hidden')
    }
})

// Run Play

run.addEventListener('click', (e) => {
    runPlay()
})
const runPlay = () => {
    if(yourTeam.hasBall == true) {
        let chance = Math.random()
        if(chance > 0.90) {
            let yards = Math.floor(Math.random() * 20);
            yourTeam.position += yards
            gameInfo.innerHTML = `${yourTeam.name} ran the ball for a gain of ${yards}. They are on the ${yourTeam.position} yard line`
        }
        else if (chance > 0.75) {
            let yards = Math.floor(Math.random() * 15)
            yourTeam.position += yards
            gameInfo.inner
            HTML = `${yourTeam.name} ran the ball for a gain of ${yards}. They are on the ${yourTeam.position}`
        }
        else if (chance > 0.50){
            let yards = Math.floor(Math.random() * 10);
            yourTeam.position += yards
            gameInfo.innerHTML = `${yourTeam.name} ran the ball for a gain of ${yards}. They are on the ${yourTeam.position}`
        }
        else if (chance > 0.10){
            let yards = Math.floor(Math.random() * 5);
            yourTeam.position += yards
            gameInfo.innerHTML = `${yourTeam.name} ran the ball for a gain of ${yards}. They are on the ${yourTeam.position}`
        }
        else {
            gameInfo.innerHTML = `${yourTeam.name} made no gain`
        }
    }
}

// Throwing play

pass.addEventListener('click', (e) => {
    console.log(game)
    if(game.down === 4 && game.tenYards < 10) {
        gameInfo.innerHTML = "It's fourth down. Do you want to punt/kick or go for it?"
        if(game.position > 60) {
            kick.classList.remove("hidden")
        } else {
            punt.classList.remove("hidden")
        }
    } else {
        passPlay()
    }  
})

const passPlay = () => {
    if(yourTeam.hasBall) {
        let chance = Math.random()
        if(chance > 0.90) {
            let yards = Math.floor(Math.random() * 50);
            yourTeam.position += yards
                if(yards < 10) {
                    game.tenYards += yards
                } else {
                    game.tenYards = 0
                }
            gameInfo.innerHTML = `${yourTeam.name} threw the ball for a gain of ${yards}. They are on the ${yourTeam.position} yard line`
        }
        else if (chance > 0.75) {
            let yards = Math.floor(Math.random() * 25)
            yourTeam.position += yards
                if(yards < 10) {
                    game.tenYards += yards
                } else {
                    game.tenYards = 0
                }
            gameInfo.innerHTML = `${yourTeam.name} threw the ball for a gain of ${yards}. They are on the ${yourTeam.position}`
        }
        else if (chance > 0.50){
            let yards = Math.floor(Math.random() * 10);
            yourTeam.position += yards
                if(yards < 10) {
                    game.tenYards += yards
                } else {
                    game.tenYards = 0
                }
            gameInfo.innerHTML = `${yourTeam.name} threw the ball for a gain of ${yards}. They are on the ${yourTeam.position}`
        }
        else if (chance > 0.10){
            let yards = Math.floor(Math.random() * 5);
            yourTeam.position += yards
            game.tenYards += yards
            gameInfo.innerHTML = `${yourTeam.name} threw the ball for a gain of ${yards}. They are on the ${yourTeam.position}`
        }
        else {
            console.log('No Gain')
            gameInfo.innerHTML = `${yourTeam.name} made no gain`
        }
    }
    else {
        gameInfo.innerHTML = "it's fourth down"
    }
}

// 4th Down Logic

// nextPlay.addEventListener('click', (e) => {
//     if (otherTeam.tenYards < 10 && otherTeam.down != 4) {
//         runPlay()
//         if(otherTeam.tenYards >= 10 || yards >= 10) {
//             otherTeam.down = 0
//         } else {
//             otherTeam.down ++
//         }
//     } else {
//         gameInfo.innerHTML = "It's fourth down! Kick or go for it?"
//     }
// })   