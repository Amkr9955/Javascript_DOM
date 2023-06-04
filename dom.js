/*DOCUMENT OBJECT MODEL
Tress of nodes/elements created by the browser
Javscript can be used to read/write/manipulate to the DOM
Object Oriented Representation*/ 


//Examine the document object
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title= 'Wow';
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);

//GET ELEMENT BY ID

// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent="Hello";
// headerTitle.innerText='Goodbye';
// headerTitle.innerHTML='<h3>Hello</h3>';
// header.style.borderBottom='solid 3px #000';

//GET ELEMENTS BY CLASSNAME

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';

//for property over all items then we have to use loop;
// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='grey';
// }


//GET ELEMENTS BY TAG NAME
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// // items[1].style.backgroundColor='yellow';


// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='grey';
// }


// QUERY SELECTOR 

// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #000000';

// var input=document.querySelector('input');
// input.value='Hello World';
// var submit=document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='green';

//QUERY SELECTOR ALL
// var titles=document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent='Hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='f4f4f4';
//     even[i].style.backgroundColor='#ccc';
// }

//TRAVERSING THE DOM
// var itemList=document.querySelector('#items');
//parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='pink';
// console.log(itemList.parentNode.parentNode.parentNode);

//ParentElement

// console.log(itemList.parentElement);
//  itemList.parentElement.style.backgroundColor='pink';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes

// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

//Firstchild

// console.log(itemList.firstChild);

//firstElementChild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.innerText='Hello1';

//nextSibling

// console.log(itemList.nextSibling);

//previousSibling

// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);

//Create a div

// var newDiv=document.createElement('div');
// //add class
// newDiv.className='Hello';

// //add id
// newDiv.id='hello1';

// //add attribute

// newDiv.setAttribute('title','Hello Div');

// //create text node
// var newDivText=document.createTextNode('Hello World');

// //add text to div
// newDiv.appendChild(newDivText);

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// console.log(newDiv);

// container.insertBefore(newDiv,h1);

//Events

// var button=document.getElementById('button').addEventListener('click',buttonClick);
 //function buttonClick(e){
//      console.log('Button clicked');
//      console.log(e);
//      console.log(e.target);
//      console.log(e.target.id);
//     var output=document.getElementById('output');
//     output.innerHTML='<h3>'+e.target.id+'</h3>';
//     console.log(e.clientX);
//     console.log(e.clientY);

//}

//Mouse Events

// var button=document.getElementById('button');
// var box=document.getElementById('box');
// button.addEventListener('click',runEvent);
// button.addEventListener('doubleclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);
// button.addEventListener('mouseenter',runEvent);
// button.addEventListener('mouseleave',runEvent);
// button.addEventListener('mouseover',runEvent);

// box.addEventListener('mousemove',runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE:'+e.type);
//     // output.innerHTML='<h3>MouseX:'+e.offsetX+'</h3><h3>MouseY:'+e.offsetY+'</h3>';


//     // box.style.background="rgb("+e.offsetX+","+e.offsetY+",40)";
//     // document.body.style.background="rgb("+e.offsetX+","+e.offsetY+",40)";
// }


//kerevents
// var itemInput=document.querySelector('input[type="text"]');
// var form=document.querySelector('form');

// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);
// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);
// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);

// form.addEventListener('submit',runEvent);

// function runEvent(e){
//     e.preventDefault();
//     console.log('EVENT TYPE:'+e.type);
    // console.log(e.target.value);
    
// }
