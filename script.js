
function femaleClick() {
    document.getElementById("genderImage").style.transform ="rotate(-45deg)"
    document.getElementById("neutralIcon").style.color="grey"
    document.getElementById("maleIcon").style.color="grey"
    document.getElementById("femaleIcon").style.color="white"
}
function maleClick(params) {
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

function check() {
    inputHeight = document.getElementById("heightInput").value
    inputWeight = document.getElementById("weightInput").value
    if (document.getElementById("heightSelect").value == 2) {
        inputHeight = inputHeight * 30.48;
    }
    if (document.getElementById("weightSelect").value == 2) {
        inputWeight = inputWeight * 0.453592;
    }
    let bmi
    bmi = (inputWeight*100*100)/(inputHeight**2)
    if (bmi<0) {
        document.getElementById("bmiArrow").style.transform = `rotate(${-90}deg)`
        document.getElementById("bmiCircle").style.transform = `rotate(${0}deg)`
        bmi = (Math.round(bmi * 100) / 100).toFixed(2)
        dis1.innerHTML = `<h2 class="dis1">Your BMI is</h2>`
        dis2.innerHTML = `<h2 class="dis2" style="color:red;">${bmi}</h2>`
        dis3.innerHTML = `<h2 class="dis3" style="color:red;">Time to grab a bite!</h2>`
        dis4.innerHTML = `<h3 class="text-center dis4">Focus on nutrient-dense foods to gain weight gradually. Regular exercise can help build muscle mass.</h3>`
        document.getElementById("dis2").style.textColor = "yellow"
        document.getElementById("dis2").style.backgroundColor = "antiquewhite"
    }
    else if (bmi >= 0 && bmi < 18.5) {
        let angle;
        angle = (45/18.5)*bmi;
        document.getElementById("bmiArrow").style.transform = `rotate(${angle-90}deg)`
        document.getElementById("bmiCircle").style.backgroundColor = `yellow`
        document.getElementById("bmiCircle").style.transform = `rotate(${angle}deg)`
        bmi = (Math.round(bmi * 100) / 100).toFixed(2)
        dis1.innerHTML = `<h2 class="dis1">Your BMI is</h2>`
        dis2.innerHTML = `<h2 class="dis2" style="color:red;">${bmi}</h2>`
        dis3.innerHTML = `<h2 class="dis3" style="color:red;">Time to grab a bite!</h2>`
        dis4.innerHTML = `<h3 class="text-center dis4">Focus on nutrient-dense foods to gain weight gradually. Regular exercise can help build muscle mass.</h3>`
        document.getElementById("dis2").style.backgroundColor = "antiquewhite"

    }
    else if (bmi >= 18.5 && bmi < 25) {
        let angle;
        angle = 45 + ((45/(25-18.5))*(bmi-18.5));
        document.getElementById("bmiArrow").style.transform = `rotate(${angle-90}deg)`
        document.getElementById("bmiCircle").style.backgroundColor = `rgb(0, 200, 0)`
        document.getElementById("bmiCircle").style.transform = `rotate(${angle}deg)`
        bmi = (Math.round(bmi * 100) / 100).toFixed(2)
        dis1.innerHTML = `<h2 class="dis1">Your BMI is</h2>`
        dis2.innerHTML = `<h2 class="dis2" style="color:green;">${bmi}</h2>`
        dis3.innerHTML = `<h2 class="dis3" style="color:green;">Great shape</h2>`
        dis4.innerHTML = `<h3 class="text-center dis4">Maintain a balanced diet and regular physical activity to sustain overall health.</h3>`
        document.getElementById("dis2").style.backgroundColor = "antiquewhite"
    }
    else if (bmi >= 25 && bmi < 30) {
        let angle;
        angle = 90 + ((45/(30-25))*(bmi-25));
        document.getElementById("bmiArrow").style.transform = `rotate(${angle-90}deg)`
        document.getElementById("bmiCircle").style.backgroundColor = `orange`
        document.getElementById("bmiCircle").style.transform = `rotate(${angle}deg)`
        bmi = (Math.round(bmi * 100) / 100).toFixed(2)
        dis1.innerHTML = `<h2 class="dis1">Your BMI is</h2>`
        dis2.innerHTML = `<h2 class="dis2" style="color:orange;">${bmi}</h2>`
        dis3.innerHTML = `<h2 class="dis3" style="color:orange;">Time to run!</h2>`
        dis4.innerHTML = `<h3 class="text-center dis4">Adopt healthy eating habits, increase physical activity, and consider consulting a healthcare professional for guidance.</h3>`
        document.getElementById("dis2").style.backgroundColor = "antiquewhite"

    }
    else if (bmi >=30 && bmi <40) {
        let angle;
        angle = 135 + ((45/(40-30))*(bmi-30));
        document.getElementById("bmiArrow").style.transform = `rotate(${angle-90}deg)`
        document.getElementById("bmiCircle").style.backgroundColor = `red`
        document.getElementById("bmiCircle").style.transform = `rotate(${angle}deg)`
        bmi = (Math.round(bmi * 100) / 100).toFixed(2)
        dis1.innerHTML = `<h2 class="dis1">Your BMI is</h2>`
        dis2.innerHTML = `<h2 class="dis2" style="color:red;">${bmi}</h2>`
        dis3.innerHTML = `<h2 class="dis3" style="color:red;">Time to run!!!</h2>`
        dis4.innerHTML = `<h3 class="text-center dis4">Focus on gradual weight loss through a combination of diet changes, increased exercise, and professional support.</h3>`
        document.getElementById("dis2").style.backgroundColor = "antiquewhite"
    }
    else if (bmi >= 40){
        document.getElementById("bmiArrow").style.transform = `rotate(${180-90}deg)`
        document.getElementById("bmiCircle").style.backgroundColor = `red`
        document.getElementById("bmiCircle").style.transform = `rotate(${180}deg)`
        bmi = (Math.round(bmi * 100) / 100).toFixed(2)
        dis1.innerHTML = `<h2 class="dis1">Your BMI is</h2>`
        dis2.innerHTML = `<h2 class="dis2" style="color:red;">${bmi}</h2>`
        dis3.innerHTML = `<h2 class="dis3" style="color:red;">Time to run!!!</h2>`
        dis4.innerHTML = `<h3 class="text-center dis4">Focus on gradual weight loss through a combination of diet changes, increased exercise, and professional support.</h3>`
        document.getElementById("dis2").style.backgroundColor = "antiquewhite"
    }
}