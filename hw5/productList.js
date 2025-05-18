const products =
    [
        {
            type: 'Phone',
            quantity: 530,
            price: 1200,
            isBought: false
        },
        {
            type: 'Laptop',
            quantity: 432,
            price: 2000,
            isBought: true
        },
        {
            type: 'PC',
            quantity: 1512,
            price: 2610,
            isBought: false
        }
    ];

// 1
const app = document.querySelector('#app');

function printProducts()
{
    let sortBought = [...products].sort((a, b) => a.isBought > b.isBought ? 1 : -1);
    let content = sortBought.map(product =>
    `
        <div class="product">
            <h2>${product.type}</h2>
            <p>Quantity: ${product.quantity}</p>
            <p class="${product.isBought ? 'bought' : 'not-bought'}">
                ${product.isBought ? 'bought' : 'not bought'}
            </p>
        </div>
    `
    );
    app.innerHTML = content.join('');
}

function addProduct(type, quantity, price)
{
    let found = products.find(item => item.type === type);
    if (found)
    {
        found.quantity += quantity;
    }
    else
    {
        products.push({type, quantity, price, isBought: false});
    }
    printProducts();
}

function boughtProduct(type)
{
    let found = products.find(item => item.type.toLowerCase() === type.toLowerCase());
    if (found)
    {
        found.isBought = true;
    }
    printProducts();
}

addProduct('TV', 26, 1900);
boughtProduct('TV')

// 2
function printReceipt()
{
    products.forEach(item => {
       console.log(`${item.type}\nQuantity - ${item.quantity}\nPrice - ${item.price}\nTotal - ${item.price * item.quantity}`);
    });
}

printReceipt();

function totalSum()
{
    return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
}

console.log(totalSum());

function getMostExpensivePurchase()
{
    return products.reduce((max, item) =>
        (item.price * item.quantity > max.price * max.quantity) ? item : max
    );
}

console.log(`${getMostExpensivePurchase().type}
Quantity - ${getMostExpensivePurchase().quantity}
Price - ${getMostExpensivePurchase().price}
Total - ${getMostExpensivePurchase().price * getMostExpensivePurchase().quantity}`);

function getAveragePrice()
{
    let totalProducts = products.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = totalSum();
    return totalPrice / totalProducts;
}

console.log(getAveragePrice());

// 3
const styles =
    [
        {
            name: 'color',
            value: 'green'
        },
        {
            name: 'font-size',
            value: '25px'
        },
        {
            name: 'text-align',
            value: 'center'
        },
        {
            name: 'text-decoration',
            value: 'underline'
        },
        {
            name: 'font-weight',
            value: 'bold'
        }
    ];

function printStyleText(text)
{
    let styleText = styles.map(style => `${style.name}: ${style.value}`).join('; ');
    document.write(`<p style="${styleText}">${text}</p>`);
}

printStyleText('HELLO');

// 4
const auditoriums =
    [
        {
            name: 'Auditorium B2',
            seats: 20,
            faculty: 'Physics'
        },
        {
            name: 'Auditorium A1',
            seats: 12,
            faculty: 'Mathematics'
        },
        {
            name: 'Auditorium E5',
            seats: 15,
            faculty: 'Physics'
        },
        {
            name: 'Auditorium C3',
            seats: 18,
            faculty: 'Mathematics'
        },
        {
            name: 'Auditorium D4',
            seats: 16,
            faculty: 'Computer Science'
        }
    ];


function printAuditoriums()
{
    console.log('\n');
    for (const item of auditoriums)
    {
        console.log(`${item.name}\nSeats: ${item.seats}\nFaculty: ${item.faculty}`);
    }
}

printAuditoriums();

function getFaculty(faculty)
{
    let result = auditoriums.filter(auditorium => auditorium.faculty.toLowerCase() === faculty.toLowerCase());
    return result.forEach(item => console.log(`${item.name}\nSeats: ${item.seats}\n Faculty: ${item.faculty}`));
}

console.log('\nSame faculty:');

getFaculty('Mathematics');

function isSuitable(name)
{
    let found = auditoriums.find(auditorium => auditorium.name === name);
    let result = auditoriums.filter(auditorium => auditorium.seats >= found.seats && auditorium.faculty === found.faculty);
    return result.forEach(item => console.log(`${item.name}\nSeats: ${item.seats}\n Faculty: ${item.faculty}`));
}

console.log('\nSuitable auditoriums:');

isSuitable('Auditorium A1');

let sortBySeats = auditoriums.sort((a, b) => a.seats - b.seats);
printAuditoriums();

let sortByName = auditoriums.sort((a, b) => a.name > b.name ? 1 : -1);
printAuditoriums();