let User = [];
let orders = [];
let products = [];
let sales = [];
let productId;
let usersId;
let usernametxt = $("#username");
let Emailtxt = $("#Email");
let firstnametxt = $("#firstname");
let lastnametxt = $("#lastname");
let validateusername = $("#validateusername");
let validateEmail = $("#validateEmail");
let validatefirstname = $("#validatefirstname");
let validatelastname = $("#validatelastname");
let gridTasks = $("#gridTasks");
let dataIndex;
let addButton = $("#addButton");
let grids = $("#grids");
let popup = $("#popup");
let tbody = $("#tbody")
let productsGrid = $("#productsGrid");
let ProductEditBtn = $(".ProductEditBtn")
//buttons
let popupform = $("#popup-form");
let SalesaddButton = $("#SalesaddButton");
let SalesresetButton = $("#SalesresetButton");
let SalesupdateButton = $("#SalesupdateButton");
let validateProductName = $("#validateProductName");
let validateDateOfOrder = $("#validateDateOfOrder");
let validatePrice = $("#validatePrice");
let validateDeliveryPrice = $("#validateDeliveryPrice");
let validateDeliveryDate = $("#validateDeliveryDate");
let PRODUCTIDTXT = $("#ProductId");
let PRODUCTNAMETXT = $("#PRODUCTNAME");
let PRODUCTPRICETXT = $("#PRODUCTPRICE");
let orderdatetxt = $("#date");
let pricetxt = $("#price");
let deliveryPricetxt = $("#deliveryPrice");
let ProductNametxt = $("#productName");
let canUpdate=false;
let datetxt = $("#date");
let DeliveryDatetxt = $("#DeliveryDate");
let passwordtxt = $("#passwordtxt");
let phoneNo = $("#phoneNo");
let processing = $("#procesing");
let QUANTITY = $("#QUANTITY");
let validateQUANTITY = $("#validateQUANTITY");
let DESCRIPTION = $("#DESCRIPTION");
let validateDESCRIPTION = $("#validateDESCRIPTION");
let IMAGE = $("#IMAGE");
let validateIMAGE = $("#validateIMAGE");
let category = $("#category");
let validatecategory = $("#validatecategory");
let productupdateButton  = $("#productupdateButton");
 loadproductData();
loadData();
//event listener addbuttons
// SalesaddButton.click(function () {

//     validateSales();
//     clearTxtFieldsSales();
//     popup.hide()
    
// })

addButton.click(function () {

    validate();
    clearTxtFields();
    popup.hide()
   
})
// $("#ProductaddButton").click(function () {
//     validateProductData();
//     clearTxtFieldsProducts();
//     popup.hide();
// })

//update buttons
$("#updateButton").click(function () {
    updateData();
    clearTxtFields();
})


$("#SalesupdateButton").click(function () {
   
    clearTxtFieldsSales()
})


//resetbtn
$("#resetButton").click(function () {
    clearTxtFields();
    $("#validateusername").html("");
    $("#validateEmail").html("");
    $("#validatefirstname").html("");
    $("#validatelastname").html("");


})

$("#SalesresetButton").click(function () {
    clearTxtFields();
    $("#validateusername").html("");
    $("#validateEmail").html("");
    $("#validatefirstname").html("");
    $("#validatelastname").html("");


})


$("#productresetButton").click(function () {
    clearTxtFieldsProducts();
    $("#validatePRODUCTID").html("");
    $("#validatePRODUCTNAME").html("");
    $("#validatePRODUCTPRICE").html("");
    validateDESCRIPTION.html("");
    validateQUANTITY.html("");
    validateIMAGE.html("");
    validatecategory.html("")


})

//editbtn for user



// ProductDeleteBtn
productsGrid.on("click", ".ProductDeleteBtn", function () {
    productId = $(this).attr("productId");

    dataIndex = $(this).attr("index");
    deleteProductFromApi();


})



productsGrid.on("click", ".ProductEditBtn", function () {
    productId= $(this).attr("productId"); 
    dataIndex = $(this).attr("index");
    PRODUCTIDTXT.val(products[dataIndex]["_id"])
    PRODUCTNAMETXT.val(products[dataIndex]["name"])
    category.val(products[dataIndex]["category"])
    PRODUCTPRICETXT.val(products[dataIndex]["price"])
    QUANTITY.val(products[dataIndex]["quantity"])
    IMAGE.val(products[dataIndex]["image"])
    DESCRIPTION.val(products[dataIndex]["description"])
   
})

