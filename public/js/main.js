const numberInput = document.getElementById('number');
const textInput = document.getElementById('msg');
const button = document.getElementById('button'); // Removed trailing space
const response = document.querySelector('.response');

button.addEventListener('click', send, false);

function send() {
  // Get the input values
  const number = numberInput.value.replace(/\D/g, ''); // Removes non-numeric characters
  const text = textInput.value;

  // Send POST request to the server
  fetch('/', { // Removed the trailing space in the URL
    method: 'POST', // HTTP method
    headers: {
      'Content-Type': 'application/json' // Corrected header name
    },
    body: JSON.stringify({ number, text }) // Send the input data as JSON
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Failed to send message');
    })
    .then((data) => {
      console.log('Response:', data);
      response.textContent = 'Message sent successfully!';
      response.style.color = 'green';
    })
    .catch((err) => {
      console.error(err);
      response.textContent = 'Error sending message';
      response.style.color = 'red';
    });
}
