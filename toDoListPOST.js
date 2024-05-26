//Using async and await, implement the necessary code to perform an HTTP POST request. To create a new post, use the following URL: link (Method: Post). The body of the request must contain a post object with the following information: title and Flag Completed. The post data must be transmitted following the compilation of a form.

//Hacer el ejercicio con JS vanilla y Axio.

//JavaScript Vanilla:

document.getElementById('postForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Collect form data
    const title = document.getElementById('title').value;
    const completed = document.getElementById('completed').checked;
  
    // Create the post object
    const postData = {
      title: title,
      completed: completed
    };
  
    try {
      // Send the POST request
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      // Parse the JSON response
      const responseData = await response.json();
      console.log('Success:', responseData);
      alert('Post created successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create post.');
    }
  });
  
  //Axios:

//   document.getElementById('postForm').addEventListener('submit', async function(event) {
//     event.preventDefault(); // Prevent the default form submission
  
//     // Collect form data
//     const title = document.getElementById('title').value;
//     const completed = document.getElementById('completed').checked;
  
//     // Create the post object
//     const postData = {
//       title: title,
//       completed: completed
//     };
  
//     try {
//       // Send the POST request using Axios
//       const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
  
//       // Check if the request was successful
//       console.log('Success:', response.data);
//       alert('Post created successfully!');
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to create post.');
//     }
//   });

//DIFERENCIAS:

//Para este caso específico, usar Axios simplifica bastante el código, hace que el manejo de errores sea más sencillo y proporciona una sintaxis más limpia y concisa. Si bien Fetch es nativo y suficiente para solicitudes simples, Axios ofrece más funcionalidades y una mejor experiencia de desarrollo, especialmente para aplicaciones más complejas o que requieren un manejo avanzado de solicitudes HTTP.
  