gridTasks.on("click", ".UserEditBtn", function () {
    
     usersId= $(this).attr("usersId"); 
    dataIndex = $(this).attr("index");
    firstnametxt.val(User[dataIndex]["name"])
    phoneNo.val(User[dataIndex]["phone"])
    Emailtxt.val(User[dataIndex]["email"])
    passwordtxt.val(User[dataIndex]["password"])
  

})




gridTasks.on("click", ".UserDeleteBtn", function () {
    //Get index value from html tag attribute and assign it to variable
    usersId = $(this).attr("usersId");
    dataIndex = $(this).attr("index");
    deleteUserFromApi();// Call the delete 

})
//sales edit for user
// tbody.on("click", ".SaleseditBtn", function () {

//     dataIndex = $(this).attr("index");
//     datetxt.val(User[dataIndex]["DateOfOrder"])
//     pricetxt.val(User[dataIndex]["price"])
//     deliveryPricetxt.val(User[dataIndex]["deliveryPrice"])
//     DeliveryDatetxt.val(User[dataIndex]["DateOfDelivery"])
//     ProductNametxt.val(User[dataIndex]["NameOfProduct"])

//     $("#popup-form").show();
// })




//product btns


// function clearTxtFieldsSales() {
//     ProductNametxt.val("")
//     pricetxt.val("")
//     deliveryPricetxt.val("")
//     orderdatetxt.val("")
//     datetxt.val("")
// }

function clearTxtFieldsProducts() {
    // PRODUCTIDTXT.val("")
    PRODUCTNAMETXT.val("")
    PRODUCTPRICETXT.val("")
    DESCRIPTION.val("")
    category.val("")
    IMAGE.val("")

}
//update userdata
function updateData() {



    let UserData = {
        "Username": lastnametxt.val(),
        "Phone": phoneNo.val(),
        "Email": Emailtxt.val(),
        "Password": passwordtxt.val(),
    }
    User[dataIndex] = UserData;

    $(".form-container").show();
    $.ajax({
        type:"PUT", //Put method is to update based on the api documentation
        url:"http://206.189.124.254:9000/user/"+ usersId, 
        //Concatenate the User-id gotten from the edit event when the user click the edit button 
        data:UserData,
        success:function (res) {
            console.log(res)
            if(res.error){ 
                //If the serer responds with an error key
                processing.html("User Exist")
            }else{
                //if there is no error key in the resppnse
                processing.html(" your update is successful")
                alert(" your update is successful")
                //Clear Textfields
                clearTxtFields();
                loadData();
            }
            
        },
        error:function (err) {
            console.log(err)
            
            processing.html(err.responseText)
        }
    })

}
//UPDATE PRODUCT
productupdateButton.click(function () {
    updateProductData();
})
function updateProductData() {

    let productsData = {
        "name": PRODUCTNAMETXT.val(),
        "category": category.val(),
        "price": PRODUCTPRICETXT.val(),
        "quantity": QUANTITY.val(),
        "image": IMAGE.val(),
        "description": DESCRIPTION.val(),
    }
    $.ajax({
        type:"PUT", //Put method is to update based on the api documentation
        url:"http://206.189.124.254:9000/update/product/"+ productId, 
        //Concatenate the User-id gotten from the edit event when the user click the edit button 
        data:productsData,
        success:function (res) {
            console.log(res)
            if(res.error){ 
                //If the serer responds with an error key
                processing.html("User Exist")
            }else{
                //if there is no error key in the resppnse
                processing.html("Your update is successful")
                //Clear Textfields
                clearTxtFieldsProducts();
                loadproductData();
            }
            
        },
        error:function (err) {
            console.log(err)
            processing.html(err.responseText)
            processing.html(err.responseText)
        }
    })

}



// function updatesalesData() {


//     let salesData = {

//         "DateOfOrder": datetxt.val(),
//         "DateOfDelivery": DeliveryDatetxt.val(),
//         "price": pricetxt.val(),
//         "deliveryPrice": deliveryPricetxt.val(),
//         "NameOfProduct": ProductNametxt.val(),

//         //event listener
//     }
//     sales[dataIndex] = salesData;
//     localStorage.setItem("salesControl", JSON.stringify(sales));
//     $("#popup-form").show();
// }


//validate USER
function validate() {
    if (usernametxt.val() == "") {

        $("#validateusername").html("Empty Field");

    } 


    else if (Emailtxt.val() == "") {

        $("#validateEmail").html("Empty Field");

    } 


   else if (firstnametxt.val() == "") {

        $("#validatefirstname").html("Empty Field");

    } 


    else if (lastnametxt.val() == "") {

        $("#validatelastname").html("Empty Field");

    } else {
        addData();
}

}

