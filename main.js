// // Customer interface / data
// while (true) {
//     let answer = prompt ("Hello, would you like a customized alerts?").toLowerCase();
//     if (answer === "yes") {
//         let customerName = prompt ("Amazing! Please enter your name")
//         let customerEmail = prompt ("And your email")

//         let customerInterests = [];

//         for (let i = 0; i < 3; i++){
//             let customerInterest = prompt("Almost done, what are you into? (we'll take three topics, one at a time)");
//             customerInterests.push(customerInterest);
//         }
//         alert(`You've got great taste ${customerName} ;) We'll be sure to email you at ${customerEmail} if we have new or discounted merch with the topics ${customerInterests.join(`, `)}. Happy shopping!`);
//         break;
//     }
//     else if (answer === "no") {
//         alert("Okay, enjoy our fun and freaky merch!");
//         break;
//     }
//     else {
//         alert("please enter yes or no");
//     }
// }


// Product info
const products = [
    {id: "t1xs", type: "shirt", idNumber: 1, name: "Never forget - Sasha Velour Rose Reveal", size: "xs", price: 20, inventory: 5, image: 'assets/images/neverForget.png', description: "This is our super bowl - celebrate Sasha Velour's iconic reveal that change herstory.", tag: "drag race" },
    {id: "t1s", type: "shirt", idNumber: 1, name: "Never forget - Sasha Velour Rose Reveal", size: "s", price: 20, inventory: 5, image: 'assets/images/neverForget.png', description: "This is our super bowl - celebrate Sasha Velour's iconic reveal that change herstory.", tag: "drag race" },
    {id: "t1m", type: "shirt", idNumber: 1, name: "Never forget - Sasha Velour Rose Reveal", size: "m", price: 20, inventory: 5, image: 'assets/images/neverForget.png', description: "This is our super bowl - celebrate Sasha Velour's iconic reveal that change herstory.", tag: "drag race" },
    {id: "t1l", type: "shirt", idNumber: 1, name: "Never forget - Sasha Velour Rose Reveal", size: "l", price: 20, inventory: 5, image: 'assets/images/neverForget.png', description: "This is our super bowl - celebrate Sasha Velour's iconic reveal that change herstory.", tag: "drag race" },
    {id: "t1xl", type: "shirt", idNumber: 1, name: "Never forget - Sasha Velour Rose Reveal", size: "xl", price: 20, inventory: 5, image: 'assets/images/neverForget.png', description: "This is our super bowl - celebrate Sasha Velour's iconic reveal that change herstory.", tag: "drag race" },
    {id: "t1xxl", type: "shirt", idNumber: 1, name: "Never forget - Sasha Velour Rose Reveal", size: "xxl", price: 20, inventory: 5, image: 'assets/images/neverForget.png', description: "This is our super bowl - celebrate Sasha Velour's iconic reveal that change herstory.", tag: "drag race" },
]

// Start component for tracking the ID numbers, shirt at 1 bc information was entered manually
const lastIdNumbers = {
    shirt: 1,
    hoodie: 0,
    art: 0,
};

let idNumber = Math.max(...products.map(product => product.idNumber)) + 1;


// Enter a new product line all at once - need to manually enter the name, type, inventoryToAdd, image
function ProductLine(type, name, inventoryToAdd, image, description, tag) {

    let idPrefix;
    let price;
    let size;

    if (type.toLowerCase() === "shirt") {
        idPrefix = "t"; 
        price = 20;
    } else if (type.toLowerCase() === "hoodie") {
        idPrefix = "h";
        price = 50
    } else if (type.toLowerCase() === "art") {
        idPrefix = "a";
        price = 35
        size = "na"
    }
    const lastIdNumber = lastIdNumbers[type.toLowerCase()];
    const sizes = ["xs", "s", "m", "l", "xl", "xxl"];
    if (type.toLowerCase() === "shirt" || type.toLowerCase() === "hoodie") {
        sizes.forEach((size) => {
            const id = idPrefix + (lastIdNumber + 1) + size;
            products.push({ id, type, idNumber, name, size, price, inventory: inventoryToAdd, image, description, tag });
        });
    } else if (type.toLowerCase() === "art") {
        const id = idPrefix + (lastIdNumber + 1) + size;
        products.push({ id, type, idNumber, name, size, price, inventory: inventoryToAdd, image, description, tag });
    }
    console.log("New product line added successfully!");
}


//adding new product lines via javascript
ProductLine ("art", "Xavier is Bi", 5, 'assets/images/xavier.png', "He may be a jerk but we all know Xavier and Magneto aren't 'good friends.' C'mon now.", "x-men");


