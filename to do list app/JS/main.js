
let dateandTask=$("#dateandTask");
let toDoList=[];

const date = new Date();
$("#dateandTask").html(date.toDateString());
let text=$("#text"); 
let description=$("#descriptiontxt"); 
let validatetextarea =$("#validatetextarea");
let validatetext =$("#validatetext")
let  saveBtn  =$("#saveBtn");

let save =$(".validatetext");
let Remove =$("#Remove");
let grids=$("#grids");
let plusbtn =$("#plusbtn");
let inputArea =$("#inputArea");
let dataIndex;
let gridTasks = $("#gridTasks")

pop=$("popup-form");


inputArea.hide();
gridTasks.on("click", ".EditBtn",function () {
    
    dataIndex = $(this).attr("index");
    text.val(toDoList[dataIndex]["text"])
    description.val(toDoList[dataIndex]["description"])
   inputArea.show();
    
})


function updateData() {
    


    let toDoData={
        "text":text.val(),  
        "description":description.val()
    }
    toDoList[dataIndex]=toDoData;
}


//plus buttons
plusbtn.click(function(){
    inputArea.show();
    
    
    })

    //save
saveBtn.click(function(){
    grids.show();
validate();
pop.hide();
})












//remove
Remove.click(function(){

    text.val("");
    description.val("");
  
    })

function validate(){
if (text.val()==""){

    $("#validatetext").html("Empty Field");
    
} else{
addData();
    $("#validatetext").html("");
}


if (description.val()==""){

    $("#validatetextarea").html("Empty Field");
    
} else{
    addData();

    $("#validatetextarea").html("");
}

}

function addData() {
    let toDoData={
        "text":text.val(),  
        "description":description.val()
    }
    
toDoList.push(toDoData);
console.log(toDoList);
$("#tasksNo").html(toDoList.length)
loadData();
clearTxtFields();
}


function clearTxtFields(){
    text.val("");
    description.val("");
  

}

function loadData() {
    let listGrid =""
    for (let i = 0; i < toDoList.length; i++) {
        listGrid +=` 
    
        <div class="grids" id="grids" >
       <br>
       <p class=bold> ${ toDoList[i].text} <p/>  

         <br>  
        ${ toDoList[i].description}
        
        <br>  <br><br>  <br><br>  <br>
         <img src="img/White_X_in_red_background.svg"  class="DeleteBtn"
         index="${i}" alt="" width="20" height="20"  > 
            <img src="img/edit-button-svgrepo-com.svg" class="EditBtn" index="${i}" alt="" width="20" height="20">  
         
</div>
        `
    }
    console.log(listGrid)
    $("#gridTasks").html(listGrid);
}

// slider js
// $("#theTarget").skippr({

//             transition: 'slide',
//             speed: 1000,
//             easing: 'easeOutQuart',
//             navType: 'block',
//             childrenElementType: 'div',
//             arrows: true,
//             autoPlay: false,
//             autoPlayDuration: 5000,
//             keyboardOnAlways: true,
//             hidePrevious: false

//         });



