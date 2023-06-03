function run() {
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