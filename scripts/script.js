//NIGHT MODE

//variables
const nightModeButton = document.getElementById('night-mode-button');
const moonIcon = document.getElementById("moon");
const moonRing = document.getElementById("moon-ring");
const bg = document.body;
const moonSun = document.getElementById('moon-sun');
const mainHeadings = document.querySelectorAll('.headings');
const stars = document.querySelectorAll('.stars');
const contactInputs = document.querySelectorAll('.contact-input');


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

    // contact form color change
    contactInputs.forEach(input=>{
        input.classList.contains('contact-night')? input.classList.remove('contact-night'):input.classList.add('contact-night');
    })
    


}

nightModeButton.addEventListener('click', nightTime);




//PROJECT SELECTOR

const allButton = document.getElementById('all');
const latestButton = document.getElementById('latest');
const jsButton = document.getElementById('js-btn');
const reactButton = document.getElementById('react');
const nodeJsButton = document.getElementById('node-js');
const bootstrapBtn = document.getElementById('bootstrap-btn');
const sassBtn = document.getElementById('sass-btn')



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

// filter Node JS

nodeJsButton.addEventListener('click',()=>{
    projects.forEach(project =>{
        if(project.classList.contains('nodeJs')){
            project.classList.add('active');
        }

        else{
            project.classList.remove('active');
        }
    })
})

// filter Bootstrap

bootstrapBtn.addEventListener('click',()=>{
    projects.forEach(project =>{
        if(project.classList.contains('bootstrap')){
            project.classList.add('active');
        }

        else{
            project.classList.remove('active');
        }
    })
})

// filter Sass

sassBtn.addEventListener('click',()=>{
    projects.forEach(project =>{
        if(project.classList.contains('sass')){
            project.classList.add('active');
        }

        else{
            project.classList.remove('active');
        }
    })
})


//TYPING 

const texts = ['Full-Stack Developer', 'UI Designer', 'Web Developer']
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