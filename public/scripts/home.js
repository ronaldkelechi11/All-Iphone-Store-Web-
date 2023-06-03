function run() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    var accountButton = document.getElementById("account-button");
    var loginButton = document.getElementById("login-button");
    var signupButton = document.getElementById("signup-button");
    if (isLoggedIn == "true") {
        loginButton.style.display = "none";
        signupButton.style.display = "none";
    }
    if (isLoggedIn == undefined) {
        accountButton.style.display = "none";
    }


    console.log("Item clicked");
    var item = document.querySelectorAll(".item")
    for (let i = 0; i < item.length; i++) {
        console.log(item.length);
        item[i].addEventListener("click", () => {
            var itemName = item[i].querySelector(".title").innerHTML
            console.log(itemName);
            window.location = "/productview/" + itemName
        })
    }
}

run()





