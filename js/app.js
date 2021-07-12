'use strict';

let hrs=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


function random (minimum,maximum){
return Math.floor(math.random()*(maximum-minimum+1))+minimum;
}
let shop=[];
function Restaurant(location,minimum,maximum,Average){
this.location=location;
this.minimum=minimum;
this.maximum=maximum;
this.Average=Average;
this.randomcustomers=[];
this.AverageCookies=[];
shop.push(this.location);
}
let seatle=new Restaurant("seatle",23,65,6.3);
let Tokyo=new Restaurant("Tokyo",3,24,1.2);
let Dubai=new Restaurant("Dubai",11,38,3.7);
let Paris=new Restaurant("Paris",20,38,2.3);
let Lima=new Restaurant ("Lima",2,16,4.6);

Restaurant.prototype.getrandomcustomers=function(){
for (let i=0;i<hours.length;i++){
this.AverageCookies.push(math.floor(this.randomcustomers[i]))
}
}
let thead;
let trow;
let parent;
let table;
let tdata;
function header(){
parent=document.getElementById("Restaurant");
table=document.createElement("table");
parent.appendchild(table);
trow=document.createElement("tr");
table.appendChild(trow);
thead=document.createElement("th");
trow.appendChild(thead);
thead.textContent=""

for (let i=0; i<13; i++) {
thead=document.createElement('th');
trow.appendChild(thead);
thead.textContent=`${hrs[i]}`    
}
thead=document.createElement("th");
trow.appendChild(thead);
thead.textContent="daily location total"
}
header();

Restaurant.prototype.render=function(){
trow=document.createElement("tr");
table.appendChild(trow);
tdata=document.createElement("td");
trow.appendchild(tdata);
tdata.textContent=`${this.location}`
for(let i=0;i<13;i++){
tdata=document.createElement("td");
trow.appendchild(tdata);
tdata.textContent=`${this.AverageCookies[i]}`
}
}
for (let i=0;i<shop.length; i++) {
    console.log(shop[i]);
    shop[i].randomcustomers();
    shop[i].AverageCookies();
    shop[i].render();
    console.log(shop[i]);
}




// let Seatle={
// name:'Seatle',
// minimum: 23,
// maximum:65 ,
// Average:6.3,
// randomcustomers:[],
// AverageCookies:[],

// getrandomcustomers:function(){
//     for (let i=0; i<14; i++){
//         let random2=random1(this.minimum,this.maximum)
//         this.randomcustomers.push(random2)
//     }
// },

// getAverageCookies:function() {
//     for (let i=0; i<14; i++) {
//         this.AverageCookies.push(this.randomcustomers[i]*this.Average); 

//     }
// }
// }

// seatle.getrandomcustomers();
// seatle.getAverageCookies();
// console.log(seatle.randomcustomers);
// console.log(seatle.AverageCookies);

// Seatle.render=function(){
// let SalmonCookies=document.getElementById('SalmonCookies')
// console.log(SalmonCookies);

// let SalmonCookies2=document.createElement('ul');
// console.log (SalmonCookies2);

// SalmonCookies.appendChild(SalmonCookies2);

// for (let i = 0; i < 15; i++) {
//    let liElement= document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent= [i];
// SalmonCookies2.textContent=(`${hrs[i]} ${Seatle.SalmonCookies2[i]} Cookies`)
// }
// }
// Seatle.render();

// let Tokyo={
//     name:'Tokyo',
//     minimum: 3,
//     maximum:24 ,
//     Average:1.2,
//     randomcustomers:[],
//     AverageCookies:[],

//     getrandomcustomers:function(){
//         for (let i=0; i<14; i++){
//             let random2=random1(this.minimum,this.maximum)
//             this.randomcustomers.push(random2)
//         }
//     },
    
//     getAverageCookies:function() {
//         for (let i=0; i<14; i++) {
//             this.AverageCookies.push(this.randomcustomers[i]*this.Average); 
    
//         }
//     }
//     }
//     seatle.getrandomcustomers();
//     seatle.getAverageCookies();
//     console.log(seatle.randomcustomers);
//     console.log(seatle.AverageCookies);

//     Tokyo.render=function(){
//     let SalmonCookies=document.getElementById('SalmonCookies')
// console.log(SalmonCookies);

// let SalmonCookies2=document.createElement('ul');
// console.log (SalmonCookies2);

// SalmonCookies.appendChild(SalmonCookies2);

// for (let i = 0; i < 15; i++) {
//    let liElement= document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent= [i];
// SalmonCookies2.textContent=(`${hrs[i]} ${Seatle.SalmonCookies2[i]} Cookies`)
// }
//     }
//     Tokyo.render();

//     let Dubai={
//         name:'Dubai',
//         minimum: 11,
//         maximum:38 ,
//         Average:3.7,
//         randomcustomers:[],
//         AverageCookies:[],
    
//         getrandomcustomers:function(){
//             for (let i=0; i<14; i++){
//                 let random2=random1(this.minimum,this.maximum)
//                 this.randomcustomers.push(random2)
//             }
//         },
        
//         getAverageCookies:function() {
//             for (let i=0; i<14; i++) {
//                 this.AverageCookies.push(this.randomcustomers[i]*this.Average); 
        
//             }
//         }
//         }
//         seatle.getrandomcustomers();
//         seatle.getAverageCookies();
//         console.log(seatle.randomcustomers);
//         console.log(seatle.AverageCookies);

//         Dubai.render=function(){
//         let SalmonCookies=document.getElementById('SalmonCookies')
// console.log(SalmonCookies);

// let SalmonCookies2=document.createElement('ul');
// console.log (SalmonCookies2);

// SalmonCookies.appendChild(SalmonCookies2);

// for (let i = 0; i < 15; i++) {
//    let liElement= document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent= [i];
// SalmonCookies2.textContent=(`${hrs[i]} ${Seatle.SalmonCookies2[i]} Cookies`)
// }
//         }
//     Dubai.render();


//         let Lima={
//             name:'Lima',
//             minimum: 2,
//             maximum:16 ,
//             Average:4.6,
//             randomcustomers:[],
//             AverageCookies:[],
        
//             getrandomcustomers:function(){
//                 for (let i=0; i<14; i++){
//                     let random2=random1(this.minimum,this.maximum)
//                     this.randomcustomers.push(random2)
//                 }
//             },
            
//             getAverageCookies:function() {
//                 for (let i=0; i<14; i++) {
//                     this.AverageCookies.push(this.randomcustomers[i]*this.Average); 
            
//                 }
//             }
//             }
            
//             seatle.getrandomcustomers();
//             seatle.getAverageCookies();
//             console.log(seatle.randomcustomers);
//             console.log(seatle.AverageCookies);

//             Lima.render=function(){
//             let SalmonCookies=document.getElementById('SalmonCookies')
//             console.log(SalmonCookies);
            
//             let SalmonCookies2=document.createElement('ul');
//             console.log (SalmonCookies2);
            
//             SalmonCookies.appendChild(SalmonCookies2);
            
//             for (let i = 0; i < 15; i++) {
//                let liElement= document.createElement('li');
//                 ulElement.appendChild(liElement);
//                 liElement.textContent= [i];
//             SalmonCookies2.textContent=(`${hrs[i]} ${Seatle.SalmonCookies2[i]} Cookies`)
//             }
//         }
//         Lima.render();

            
















