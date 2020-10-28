let images = [{
	'url':'images/1 (1).jpg',
	'price': '10,000'
},{
	'url':'images/1 (2).jpg',
	'price':'15,500'

},{
	'url':'images/1.jpg',
	'price':'14,200'
},{
	'url':'images/1 (4).jpg',
	'price':'17,900'
},{
	'url':'images/1 (5).jpg',
	'price':'13,275'
},{
	'url':'images/1 (6).jpg',
	'price':'16,300'
},{
	'url':'images/1 (7).jpg',
	'price':'19,400'
},{
	'url':'images/1 (8).jpg',
	'price':'20,500'
},{
	'url':'images/1 (9).jpg',
	'price':'21,000'
},{
	'url':'images/1 (10).jpg',
	'price':'22,400'
},{
	'url':'images/1 (11).jpg',
	'price':'23,100'
},{
	'url':'images/1 (12).jpg',
	'price':'12,800'
}]

//attributes function

function setAttribute(el,attr){
    for(var key in attr){
        el.setAttribute(key,attr[key]);
    }
}

//dom elements
const phoneDiv =document.getElementById('phone-row');

//
images.forEach(image=>{

	//creating elements
    const coldiv= document.createElement('div');
    const imgdiv=document.createElement('div');
    const infodiv=document.createElement('div');
    const divlink =document.createElement('a');
    const price =document.createElement('h6');
    const img =document.createElement('img');
    const shopbtn =document.createElement('button');

    //setting Attributes
    setAttribute(coldiv,{"class":'col-6 col-md-4 style-col'});
    setAttribute(img,{"src":image.url,"class":"img-fluid"});
    setAttribute(infodiv,{"class":"info"});
    setAttribute(divlink,{"href":''});
    setAttribute(shopbtn,{"class":"btn btn-block btn-primary"});

    //text contents
    price.textContent= "Ksh "+image.price;
    shopbtn.textContent= "ADD TO CART";

    //appending
    imgdiv.appendChild(img);
    infodiv.append(price,shopbtn);
    divlink.append(imgdiv,infodiv);
    coldiv.appendChild(divlink);
    phoneDiv.appendChild(coldiv);

})
