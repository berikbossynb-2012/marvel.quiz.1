const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const show_answer1 = document.getElementById("show_answer1");
const show_answer2 = document.getElementById("show_answer2");
const show_answer3 = document.getElementById("show_answer3");
const variant3 = document.getElementById("variant_3");  
const variant5 = document.getElementById("variant_5"); 
const variant10 = document.getElementById("variant_10"); 

show_answer1.onclick = function(){
    answer1.style.display = "block"; 
    
    if (variant3.checked) {
        answer1.textContent = "Correct!";
    } else {
        answer1.textContent = "Incorrect!";
    }
}

show_answer2.onclick = function(){
    answer2.style.display = "block";
    
    if (variant5.checked) {
        answer2.textContent = "Correct!";
    } else {
        answer2.textContent = "Incorrect!";
    }
}

show_answer3.onclick = function(){
    answer3.style.display = "block";
    
    if (variant10.checked) {
        answer3.textContent = "Correct!";
    } else {
        answer3.textContent = "Incorrect!";
    }
}