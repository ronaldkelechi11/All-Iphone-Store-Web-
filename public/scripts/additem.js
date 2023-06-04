

function run() {
    var uploadButton = document.getElementById("uploadButton")
    var uploadedImage = ""
    var chosenImage = document.getElementById("chosenImage")

    uploadButton.addEventListener("change", () => {
        let reader = new FileReader();
        reader.readAsDataURL(uploadButton.files[0])
        reader.addEventListener("load", () => {
            uploadedImage = reader.result
            chosenImage.setAttribute("src", reader.result)
        })
    })
}

run()