
var myCard1 = document.getElementById('mycard1') 
var myCard2 = document.getElementById('mycard2') 
var myCard3 = document.getElementById('mycard3') 
var myCard4 = document.getElementById('mycard4')
var myCard5 = document.getElementById('mycard5') 
var dealerCard1 = document.getElementById('dealercard1') 
var dealerCard2 = document.getElementById('dealercard2') 
var dealerCard3 = document.getElementById('dealercard3') 
var dealerCard4 = document.getElementById('dealercard4') 
var dealerCard5 = document.getElementById('dealercard5') 
var totalDisplay = document.getElementById('totalvalue')
var totalDisplayDealer = document.getElementById('totalvaluedealer')
var startButton = document.getElementById('start')
var hitButton = document.getElementById('hit')
var standButton  = document.getElementById('stand')
var myTotalValue = 0
var dealerTotalValue = 0
var winCounter = 0
var lossCounter = 0
var tieCounter = 0 
var winBox = document.getElementById('win')
var lossBox = document.getElementById('loss')
var tieBox = document.getElementById('tie')

//The cards object

var cards = {

	'kingSpades' : { pic: "url(img/kingofspades.png)", value: 10 },
	'kingHearts' : { pic: "url(img/kingofhearts.png)", value: 10 },
	'kingDiamonds' : { pic: "url(img/kingofdiamonds.png)", value: 10 },
	'kingClubs' : { pic: "url(img/kingofclubs.png)", value: 10 },

	'queenSpades' : { pic: "url(img/queenofspades.png)", value: 10 },
	'queenHearts' : { pic: "url(img/queenofhearts.png)", value: 10 },
	'queenDiamonds' : { pic: "url(img/queenofdiamonds.png)", value: 10 },
	'queenClubs' : { pic: "url(img/queenofclubs.png)", value: 10 },

	'jackSpades' : { pic: "url(img/jackofspades.png)", value: 10 },
	'jackHearts' : { pic: "url(img/jackofhearts.png)", value: 10 },
	'jackDiamonds' : { pic: "url(img/jackofdiamonds.png)", value: 10 },
	'jackClubs' : { pic: "url(img/jackofclubs.png)", value: 10 },

	'clubs10' : { pic: "url(img/10ofclubs.png)", value: 10 },
	'spades10' : { pic: "url(img/10ofspades.png)", value: 10 },
	'diamonds10' : { pic: "url(img/10ofdiamonds.png)", value: 10 },
	'hearts10' : { pic: "url(img/10ofhearts.png)", value: 10 },

	'clubs9' : { pic: "url(img/9ofclubs.png)", value: 9 },
	'spades9 ' : { pic: "url(img/9ofspades.png)", value: 9 },
	'diamonds9' : { pic: "url(img/9ofdiamonds.png)", value: 9 },
	'hearts9' : { pic: "url(img/9ofhearts.png)", value: 9 },

	'clubs8' : { pic: "url(img/8ofclubs.png)", value: 8 },
	'spades8 ' : { pic: "url(img/8ofspades.png)", value: 8 },
	'diamonds8' : { pic: "url(img/8ofdiamonds.png)", value: 8 },
	'hearts8' : { pic: "url(img/8ofhearts.png)", value: 8 },

	'clubs7' : { pic: "url(img/7ofclubs.png)", value: 7 },
	'spades7' : { pic: "url(img/7ofspades.png)", value: 7 },
	'diamonds7' : { pic: "url(img/7ofdiamonds.png)", value: 7 },
	'hearts7' : { pic: "url(img/7ofhearts.png)", value: 7 },

	'clubs6' : { pic: "url(img/6ofclubs.png)", value:6 },
	'spades6 ' : { pic: "url(img/6ofspades.png)", value:6 },
	'diamonds6' : { pic: "url(img/6ofdiamonds.png)", value: 6},
	'hearts6' : { pic: "url(img/6ofhearts.png)", value:6 },

	'clubs5' : { pic: "url(img/5ofclubs.png)", value: 5 },
	'spades5 ' : { pic: "url(img/5ofspades.png)", value: 5 },
	'diamonds5' : { pic: "url(img/5ofdiamonds.png)", value: 5 },
	'hearts5' : { pic: "url(img/5ofhearts.png)", value: 5 },

	'clubs4' : { pic: "url(img/4ofclubs.png)", value: 4 },
	'spades4 ' : { pic: "url(img/4ofspades.png)", value: 4 },
	'diamonds4' : { pic: "url(img/4ofdiamonds.png)", value: 4 },
	'hearts4' : { pic: "url(img/4ofhearts.png)", value: 4 },

	'clubs3' : { pic: "url(img/3ofclubs.png)", value: 3 },
	'spades3 ' : { pic: "url(img/3ofspades.png)", value: 3 },
	'diamonds3' : { pic: "url(img/3ofdiamonds.png)", value: 3 },
	'hearts3' : { pic: "url(img/3ofhearts.png)", value: 3 },

	'clubs2' : { pic: "url(img/2ofclubs.png)", value: 2 },
	'spades2 ' : { pic: "url(img/2ofspades.png)", value: 2 },
	'diamonds2' : { pic: "url(img/2ofdiamonds.png)", value: 2 },
	'hearts2' : { pic: "url(img/2ofhearts.png)", value: 2 }

}

