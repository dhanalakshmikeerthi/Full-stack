let product=[{
    image:"./cat.jpg",
    name:"Cat",
    color:"Grey",
    description:"Grey color Cat"
},

{
    image:"./dog.jpg",
    name:"Dog",
    color:"White&Brown",
    description:"white color Dog"
},



{
    image:"./horse.jpg",
    name:"Horse",
    color:"Brown",
    description:"brown color Horse"
},

{
    image:"./elephant.jpg",
    name:"Elephant",
    color:"Grey",
    description:"grey color Elephant"
},



{
    image:"./puppy.jpg",
    name:"Puppy",
    color:"White",
    description:"white color Puppy"
},

{
    image:"./donkey.jpg",
    name:"Donkey",
    color:"Grey",
    description:"grey color Donkey"
},




{
    image:"./fox.jpg",
    name:"Fox",
    color:"White",
    description:"white color Fox"
},

{
    image:"./cow.jpg",
    name:"Cow",
    color:"White",
    description:"white color Cow"
},

{
    image:"./deer.jpg",
    name:"Deer",
    color:"Brown",
    description:"brown color Deer"
},

    

{
    image:"./rabbit.jpg",
    name:"Rabbit",
    color:"White",
    description:"white color Rabbit"
},

{
    image:"./zebra.jpg",
    name:"Zebra",
    color:"White&Black",
    description:"white and black color Zebra"
},



{
    image:"./sheep.jpg",
    name:"Sheep",
    color:"White",
    description:"white color Sheep"


}]

let Data = product.map(ele =>{
 return (`<div class="card">
 <div class="image">
 <img src=${ele.image} />
 </div>
 <div class="heading">Description</div>
 <div class="details">${ele.description}</div>
 <div class="info">
 <div>${ele.name}</div>
 <div>${ele.color}</div>
 </div>
 </div>`)
})

let parent = document.getElementsByClassName("parent")[0]
let Merged = Data.join(",")
parent.innerHTML = Merged;