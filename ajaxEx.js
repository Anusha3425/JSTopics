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
  // create xhr object
    const xhttp = new XMLHttpRequest();
    // what to do when progress is ready
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      document.getElementById("h1").style.color="blue";
      let parsedRes=JSON.parse(this.responseText);
      console.log(parsedRes);
      let List=document.getElementById("list");
      let str="";
      for(key in parsedRes){
        str+=`<li>parsedRes[key].employee_name</li>`;
      }
      parsedRes.innerHTML=str;
      console.log(xhttp)
    //   document.getElementById("demo").style.backgroundColor="pink"
      }

      // open the xhr object
    xhttp.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
    // send the request
    xhttp.send();
  }

function onready1() {
    const xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
      console.log("ready State is", this.readyState);
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
    xhttp.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
    xhttp.getResponseHeader('Content-type','application/json');
    xhttp.onload = function() {
      document.getElementById("btn4").innerHTML = this.responseText;
      console.log(xhttp)
      console.log(this.responseText);
      }

  params=`{"name":"Tom123","salary":"200","age":"21" }`;
    xhttp.send(params);
  }

//   to put data like HTML form use setRequestHeader();
