let firstnametxt = document.getElementById("firstnametxt"),
    lastnametxt = document.getElementById("lastnametxt"),
    agetxt = document.getElementById("agetxt"),
    phonetxt = document.getElementById("phonetxt"),
    schooltxt = document.getElementById("schooltxt"),
    genderTxt = document.getElementById("genderTxt"),
    btnValidate = document.getElementById("btnValidate"),
    validatebox = document.getElementById("validatebox"),
    countrytxt = document.getElementById("countrytxt"),
    mathstxt = document.getElementById("mathstxt"),
    englishtxt = document.getElementById("englishtxt"),
    scoretxt1 = document.getElementById("scoretxt1"),
    scoretxt2 = document.getElementById("scoretxt2"),
    scoretxt3 = document.getElementById("scoretxt3"),
    scoretxt4 = document.getElementById("scoretxt4"),
    scoretxt5 = document.getElementById("scoretxt5"),
    scoretxt6 = document.getElementById("scoretxt6"),
    scoremathstxt = document.getElementById("scoremaths"),
    scoreEnglishtxt = document.getElementById("scoreEnglish"),
    
    validateboxFirstname = document.getElementById("validateboxFirstname"),
    validateboxSecondname = document.getElementById("validateboxSecondname"),
    validateboxage = document.getElementById("validateboxage"),
    validateboxphone = document.getElementById("validateboxphone"),
    validateboxschool = document.getElementById("validateboxschool"),
    validateboxGender = document.getElementById("validateboxGender"),
    validateboxCountry = document.getElementById("validateboxCountry"),
    validateboxmaths = document.getElementById("validateboxmaths"),
    validateboxEnglish = document.getElementById("validateboxEnglish"),
    validatebox1 = document.getElementById("validatebox1"),
    validatebox2 = document.getElementById("validatebox2"),
    validatebox3 = document.getElementById("validatebox3"),
    validatebox4 = document.getElementById("validatebox4"),
    validatebox5 = document.getElementById("validatebox5"),
    validatebox6 = document.getElementById("validatebox6"),
 list = document.getElementById("list");
tp = document.getElementById("tp");
//declare global variables
var firstname,
    lastname,
    age,
    phoneNumber,
    school,
    country,
    gender,
    score1,
    score2,
    score3,
    score4,
    score5,
    score6,
    scoremaths,
    scoreEnglish;
var average;
var points = 0.0;
var agepoints = 0;
var countrypoints = 0;
var averagepoints = 0;
var mainaveragepoints= 0;
var average2;




//populating select list


//event listener
btnValidate.addEventListener('click', function () {
    assign();

})


function assign() {


    //assign value text to gloabl variables
    firstname = firstnametxt.value;
    lastname = lastnametxt.value;
    age = agetxt.value;
    phoneNumber = phonetxt.value;
    school = schooltxt.value;
    gender = genderTxt.value;
    country = countrytxt.value;
    math = mathstxt.value;
    english = englishtxt;

    score1 = scoretxt1.value;
    score2 = scoretxt2.value;
    score3 = scoretxt3.value;
    score4 = scoretxt4.value;
    score5 = scoretxt5.value;
    score6 = scoretxt6.value;
    scoremaths = scoremathstxt.value
    scoreEnglish = scoreEnglishtxt.value;

    console.log(`${firstname}
  ${lastname}
  ${age}
  ${phoneNumber}
  ${school}
  ${gender}
  ${country}
  ${score1}
  ${score2}
  ${score3}
  ${score4}
  ${score5}
  ${score6}
  ${scoremaths}
  ${scoreEnglish}
  `);

    validateData();
}


