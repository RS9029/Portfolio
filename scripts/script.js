//NIGHT MODE

//variables
const nightModeButton = document.getElementById('night-mode-button');
const moonIcon = document.getElementById("moon");
const moonRing = document.getElementById("moon-ring");
const bg = document.body;
const moonSun = document.getElementById('moon-sun');
const mainHeadings = document.querySelectorAll('.headings');
const stars = document.querySelectorAll('.stars');


//functions

function nightTime(){
    
    //icon change
    moonIcon.getAttribute('fill')=='#eca81f'? moonIcon.setAttribute('fill','#989898'):moonIcon.setAttribute('fill','#eca81f');
    moonRing.getAttribute('stroke')=='#eca81f'?moonRing.setAttribute('stroke','#989898'):moonRing.setAttribute('stroke','#eca81f');

    //background change
    
    
    bg.style.backgroundColor.includes('rgb(185, 234, 255)')? bg.style.backgroundColor = 'rgb(7,24,48)':bg.style.backgroundColor = 'rgb(185, 234, 255)';

    //moon/sun change
    moonSun.getAttribute('src')=='resources/Sun.svg'? moonSun.setAttribute('src','resources/moon.svg'): moonSun.setAttribute('src','resources/Sun.svg');

    //main heading change
    mainHeadings.forEach(heading=>{
        heading.style.color === 'white'? heading.style.color = 'black': heading.style.color = 'white';

    })

    //stars change
    stars.forEach(star =>{
        star.getAttribute('style').includes('none')? star.style.display = 'block': star.style.display = 'none';
    })
    


}

nightModeButton.addEventListener('click', nightTime);




//PROJECT SELECTOR

const allButton = document.getElementById('all');
const popularButton = document.getElementById('most-popular');
const latestButton = document.getElementById('latest');
const jsButton = document.getElementById('js');
const reactButton = document.getElementById('react');
const htmlcssButton = document.getElementById('htmlcss');


const projects = document.querySelectorAll(".project");


//show all

allButton.addEventListener('click',()=>{
    projects.forEach(project=>{
        project.classList.add('active');
    })
})



//filter latest
latestButton.addEventListener('click',()=>{
    projects.forEach(project =>{
        if(project.classList.contains('latest')){
            project.classList.add('active');
        }

        else{
            project.classList.remove('active');
        }
    })
})


// filter js
jsButton.addEventListener('click',()=>{
    projects.forEach(project =>{
        if(project.classList.contains('js')){
            project.classList.add('active');
        }

        else{
            project.classList.remove('active');
        }
    })
})

// filter react

reactButton.addEventListener('click',()=>{
    projects.forEach(project =>{
        if(project.classList.contains('react')){
            project.classList.add('active');
        }

        else{
            project.classList.remove('active');
        }
    })
})

//html/css filter
htmlcssButton.addEventListener('click',()=>{
    projects.forEach(project =>{
        if(project.classList.contains('htmlcss')){
            project.classList.add('active');
        }

        else{
            project.classList.remove('active');
        }
    })
})

//most popular filter

popularButton.addEventListener('click',()=>{
    projects.forEach(project =>{
        if(project.classList.contains('most-popular')){
            project.classList.add('active');
        }

        else{
            project.classList.remove('active');
        }
    })
})



//TYPING 


const texts = ['Front-End Developer', 'UI Designer', 'Web Developer']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
            setTimeout(()=>{
                count++;
                index = 0;
            },1000);
            
    }
    setTimeout(type,200);

}());