//validateSales
function validateSales() {
    if (datetxt.val() == "") {

        validateDateOfOrder.html("Empty Field");

    }


     else if (pricetxt.val() == "") {

        validatePrice.html("Empty Field");

    }


    else if (deliveryPricetxt.val() == "") {

        validateDeliveryPrice.html("Empty Field");

    } 


   else if (orderdatetxt.val() == "") {

        validateDateOfOrder.html("Empty Field");

    }

    else if (ProductNametxt.val() == "") {

        validateProductName.html("Empty Field");

    } else {
        addSalesData();}



}

//VALIDATE PRODUCTS
function validateProductData() {


    if (PRODUCTNAMETXT.val() == "") {

        $("#validatePRODUCTNAME").html("Empty Field");

    } else if  (PRODUCTPRICETXT.val() == "") {

            $("#validatePRODUCTPRICE").html("Empty Field");

        
    
    } else if (DESCRIPTION.val() == "") {

        validateDESCRIPTION.html("Empty Field");

    } 

    else if (QUANTITY.val() == "") {

        validateQUANTITY.html("Empty Field");

   
    }

    else if (IMAGE.val() == "") {

        validateIMAGE.html("Empty Field");

    } 
else if (category.val() == "") {

        validatecategory.html("Empty Field");

    }
    else{
        addProductsData();
    }

}


function deleteProductFromApi() {
    //Ajax to delete from the API
    processing.html(`Deleting ${products[dataIndex]['category']}  Data...`)
    $.ajax({
        type: "DELETE",
        url: "http://206.189.124.254:9000/product/" + productId,
        success: function (res) {
            console.log(res)
            processing.html("User Deleted");
            setTimeout(function () {
                loadData();
            }, 5000);


        },
        error: function (err) {
            console.log(err)
            tbody.html(err.responseText)
            processing.html(err.responseText)
        }
    })
}

//deleteproduct from API
function deleteUserFromApi() {
    if (confirm("Press OK to delete")) {
        processing.html(`Deleting ${User[dataIndex]["_id"]}  Data...`)
        $.ajax({
            type: "DELETE",
            url: "http://206.189.124.254:9000/user/" + usersId,
            success: function (res) {
                console.log(res)
                processing.html("operation successful");
                setTimeout(function () {
                    loadproductData();
                }, 5000);
    
    
            },
            error: function (err) {
                console.log(err)
                tbody.html(err.responseText)
                processing.html(err.responseText)
            }
        })    
    }
    
    
}






function clearTxtFields() {

    usernametxt.val("");
    Emailtxt.val("");
    passwordtxt.val("");
    lastnametxt.val("");
}
//usersData
function addData() {
    $("#procesing").html("Registering...")
    let UserData = {
        "name": firstnametxt.val(),
        "phone": phoneNo.val(),
        "email": Emailtxt.val(),
        "password": passwordtxt.val(),

    }


    $.ajax({
        type: "POST",
         url: "http://206.189.124.254:9000/register",
        
        data: UserData,
        success: function (res) {
            console.log(res)
            if (res.error) {
                processing.html("Error: User  exists")
            } else {
                processing.html(` your registration is successful`)
                alert(` your registration is successful`)
                loadData();
            }
        },
        error: function (err) {
            console.log(err)
            processing.html(err.responseText)
        }

    })

    console.log(User);
    $("#NoOfUsers").html(User.length);
  
    console.log(UserData);

}





// //productsfunction
// function addProductsData() {
//     let productsData = {
//         "name": PRODUCTNAMETXT.val(),
//         "category": category.val(),
//         "price": PRODUCTPRICETXT.val(),
//         "quantity": QUANTITY.val(),
//         "image": IMAGE.val(),
//         "description": DESCRIPTION.val(),
//     }

//     $.ajax({
//         type: "POST",
//          url: "http://206.189.124.254:9000/create/product",
//         // url:"data/data.json",
//         data: productsData,
//         success: function (res) {
//             console.log(res)
//             if (res.error) {
//                 processing.html("Registration Failed: product already exist")
//             } else {
//                 processing.html(`Your product was added  successful`);
//                 alert(`  your product was added  successful`)
//                 loadproductData();
//             }
//         },
//         error: function (err) {
//             console.log(err)
//             processing.html(err.responseText)
//         }

//     })

//     console.log(products);
//     popupform.hide();
//     $("#NoOfProducts").html(products.length);

