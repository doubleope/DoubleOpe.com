var message = document.querySelector("#message");
var map = document.querySelectorAll(".map");
var maps = document.querySelectorAll(".maps");
var countryDisplay = document.getElementById("country-display");
var generatedCountriesGlobal = {};
generatedCountriesGlobal = generateRandomCountries(6, easyCountries, 213);
var pickedCountry = pickCountry();
var hardButton = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode-button");
var resetButton = document.querySelector("#reset");
var playAgain = document.querySelector("#play-again");

init();

function init(){
    
    setupModeButtons();
    reset();
}


function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
            message.textContent = "";
            playAgain.textContent = "";
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
            this.textContent === "Easy" ? generatedCountriesGlobal = generateRandomCountries(6, easyCountries, 213): generatedCountriesGlobal = generateRandomCountries(6, hardCountries, 236);
            pickedCountry = pickCountry();
            reset();
            map1.style.display = "block";
            map2.style.display = "block";
            map3.style.display = "block";
            map4.style.display = "block";
            map5.style.display = "block";
            map6.style.display = "block";
		});
	}
}


function reset(){    
    countryDisplay.textContent = pickedCountry.name;
    setMap();
    mapEventListener();
}



function pickCountry(){
    var randomCountry = Math.floor(Math.random() * 6);
    return generatedCountriesGlobal[randomCountry];
}


function randomImg(num){
    return Math.floor(Math.random() * num);
}

function generateRandomCountries(num, whatCountries, numAvailable){
    var generatedCountries = [];
    for (i = 0; i < num; i++){
        generatedCountries.push(whatCountries[randomImg(numAvailable)]);
    }
    return generatedCountries;
}




function setMap(){
    

    
    for (i = 0; i < map.length; i++){
        map[i].src = generatedCountriesGlobal[i].url;
    }
    
    
        
}


function mapEventListener(){
    var map1 = document.getElementById("map1");
    map1.addEventListener("click", function(){
        if(map1.src === pickedCountry.url){
            document.getElementById("message").innerHTML = "Correct!";
            map1.style.display = "block";
            map2.style.display = "block";
            map3.style.display = "block";
            map4.style.display = "block";
            map5.style.display = "block";
            map6.style.display = "block";
            playAgain.textContent = "Click on Easy or Hard to play again";
        }else{
            map1.style.display = "none";
            document.getElementById("message").innerHTML = "Wrong, Try Again";
            
        }
    });

    var map2 = document.getElementById("map2");
    map2.addEventListener("click", function(){
        if(map2.src === pickedCountry.url){
            document.getElementById("message").innerHTML = "Correct!";
            map1.style.display = "block";
            map2.style.display = "block";
            map3.style.display = "block";
            map4.style.display = "block";
            map5.style.display = "block";
            map6.style.display = "block";
            playAgain.textContent = "Click on Easy or Hard to play again";
        }else{
            map2.style.display = "none";
            document.getElementById("message").innerHTML = "Wrong, Try Again";
        }
    });

    var map3 = document.getElementById("map3");
    map3.addEventListener("click", function(){
        if(map3.src === pickedCountry.url){
            document.getElementById("message").innerHTML = "Correct!";
            map1.style.display = "block";
            map2.style.display = "block";
            map3.style.display = "block";
            map4.style.display = "block";
            map5.style.display = "block";
            map6.style.display = "block";
            playAgain.textContent = "Click on Easy or Hard to play again";
        }else{
            map3.style.display = "none";
            document.getElementById("message").innerHTML = "Wrong, Try Again";
        }
    });

    var map4 = document.getElementById("map4");
    map4.addEventListener("click", function(){
        if(map4.src === pickedCountry.url){
            document.getElementById("message").innerHTML = "Correct!";
            map1.style.display = "block";
            map2.style.display = "block";
            map3.style.display = "block";
            map4.style.display = "block";
            map5.style.display = "block";
            map6.style.display = "block";
            playAgain.textContent = "Click on Easy or Hard to play again";
        }else{
            map4.style.display = "none";
            document.getElementById("message").innerHTML = "Wrong, Try Again";
        }
    });

    var map5 = document.getElementById("map5");
    map5.addEventListener("click", function(){
        if(map5.src === pickedCountry.url){
            document.getElementById("message").innerHTML = "Correct!";
            map1.style.display = "block";
            map2.style.display = "block";
            map3.style.display = "block";
            map4.style.display = "block";
            map5.style.display = "block";
            map6.style.display = "block";
            playAgain.textContent = "Click on Easy or Hard to play again";
        }else{
            map5.style.display = "none";
            document.getElementById("message").innerHTML = "Wrong, Try Again";
        }
    });

    var map6 = document.getElementById("map6");
    map6.addEventListener("click", function(){
        if(map6.src === pickedCountry.url){
            document.getElementById("message").innerHTML = "Correct!";
            map1.style.display = "block";
            map2.style.display = "block";
            map3.style.display = "block";
            map4.style.display = "block";
            map5.style.display = "block";
            map6.style.display = "block";
            playAgain.textContent = "Click on Easy or Hard to play again";
        }else{
            map6.style.display = "none";
            document.getElementById("message").innerHTML = "Wrong, Try Again";
        }
    });

}