function validateData()
 {



    if(
        firstname != "" &&
    lastname != "" &&
    age != "" &&
    phoneNumber != "" &&
    school != "" &&
    gender != "" &&
    country != "" &&
    (scoremaths != "" || scoremathstxt  != "") &&
    (scoreEnglish != ""|| scoreEnglishtxt != "") &&
    (score1 != ""  || validatebox1 != "") &&
    (score2 != "" || validatebox2 != "") &&
    (score3 != "" || validatebox3 != "") &&
    (score4 != ""|| validatebox4 != "") &&
    (score5 != ""|| validatebox5 != "") &&
    (score6 != "" || validatebox6 != ""))
    {
    
    convertData();
    
    }
    else{

    if (firstname == ""){
        validateboxFirstname.innerHTML = "Enter your first name!!"
    
    } 
    else{ console.log("continue");
    validateboxFirstname.innerHTML = ""
}

    if (lastname == "" ){

        validateboxSecondname.innerHTML = "Enter your last name!!"

    }else{ console.log("continue")
    validateboxSecondname.innerHTML = "";
    }
    
    if (age == ""  ){

        validateboxage.innerHTML = "Enter your age!!"

    }
    else{ console.log("continue")
    validateboxage.innerHTML = ""
    ;
    }
    //
    if (phoneNumber == "" ){

        validateboxphone.innerHTML = "Enter your phone number!!"

    }else{ console.log("continue");
    validateboxphone.innerHTML = ""
    }
    
    if (school == "" ){

        validateboxschool.innerHTML = "Enter the name of your School!!"

    }else{ console.log("continue");
    validateboxschool.innerHTML = ""
    }
    //
    if (gender == "" ){

        validateboxGender.innerHTML = "Choose your Gender!!"

    }else{ console.log("continue");
    validateboxGender.innerHTML = ""
    }
    //
    if (country == "" ){

        validateboxCountry.innerHTML = "Choose your Country!!"

    }
    else{
         console.log("continue");
         validateboxCountry.innerHTML = ""
    }
     
     if (scoremaths =="" || scoremathstxt  == ""){

        validateboxmaths.innerHTML = "Empty field!!"

    }else{ console.log("continue");
    validateboxmaths.innerHTML = ""
    }
     
     if (scoreEnglish == ""|| scoreEnglishtxt=="" ){

        validateboxEnglish.innerHTML ="Empty field!!"

    }else{ console.log("continue");
    validateboxEnglish.innerHTML =""
    }
//
     
    if (score1 == "" || validatebox1 ==""){

        validatebox1.innerHTML = "Empty field!!"

    }else{ console.log("continue");
    validatebox1.innerHTML = ""
    }

     
    if (score2 == "" || validatebox2=="" ){

        validatebox2.innerHTML = "Empty field!!"

    }else{ console.log("continue");
    validatebox2.innerHTML = ""
    }

     
    if (score3 == "" || validatebox3 ==""){

        validatebox3.innerHTML = "Empty field!!"

    }else{ console.log("continue");
    validatebox3.innerHTML = ""
    }

     
    if (score4 == ""|| validatebox4==""){

        validatebox4.innerHTML = "Empty field!!"

    }
    else{ console.log("continue");
    validatebox4.innerHTML = ""
    }

     
    if (score5 == ""|| validatebox5 ==""){

        validatebox5.innerHTML = "Empty field!!"

    }else{ console.log("continue");
    validatebox5.innerHTML = ""
    }


     
    if (score6 == "" || validatebox6 ==""){

        validatebox6.innerHTML = "Empty field!!"
}
    else{ console.log("continue");
    validatebox6.innerHTML = ""
}   

    }


function convertData() {
    age = parseInt(age);
    score1 = parseInt(score1);
    score2 = parseInt(score2);
    score3 = parseInt(score3);
    score4 = parseInt(score4);
    score5 = parseInt(score5);
    score6 = parseInt(score6);
    average = parseFloat(average);
    scoremaths = parseInt(scoremaths);
    scoreEnglish = parseInt(scoreEnglish);
    console.log("score is" + (score1 + score2 + score3 + score4 + score5 + score6 + scoremaths + scoremaths));
    validateEntry();

}


function validateEntry() {


    if (age >= 18 && age <= 24) {
        points = points + 100;
        console.log(points)
    }
    else if (age >= 25 && age <= 30) {

        points = points + 80;
        console.log(points);

    }
    else if (age >= 31 && age <= 30) {

        points = points + 50;
        console.log(points);

    }
    else if (age >= 36 && age <= 40) {

        points = points + 30;
        console.log(points);

    }
    else if (age >= 40 && age <= 150) {

        points = points + 10;
        console.log(points);
        
    }
    
    else {
        console.log("invalid age")
    }
    agepoints = agepoints + points;
    console.log(agepoints);
    switch (country.toString()) {
        case "1": points = points + 50;
            console.log("country points =" + points);
            break;
        case "2": points = points + 40;
            console.log("country points =" + points);
            break;
        case "3": points = points + 30;
            console.log("country points =" + points);
            break;
        case "4": points = points + 20
            console.log("country points =" + points);
            break;

        case "5": points = points + 10;
            console.log("country points =" + points);
            break;


        default: validateboxCountry.innerHTML = " choose a country!"
            alert("choose a country");


    }
    countrypoints = countrypoints + points;
    console.log(countrypoints);
    //call averagecalc function
    averagecalc();
}

function averagecalc(totalscore) {
    totalscore = scoremaths + scoreEnglish + score1 + score2 + score3 + score4 + score5 + score6;
    console.log(totalscore)
    average = totalscore / 8;
    console.log("average is " + average);
    

    averageValidation();
}


function averageValidation() {

    if (average >= 90 && average <= 100) {
        points = points + 150;
        console.log("points =" + points);
      average2 =  mainaveragepoints+150;

    }

    else if (average >= 85 && average <= 89) {
        points = points + 140;
        console.log("points =" + points);
        average2 =  mainaveragepoints+ 140;
    }
    else if (average >= 75 && average <= 84) {
        points = points + 120;
        console.log("points =" + points);
    }
    else if (average >= 65 && average <= 74) {
        points = points + 100;
        console.log("points =" + points);
        average2 =  mainaveragepoints+100;
    }
    else if (average >= 60 && average <= 64) {
        points = points + 80;
        console.log("points =" + points);
        average2 =  mainaveragepoints+80;
    }

    else if (average >= 50 && average <= 59) {
        points = points + 50;
        console.log("points =" + points);
        average2 =  mainaveragepoints+50;
    }

    else if (average >= 40 && average <= 49) {
        points = points + 20;
        console.log("points =" + points);
        average2 =  mainaveragepoints+20;
    }
    else {
        console.log("Due to your low average you get no points.")
    }
    averagepoints = averagepoints + points;
    total();
    
}

function total() {


    if (points >= 180) {
        console.log(points);
     console.log(`Points allocated to your age =${agepoints}.
        Points allocated to your average score is ${average2}.
        Points allocated to your selected country =${countrypoints}.
         Total Points =${points}.

CONGRATS YOU ARE ELIGIBLE FOR THIS SCHOLARSHIP.`);
        tp.innerHTML = (`
        Total average score --->${average2}.

        Points allocated to your age --->${agepoints} points.

        Points allocated to your average score ---> ${average2} points.

        Points allocated to your selected country --->${countrypoints} points.

         Total Points --->${points} points.

   CONGRATS YOU ARE ELIGIBLE FOR THIS SCHOLARSHIP!!!`);
    }

    else {
     console.log  (`
        Points allocated to your age =${agepoints}.

                               Points allocated to your average score is ${average2}. 

                               Points allocated to your selected country =${countrypoints}.

                                Total Points =${points}.
                                
      We regret to inform you,that you didn't meet the criteria  for this scholarhip.`);

        tp.innerHTML = (`
        Points allocated to your age =${agepoints}.

                               Points allocated to your average score ---> ${average2}.

                               Points allocated to your selected country --->${countrypoints}.
                               
                                Total Points --->${points}.
                                
      We regret to inform you,that you didn't meet the criteria  for this scholarship.`);
    }
    piechart();
}


function piechart() {

    var xValues = ["Age", "Country", "Grade"];
    var yValues = [agepoints, countrypoints, averagepoints];
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797"

    ];

    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "This is how your total " +points+ " points was divided based On Your Criteria "
            }
        }
    });
}
 

 }