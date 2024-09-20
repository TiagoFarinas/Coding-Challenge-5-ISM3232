//Task 1 - Create an Inventory Array of Product Object
const inventory = [{name: "Espresso" , price:4 , quantity:10},
                   {name:"Latte" , price: 6.50, quantity:5},
                   {name:"Cappuccino" , price: 6, quantity:6},
                   {name: "Mocha", price:5 , quantity:4}]
 // Initialization of array of objects

 //Task 2 - Create an Orders Array of Order Objects
 const orders =[]
 //I was a little consufed if this task was really supossed to be this simple

 //Task 3-Create a Function to Place an Order
 function findProduct(productName) {
    return inventory.find(prod => prod.name === productName)}; //Function created to help with task 4 for the code to be DRY
 function placeOrder(CustomerName, OrderedItems) {
    for (let item of OrderedItems) {
        let product = findProduct(item.productName);
        if (!product) {
            console.log(`${item.productName} was not found in inventory.`);//check for products that doesn't exist
            return};
        if (product.quantity < item.quantity) {
            console.log(`Stock is insufficient for ${item.productName}`);
            return}};
    for (let item of OrderedItems) {
        let product = inventory.find(prod => prod.name === item.productName);
        product.quantity -= item.quantity}; //Update stock
    orders.push({
        CustomerName: CustomerName,
        items: OrderedItems,
        status: "Pending"});
    console.log(`The order for ${CustomerName} was placed!`)};

//Task 4-Create a Function to Calculate Total for an Order
function calculateOrderTotal(order) {
    return order.items.reduce((total, item) => {
        let product = findProduct(item.productName); //helper function to DRY
        if (product) {
            return total + (product.price * item.quantity)}//Calculate the total 
        return total},0)};

//Task 5-Create a Function to Mark an Order as Completed
function completeOrder(CustomerName) {
    let order = orders.find(order => order.CustomerName === CustomerName);//Check the name in the order
    if (order) {
        order.status = "Completed";//change the status
        console.log(`Order for ${CustomerName} is completed!`)}
    else {
        console.log(`Order for ${CustomerName} was not found!`)}};

//Task 6-Create a Function to Check Pending Orders
function checkPendingOrders (orders){
   orders. forEach(order=>{
    if(order.status === "Pending")//Check the status of the order
        console.log(`Order for ${order.CustomerName}`);
        console.log(`Items:`);
        order.items.forEach(item=>{
        console.log(`${item.productName}, Quantity: ${item.quantity}`)
        });
        console.log(`Status: ${order.status}`)
        console.log(`----------------------`)})};