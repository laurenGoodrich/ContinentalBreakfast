<<<<<<< HEAD
document.querySelectorAll('.clickable-image').forEach(image => {
    image.addEventListener('click', () => {
      const funFact = image.nextElementSibling;
      funFact.style.display = funFact.style.display === 'none' ? 'block' : 'none';
    });
  });
=======
let form = document.getElementById("quizAS");

function validateForm(event) {
    event.preventDefault();
    console.log("HERE");
    let q11 = form.q11.checked;
    let q12 = form.q12.checked;
    let q13 = form.q13.checked;
    let q14 = form.q14.checked;

    let q21 = form.q21.checked;
    let q22 = form.q22.checked;
    let q23 = form.q23.checked;
    let q24 = form.q24.checked;

    let q31 = form.q31.checked;
    let q32 = form.q32.checked;
    let q33 = form.q33.checked;
    let q34 = form.q34.checked;

    let q41 = form.q41.checked;
    let q42 = form.q42.checked;
    let q43 = form.q43.checked;
    let q44 = form.q44.checked;

    let q51 = form.q51.checked;
    let q52 = form.q52.checked;
    let q53 = form.q53.checked;
    let q54 = form.q54.checked;

    let q61 = form.q61.checked;
    let q62 = form.q62.checked;
    let q63 = form.q63.checked;
    let q64 = form.q64.checked;

    let q1Notif = document.getElementById("q1Score");
    let q2Notif = document.getElementById("q2Score");
    let q3Notif = document.getElementById("q3Score");
    let q4Notif = document.getElementById("q4Score");
    let q5Notif = document.getElementById("q5Score");
    let q6Notif = document.getElementById("q6Score");

    let correct = 0;
    let total = 0.0;

    if (!q11 && !q12 && !q13 && !q14) {
        alert("Please select an option for Question 1.");
        return;
    }
    if (!q21 && !q22 && !q23 && !q24) {
        alert("Please select an option for Question 2.");
        return;
    }
    if (!q31 && !q32 && !q33 && !q34) {
        alert("Please select an option for Question 3.");
        return;
    } 
    if (!q41 && !q42 && !q43 && !q44) {
        alert("Please select an option for Question 4.");
        return;
    } 
    if (!q51 && !q52 && !q53 && !q54) {
        alert("Please select an option for Question 5.");
        return;
    } 
    if (!q61 && !q62 && !q63 && !q64) {
        alert("Please select an option for Question 6.");
        return;
    } 


    if (q12) {
        correct++;
        q1Notif.textContent = "Correct!";
        q1Notif.className = "correct";
    } else {
        q1Notif.textContent = "Incorrect!";
        q1Notif.className = "incorrect";
    }
     
    if (q23) {
        correct++;
        q2Notif.textContent = "Correct!";
        q2Notif.className = "correct";
    } else {
        q2Notif.textContent = "Incorrect!";
        q2Notif.className = "incorrect";
    }
    
    if (q31) {
        correct++;
        q3Notif.textContent = "Correct!";
        q3Notif.className = "correct";
    } else {
        q3Notif.textContent = "Incorrect!";
        q3Notif.className = "incorrect";
    }
    
    if (q44) {
        correct++;
        q4Notif.textContent = "Correct!";
        q4Notif.className = "correct";
    } else {
        q4Notif.textContent = "Incorrect!";
        q4Notif.className = "incorrect";
    }
    
    if (q53) {
        correct++;
        q5Notif.textContent = "Correct!";
        q5Notif.className = "correct";
    } else {
        q5Notif.textContent = "Incorrect!";
        q5Notif.className = "incorrect";
    }
    
    if (q62) {
        correct++;
        q6Notif.textContent = "Correct!";
        q6Notif.className = "correct";
    } else {
        q6Notif.textContent = "Incorrect!";
        q6Notif.className = "incorrect";
    }

    total = ((correct/6) * 100).toFixed(2);

    let scoreTag = document.getElementById("asScore");
    scoreTag.textContent = `You scored a ${total}%`;

    let radios = document.querySelectorAll("input[type='radio']");
    for (let radio of radios) {
        radio.checked = false;
    }
}

if (form) {
    form.addEventListener("submit", validateForm);
} else {
    console.error("Form not found!");
}
>>>>>>> f60566a (Created quiz template for every continent)
