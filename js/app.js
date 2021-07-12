'use strict';

let hrs=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let seatle={
name:'Seatle',
minimum: 23,
maximum:65 ,
Average:6.3,
randomcustomers:[],
AverageCookies:[],

getrandomcustomers:function(){
    for (let i=0; i<14; i++){
        let random2=random(this.minimum,this.maximum)
        this.randomcustomers.push(random2)
    }
},

getAverageCookies:function() {
    for (let i=0; i<14; i++) {
        this.AverageCookies.push(this.randomcustomers[i]*this.Average); 

    }
}
}

seatle.getrandomcustomers();
seatle.getAverageCookies();
console.log(seatle.randomcustomers);
console.log(seatle.AverageCookies);

seatle.render=function(){
let SalmonCookies=document.getElementById('SalmonCookies')
console.log(SalmonCookies);

let SalmonCookies2=document.createElement('ul');
console.log (SalmonCookies2);

SalmonCookies.appendChild(SalmonCookies2);

for (let i = 0; i < 14; i++) {
   let liElement= document.createElement('li');
    SalmonCookies2.appendChild(liElement);
    liElement.textContent= [i];
 SalmonCookies2.textContent=(`${hrs[i]} ${seatle.AverageCookies[i]} Cookies`)

if (i ==13) {
    let Total = 0
    for (let j = 0; j < 14; j++) {
    Total =this.AverageCookieshrs[j] + Total;
    }
    liElement = document.createElement('li');
    SalmonCookies2.appendChild(liElement);
    liElement.textContent = `Total is ${Total}`
    }
}
}


seatle.render();

let Tokyo={
    name:'Tokyo',
    minimum: 3,
    maximum:24 ,
    Average:1.2,
    randomcustomers:[],
    AverageCookies:[],

    getrandomcustomers:function(){
        for (let i=0; i<14; i++){
            let random2=random1(this.minimum,this.maximum)
            this.randomcustomers.push(random2)
        }
    },
    
    getAverageCookies:function() {
        for (let i=0; i<14; i++) {
            this.AverageCookies.push(this.randomcustomers[i]*this.Average); 
    
        }
    }
    }
    seatle.getrandomcustomers();
    seatle.getAverageCookies();
    console.log(seatle.randomcustomers);
    console.log(seatle.AverageCookies);

    Tokyo.render=function(){
    let SalmonCookies=document.getElementById('SalmonCookies')
console.log(SalmonCookies);

let SalmonCookies2=document.createElement('ul');
console.log (SalmonCookies2);

SalmonCookies.appendChild(SalmonCookies2);

for (let i = 0; i < 15; i++) {
   let liElement= document.createElement('li');
   SalmonCookies2.appendChild(liElement);
    liElement.textContent= [i];
SalmonCookies2.textContent=(`${hrs[i]} ${seatle.AverageCookies[i]} Cookies`)

if (i == 13) {
    let Total = 0
    for (let j = 0; j < 14; j++) {

        Total = this.AverageCookieshrs[j] + Total

    }
    liElement = document.createElement('li');
    SalmonCookies2.appendChild(liElement);
    liElement.textContent = `Total is ${Total}`



}
}
    }
    Tokyo.render();

    let Dubai={
        name:'Dubai',
        minimum: 11,
        maximum:38 ,
        Average:3.7,
        randomcustomers:[],
        AverageCookies:[],
    
        getrandomcustomers:function(){
            for (let i=0; i<14; i++){
                let random2=random1(this.minimum,this.maximum)
                this.randomcustomers.push(random2)
            }
        },
        
        getAverageCookies:function() {
            for (let i=0; i<14; i++) {
                this.AverageCookies.push(this.randomcustomers[i]*this.Average); 
        
            }
        }
        }
        seatle.getrandomcustomers();
        seatle.getAverageCookies();
        console.log(seatle.randomcustomers);
        console.log(seatle.AverageCookies);

        Dubai.render=function(){
        let SalmonCookies=document.getElementById('SalmonCookies')
console.log(SalmonCookies);

let SalmonCookies2=document.createElement('ul');
console.log (SalmonCookies2);

SalmonCookies.appendChild(SalmonCookies2);

for (let i = 0; i < 15; i++) {
   let liElement= document.createElement('li');
   SalmonCookies2.appendChild(liElement);
    liElement.textContent= [i];
SalmonCookies2.textContent=(`${hrs[i]} ${seatle.AverageCookies[i]} Cookies`)

if (i == 13) {
    let Total = 0
    for (let j = 0; j < 14; j++) {

        Total = this.AverageCookieshrs[j] + Total

    }
    liElement = document.createElement('li');
    SalmonCookies2.appendChild(liElement);
    liElement.textContent = `Total is ${Total}`



}
}
        }
    Dubai.render();


        let Lima={
            name:'Lima',
            minimum: 2,
            maximum:16 ,
            Average:4.6,
            randomcustomers:[],
            AverageCookies:[],
        
            getrandomcustomers:function(){
                for (let i=0; i<14; i++){
                    let random2=random1(this.minimum,this.maximum)
                    this.randomcustomers.push(random2)
                }
            },
            
            getAverageCookies:function() {
                for (let i=0; i<14; i++) {
                    this.AverageCookies.push(this.randomcustomers[i]*this.Average); 
            
                }
            }
            }
            
            seatle.getrandomcustomers();
            seatle.getAverageCookies();
            console.log(seatle.randomcustomers);
            console.log(seatle.AverageCookies);

            Lima.render=function(){
            let SalmonCookies=document.getElementById('SalmonCookies')
            console.log(SalmonCookies);
            
            let SalmonCookies2=document.createElement('ul');
            console.log (SalmonCookies2);
            
            SalmonCookies.appendChild(SalmonCookies2);
            
            for (let i = 0; i < 15; i++) {
               let liElement= document.createElement('li');
               SalmonCookies2.appendChild(liElement);
                liElement.textContent= [i];
            SalmonCookies2.textContent=(`${hrs[i]} ${seatle.AverageCookies[i]} Cookies`)

            if (i == 13) {
                let Total = 0
                for (let j = 0; j < 14; j++) {
            
                    Total = this.AverageCookieshrs[j]+ Total
            
                }
                liElement = document.createElement('li');
                SalmonCookies2.appendChild(liElement);
                liElement.textContent = `Total is ${Total}`
            
            
            
            }
            }
        }
        Lima.render();

            
















