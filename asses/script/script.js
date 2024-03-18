let _main = document.getElementsByTagName('main')[0]
let r 
let g
let l = 100       
let _dimensions   
console.log(2);
function myFunc() {
    for (let i = 0; i <8; i++)this. reg()
    l=100
}
function myFunc2() {
    for (let i = 0; i <8; i++)this. reg2()
    l=100
}
setInterval(myFunc2 , 10000);

function reg() {        
    _color()
    _wh()       
    let _div = document.createElement('div')
    _main.appendChild(_div)
    _div.style.backgroundColor = `rgb(${r} , ${g} , ${b} )`        
    _div.style.height =_dimensions + 'px'  
    _div.style.width =_dimensions + 'px'    
    _div.style.borderRadius = '10px' 
    _div.style.position = 'absolute'
    _div.style.left = l + 'px'       
    l+=180    
    _div.style.top = b + 'px'      
   _div.classList.add('animate-rot')                             
    }
    function reg2(){      
    let _box = document.createElement('main') 
    document.getElementById('subBox').appendChild(_box)
    _box.classList.add('w-full','absolute' ,'animate-test')
    _color()
    _wh() 
    let _div = document.createElement('div') 
    _box.appendChild(_div)  
    _div.style.backgroundColor = `rgb(${r} , ${g} , ${b} )`        
    _div.style.height =_dimensions + 'px'  
    _div.style.width =_dimensions + 'px'    
    _div.style.borderRadius = '10px' 
    _div.style.position = 'absolute'
    _div.style.left = l + 'px'       
    l+=180    
    _div.style.top = b + 'px'      
   _div.classList.add('animate-rot')    
                               
    }

function _color() {
     r = parseInt(Math.random()* 256)
     g = parseInt(Math.random()* 256)
     b = parseInt(Math.random()* 256)       
}

function _wh() {
    _dimensions = parseInt((Math.random() * 100) + 50)     
}

