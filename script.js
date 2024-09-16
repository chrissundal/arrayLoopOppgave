let pocketStuff = ['Hat', 'Pencil', 'Dinosaur', 'Showercap', 'Piece of Tape'];
let imgFiles = ['IMG/hatt.jpg', 'IMG/blyant.jpg', 'IMG/dinosaur.jpg', 'IMG/showercap.jpg', 'IMG/tape.jpg']
let showText ='';
let isOpen = false;
let addIsOpen = false;
let addArray;

updateView();
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    
    <div>
        ${createPockets()}
    </div>
    
    `;
}
function createPockets(){
    let html = '';
    if (isOpen == false) return '<button onclick="seeWhatsInPockets()">See contents of pockets!</button>';
    else if (isOpen == true) { html = `
    <div class="main">
    <div>${showText}</div>
    <div>${openAddNew()}</div>
    <button onclick="closePocket()">Close</button>
    </div>
    `; 
    }  
    return html;
}
function seeWhatsInPockets(){
    for (let index = 0; index < pocketStuff.length; index++) {
        showText += `
        <div class="cartItems">
            <img src="${imgFiles[index]}" height = 30px width = 30px/>
            <p> På plass ${index} så ser jeg: ${pocketStuff[index]}
            </p>
                <div class="delBtn">
                    <button onclick="deleteItem(${index})">X</button>
                </div>
        </div>
        `;
    }
    isOpen = true;
    updateView();
}
function openAddNew(){
    let addHtml = '';
    if (addIsOpen == false) return '<button onclick="openArrayPocket()">Add array</button>';
    else if (addIsOpen == true) { addHtml = `
    
    Add New Array: <input 
        type="text"
        oninput="addArray=this.value"
        value="${addArray ?? ''}"
    /> 
    <button onclick="addNewArray()">Add</button>
    <button onclick="closeArrayPocket()">Close Add</button>
    
    `; 
    }  
    return addHtml;
}
function addNewArray(){
    showText = '';
    pocketStuff.push(addArray) 
    updateView();
    seeWhatsInPockets();
}
function closePocket(){
    isOpen = false;
    showText = '';
    updateView();
}
function closeArrayPocket(){
    addIsOpen = false;
    showText = '';
    updateView();
    seeWhatsInPockets();
}
function openArrayPocket(){
    addIsOpen = true;
    showText = '';
    updateView();
    seeWhatsInPockets();
}

function deleteItem(index) {
    showText = '';
    pocketStuff.splice(index, 1)
    imgFiles.splice(index, 1)
    seeWhatsInPockets();
     updateView();
 }