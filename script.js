
function femaleClick() {
    // genderImage.innerHTML = `<img src="./images/gender indicator use.png" style="transform: rotate(-45deg);" alt="">`
    document.getElementById("genderImage").style.transform ="rotate(-45deg)"
    document.getElementById("neutralIcon").style.color="grey"
    document.getElementById("maleIcon").style.color="grey"
    document.getElementById("femaleIcon").style.color="white"
}
function maleClick(params) {
    // genderImage.innerHTML = `<img src="./images/gender indicator use.png" style="transform: rotate(45deg);" alt="">`
    document.getElementById("genderImage").style.transform ="rotate(45deg)"
    document.getElementById("neutralIcon").style.color="grey"
    document.getElementById("maleIcon").style.color="white"
    document.getElementById("femaleIcon").style.color="grey"
}

function weightInput() {
    input = document.getElementById("weightInput").value
    input = Math.round(input)
    weightMiddle.innerHTML = `<label class="weightMiddle">${input}</label>`
    weightStart.innerHTML = `<label class="weightStart">${input - 1}</label>`
    weightEnd.innerHTML = `<label class="weightEnd">${(input*1) + 1}</label>`
}

function heightInput() {
    input = document.getElementById("heightInput").value
    if (document.getElementById("heightSelect").value == 1) {
        let height
        height = -5-((65/211.28)*input)
        if (height<-70){
            height= -70
        }
        else if (height > -7.5) {
            height = -7.5
        }
        document.getElementById("heightScale").style.top = `${height}%`
    }
    else if (document.getElementById("heightSelect").value == 2) {
        let height
        height = -5-((65/6.93175853)*input)
        if (height<-70){
            height= -70
        }
        else if (height > -7.5) {
            height = -7.5
        }
        document.getElementById("heightScale").style.top = `${height}%`
    }
}