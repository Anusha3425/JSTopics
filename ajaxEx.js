// Asynchronous javascript and XML
// AJAX just uses a combination of:
// browser built-in XMLHttpRequest object (to request data from a web server)
// JavaScript and HTML DOM (to display or use the data)

// new XMLHttpRequest()-creates new xmlhttp request
// xhttp.onload()- define callback function
// onload- defines the function to be executed when the request is received.
// open(method, url, async?, user, pwd)- specifies method
// send()- sends request to the server(for GET requests)
// send(string)- sends request to server(for POST requests)

// XHR: XMLHttpRequest

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      document.getElementById("h1").style.color="blue";
      console.log(xhttp)
    //   document.getElementById("demo").style.backgroundColor="pink"
      }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }

function onready1() {
    const xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("btn2").innerHTML=this.responseText;
        }
    }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

function onready2() {
    const xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("btn3").innerHTML=this.responseText;
        }
    }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

function loadDocPost() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("btn4").innerHTML = this.responseText;
      console.log(xhttp)
      }
    xhttp.open("POST", "ajax_info.txt", true);
    xhttp.send();
  }

//   to put data like HTML form use setRequestHeader();