//stop the player from hitting or standing before the game is initialized 
hitButton.disabled = true
standButton.disabled = true

//global variables for cards

var myFirstCard
var mySecondCard
var myThirdtCard
var myFourthCard
var myFifthCard
var dealerFirstCard
var dealerSecondCard
var dealerThirdCard
var dealerFourthCard
var dealerFifthCard

function startGame(){



hitCount = 0
dealerTotalValue = 0
myTotalValue = 0
totalDisplayDealer.innerHTML = "Total amount:"
totalDisplay.innerHTML = "Total amount:"
				
				//make all the background images transparent/back to normal

				myCard1.style.backgroundImage = ""
				myCard2.style.backgroundImage = ""
				myCard3.style.backgroundImage = ""
				myCard4.style.backgroundImage = ""
				myCard5.style.backgroundImage = ""
				dealerCard1.style.backgroundImage = ""
				dealerCard2.style.backgroundImage = ""
				dealerCard3.style.backgroundImage = ""
				dealerCard4.style.backgroundImage = ""
				dealerCard5.style.backgroundImage = ""

//enable the hit and stand buttons

hitButton.disabled = false
standButton.disabled = false

//randomly select the user's first card

myFirstCard = _.sample(cards)

//randomly select the user's second card
mySecondCard = _.sample(cards)

//randomly select the dealer's first card
	dealerFirstCard = _.sample(cards)
//display all cards dealt
	dealerCard1.style.backgroundImage = dealerFirstCard.pic
	myCard1.style.backgroundImage = myFirstCard.pic
	myCard2.style.backgroundImage = mySecondCard.pic

//disable the start button so the game doesn't break
startButton.disabled = true;

//get the user's total value and show it
myTotalValue = myFirstCard.value + mySecondCard.value
console.log(myTotalValue)
totalDisplay.innerHTML = `Total amount: ${myTotalValue}`
dealerTotalValue = dealerFirstCard.value
totalDisplayDealer.innerHTML = `Total amount: ${dealerTotalValue}`
}


	var hitCount = 0

//each time this is pressed it adds one to the counter and that moves it through the steps on the if statement (max 5 cards)
function hitCard(){
		hitCount++
			if(hitCount == 1){
				myThirdCard = _.sample(cards)		
				myCard3.style.backgroundImage = myThirdCard.pic	
				myTotalValue = myFirstCard.value + mySecondCard.value  + myThirdCard.value
				totalDisplay.innerHTML = `Total amount: ${myTotalValue}`
				totalDisplayDealer.innerHTML = `Total amount: ${dealerTotalValue}`
				
			}else if(hitCount == 2){
				myFourthCard = _.sample(cards)						
				myCard4.style.backgroundImage = myFourthCard.pic
				myTotalValue = myFirstCard.value + mySecondCard.value  + myThirdCard.value + myFourthCard.value
				totalDisplay.innerHTML = `Total amount: ${myTotalValue}`
				totalDisplayDealer.innerHTML = `Total amount: ${dealerTotalValue}`		
			}else if(hitCount == 3){
				myFifthCard = _.sample(cards)	
				myCard5.style.backgroundImage = myFifthCard.pic				
				myTotalValue = myFirstCard.value + mySecondCard.value  + myThirdCard.value + myFourthCard.value + myFifthCard.value
				totalDisplay.innerHTML = `Total amount: ${myTotalValue}`
				totalDisplayDealer.innerHTML = `Total amount: ${dealerTotalValue}`
			}
			if(myTotalValue > 21){
				//call the loss function
				return loss()
			}
			if(myTotalValue == 21){
				//call the won function
				return won()
			}



			//log the total value of the user
console.log(myTotalValue)
	 

	}

