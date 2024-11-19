// grabs information from the json files. json folder is confiugred with an array of objects, containing key value pairs with information for each product.

fetch("./ecommerce.json")
  // .then can handle results, and is also considered a callback function.
  // provides a function that can be excuted when "fetch" is resolved/complete.
  .then((response) => {
    //you want the data to be completly fetched so you use return keyword.
    // .json after the name of the function (created alongside .then, to Parse the JSON response.
    //  json files hold "strings", and to parse it means to transform each string into an actual javascript object that can be used by the program.
    return response.json(); // Parse the JSON response
  })
  // a second .then() allows for a sequential flow of jaavscript methods.
  // this one creates a function called products, where we prepare to interact with the html DOM
  .then((products) => {
    // create a variable that selects the div where products will be displayed. store in a variable for the purpose of DRY (dont reapeat yourself) and allows
    const productList = document.getElementById("product-list");

    // Loop over each product (in the product-list variable we just created)and creates HTML content
    products.forEach((product) => {
      // create another variable, and use document.createElement to create a div that will be placed in the dom. this div is what will store the objects pulled from the json files.
      const productDiv = document.createElement("div");
      // we add a class to that div using "classList.add", so we can style is in css
      productDiv.classList.add("product"); // Add a class for styling

      // Insert product content into the div, using innerHtml so that whatever comes after the assignment operator is inserted into tthe innerHTML. you can also use textContent or innerText, all of them target the Doms CONTENT.
      // backticks allowed me to insert code that replicates what I WOULD HAVE put into the html if i had hard coded each div. html styling repeats for every object in the json file, so no need to insert a repetitive set of divs
      productDiv.innerHTML = `
             <div class="card"> 
        <img class="productimage" src="${product.image}" alt="Denim Jeans" style="width: 100%" />
        <h1>${product.name}</h1>
        <p class="price"> $ ${product.price}</p>
        <p>${product.description}</p>
        <p><button>${product.button}</button></p>
      </div>
      `;

      // Append the new product div to the product list container
      //appends means to add, or insert
      // we are appending it to the productdiv because that is the div element we created earlier with the createElement feature. it is then appended to the product-list div that we grabbed from our html dom. This tells javascript  "insert the innerHTML from this newly created div, into the div that we grabbed earlier. display it on the dom."
      productList.appendChild(productDiv);
    });
  });