ProductLine ("hoodie", "Jumbo is Fabulous", 10, 'assets/images/jumbo.png', "Who cares if Magneto was right? The real story is Jumbo is fab and Quinton sucks.", "x-men");

ProductLine ("shirt", "Gay Hobbits", 10, 'assets/images/oc_lotr.png', "The OC girls ship Sam and Frodo just like us.", "lord of the rings");

console.log(products);




// add inventory to specific model/size (by specific ID)
function addInventory(id, inventoryToAdd) {
    let searchId = id.toLowerCase();
    let inventorytoAdd = inventoryToAdd;
    let productIndex = products.findIndex((p) => p.id === searchId);
    if (productIndex != -1) {
        products[productIndex].inventory += inventorytoAdd;
    } else {
        console.log("Product not found")
    }
}

addInventory ("t1m", 4);


// subtract inventory to specific model/size (by specific ID)
function subtractInventory(id, inventoryToSubtract) {
    let searchId = id.toLowerCase();
    let inventorytoSubtract = inventoryToSubtract;
    let productIndex = products.findIndex((p) => p.id === searchId);
    if (productIndex != -1) {
        products[productIndex].inventory -= inventorytoSubtract;
    } else {
        console.log("Product not found")
    }
}

subtractInventory ("T1xs", 2);

//search by ID - for backend users
function searchById(id) {
    let product = products.find((p) => p.id === id.toLowerCase());
    if (product) {
        console.log("Product found");
        console.log(product);
    } else {
        console.log("Product not found")
    }
}

// search by type (shirt, hoodie, or art) - eventually will use pulldown menu or search bar to filter
function searchByType(type) {
    let productsSearch = products.filter ((p) => p.type === type.toLowerCase());
    if (productsSearch) {
        console.log("Products found");
        console.log(productsSearch);
    } else {
        alert("Product not found")
    }
}

// search by tag - eventually will use search bar to filter
function searchByTag(tag) {
    let productsSearch = products.filter ((p) => p.tag === tag.toLowerCase());
    if (productsSearch) {
        console.log("Products found");
        console.log(productsSearch);
    } else {
        alert("product not found")
    }
}

// search by size - eventually will use pulldown menu or search bar to filter - currently have to search by xs, s, m, l, xl, xxl - eventually will make it so you can search large, medium, etc
function searchBySize(size) {
    let productsSearch = products.filter ((p) => p.size === size.toLowerCase());
    if (productsSearch.length > 0) {
        console.log("Products found");
        console.log(productsSearch);
    } else {
        alert("Product not found")
    }
}



//to auto-build website

//differentiating the different product sets - needed to autopopulate by full model rather than having a .box for each size
const uniqueNameSet = new Set();

//auto-populating website with array
products.forEach(product =>{
    if (!uniqueNameSet.has(product.name)) {
        let div = document.createElement("div");
        div.className = "box";
        div.innerHTML = `
        <H2>${product.name}: ${product.type}</H2>
        <img src="${product.image}">
        <p>${product.description} - <b>€${product.price}</b></p>
        <div class="buttonContainer">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop sizes
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">XS</a></li>
                    <li><a class="dropdown-item" href="#">S</a></li>
                    <li><a class="dropdown-item" href="#">M</a></li>
                    <li><a class="dropdown-item" href="#">L</a></li>
                    <li><a class="dropdown-item" href="#">XL</a></li>
                    <li><a class="dropdown-item" href="#">XXL</a></li>
                </ul>
            </div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Number
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">1</a></li>
                    <li><a class="dropdown-item" href="#">2</a></li>
                    <li><a class="dropdown-item" href="#">3</a></li>
                    <li><a class="dropdown-item" href="#">4</a></li>
                    <li><a class="dropdown-item" href="#">5</a></li>
                </ul>
            </div>
            <button type="button" class="btn btn-danger">Purchase</button>
        </div>
        `;
        document.getElementById("productContainer").appendChild(div);
        uniqueNameSet.add(product.name);
    }
});


//sale function - eventually will link to site so user will not need to know id, but backend that's how we can manage inventory
function sale(id, quantity) {
    let productIndex = products.findIndex((p) => p.id === id.toLowerCase());
    if (productIndex) {
        let product = products[productIndex];
        if (product.inventory >= quantity) {
            product.inventory -= quantity;
            alert(`${quantity} of ${product.name} - ${product.type} for a price of €${quantity * product.price} have been added to your cart.`);
            } else {
                alert(`We're running low on that, sorry!`);
            } 
        }
    }




// //testing search functions
// searchBySize ("L");

// searchByTag ("X-MEN");

// searchByType ("ART");

// searchById ("A1NA");

// searchById ("t1XS");


//test sale function
sale ("a1na", 12);

console.log(products);