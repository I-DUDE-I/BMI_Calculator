
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