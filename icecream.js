
let findMore =  document.getElementById('findMore');
let logo = document.getElementById('logo');
let headerUl = document.getElementById('headerUl');
let bikePic2 = document.getElementById('bikePic2');
let menuUl = document.getElementById('menuUl');
let logoLight = document.getElementById('logoLight');
let packageSelectBox = document.getElementById('packageSelectBox');
let Xselect = document.getElementById('Xselect');
let packBox1 = document.getElementById('packBox1');
let packBox2 = document.getElementById('packBox2');
let packBox3 = document.getElementById('packBox3');
let packageSelectH1 = document.getElementById('packageSelectH1');



let findMoreFunction = () =>{
    findMore.style.opacity ='0';
    findMore.style.animation = ' appear 2s linear 2s forwards';
  
}

findMoreFunction();



findMore.onmousemove = () =>{
    findMore.style.animation = 'none';
    findMore.style.opacity = '0.5';
}

findMore.onmouseleave = () =>{

    findMore.style.opacity = '1';

}

// main logo will appear as page loads

let logoAppear = () =>{

    logo.style.animation = 'appear 2s linear 1s forwards';

}

logoAppear();




/*logo.onmouseover = () =>{
  logo.style.opacity = '1';
  logo.style.animation = 'spin 1s linear infinite';
 
  

}

logo.onmouseleave = () =>{
    logo.style.opacity = '1';
    logo.style.animation = 'none';
    
} */


/* tag variables and functions below*/


let tag = document.getElementById('tag');

let tag1 = document.getElementById('tag1');
let tag2 = document.getElementById('tag2');

let i = '';
tag.onclick = () =>{

if(i == 0){
    tag.style.animation = 'tagPress 1s linear forwards';
    menuDiv.style.animation = 'menuShow 1s linear forwards';
    menuUl.style.animation = 'ulShow 1s linear forwards';
    menuUl.style.display = 'block';
    tag1.style.animation = 'tag1 1s linear forwards';
    tag2.style.animation = 'tag2 1s linear forwards';
    packageSelectBoxOutView();
    i = 1;
} else{
    tag.style.animation = 'tagBack 1s linear forwards';
    menuDiv.style.animation = 'menuHide 1s linear forwards';
    menuUl.style.animation = 'ulHide 1s linear forwards';
    tag1.style.animation = 'tag1Reverse 1s linear forwards';
    tag2.style.animation = 'tag2Reverse 1s linear forwards';
    i = 0;
}
}



menuUl.onclick = () =>{

    tag.style.animation = 'tagBack 1s linear forwards';
    menuDiv.style.animation = 'menuHide 1s linear forwards';
    menuUl.style.animation = 'ulHide 1s linear forwards';
    tag1.style.animation = 'tag1Reverse 1s linear forwards';
    tag2.style.animation = 'tag2Reverse 1s linear forwards';
    i = 0;

}



findMore.onclick = () =>{

    if(i == 1){
    tag.style.animation = 'tagBack 1s linear forwards';
    menuDiv.style.animation = 'menuHide 1s linear forwards';
    menuUl.style.animation = 'ulHide 1s linear forwards';
    tag1.style.animation = 'tag1Reverse 1s linear forwards';
    tag2.style.animation = 'tag2Reverse 1s linear forwards';
    i = 0;
    }
}

// package select box in view functions below

let packageSelectBoxInView = () =>{

    packageSelectBox.style.display = 'block';
    packageSelectBox.style.animation = 
    'packageSelectInview 1s linear forwards';
    if(i == 1){
    tag.style.animation = 'tagBack 1s linear forwards';
    menuDiv.style.animation = 'menuHide 1s linear forwards';
    menuUl.style.animation = 'ulHide 1s linear forwards';
    tag1.style.animation = 'tag1Reverse 1s linear forwards';
    tag2.style.animation = 'tag2Reverse 1s linear forwards';
    i = 0;
    }
}

let packageSelectBoxOutView = () =>{

    
    packageSelectBox.style.animation = 
    'packageSelectOutview 1s linear forwards';

}


packBox1.onclick = () =>{

    packageSelectBoxInView();
    packageSelectH1.innerHTML = 'You have selected the silver package at £195';
    
}
packBox2.onclick = () =>{

    packageSelectBoxInView();
    packageSelectH1.innerHTML = 'You have selected the gold package at £285';
}
packBox3.onclick = () =>{

    packageSelectBoxInView();
    packageSelectH1.innerHTML = 'You have selected the platinum package at £395';
}


Xselect.onclick = () =>{

    packageSelectBoxOutView();

}


let iBack = () =>{
    i = 0;
}

iBack();