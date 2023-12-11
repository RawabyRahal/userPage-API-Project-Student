const apiManager = new APIManager()
const render = new Renderer()

let tempData;
let savedusers = JSON.parse(localStorage.getItem("userdata")) || []
loadOption()

$("#dispalybtn").on("click", function () {
    apiManager.getAllData().then(data => {
        tempData = data
        render.renderData(data)
    })
})

$("#savebtn").on("click", function () {
    savedusers.push(tempData)
    localStorage.setItem("userdata", JSON.stringify(savedusers))
    $("#savedusers").append($("<option value=" + tempData.user.name.first + "> " + tempData.user.name.first + "</option>"))
    alert("Saved Successfully :)")
})


$("#loadbtn").on("click", function () {
    const selected = $("#savedusers option:selected").val();

    for (let i in savedusers) {
        if (savedusers[i].user != null) {
            if (savedusers[i].user.name.first == selected) {
                console.log(savedusers[i])
                render.renderData(savedusers[i])
            }
        }
    }
})

function loadOption() {
    for (let sv of savedusers) {
        $("#savedusers").append($("<option value=" + sv.user.name.first + "> " + sv.user.name.first + "</option>"))
    }
}