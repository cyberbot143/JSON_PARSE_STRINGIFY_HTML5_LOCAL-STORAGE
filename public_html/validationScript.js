/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//   var myarr = ['bbbcd', 'aaaaak', 'cdbjdd','hchgbbb'];
//   function maxOccur(myarr) {
// 
// var inputArray =myarr;
//    console.log(inputArray);
//    
//    var testArray = [];
//    for (var a = 0; a < inputArray.length; a++) {
//        var arr = inputArray[a];
//         var max = 0;
//        for (var i = 0; i < arr.length; i++) {
//           var count = 0; 
//            for (var j = 0; j <= arr.length; j++) {
//                if (arr[j] == arr[i]) {
//                    count++;
//                    if (max < count)
//                    {
//                        max = count;
//                    }
//                }
//            }
//            
//        }
//        testArray.push(max);
//    }
//    console.log(testArray);
//    var max = testArray[0];
//    var maxIndex = 0;
//
//    for (var a = 1; a < testArray.length; a++) {
//        console.log(a);
//        if (testArray[a] > max) {
//
//            maxIndex = a;
//            max = testArray[a];
//        }
//    }
//    console.log(inputArray[maxIndex]);
//    return inputArray[maxIndex];
//}
//
//maxOccur(myarr);



var user = {};
function Validate() {
    // initialize myarray from localstorage
    var myArray =JSON.parse(localStorage.getItem('userList'));
    var flag = true;

    var fname = document.getElementById('firstName').value;
    if (fname.length == 0)
    {
        document.getElementById('firstName').insertAdjacentHTML('afterend', "Please enter value");
        flag = false;
    }

    var lname = document.getElementById('lastName').value;
    if (lname.length == 0)
    {
        console.log('Enter your last name');
        flag = false;
    }
    var uname = document.getElementById('userName').value;
    if (uname.length == 0)
    {
        console.log('Enter your user name');
        flag = false;
    }
    var pwd = document.getElementById('password').value;
    if (pwd.length == 0)
    {
        console.log('Password Must not be empty');
        flag = false;
    }
    //radio button validation
    var x = "";
    if (document.getElementById('male').checked) {
        console.log('you have checked male');
        x = "male";
    } else if (document.getElementById('female').checked) {
        console.log('you have checked female');
        x = "female";
    } else {
        console.log('blah blah');
        x = "";
        flag = false;
    }
    // if every field is filled
    if (flag == true)
    {
        // Create an object and then push into local storage 
        user['Firstname'] = document.getElementById('firstName').value;
        user['lastname'] = document.getElementById('lastName').value;
        user['userName'] = document.getElementById('userName').value;
        user['password'] = document.getElementById('password').value;
        user['email'] = document.getElementById('email').value;
        user['gender'] = x;

        myArray.push(user);
        console.log(myArray);
        localStorage.setItem('userList', JSON.stringify(myArray));
        
        displayTable();
       
  document.getElementById("myForm").reset();        
    }
}
window.onload = function displayTable(){ 
     var retrievedObject = localStorage.getItem("userList");
     var parsedObject1 = JSON.parse(retrievedObject)
     var html = "<table id='dataTable' border='1|1'>";
    html+="<tr>";
    for (var key in parsedObject1[0]){
        html+="<th>"+key+"</th>";
    }
    html+="</tr>";
      for (var i in parsedObject1 ) {
      
        html+="<tr id='parsedObject1[i]'>";
        html+="<td>"+parsedObject1[i].Firstname+"</td>";
        html+="<td>"+parsedObject1[i].lastname+"</td>";
        html+="<td>"+parsedObject1[i].userName+"</td>";
        html+="<td>"+parsedObject1[i].password+"</td>";
        html+="<td>"+parsedObject1[i].email+"</td>";
        html+="<td>"+parsedObject1[i].gender+"</td>";
        html+="</tr>";
    }
    html+="</table>";
if(localStorage.userList!==null){
    
document.getElementById('display').innerHTML = html;
}

else{
    
document.getElementById('display').innerHTML += html;
}

}


