//calculate the score of the quiz and display the result in an alert
function getScore() { 
    answers = ["N", "N", "Alberto", "Patent", "a"];
    score = 0; 
    geniusLevels = ["0", "Average", "Dr. Stornetta", "Euclid", "Gauss", "Einstein!"]; 
    for (var i = 1; i < 6; i++) { 
        elname = "q" + i.toString();
        options = document.getElementsByName(elname); 
        for (var j = 0; j < options.length; j++) { 
            if (options[j].checked) {
                if (options[j].value === answers[i-1]) {
                    score = score + 1; } 
            } 
        } 
    } 
    message = "Your Score:" + score + "/5 \n Your Genius Level from 0 to Einstein: " + geniusLevels[score] + "!";
    alert(message); 
}