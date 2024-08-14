let fname=document.getElementById("fname");
let mailId=document.getElementById("mailId");
let address=document.getElementById("address");

// onblur: triggeres when element loses focus
fname.onblur = ()=> {
    document.getElementById("fname").style.background="aliceblue";
    fname.value=fname.value.toUpperCase();
}

// onfocus: triggers when element gets focus
fname.onfocus = () => {
    document.getElementById("fname").style.background="pink";
}

// onchange: fires when the value is changed
fname.onchange = () => {
    document.getElementById("fname").style.color="blue";
}

// onselect: fires when user selects any text
fname.onselect = () => {
    alert("selected")
}

// oncopy: fires when user copies some text
mailId.oncopy=()=>{
    alert("Mail Id is copied");
}

// onpaste: fires when the user pastes some text
address.onpaste = () => {
    alert("The text is pasted");
}

// oninput: fires when the user gives input
mailId.oninput = () => {
    mailId.value=mailId.value.toUpperCase();
}

// oninvalid: fires when the value is invalid
mailId.oninvalid = () => {
    document.getElementById("mailId").style.color="purple";
}

// onsubmit: fires when the form is submitted
submitfunc = () => {
    alert("The form is submitted")
}

resetfunc = () => {
    alert("Please fill inputs again");
}


