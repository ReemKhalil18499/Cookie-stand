'use strict';

let hrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function random(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}


let shops = [];
function Shop(location, minimum, maximum, AverageCookies) {
    this.location = location;
    this.minimum = minimum;
    this.maximum = maximum;     
    this.AverageCookies =AverageCookies;
    this.randomcustomers = [];
    this.totalCookiesperday = 0;
    this.Customerseachhr = [];
    this.Cookieseachhr=[];
    this.getrandomcustomers();
    this.getAverageCookies();
    console.log(this);
    shops.push(this);
}




Shop.prototype.getrandomcustomers = function () {
    for (let i = 0; i < hrs.length; i++) {
        this.Customerseachhr.push(random(this.minimum, this.maximum));
    }
}

Shop.prototype.getAverageCookies = function () {
    for (let i = 0; i < hrs.length; i++) {
        this.Cookieseachhr.push(Math.floor(this.Customerseachhr[i] * this.AverageCookies));
        this.totalCookiesperday +=  this.Cookieseachhr[i];
       
    }
}
let seatle = new Shop("seatle", 23, 65, 6.3);
let Tokyo = new Shop("Tokyo", 3, 24, 1.2);
let Dubai = new Shop("Dubai", 11, 38, 3.7);
let Paris = new Shop("Paris", 20, 38, 2.3);
let Lima = new Shop("Lima", 2, 16, 4.6);


console.log(seatle);

console.log(shops);
for (let i = 0; i < shops.length; i++) {
    console.log(shops[i]);
    shops[i].getrandomcustomers();
    shops[i].getAverageCookies();


if (i==13) {
    let Total = 0;
    for (let j=0; j<14; j++) {
    Total =this.AverageCookies[j]+Total};
    liElement = document.createElement('li');
    SalmonCookies2.appendChild(liElement);
    liElement.textContent = `Total is ${Total}`;
    }
 
}
let parent = document.getElementById('shop');
console.log(shops);
let table = document.createElement('table');
parent.appendChild(table);

function header() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    let firsTh = document.createElement('th');
    headerRow.appendChild(firsTh);
    firsTh.textContent = 'name';
    for (let i = 0; i < hrs.length; i++) {
        let firsTh = document.createElement('th');
        headerRow.appendChild(firsTh);
        firsTh.textContent = hrs[i];
    }
    firsTh = document.createElement('th');
    headerRow.appendChild(firsTh);
    firsTh.textContent ="daily location total"
}

Shop.prototype.render = function () {
    let dataRow = document.createElement("tr");
    table.appendChild(dataRow);
    let nameTd = document.createElement("td");
    dataRow.appendChild(nameTd);
    nameTd.textContent = this.location;
    let summ=0
    for (let i = 0; i < hrs.length; i++) {
        let cookiestd = document.createElement("td");
        dataRow.appendChild(cookiestd);
        cookiestd.textContent = this.Cookieseachhr[i];
        summ+=this.Cookieseachhr[i];
    }
    let totalTd = document.createElement('td');
    dataRow.appendChild(totalTd);
    totalTd.textContent = summ
}

function footer() {
 let totalAll=0;
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    let firstTh = document.createElement('th');
    footerRow.appendChild(firstTh);
    firstTh.textContent = 'Totals'
    for (let i = 0; i < hrs.length; i++) {
        let sum=0
        for (let j = 0; j < shops.length; j++) {
           totalAll+=shops[j].Cookieseachhr[i] 
           sum+= shops[j].Cookieseachhr[i]
        }
        firstTh = document.createElement('th');
    footerRow.appendChild(firstTh);
    firstTh.textContent =sum;
        
    }
    firstTh = document.createElement('th');
    footerRow.appendChild(firstTh);
    firstTh.textContent =totalAll;
}
console.log(shops);
header();
for (let i = 0; i < shops.length; i++) {
    shops[i].getrandomcustomers();
    shops[i].getAverageCookies();
    shops[i].render();
}


let forms=document.getElementById('form');
forms.addEventListener('submit',formsSub);
function formsSub(event) {
    event.preventDefault();
   
    let location=event.target.location.value;
    let minimum=parseInt(event.target.minimum.value);
    let maximum=parseInt(event.target.maximum.value);
    let AverageCookies=parseInt(event.target.AverageCookies.value);
    let newLocation = new Shop(location, minimum, maximum, AverageCookies);

footerRow.textContent =``;
newLocation.getrandomcustomers();
    newLocation.getAverageCookies();
    newLocation.render();


footer();
}







footer();