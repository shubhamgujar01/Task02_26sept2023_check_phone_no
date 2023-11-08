async function search() {
    // Define the URL you want to fetch data from
    var phn_no = document.getElementById('topicBox').value
    const apiUrl = `https://api.veriphone.io/v2/verify?phone=%2B91-${phn_no}&key=585DFE4F21C54B70BFC9E0D1FEFBF4CA`;
    document.getElementById('NumberContainer').innerHTML = ''
    // Use the Fetch API to make a GET request
    await fetch(apiUrl)
        .then(response => {
            // Check if the response status is OK (200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Handle the JSON data here
            console.log(data);
            var div = document.createElement('div')
            div.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.phone}</h5>
      <p class="card-text"><h6>Phone Region:</h6>${data.phone_region}</p>
      <p class="card-text"><h6>Service Provider:</h6>${data.carrier}</p>
      <p class="card-text"><h6>Phone Type:</h6>${data.phone_type}</p>
      <p class="card-text"><h6>Validity:</h6>${data.phone_valid}</p>
     
    </div>
  </div>`

            document.getElementById('NumberContainer').appendChild(div)
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });

}