// 1- get elementById;

// const { image } = require("qr-image");

// const heading = document.getElementById('heading');
// console.log(heading);

// 2- get elementByTagName;

// const heading = document.getElementsByTagName('h2');
// this is the way to get the element by tag names in the form of an array
// console.log(heading);
// this is the way to get the ement by index number see below
// console.log(heading[2]);

// 3- get elementByClassName;
// const heading = document.getElementsByClassName("heading");
// console.log(heading);

// 4-  querySelector
//  document.querySelector is similary as css beacuse we can get object by there id or class name using . an #.

// const heading = document.querySelector(".heading");
// console.log(heading);

// const heading = document.querySelector("#heading");
// console.log(heading);

// const heading = document.querySelector("#heading2");
// console.log(heading);

// 5- querySelectorAll
//  document.querySelectorAll performs as an array so we get the full length of an array we we log the output.

// const heading = document.querySelectorAll("h2");
// console.log(heading);

// we can also get it by using the indexing as like an array.
// const heading = document.querySelectorAll("h2");
// console.log(heading[2]);

// 6- Traverse in DOM

//  1- ParentNode
// this is not a method. This is a property remeber.

// const traverse =  document.querySelector(".child");
// console.log(traverse.parentNode);

// const traverse = document.querySelector(".parent");
// console.log(traverse.parentNode);


// 2- ChildrenNode
// this property get the children node od the parent as shown below.

// const traverse = document.querySelector(".parent");
// console.log(traverse.childNodes);
// after console,log you get the values in the form of an array so don't be confused when you get the array list in more numbers as of your child class because it also includes the \n as a text so mind it.

// const traverse = document.querySelector("body");
// console.log(traverse.childNodes);

// 3-nextElementSibling
// Basically next sibling finds the next upcoming class in there same div.

// const traverse = document.querySelector(".child");
// console.log(traverse.nextElementSibling);

// 4- priviousElementSibling

// const traverse = document.querySelector(".child1");
// console.log(traverse.previousElementSibling);


// Manipulation in DOM

// const manipulation = document.querySelector(".child1");
// manipulation.innerHTML = "Hello from inner html" ;
// manipulation.style.fontSize="5rem";
// manipulation.style.color="pink";
// manipulation.classList.add("newClass");
// manipulation.classList.remove("child1");

// Create elements using DOM
// AppendChild is used to insert a new class or id into parent div/container.

// 1-
// const newElemnt = document.createElement("h5");
// newElemnt.innerHTML="I'm a new heading from newElemnt";
// newElemnt.classList.add("newClassFromNewElement");
// // newElement.classList.remove("newClassFromNewElement");
// const parentElement = document.querySelector(".parent");
// parentElement.appendChild(newElemnt);
// console.log(newElemnt);

// 2-
// creating new elemnt using appendchild claas as we did upper.
// const newElement1 = document.createElement("p");
// newElement1.innerHTML="hello i'm paragraph fromnewElement1";
// const parent1 = document.querySelector(".parent");
// parent1.appendChild(newElement1);
// console.log(newElement1);

// AdjacentElemnt :- basically it help us to add element according to our specification like before  or after a parentcalss.

// const newElement = document.createElement("h2");
// newElement.innerHTML="hello im new heading from h2 using adjacentElement";
// const parentClass = document.querySelector(".parent");
// parentClass.insertAdjacentElement("beforebegin",newElement);
// parentClass.insertAdjacentElement("afterbegin",newElement);
// parentClass.insertAdjacentElement("beforeend",newElement);
// parentClass.insertAdjacentElement("afterend",newElement);
// parentClass.classList.add("newELemntClass");
// console.log(newElement);

//beforebegin afterbegin beforeend afterend.

// DOM Events  

// const varHeading = document.querySelector("#heading");
// const varButton = document.querySelector("#button");
// const varPara = document.querySelector(".para");

// varButton.addEventListener("click",function(){
    
//     varHeading.style.color="red";
//     varPara.innerHTML="hurrey you clicked on the button!"
// });

// Quiz 1- Bulb On/Off


const bulbSwitch = document.querySelector("#bulbSwitch");
const bulb = document.querySelector("#bulb");

bulbSwitch.addEventListener("click", function(){
    // console.log(bulb.src);
    if(bulb.src.match("bulboff")){
        bulb.src="bulbon.gif";
        bulbSwitch.innerHTML="Turn Off"

    }
    else{
        bulb.src="bulboff.gif"
        bulbSwitch.innerHTML="turn On";
    }
});

// match finds string and then manipulate with that further.
