
fetch('http://localhost:8000/submit-data') 
  .then((response) => response.json())
  .then((data) => {

    const dataDiv = document.getElementById('data-container');
    dataDiv.innerHTML = JSON.stringify(data, null, 2);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
