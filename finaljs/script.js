//scroll section
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); 

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
}

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        
        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this 
        else{
            sec.classList.remove('show-animate');
        }

    });
    
    let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY>100);

//remove toggle icon and navbar when click navbar links(scroll)

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active'); 
// animation footer on scroll

let footer =document.querySelector('footer');

footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}

/*********************************************************scroll reveal ******************************/

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
})
ScrollReveal().reveal('.heading,.home',{origin:'top'});
ScrollReveal().reveal('.about,.portfolio,.education,.skills,.footer',{origin:'bottom'});

const form=document.querySelector("form");
const fullname=document.getElementById("your_name");
const email=document.getElementById("email");
const massage=document.getElementById("message");

function sendEmail(){
    const bodyMessage= `Full Name: ${fullname.value}<br> Email: ${email.value}<br> Message:${message.value}`;
Email.send({
    SecureToken : "e965c03f-39cd-4711-aa12-ec0278b5311c",
    Host : "smtp.elasticemail.com",
    Username : "nikhilgupta2307.ng@gmail.com",
    Password : "23353C64FE8C4F475E74072DA68081404C0C",
    To : 'nikhilgupta2307.ng@gmail.com',
    From : "nikhilgupta2307.ng@gmail.com",
    Subject : "Potfolio request",
    Body : bodyMessage
}).then(
  message => {
    if(message=="OK"){
        Swal.fire({
            title: "Done !",
            text: "Message sent successfully!",
            icon: "success"
          });
    }
  }
);
}
function checkEmail(){
    const emailRegex=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");
    }else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();
    
    if(!fullname.classList.contains("error")&&!email.classList.contains("error")&&!message.classList.contains("error")){
        sendEmail();
        

        form.reset();
        return false;
    }

});
