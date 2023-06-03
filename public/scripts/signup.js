function run() {
    document.getElementById("goToLogin").addEventListener("click", () => {
        window.location = "/login"
    })

    document.getElementById("navbar").addEventListener("click", () => {
        window.history.back()
    })
    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault()
        console.log("Form Submitting..");
        var name = document.getElementById("name").value
        var email = document.getElementById("email").value
        var telephone = document.getElementById("telephone").value
        var address = document.getElementById("telephone").value
        var dateofbirth = document.getElementById("dateofbirth").value
        var password = document.getElementById("password").value

        var message = document.getElementById("message")
        var uri = "/signup"
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("name", name);
        urlencoded.append("email", email);
        urlencoded.append("telephone", telephone);
        urlencoded.append("address", address);
        urlencoded.append("dateofbirth", dateofbirth);
        urlencoded.append("password", password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(uri, requestOptions)
            .then(response => {
                console.log(response);
                if (response.status == 200) {
                    localStorage.setItem("isLoggedIn", "true")
                    window.location = "/home"
                }
                else if (response.status == 400) {
                    message.style.visibility = "visible"
                    setTimeout(() => {
                        message.style.visibility = "hidden"
                    }, 2000);
                }
            })
            .catch(error => console.log('error', error));
    })
}

run()