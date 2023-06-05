

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


    var uploadButton1 = document.getElementById("uploadButton1")
    var uploadedImage1 = ""
    var chosenImage1 = document.getElementById("chosenImage1")

    uploadButton1.addEventListener("change", () => {
        let reader1 = new FileReader();
        reader1.readAsDataURL(uploadButton1.files[0])
        reader1.addEventListener("load", () => {
            uploadedImage1 = reader1.result
            chosenImage1.setAttribute("src", reader1.result)
        })
    })


    var uploadButton2 = document.getElementById("uploadButton2")
    var uploadedImage2 = ""
    var chosenImage2 = document.getElementById("chosenImage2")

    uploadButton2.addEventListener("change", () => {
        let reader2 = new FileReader();
        reader2.readAsDataURL(uploadButton2.files[0])
        reader2.addEventListener("load", () => {
            uploadedImage2 = reader2.result
            chosenImage2.setAttribute("src", reader2.result)
        })
    })
}

run()