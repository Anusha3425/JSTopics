const abortCall = new AbortController();
const signal = abortCall.signal;

fetch('https://api.example.com/data', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Request was aborted');
    } else {
      console.error('Fetch error:', error);
    }
  });

abortCall.abort();

//Fetch API supports aborting requests using the AbortController.
