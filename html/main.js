    /* var bgcol = [
    "red", 
    "blue",
    "pink",
    "orange",
    "green"
    ];
*/
	var text1 = "Mark";
    
    

    var text2 = [
    "is",
    ];

    var text3 = [
    "answering tickets",
    "eating food",
    "a student",
    "learning javascript"
    ];

	var textcol = [
    "blue",
    "red",
    "green",
    "yellow", 
    "pink"
    ];

    var texttype = [
    "'Jim Nightshade', cursive",
    "'Amatic SC', cursive",
    "'Architects Daughter', cursive",
    "'Permanent Marker', cursive",
    "'Pacifico', cursive"
    ];

	
    
	var elem = document.getElementById("switch");
    

    (function change() {

          
            var randomcol = textcol[Math.floor(Math.random() * 5)];
            var randomtype = texttype[Math.floor(Math.random() * 5)];
            var randomtext1 = text2[Math.floor(Math.random() * 1)];
            var randomtext2 = text3[Math.floor(Math.random() * 4)];
        
        elem.style.color = randomcol;
        elem.style.fontFamily = randomtype;
        elem.innerHTML = `${text1} ${randomtext1} ${randomtext2}`;

      

    setTimeout(change, 2000);
})();


