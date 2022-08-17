let airLines=[];

let tbody=$('#tbody'); //Using jquery to  set data from array
let itemIndex;
let userName=$('#userName');
let flightno=$('#flightno');
let origin=$('#origin');
let dest=$('#dest');
let dura=$('#dura');
let pass=$('#pass');
let cost=$('#cost');
let btnAdd=$('#btnAdd');
let editBtn=$('.editBtn');
let btnUpdate=$('#btnUpdate');
loadData();
// btnValidate.addEventListener('click', function(){
// JAVASCRIPT ONCLICK
// })

//Event Listeners
btnAdd.click(function(){
    //Jquery click 
    addData();
})

btnUpdate.click(function(){
    //Jquery click 
    updateData();
})

//Edit Event
tbody.on("click", ".editBtn",function () {
    //Get index value from html tag attribute and assign it to variable
     itemIndex= $(this).attr("index");

    // Assign values to input tag using jquery but using the index gotten from the html tag attribute
    userName.val(airLines[itemIndex]["name"])
    flightno.val(airLines[itemIndex]["flight-No"])
    origin.val(airLines[itemIndex]["origin"])
    dest.val(airLines[itemIndex]["destination"])
    dura.val(airLines[itemIndex]["duration"])
    pass.val(airLines[itemIndex]["passengers"])
    cost.val(airLines[itemIndex]["cost"])
})



function addData() {

   let flightData= {
        "name": userName.val(),
        "flight-No": flightno.val(),
        "origin": origin.val(),
        "destination": dest.val(),
        "duration": parseInt(dura.val()),
        "passengers": parseInt(pass.val()),
        "cost": parseFloat(cost.val()),
    }
    airLines.push(flightData);
    loadData();
  //Clear Textfields 
   clearTxtFields();
}

function updateData() {

    //Replacing array index with the value from the textbox
    airLines[itemIndex]["name"] = userName.val()
    airLines[itemIndex]["flight-No"]=flightno.val()
    airLines[itemIndex]["origin"]= origin.val()
    airLines[itemIndex]["destination"]=dest.val()
    airLines[itemIndex]["duration"]=dura.val()
    airLines[itemIndex]["passengers"]= pass.val()
    airLines[itemIndex]["cost"]=cost.val()

    loadData();
  //Clear Textfields 
   clearTxtFields();
}

//Clear Textfields

function clearTxtFields(){
    userName.val("")
    flightno.val("")
    origin.val("")
    dest.val("")
    dura.val("")
    pass.val("")
    cost.val("")
}

function loadData() {
    let tRows="";
    for(let i=0; i < airLines.length; i++){
        tRows+=`
        <tr>
            <td>${airLines[i].name}</td>
            <td>${airLines[i]["flight-No"]}</td>
            <td>${airLines[i].origin}</td>
            <td>${airLines[i].destination}</td>
            <td>${airLines[i].duration}</td>
            <td>${airLines[i].passengers}</td>
            <td>${airLines[i].cost}</td>
            
            <td><a href="#" index="${i}" class="editBtn" >Edit</a> |
            <a href="#" index="${i}" class="deleteBtn"  >Delete</a></td>
        </tr>`
        //Assign index to user-defined html tag attribute
    }
    tbody.html(tRows);
}