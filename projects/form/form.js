document.getElementById('jaredForms').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('emailInput').value;
    const username = document.getElementById('userNameInput').value;
    const password = document.getElementById('passwordInput').value;
    const comment = document.getElementById('commentInput').value;

    const data =  {
        emailInput : email,
        userName : username,
        passwordInput : password,
        commentInput : comment
    }

    if (!email) {
        alert('Please input valid email');
        return;
    }

    if (!username){
        alert('Please insert a username')
        return
    }

    if (!password){
        alert('Please input Password')
        return
    }

    if (comment.length < 10){
        alert('Please input more than 10 words')
        return
    } 
    else if (comment.length > 50){
        alert('Word limit exceeded')
        return
    }



    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("jaredForms").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);
});