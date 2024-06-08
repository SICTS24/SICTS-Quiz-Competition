document.getElementById('schoolForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('schoolForm').style.display = 'none';
    document.getElementById('apiButton').style.display = 'block';
  });
  
  document.getElementById('apiButton').addEventListener('click', function() {
    const schoolName = document.getElementById('schoolName').value;
    fetch('https://q51rmkwr-3000.asse.devtunnels.ms/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ school: schoolName }),
      mode: 'no-cors',
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  });