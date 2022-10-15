const url = "ozolinala.com/fridayData/wp-json/wp/v2/bike?_embed";

fetch(url)
.then((res) => res.json())
.then((data) => handleProductList (data));

// Just checking

function handleProductList(data) {
    console.log(data);
    data.forEach(showProduct);
}

function showProduct(product){
    //Selecting template and cloning
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    //Change stuff
    clone.querySelector("h3").textContent = product.brand_name;
    clone.querySelector("h2").textContent = product.model_name.rendered;
    clone.querySelector("img").src = 
    product._embedded[
        "wp:featuredmedia"
    ][0].media_details.sizes.medium.source_url;
    //Selection where I want the clone
    const parent = document.querySelector("main");
    //Appending it
    parent.appendChild(clone);
    }