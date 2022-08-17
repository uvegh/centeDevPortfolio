let monthlyBudgettxt = $("#monthlyBudgettxt");
let btnmonthbudgetValidate = $("#btnmonthbudgetValidate");
let date = $("#datetxt");
let btnExpensesValidate = $("#btnExpensesValidate");
let expensesbox = $("#expensesbox");
let validatemonthlybudget = $("#validatemonthlybudget");
let validateItem = $("#validateItem");
let validateAmount = $("#validateAmount");
let validateDate = $("#validateDate");
let item =$("#Itemtxt");

    


//global var

var Amount = 0;
var diff = 0;

var budgetArray=[];


//budget button
btnmonthbudgetValidate.click( function () {
    validatemonthly();

})


btnExpensesValidate. click( function () {
   
convertbudgetInput(); 
})




function validatemonthly() {
    if (monthlybudget.val() == "") {
        validatemonthlybudget.html ("Emptyfield")
    }
    else {
        validatemonthlybudget.html("");
        budgetInput();
    }
}




//convertbudget
function budgetInput() {
    expensesbox.html (`$${monthlybudget}`);
    console.log(budgetInput);
    convertbudgetInput();

}
function convertbudgetInput() {
    monthlybudget = parseFloat(monthlybudget.val());
    console.log(5 + monthlybudget);
}




//expenses button

//validate expenses
function validateExpenses() {
    if (item.val() != "" && Amount.val() != "" && date.val() != "") {


        ConvertExpenses();

    }
    else {
        if (item.val() == "") {
            validateItem.html ("Empty field")
        }
        else {
            item.html( "");


        }

        if (Amount == "") {
            validateAmount.html ("Empty field")
        }
        else {
            validateAmount.html( "");


        }

        if (date == "") {
            validateDate.html ("Empty field")
        }
        else {
            validateDate.html( "");


        }

    }

}


//submit
function submit() {
let budgetData={
"item": item.val(),
"Amount" :parseFloat (Amount.val()),
"date" :date.val()
}

    budgetArray.push(budgetData)
   
}


function calculate() {

    if (Amount.val() > monthlybudget.val()) {
        expensesbox.html = "insufficient funds";
        console.log("insufficient funds");
    }

    else {
        diff = monthlybudget.val() - Amount.val();
        expensesbox.html = diff;
    }

    piechart();//call piechart function
}
//piechart function
function piechart() {


    new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
            labels: itemArray,
            datasets: [{
                label: "",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: cityArray
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Item &Expenses for the month'
            }
        }
    });
    myFunction();
}


function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = item;
    cell2.innerHTML = Amount;
    cell3.innerHTML = date;


}



