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
        this.randomcustomers.push(random(this.minimum,this.maximum));
    }
},

getAverageCookies:function() {
    for (let i=0; i<14; i++) {
        this.AverageCookies.push(Math.floor(this.randomcustomers[i]*this.Average)); 

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

let h1name=document.createElement('h1');
console.log(h1name);
SalmonCookies.appendChild(h1name);
h1name.textContent='Seatle';

let SalmonCookies2=document.createElement('ul');
console.log (SalmonCookies2);
SalmonCookies.appendChild(SalmonCookies2);



for (let i = 0; i < 14; i++) {
   let liElement= document.createElement('li');
    SalmonCookies2.appendChild(liElement);
 liElement.textContent=`${hrs[i]} ${this.AverageCookies[i]} Cookies`;

if (i==13) {
    let Total = 0;
    for (let j=0; j<14; j++) {
    Total =this.AverageCookies[j]+Total};
    liElement = document.createElement('li');
    SalmonCookies2.appendChild(liElement);
    liElement.textContent = `Total is ${Total}`;
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
            this.randomcustomers.push(random(this.minimum,this.maximum));
        }
    },
    
    getAverageCookies:function() {
        for (let i=0; i<14; i++) {
            this.AverageCookies.push(Math.floor(this.randomcustomers[i]*this.Average)); 
    
        }
    }
    }
    
    Tokyo.getrandomcustomers();
    Tokyo.getAverageCookies();
    console.log(Tokyo.randomcustomers);
    console.log(Tokyo.AverageCookies);
    
    Tokyo.render=function(){
    let SalmonCookies=document.getElementById('SalmonCookies')
    console.log(SalmonCookies);
    let h1name=document.createElement('h1');
console.log(h1name);
SalmonCookies.appendChild(h1name);
h1name.textContent='Tokyo';
    
    let SalmonCookies2=document.createElement('ul');
    console.log (SalmonCookies2);
    
    SalmonCookies.appendChild(SalmonCookies2);
    
    for (let i = 0; i < 14; i++) {
       let liElement= document.createElement('li');
        SalmonCookies2.appendChild(liElement);
     liElement.textContent=`${hrs[i]} ${this.AverageCookies[i]} Cookies`;
    
    if (i==13) {
        let Total = 0;
        for (let j=0; j<14; j++) {
        Total =this.AverageCookies[j]+Total};
        liElement = document.createElement('li');
        SalmonCookies2.appendChild(liElement);
        liElement.textContent = `Total is ${Total}`;
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
                this.randomcustomers.push(random(this.minimum,this.maximum));
            }
        },
        
        getAverageCookies:function() {
            for (let i=0; i<14; i++) {
                this.AverageCookies.push(Math.floor(this.randomcustomers[i]*this.Average)); 
        
            }
        }
        }
        
        Dubai.getrandomcustomers();
        Dubai.getAverageCookies();
        console.log(Dubai.randomcustomers);
        console.log(Dubai.AverageCookies);
        
        Dubai.render=function(){
        let SalmonCookies=document.getElementById('SalmonCookies')
        console.log(SalmonCookies);

        let h1name=document.createElement('h1');
console.log(h1name);
SalmonCookies.appendChild(h1name);
h1name.textContent='Dubai';
        
        let SalmonCookies2=document.createElement('ul');
        console.log (SalmonCookies2);
        
        SalmonCookies.appendChild(SalmonCookies2);
        
        for (let i = 0; i < 14; i++) {
           let liElement= document.createElement('li');
            SalmonCookies2.appendChild(liElement);
         liElement.textContent=`${hrs[i]} ${this.AverageCookies[i]} Cookies`;
        
        if (i==13) {
            let Total = 0;
            for (let j=0; j<14; j++) {
            Total =this.AverageCookies[j]+Total};
            liElement = document.createElement('li');
            SalmonCookies2.appendChild(liElement);
            liElement.textContent = `Total is ${Total}`;
            }
        }
        }
        Dubai.render();
        
        let Paris={
            name:'Paris',
            minimum: 20,
            maximum:38 ,
            Average:2.3,
            randomcustomers:[],
            AverageCookies:[],
            
            getrandomcustomers:function(){
                for (let i=0; i<14; i++){
                    this.randomcustomers.push(random(this.minimum,this.maximum));
                }
            },
            
            getAverageCookies:function() {
                for (let i=0; i<14; i++) {
                    this.AverageCookies.push(Math.floor(this.randomcustomers[i]*this.Average)); 
            
                }
            }
            }
            
            Paris.getrandomcustomers();
            Paris.getAverageCookies();
            console.log(Paris.randomcustomers);
            console.log(Paris.AverageCookies);
            
            Paris.render=function(){
            let SalmonCookies=document.getElementById('SalmonCookies')
            console.log(SalmonCookies);

            let h1name=document.createElement('h1');
console.log(h1name);
SalmonCookies.appendChild(h1name);
h1name.textContent='Paris';
            
            let SalmonCookies2=document.createElement('ul');
            console.log (SalmonCookies2);
            
            SalmonCookies.appendChild(SalmonCookies2);
            
            for (let i = 0; i < 14; i++) {
               let liElement= document.createElement('li');
                SalmonCookies2.appendChild(liElement);
             liElement.textContent=`${hrs[i]} ${this.AverageCookies[i]} Cookies`;
            
            if (i==13) {
                let Total = 0;
                for (let j=0; j<14; j++) {
                Total =this.AverageCookies[j]+Total};
                liElement = document.createElement('li');
                SalmonCookies2.appendChild(liElement);
                liElement.textContent = `Total is ${Total}`;
                }
            }
            }
            Paris.render();
            

        let Lima={
            name:'Lima',
            minimum: 2,
            maximum:16 ,
            Average:4.6,
            randomcustomers:[],
            AverageCookies:[],
            
            getrandomcustomers:function(){
                for (let i=0; i<14; i++){
                    this.randomcustomers.push(random(this.minimum,this.maximum));
                }
            },
            
            getAverageCookies:function() {
                for (let i=0; i<14; i++) {
                    this.AverageCookies.push(Math.floor(this.randomcustomers[i]*this.Average)); 
            
                }
            }
            }
            
            Lima.getrandomcustomers();
            Lima.getAverageCookies();
            console.log(Lima.randomcustomers);
            console.log(Lima.AverageCookies);
            
            Lima.render=function(){
            let SalmonCookies=document.getElementById('SalmonCookies')
            console.log(SalmonCookies);

            let h1name=document.createElement('h1');
console.log(h1name);
SalmonCookies.appendChild(h1name);
h1name.textContent='Lima';
            
            let SalmonCookies2=document.createElement('ul');
            console.log (SalmonCookies2);
            
            SalmonCookies.appendChild(SalmonCookies2);
            
            for (let i = 0; i < 14; i++) {
               let liElement= document.createElement('li');
                SalmonCookies2.appendChild(liElement);
             liElement.textContent=`${hrs[i]} ${this.AverageCookies[i]} Cookies`;
            
            if (i==13) {
                let Total = 0;
                for (let j=0; j<14; j++) {
                Total =this.AverageCookies[j]+Total};
                liElement = document.createElement('li');
                SalmonCookies2.appendChild(liElement);
                liElement.textContent = `Total is ${Total}`;
                }
            }
            }
            Lima.render();
            
    
















