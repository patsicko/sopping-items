let cart=document.getElementById("body");
let body=document.getElementById("bd");
let container=document.getElementById("container");
let cont=document.getElementById("cont");

console.log(cart);

let number=document.querySelectorAll("#number");

console.log(number);
let numberList=Array.from(number);


let displayId=document.getElementById("displayId");
let arrow=document.getElementById("arrow");
let pop=document.getElementById("pop");

let activeStep=0;
numberList[activeStep].classList.add("change");


        let items=[];

        function Item(id,name,src){
                this.id=id;
                this.name=name;
                this.src=src;
        }


        let bag=new Item("1","bag","bag.jpeg");
        items.push(bag);

        let laptop=new Item("2","laptop","laptop.jpg");
        let phone=new Item("3","phone","phone.jpeg");
        let shoes=new Item("4","shoes","shoes.jpg");
        let hat=new Item("5","hat","hat.jpeg");

        items.push(laptop);
        items.push(phone);
        items.push(shoes);
        items.push(hat);

        // console.log(items);

      document.addEventListener("DOMContentLoaded",(e)=>{
     
        cart.innerHTML="";
     items.map((item,index)=>{
    
    
       cart.innerHTML+=`<img onClick="itemId(${item.id})"  height="200px" width="200px" src=${item.src}>`;



         })

})


function itemId(id){

        displayId.innerHTML=id;
}


 arrow.addEventListener("click",()=>{
        activeStep++;
         numberList[activeStep].classList.add("change");


         cart.innerHTML="";
         
         for(let i=0;i<carts.length;i++){
              let source=carts[i].src;

               cart.innerHTML+=`<img  height="200px" width="200px" src=${source}>`;

               
             console.log(cart.innerHTML);
         }
 
             
     })

 















    