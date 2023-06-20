function run() {

    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();
        var message = document.getElementById("message");
        var myHeaders = new Headers();
        var uri = "/login"
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", email);
        urlencoded.append("password", password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(uri, requestOptions)
            .then(response => {
                if (response.status == 200) {
                    window.location = "/home"
                    localStorage.setItem("isLoggedIn", "true")
                }
                else if (response.status == 400) {
                    message.style.visibility = 'visible';
                    setTimeout(() => {
                        message.style.visibility = "hidden"
                    }, 3000);
                }
            })
            .catch(error => console.log('error', error));
    })
}

run()