function stand(){

//disable the hit and stand button

	standButton.disabled = true
	hitButton.disabled =true
	//tease the player with the back of a card image
	dealerCard2.style.backgroundImage = "url(img/idle.png)"

setTimeout(function(){
	//get the dealer's second card after 1 second
	dealerSecondCard = _.sample(cards)
	//display the dealer's second card
	dealerCard2.style.backgroundImage = dealerSecondCard.pic	
	dealerTotalValue = dealerFirstCard.value + dealerSecondCard.value
	//display the dealer's total amount
	totalDisplayDealer.innerHTML = `Total amount: ${dealerTotalValue}`
	
	//return loss, won, or tie functions
	if(dealerTotalValue < 22 && dealerTotalValue >= 17 && myTotalValue < 21 && dealerTotalValue > myTotalValue){
		return loss()
	}
	if(dealerTotalValue < 22 && dealerTotalValue >= 17 && myTotalValue < 21 && dealerTotalValue < myTotalValue){
		return won()
	}
	if(dealerTotalValue < 22 && dealerTotalValue >= 17 && myTotalValue < 21 && dealerTotalValue == myTotalValue){
		return tie()
	}	

},1000)

//get results
setTimeout(function(){

	if(dealerTotalValue < 17){
dealerCard3.style.backgroundImage = "url(img/idle.png)"
		setTimeout(function(){
				dealerThirdCard = _.sample(cards)
				
					dealerCard3.style.backgroundImage = dealerThirdCard.pic
						dealerTotalValue = dealerTotalValue + dealerThirdCard.value
						if(dealerTotalValue > 21){
							return won()
						}
							if(dealerTotalValue < 22 && dealerTotalValue >= 17 && myTotalValue < 21 && dealerTotalValue > myTotalValue){
								return loss()
							}
							if(dealerTotalValue < 22 && dealerTotalValue >= 17 && myTotalValue <21 && dealerTotalValue < myTotalValue){
								return won()
							}	
							if(dealerTotalValue < 22 && dealerTotalValue >= 17 && myTotalValue <21 && dealerTotalValue == myTotalValue){
								return tie()
							}		
		}, 1000)	

setTimeout(function(){

		if(dealerTotalValue < 17){
dealerCard4.style.backgroundImage = "url(img/idle.png)"
			setTimeout(function(){
					dealerFourthCard = _.sample(cards)
					
						dealerCard4.style.backgroundImage = dealerFourthCard.pic
							dealerTotalValue = dealerTotalValue + dealerFourthCard.value
							if(dealerTotalValue > 21){
								return won()
							}
								if(dealerTotalValue < 22 && dealerTotalValue >= 17 && myTotalValue < 21 && dealerTotalValue > myTotalValue){
									return loss()
								}
								if(dealerTotalValue < 22 && dealerTotalValue >= 17 && myTotalValue <21 && dealerTotalValue < myTotalValue){
									return won()
								}	
								if(dealerTotalValue < 22 && dealerTotalValue >= 17 && myTotalValue <21 && dealerTotalValue == myTotalValue){
									return tie()
								}	
			}, 1000)

setTimeout(function(){

			if(dealerTotalValue < 17){
dealerCard5.style.backgroundImage = "url(img/idle.png)"			
				setTimeout(function(){
						dealerFifthCard = _.sample(cards)
						
							dealerCard5.style.backgroundImage = dealerFifthCard.pic
								dealerTotalValue = dealerTotalValue + dealerFifthCard.value
								if(dealerTotalValue > 21){
									return won()
								}
									if(dealerTotalValue < 22 && dealerTotalValue >= 17 && myTotalValue < 21 && dealerTotalValue > myTotalValue){
										
										return loss()

									}
									if(dealerTotalValue < 22 && dealerTotalValue >= 17 && myTotalValue <21 && dealerTotalValue < myTotalValue){
										
										return won()

									}
									if(dealerTotalValue < 22 && dealerTotalValue >= 17 && myTotalValue <21 && dealerTotalValue == myTotalValue){
										
										return tie()
										
									}
				
				}, 1000)

			}


}, 1000)
	}
}, 1000)
	}
}, 1000)

setInterval(function(){
	totalDisplayDealer.innerHTML = `Total amount: ${dealerTotalValue}`
	dealerTotalValue = dealerTotalValue
},1)


}

//alert functions

var tie = function(){
	startButton.disabled = false
				hitButton.disabled = true
				standButton.disabled = true
				timeOutAlert = 500
				hitCount = 0
				tieCounter++
				tieBox.innerHTML = `Amount of times you've tied: ${tieCounter}`

	swal({
					title:"PUSH",
					text:"You have the same amount as the dealer!",
					type:"info",
					confirmButtonText:"Okay",
					allowClickOff:true
				})
				

}

var won = function(){
	startButton.disabled = false
				hitButton.disabled = true
				standButton.disabled = true
				timeOutAlert = 500
				hitCount = 0
				winCounter++
				winBox.innerHTML = `Amount of times you've won: ${winCounter}`

	swal({
					title:"You won!",
					text:"You had better cards than the dealer!",
					type:"success",
					confirmButtonText:"Okay",
					allowClickOff:true
				})
				
}
var loss = function(){
	startButton.disabled = false
				hitButton.disabled = true
				standButton.disabled = true
				timeOutAlert = 500
				hitCount = 0		
				lossCounter++
				lossBox.innerHTML = `Amount of times you've lost: ${lossCounter}`

	swal({
					title:"You lost!",
					text:"The dealer had better cards than you!",
					type:"error",
					confirmButtonText:"Okay",
					allowClickOff:true
				})
				
}