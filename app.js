var products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];

function productMaker(itm){
    let that = this;

    this.ele = document.createElement("div");
    this.name = document.createElement("div");
    this.price = document.createElement("div");
    this.image = document.createElement("img");

    this.color = itm.color;
    this.image.src = itm.image;
    this.name.innerHTML = "Name: " + itm.name;
    this.price.innerHTML = "Price: $" + itm.price;

    this.image.classList.add("productImg");
    this.ele.classList.add("product");
    this.ele.appendChild(this.image);
    this.ele.appendChild(this.name);
    this.ele.appendChild(this.price);

    this.ele.addEventListener("mouseenter",function (){
        this.style.borderColor=that.color;
    })
    this.ele.addEventListener("mouseleave", function (){
        this.style.borderColor="black";
    })

    this.ele.addEventListener("click", function (){
        that.popOut();

    })
    document.body.appendChild(this.ele);

}

productMaker.prototype.popOut = function(){
    let that = this;
    this.popOutEle = document.createElement("div");
    this.popOutEle.classList.add("popUp");
    this.popOutEle.addEventListener("click", function(){
        that.popAway();
    });

    this.popOutEle.appendChild(this.name);
    this.popOutEle.appendChild(this.price);
    this.popOutEle.appendChild(this.image);
    document.body.appendChild(this.popOutEle);
};

productMaker.prototype.popAway = function () {
    let that = this;
    that.popOutEle.classList.remove("popUp");
    this.ele.appendChild(this.image);
    this.ele.appendChild(this.name);
    this.ele.appendChild(this.price);
};



for(let i=0; i<products.length; i++){
    let box = new productMaker(products[i]);
}