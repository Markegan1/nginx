var blueCounter = 0
var purpleCounter = 0
var pinkCounter = 0
var redCounter = 0
var knifeCounter = 0

function openCase() {



var result = document.getElementById('result')
var ticketNumber = [Math.floor(Math.random()*1000)]
var itemColourWon = ["blue", "purple", "pink", "red", "knife"]
var colours = ["blue", "purple", "rgb(255, 105, 180)", "red", "yellow"]
var itemWanted = document.getElementById('itemWanted').value
var button = document.getElementById('button')
var slotResult = document.getElementById('slot')
var spinnerContainer = document.getElementById('spinnercontainer')
var spinner1 = document.getElementById('spinner1')
var spinner2 = document.getElementById('spinner2')
var spinner3 = document.getElementById('spinner3')
var colourWon
var blue = document.getElementById('blue')
var purple = document.getElementById('purple')
var pink = document.getElementById('pink')
var red = document.getElementById('red')
var knife = document.getElementById('knife')

//Should be objects >.<
var knifeTypes = ["url(img/knife/knife.png)", "url(img/knife/knife2.png)", "url(img/knife/knife3.png)", "url(img/knife/knife4.png)", "url(img/knife/knife5.png)"]
var randomKnife = knifeTypes[Math.floor(Math.random() * 5)]
var redTypes = ["url(img/red/red.png)", "url(img/red/red2.png)", "url(img/red/red3.png)", "url(img/red/red4.png)", "url(img/red/red5.png)"]	
var randomRed = redTypes[Math.floor(Math.random() * 5)]
var pinkTypes = ["url(img/pink/pink.png)", "url(img/pink/pink2.png)", "url(img/pink/pink3.png)", "url(img/pink/pink4.png)", "url(img/pink/pink5.png)"]
var randomPink = pinkTypes[Math.floor(Math.random() * 5)]		
var purpleTypes = ["url(img/purple/purple.png)", "url(img/purple/purple2.png)", "url(img/purple/purple3.png)", "url(img/purple/purple4.png)", "url(img/purple/purple5.png)"]
var randomPurple = purpleTypes[Math.floor(Math.random() * 5)]
var blueTypes = ["url(img/blue/blue.png)", "url(img/blue/blue2.png)", "url(img/blue/blue3.png)", "url(img/blue/blue4.png)", "url(img/blue/blue5.png)"]
var randomBlue = blueTypes[Math.floor(Math.random() * 5)]



//Make sure the input box doesn't have anything in it to compromise the result
if(itemWanted !== "knife" && itemWanted !== "red" && itemWanted !== "pink" && itemWanted !== "purple" && itemWanted !== "blue"){

		if(ticketNumber < 2.1){

			colourWon = itemColourWon[4]
			textColour = colours[4]
			knifeCounter++

				console.log("You won a knife!", ticketNumber)
				
		}else if(ticketNumber < 7.8){

			colourWon = itemColourWon[3]
			textColour = colours[3]
			redCounter++

				console.log('you won a red', ticketNumber)

		}else if(ticketNumber < 39.3){

			colourWon = itemColourWon[2]
			textColour = colours[2]
			pinkCounter++

				console.log('you won a pink', ticketNumber)

		}else if(ticketNumber < 201.9){

			colourWon = itemColourWon[1]
			textColour = colours[1]
			purpleCounter++

				console.log('you won a purple', ticketNumber)

		}else if(ticketNumber < 1000){

			colourWon = itemColourWon[0]
			textColour = colours[0]
			blueCounter++

				console.log('you won a blue', ticketNumber)

		}
}else{

	//now if there is something in the input box give the corresponding item
		if(itemWanted == "knife"){

			colourWon = itemColourWon[4]
			textColour = colours[4]
				console.log('You won a knife!', ticketNumber)

		}else if(itemWanted == "red"){

			colourWon = itemColourWon[3]
			textColour = colours[3]
				console.log('you won a red', ticketNumber)

		}else if(itemWanted == "pink"){

			colourWon = itemColourWon[2]
			textColour = colours[2]
				console.log('you won a pink', ticketNumber)

		}else if(itemWanted == "purple"){

			colourWon = itemColourWon[1]
			textColour = colours[1]
				console.log('you won a purple', ticketNumber)

		}else if(itemWanted == "blue"){

			colourWon = itemColourWon[0]
			textColour = colours[0]
				console.log('you won a blue', ticketNumber)

		}
}

//Junk code for the spinner

var spinnerRandom1 = setInterval(function(){
	
	var randomColor1 = colours[Math.floor(Math.random()*5)]
	spinner1.style.backgroundColor = randomColor1
	

if(spinner1.style.backgroundColor === textColour){

	spinner1.style.backgroundColor = textColour
	clearInterval(spinnerRandom1)
	if(spinner1.style.backgroundColor == textColour && spinner2.style.backgroundColor == textColour && spinner3.style.backgroundColor == textColour){
	setTimeout(function(){
	display()
	}, 1000)
	
}
}
}, 150)
var spinnerRandom2 = setInterval(function(){

	
	var randomColor2 = colours[Math.floor(Math.random()*5)]
	
	
	spinner2.style.backgroundColor = randomColor2
	

if(spinner2.style.backgroundColor === textColour){

	spinner2.style.backgroundColor = textColour
	clearInterval(spinnerRandom2)
	if(spinner1.style.backgroundColor == textColour && spinner2.style.backgroundColor == textColour && spinner3.style.backgroundColor == textColour){
	setTimeout(function(){
	display()
	}, 1000)
	
}
}
}, 150)
var spinnerRandom3 = setInterval(function(){

	
	var randomColor3 = colours[Math.floor(Math.random()*5)]
	
	spinner3.style.backgroundColor = randomColor3

if(spinner3.style.backgroundColor === textColour){

	spinner3.style.backgroundColor = textColour
	clearInterval(spinnerRandom3)
	if(spinner1.style.backgroundColor == textColour && spinner2.style.backgroundColor == textColour && spinner3.style.backgroundColor == textColour){
	setTimeout(function(){
	display()
	}, 1000)
}
}
}, 150)




//display the winning result
var display = function(){


button.disabled = false
slotResult.style.visibility = "visible"
slotResult.style.opacity = "1"
spinner1.style.visibility = "hidden"
spinner1.style.opacity = "0"
spinner2.style.visibility = "hidden"
spinner2.style.opacity = "0"
spinner3.style.visibility = "hidden"
spinner3.style.opacity = "0"
spinnerContainer.style.visibility = "hidden"
spinnerContainer.style.opacity = "0"

if(colourWon == "blue"){
	slotResult.style.backgroundImage=randomBlue
}else if(colourWon == "purple"){
	slotResult.style.backgroundImage=randomPurple
}else if(colourWon == "pink"){
	slotResult.style.backgroundImage=randomPink
}else if(colourWon == "red"){
	slotResult.style.backgroundImage=randomRed
}else if(colourWon == "knife"){
	slotResult.style.backgroundImage=randomKnife
}

slot.style.borderColor = textColour
blue.innerHTML = blueCounter
purple.innerHTML = purpleCounter
pink.innerHTML = pinkCounter
red.innerHTML = redCounter
knife.innerHTML = knifeCounter
result.innerHTML = `<br><br>You won a <span style="color:${textColour}; font-weight:bolder">${colourWon}</span> with the ticket <span style="font-weight:bolder">${ticketNumber}</span>!`
clearInterval(spinnerRandom1)
clearInterval(spinnerRandom2)
clearInterval(spinnerRandom3)

}




//revert everything back to normal
spinner1.style.visibility = "visible"
spinner1.style.opacity = "1"
spinner2.style.visibility = "visible"
spinner2.style.opacity = "1"
spinner3.style.visibility = "visible"
spinner3.style.opacity = "1"
spinnerContainer.style.visibility = "visible"
spinnerContainer.style.opacity = "1"

slotResult.style.visibility = "hidden"
slotResult.style.opacity = "0"
button.disabled = true

    }




