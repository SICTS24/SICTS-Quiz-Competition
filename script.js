var intervalId = 0;
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
            
            let el = document.getElementById('exist');
            if (el == null) {
            let div = document.createElement('div');
            div.id = 'exist';
            // Set the text of the paragraph to the key-value pair
            div.innerHTML = `School: ${key}, Time ${data[key]}`;
            
            // Add the paragraph to the div
            results.appendChild(div);
            }else{
              for(let key in data){
                  if(data.hasOwnProperty(key)){
                      el.innerHTML = `School: ${key}, Time ${data[key]}`;
            }
          } 
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };

    if (!intervalId) {
      intervalId = setInterval(fetchData, 500);
    };


    setTimeout(function() {
      document.getElementById('apiButton').style.backgroundColor = 'green';
    }, 8000);  // Change the color back after 5000 milliseconds (5 seconds)

    document.getElementById('apiButton').disabled = true;

    setTimeout(function() {
      document.getElementById('schoolForm').disabled = false;
    }, 5000);

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

  
