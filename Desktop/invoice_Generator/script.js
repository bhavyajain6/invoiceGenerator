let services = [
    {
        task:"Wash Car",
        price: 10
    },
    {
        task:"Mow Lawn",
        price:20
    },
    {
        task:"Pull Weeds",
        price:30
    }
];
let total = 0;
const washCar = document.querySelector('#wash-car');
const mowLawn = document.querySelector('#mow-lawn');
const pullweeds = document.querySelector('#pull-weeds');
const table = document.querySelector('#tab');
const amountTable = document.querySelector('#amount');
let listItems = '';
let clicked = false;

if(!clicked){
    washCar.addEventListener('click',()=>{
        clicked = true;
        total += 10;
        listItems = `<tr>
            <td class="table-left">${services[0].task}</td>
            <td class="table-right">$${services[0].price}</td>
        </tr>`;
        table.innerHTML += listItems;
        displayTotal();
    })
}




mowLawn.addEventListener('click',()=>{
    total += 20;
    listItems = `<tr>
        <td class="table-left">${services[1].task}</td>
        <td class="table-right">$${services[1].price}</td>
    </tr>`;
    table.innerHTML += listItems;
    displayTotal();

})


pullweeds.addEventListener('click',()=>{
    total += 30;
    listItems = `<tr>
        <td class="table-left">${services[2].task}</td>
        <td class="table-right">$${services[2].price}</td>
    </tr>`;
    table.innerHTML += listItems;
    displayTotal();

})


function displayTotal(){
    amountTable.innerHTML = `<tr>
        <td class="table-left">Total Amount to be Paid:</td>
        <td class="table-right">$${total}</td>
    </tr>`
    amountTable.style.borderTop = '1px solid #3A69D2';
}