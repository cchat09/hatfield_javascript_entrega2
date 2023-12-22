// Customer interface / data

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
    {id: "t1xs", type: "shirt", idNumber: 1, name: "Never forget rose reveal drag", size: "extra small", price: 20, inventory: 5, image: 'assets/images/neverForget.png' },
    {id: "t1s", type: "shirt", idNumber: 1, name: "Never forget rose reveal drag", size: "small", price: 20, inventory: 5, image: 'assets/images/neverForget.png' },
    {id: "t1m", type: "shirt", idNumber: 1, name: "Never forget rose reveal drag", size: "medium", price: 20, inventory: 5, image: 'assets/images/neverForget.png' },
    {id: "t1l", type: "shirt", idNumber: 1, name: "Never forget rose reveal drag", size: "large", price: 20, inventory: 5, image: 'assets/images/neverForget.png' },
    {id: "t1xl", type: "shirt", idNumber: 1, name: "Never forget rose reveal drag", size: "extra large", price: 20, inventory: 5, image: 'assets/images/neverForget.png' },
    {id: "t1xxl", type: "shirt", idNumber: 1, name: "Never forget rose reveal drag", size: "double XL", price: 20, inventory: 5, image: 'assets/images/neverForget.png' },
]

// Start component for tracking the ID numbers, shirt at 1 bc information was entered manually
const lastIdNumbers = {
    shirt: 1,
    hoodie: 0,
    art: 0,
};


// let idNumber = Math.max(...products.map(product => product.idNumber)) + 1;

// Enter a new product line all at once - need to manually enter the name, type, inventoryToAdd, image
function ProductLine(type, name, inventoryToAdd, image) {

    let idPrefix;
    let price;

    if (type.toLowerCase() === "shirt") {
        idPrefix = "t"; 
        price = 20;
    } else if (type.toLowerCase() === "hoodie") {
        idPrefix = "h";
        price = 50
    } else if (type.toLowerCase() === "art") {
        idPrefix = "a";
        price = 35
    }
    const lastIdNumber = lastIdNumbers[type.toLowerCase()];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

    sizes.forEach((size) => {
        const id = idPrefix + (lastIdNumber + 1) + size;
        products.push({ id, name, size, type, price, inventory: inventoryToAdd, image });
    });
    console.log("New product line added successfully!");
}

ProductLine ("shirt", "Xavier is bi", 5, 'assets/images/xavier.png');


ProductLine ("hoodie", "Nightmare before Christmas", 10, 'assets/images/nightmare.png');

// add inventory to specific model/size (by specific ID)
function addInventory(id, inventoryToAdd) {
    let searchId = id;
    let inventorytoAdd = inventoryToAdd;
    let productIndex = products.findIndex((p) => p.id === searchId);
    if (productIndex != -1) {
        products[productIndex].inventory += inventorytoAdd;
    } else {
        console.log("Product not found")
    }
}


// addInventory ("t1m", 4);

function subtractInventory(id, inventoryToSubtract) {
    let searchId = id;
    let inventorytoSubtract = inventoryToSubtract;
    let productIndex = products.findIndex((p) => p.id === searchId);
    if (productIndex != -1) {
        products[productIndex].inventory -= inventorytoSubtract;
    } else {
        console.log("Product not found")
    }
}


// subtractInventory ("t1xs", 2);

function searchById(id) {
    let product = products.find((p) => p.id === id);
    if (product) {
        console.log("Product found");
        console.log(product);
    } else {
        console.log("Product not found")
    }
}

function searchByType(type) {
    let productsSearch = products.filter ((p) => p.type === type);
    if (productsSearch) {
        console.log("Products found");
        console.log(productsSearch);
    } else {
        console.log("Product not found")
    }
}

products.forEach(product =>{
    let div = document.createElement("div");
    div.innerHTML = `
    <H2>${product.name}</H2>
    <b>€${product.price}</b>
    <img src="${product.image}">
    `;
    document.getElementById("productContainer").appendChild(div);
});