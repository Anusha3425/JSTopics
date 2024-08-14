// Fetch(): takes two arguments fetch(url, [options])
// without 'options' argument, fetch will do same function as like get api. it will fetch the url.
// response.text() – return as text
// response.json() – parse the response as JSON
// response.formData() – return the response as FormData object
// response.blob() – return the response as Blob

// let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
// let commits = await response.json();

// alert(commits[0])

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => response.json())
    .then(commits=> alert(`Hello ${commits[5].author.login}`))

// fetch takes the url, then it will convert the response to json, then once the process is done, it will alert the msg.

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => response.text())
    .then(textFetched=>console.log(textFetched.slice(0,50)+ '...'))



// POST request
// we shoudl use options with fetch

let options={
    method: "POST",
    Headers: {"Content-type": "application/json"},
    body: JSON.stringify({
        title:'FetchAPI',
        body: 'Example',
        userId:2002
    })
}

fetch('https://jsonplaceholder.typicode.com/posts',options)
    .then(response=> response.json())
    .then(showText=>console.log(showText))

// let user = {
//     name: 'John',
//     surname: 'Smith'
// };
      
// let response = await fetch('/article/fetch/post/user', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(user)
// });
      
// let result = await response.json();
// alert(result.message);