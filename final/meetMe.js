document.getElementById('meetMeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('emailInput').value;
    const name = document.getElementById('nameInput').value;
    const socialMedia = document.getElementById('socialLinks').value;
    const telNum = document.getElementById('phoneNumInput').value;
    const contactPref = document.getElementById('contactPrefInput').value;
    const major = document.getElementById('majorInput').value;
    const schoolYear = document.getElementById('yearInput').value;
    const comment = document.getElementById('commentInput').value;

    const data =  {
        emailInput : email,
        nameInput : name,
        socialLinks : socialMedia,
        phoneNumInput : telNum,
        contactPrefInput : contactPref,
        majorInput : major,
        yearInput : schoolYear,
        commentInput : comment
    }

    if (!email) {
        alert('Please input valid email');
        return;
    }

    if (!name) {
        alert('Please input valid email');
        return;
    }

    if (!socialMedia){
        alert('Please input valid email');
        return;
    }

    if (!telNum) {
        alert('Please input valid email');
        return;
    }

    if (!major) {
        alert('Please input valid email');
        return;
    }

    if (comment.length < 10){
        alert('Please input more than 10 words')
        return
    } else if (comment.length > 50){
        alert('Word limit exceeded')
        return
    }
    

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
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