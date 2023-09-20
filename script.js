                                                                  // FaceBook Demo V1

//  var datebase = [ 
//     {
//      username: "Abdo",
//      password: "1234"
//      }
//  ];


//  var newsFeed = [
//      {
//      	username: "mimi",
//      	timeline: "I love my  family"
//      },
//      {
//      	username: "mohamed",
//      	timeline: "I love video editing!!"
//      }

//  ];

// var userName = prompt("Enter your user name");
// var userPass = prompt("Enter your password");

// function signIn(user, pass){
// if (userName == datebase[0].username &&
//     userPass == datebase[0].password){
// 	console.log(newsFeed)
// } else {
// 	alert("wrong username or password, please try again")
// };
// }
// signIn(userName, userPass);  
    // OR
// if (userName == datebase[0].username &&
//     userPass == datebase[0].password){
// 	console.log(newsFeed)
// } else {
// 	alert("wrong username or password, please try again")
// };



                                                       // program for a simple calculator


// const Number1 = parseFloat(prompt("Enter The First Number"));
// const Number2 = parseFloat(prompt("Enter The Second Number"));

// const Op = prompt("Enter The Operator That You Want");

// let res;


// if (Op == '+') {
//     res = Number1 + Number2;
// } else if (Op == '-') {
//     res = Number1 - Number2
// }else if (Op == '*') {
//     res = Number1 * Number2;
// }else if (Op == '/') {
//     res = Number1 / Number2;
// };

// alert(`${Number1} ${Op} ${Number2} = ${res} `);


                                                              // for and forEach


// var todos = [
//     "clean room",
//     "brush teeth",
//     "learn some java",
//     "exercise",
//     "eat healthy"
// ];

// for (var i=0; i < todos.length; i++){
//       console.log(todos[i]);
// };

// todos.forEach(function(todo, i){
//     console.log(todo, i)
// });




                                                              // FaceBook DEMO V2



// var datebase = [ 
//     {
//      username: "abdo",
//      password: "12345"
//      },
//      {
//      username: "mimi",
//      password: "1234"
//      },
//      {
//      username: "mohamed",
//      password: "123"
//      }
// ];

// var newsFeed = [
//      {
//         username: "Abdelrhman",
//         timeline: "Now i'm learning some javascript !"
//      }, 
//      {
//      	username: "mimi",
//      	timeline: "I love my family"
//      },
//      {
//      	username: "mohamed",
//      	timeline: "I love video editing!!"
//      }

// ];
// var userName = prompt("Enter your user name");
// var userPass = prompt("Enter your password");


// function checking(user, pass) {
//   for (var i = 0; i < datebase.length ; i++){
//   	if(datebase[i].username === user && datebase[i].password === pass){
//         return true;
//     }
//    }
//   	 return false;
// };

// function signIn(user, pass){
// if (checking(user, pass) == true){
// 	console.log(newsFeed)
// } else{
// 	alert("wrong username or password, please try again");
// }
// };
// signIn(userName, userPass);




                                            // Making A ToDo List V1



// var button = document.getElementById("enter");
// var bar = document.getElementById("Input");
// var ul = document.querySelector("ul");


// button.addEventListener("click", function(){
//     if(bar.value.length > 0){
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(bar.value));
//         ul.appendChild(li);
//         bar.value = "";
//    }
// });


// bar.addEventListener("keypress", function(event){
//     if(bar.value.length > 0 && event.keyCode == 13){
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(bar.value));
//         ul.appendChild(li);
//         bar.value = "";
//    }
// });



                                            // Making A ToDo List V2 (BETTER !!)

var button = document.getElementById("enter");
var bar = document.getElementById("Input");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");
var DelButton = document.getElementsByClassName("delClass");

// Removing Existing Lists Functino
function removeParent(event) {
    event.target.parentNode.remove();     
};

// Adding The done Class For The Existing Lists Function
function addDone(event1){
    event1.target.classList.toggle("done");
};

// Excutign Both Of The Upper Functions
for (var i = 0; i < DelButton.length; i++) {
    DelButton[i].addEventListener("click", removeParent);
    items[i].addEventListener("click", addDone);
};

// Creating New Lists Function
function createNewList(){
    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.onclick = removeParent;
    li.onclick = addDone;

    li.appendChild(document.createTextNode(bar.value));
    btn.appendChild(document.createTextNode("DEL"));
    li.appendChild(btn);
    ul.appendChild(li);
    bar.value = "";
};

function addListAfterClick() {
    if (bar.value.length > 0) {
        createNewList()
    }
};

function addListAfterKeyPress(event2){
    if (bar.value.length > 0 && event2.keyCode === 13){
        createNewList();
    }
};


button.addEventListener("click", addListAfterClick);
bar.addEventListener("keypress" , addListAfterKeyPress);






































































