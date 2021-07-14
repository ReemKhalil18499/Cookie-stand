'use strict';

let hrs=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function random (minimum,maximum){
    return Math.floor(math.random()*(maximum-minimum+1))+minimum;
    }
    let shops=[];
    function Shop(location,minimum,maximum,AverageCookies){
    this.location=location;
    this.minimum=minimum;
    this.maximum=maximum;
    this.randomcustomers=[];
    this.AverageCookies=[];
    this.totalCookiesperday=0;
    this.Customerseachhr=[];
    this.Cookieseachhr=[];
    console.log(this);
    shops.push(this);
    }
    shops.prototype.getrandomcustomers=function() {
    for (let i=0;i<hrs.length;i++){
    this.Customerseachhr.push(random(this.minimum,this.maximum));
    }
}
shop.prototype.getAverageCookies=function() {
    for (let i=0;i<hrs.length;i++){
        this.Cookieseachhr.push(Math.floor(this.Customerseachhr[i]*this.AverageCookies));
       this.totalCookiesperday += this
        this.Cookieseachhr[i];
    }
}
let seatle=new shop("seatle",23,65,6.3);
let Tokyo=new shop("Tokyo",3,24,1.2);
let Dubai=new shop("Dubai",11,38,3.7);
let Paris=new shop("Paris",20,38,2.3);
let Lima=new shop("Lima",2,16,4.6);

seatle.getrandomcustomers();
seatle.getAverageCookies();
console.log(seatle);

console.log(shops);
for (let i=0;i<shops.length; i++) {
    console.log(shops[i]);
    shops[i].getrandomcustomers();
    shops[i].getAverageCookies();
}
let parent=document.getElementById('shop');
console.log(shops);
let table=document.createElement('table');
parent.appendChild(table);

function header(){
    let headerRow=document.createElement('tr');
    table.appendchild(headerRow);
let firsTh=document.createElement('th');
headerRow.appendchild(firsTh);
firsTh.textContent='name';
for (let i=0;i<hours.length;i++){
let hoursTh=document.createElement('th');
headerRow.appendChild(hoursTh);
hoursTh.textContent=hours[i];  
}


for (let i=0;i<hrs.length;i++){
console.log(hrs[i]);
}
let totalOfTotals=0;
for (let i=0;i<hrs.length;i++){
    console.log(hrs[i]);
    let totalForEachHr=0;
    for (let j=0;j<shops.length;j++){
        totalForEachHr += shops[j];
        Cookieseachhr[i];
        totalOfTotals+=shops[j];
        Cookieseachhr[i];
    }
console.log(totalForEachHr);
console.log('Totals',totalOfTotals);
let footerTh=document.createElement('th');
footerRow.appendChild(footerTh);
footerTh.textContent=totalForEachHr;
}
let lastTh=document.createElement('th');
headerRow.appendChild(lastTh);
lastTh.textContent="daily location total"
}
    shops.prototype.render=function(){
let dataRow=document.createElement("tr");
table.appendChild(dataRow);
let nameTd=document.createElement("td");
dataRow.appendchild(nameTd);
nameTd.textContent=this.locationname;

for(let i=0;i<hrs.length;i++){
let cookiestd=document.createElement("td");
dataRow.appendchild(cookiestd);
cookiestd.textContent=this.Cookieseachhr[i];
}
let totalTd=document.createElement('td');
dataRow.appendchild(totalTd);
totalTd.textContent=this
totalCookiesperday;
    }
    
function footer(){
    let footerRow=document.createElement('tr');
    table.appendchild(footerRow);
    let firstTh=document.createElement('th');
    footerRow.appendchild(firstTh);
    firstTh.textContent='Totals'    
    for (let i=0;i<hrs.length;i++){
        console.log(hrs[i]);
        let totalForEachHr=0;
        console.log(totalForEachHr+50);
    }
}
console.log(shops);
header();
for (let i=0; i<shops.length; i++) {
    shops[i].getrandomcustomers();
    shops[i].getAverageCookies();
    shops[i].render();
    }
    footer();
}