// }

function loadData() {

    processing.html("Loading Data...")
    $.ajax({
        type: "GET",
         url: "http://206.189.124.254:9000/users",
        // url:"data/data2.json",
        success: function (res) {
            User = res;
           User =User.reverse();
            let listGrid = ""
            for (let i = 0; i <6; i++) {
                listGrid += ` 

    
        <div class="grids" id="grids" >

        <div class="imgcontainer"> <img src="img/programmer.png" width="100"height="100" alt="" srcset=""> </div>
        <div class="aboutcontainer">
      
       <br>
     <b>  Username</b>: ${User[i].name}  

         <br>  
         <b>  Email</b>:${User[i].email} 
        
        <br>  
        
        <b> Phone</b>:${User[i].phone}
        
        
        
        <br>  
        
        <button  class="UserDeleteBtn" index="${i}"usersId="${User[i]._id}" > DELETE </button> <br>
        <button class="UserEditBtn" index="${i}"  "usersId="${User[i]._id}">  EDIT </button>  
        </div> 
             
         
</div>
        `}
            gridTasks.html(listGrid);
            console.log(listGrid)
            processing.html("")
        },
        error: function (err) {

            console.log(err)
            processing.html(err.responseText + " " + err.statusText)
        }
    })
    $("#NoOfUsers").html(User.length);

}
//salesfunction
// function addSalesData() {
//     let salesData = {

//         "DateOfOrder": datetxt.val(),
//         "DateOfDelivery": DeliveryDatetxt.val(),
//         "price": pricetxt.val(),
//         "deliveryPrice": deliveryPricetxt.val(),
//         "NameOfProduct": ProductNametxt.val(),

//         //event listener
//     }

//     loadSalesData();
//     console.log(salesData);
//     $("#NoOfSales").html(sales.length);

//     $("#popup-form").hide();

// }




function loadproductData() {

    processing.html("Loading Data...")
    $.ajax({
        type: "GET",
         url: "http://206.189.124.254:9000/products",
        // url: "data/data.json",
        success: function (res) {
            products = res;
            products =products.reverse()
           


            let productgrid = ""
            for (let i = 0; i <products.length; i++) {
                if (products[i]["category"]=="vincent") {
    
                productgrid += ` 
        
            <div class="gridsp" id="gridsp" >
            <br>  
            
           <br>
        <div class="imgcontainer"> <img src="${products[i].image}" alt="" srcset="" width="130" height="130"> </div>
        <div class="aboutcontainer">  
        <b>Id</b>   : ${products[i]._id}
            <br>  
        <b>Name </b>       :${products[i].name}
            <br>
       <b> Category</b>     :${products[i].category}
              
            <br>  
      <b> Price</b>          :${products[i].price}
            <br>  
            
     <b> Quantity</b>        :${products[i].quantity}
            <br>  
    <b>  Description</b>      :${products[i].description}
            <br>  
            
            <button  class="ProductDeleteBtn" index="${i}" productId="${products[i]._id}">DELETE </button>
           <br>
            <button class="ProductEditBtn" index="${i}"  productId="${products[i]._id}"> EDIT
 </button> 
            </div>
         
          
                 
        
    </div>
            `
            }
        }
            console.log(productgrid)
            $("#productsGrid").html(productgrid);
            processing.html("")
        },
        error: function (err) {

            console.log(err)
            processing.html(err.responseText + " " + err.statusText)
        }
    })

    $("#NoOfProducts").html(products.length);
}



//function loadOrdersData


// function loadSalesData() {
//     let salesList = ""
//     for (let i = 0; i < sales.length; i++) {
//         salesList += ` 
    
//         <tr>
//             <td>${sales[i].NameOfProduct}</td>
//             <td>${sales[i].DateOfDelivery}</td>
//             <td>${sales[i].price}</td>
//             <td>${sales[i].deliveryPrice}</td>
//             <td>${sales[i].DateOfOrder}</td>
            
//             <td><a href="#" index="${i}" class="SaleseditBtn" >Edit</a> |
//             <a href="#" index="${i}" class="SalesdeleteBtn"  >Delete</a></td>
//         </tr>`

//     }
//     console.log(salesList)
//     $("#tbody").html(salesList);
//     localStorage.setItem("salesControl", JSON.stringify(sales));
// }

$(document).ready(function () {
  
    $('.fixedTable > a')
            .click(function (e) {
        $('ul.fixedTable > a')
            .removeClass('active');
        $(this).addClass('active');
    });
});