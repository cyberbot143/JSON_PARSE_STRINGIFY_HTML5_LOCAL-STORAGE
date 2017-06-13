/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function maxOccur() {
    var arr1 = ['abcd', 'aabbkklkk', 'cccdd'];
    var testArray = [];
    for (var a = 0; a < arr1.length; a++) {
        var arr = arr1[a];
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
            var count = 0;
            var max = 0;

            for (var j = 0; j <= arr.length; j++) {

                if (arr[j] == arr[i]) {
                    count++;
                    if (max < count)
                    {
                        max = count;
                    }
                }
            }
        }
        testArray.push(max);


    }
    console.log(testArray);
    console.log(arr1[testArray.indexOf((Math.max.apply(Math, testArray)))]);

}

function Validate(){
    var user = { };
    var flag = true;
    var fname = document.getElementById('firstName').value;
    if(fname.length == 0)
    {
        document.getElementById('firstName').insertAdjacentHTML('afterend',"Please enter value");
        flag = false;
    }
    
    var lname = document.getElementById('lastName').value;
    if(lname.length == 0)
    {
        console.log('Enter your last name');
        flag = false;
    }
    var uname = document.getElementById('userName').value;
    if(uname.length == 0)
    {
        console.log('Enter your user name');
        flag = false;
    }
    var pwd = document.getElementById('password').value;
    if(pwd.length == 0)
    {
        console.log('Password Must not be empty');
        flag = false;
    }
    //radio button validation
    var x = "";
    if(document.getElementById('male').checked){
    console.log('you have checked male');
    x = "male";
    }
    else if (document.getElementById('female').checked) {
        console.log('you have checked female');
        x= "female";
    }
    else{
            console.log('blah blah');
            x = "";
            flag = false;
    }         
    if(flag==true)
    {
    // Create an object and then push into local storage 
    var user_arr= [];
    user['Firstname'] = document.getElementById('firstName').value;
    user['lastname'] = document.getElementById('lastName').value;
    user['userName'] = document.getElementById('userName').value;
    user['password'] = document.getElementById('password').value;
    user['email'] = document.getElementById('email').value;
    user['gender'] = x;
    
    localStorage.setItem('user',JSON.stringify(user));
    var retrievedObject = localStorage.getItem('user');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    
        var myarray = Object.values(retrievedObject);
        console.log(myarray);



    localStorage.setItem('firstName', JSON.stringify(user.Firstname));
    localStorage.setItem('lastName', JSON.stringify(user.lastname));
    localStorage.setItem('userName', JSON.stringify(user.userName));
    localStorage.setItem('password', JSON.stringify(user.password));
    localStorage.setItem('email', JSON.stringify(user.email));
    localStorage.setItem('gender', JSON.stringify(user.gender));
    
   var retrievedArray = [];
   
   retrievedArray.push(localStorage.getItem('firstName'));
    console.log('Data Retrived from local Storage');
   
   
  document.getElementById("myForm").reset();
  
 
  
  console.log(myarray);
  
  var table = '';
  var rows = user.length;
  var cols = 6;
   for(var r = 0;r<rows;r++){
    table += '<tr>';
    for(var c = 0;c<myarraylength;c++){
        
                table+= '<td>' + localStorage.getItem(c) +'</td>' 
        
    
            
   }
 
}
}
};