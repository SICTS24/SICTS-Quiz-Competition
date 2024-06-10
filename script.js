document.getElementById('schoolForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('schoolForm').style.display = 'none';
    document.getElementById('apiButton').style.display = 'block';
  });
  
  document.getElementById('apiButton').addEventListener('click', function() {
    document.getElementById('apiButton').style.backgroundColor = 'red';
    var text = document.getElementById('response');
    text.innerHTML = 'Your school pressed the button';

    function fetchData() {
      fetch('https://x9820t27-3000.asse.devtunnels.ms/data')
      .then(response => response.json())
      .then(data => {
        let results = document.getElementById('results');
        for (let key in data) {
          if (data.hasOwnProperty(key)) {  // This check is necessary to filter out properties from the prototype
            // Create a new paragraph element
            let div = document.createElement('div');
            
            // Set the text of the paragraph to the key-value pair
            div.innerHTML = `Key: ${key}, Value: ${data[key]}`;
            
            // Add the paragraph to the div
            results.appendChild(div);
          } 
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };

    fetchData();   


    setTimeout(function() {
      document.getElementById('apiButton').style.backgroundColor = 'green';
    }, 8000);  // Change the color back after 5000 milliseconds (5 seconds)

    setTimeout(function() {
      text.innerHTML = '';
    }, 10000);

    const schoolName = document.getElementById('schoolName').value;
    setTimeout(function() {
      document.getElementById('apiButton').style.backgroundColor = 'green';
    }, 8000);
    
    fetch('https://x9820t27-3000.asse.devtunnels.ms/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ school: schoolName }),
      //mode: 'no-cors',
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  });

  
