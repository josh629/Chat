const saved = document.getElementById('saveId');
const name1 = document.getElementById('name-1');
const name2 = document.getElementById('name-2');
const bodyContainer = document.querySelector('.container');
const loginContainer = document.querySelector('.logins');
const signContainer = document.querySelector('.signup');
const id1 = document.getElementById('id-1');
const id2 = document.getElementById('id-2');

function loginButton() {
    if(name1.value === '' || id1.value === ''){
        return;
    } else {
        loginContainer.classList.remove('active');
        bodyContainer.classList.add('active');
    }
}
function signin() {
    loginContainer.classList.remove('active');
    signContainer.classList.add('active');
}
function signButton() {
    if(name2.value === '' || id2.value === ''){
        return;
    } else {
    loginContainer.classList.add('active');
    signContainer.classList.remove('active');
    }
}
function exitButton() {
    bodyContainer.classList.remove('active');
    loginContainer.classList.add('active');
}
var sender = document.getElementById('send');
function sendMail(){
    var params = {
     name: document.getElementById("name").value,
     email: document.getElementById("email").value,
     message: document.getElementById("message").value,
    };
   if(sender.innerText === 'Send'){
    sender.innerHTML = 'Sending...';
   }

   const serviceID = 'service_cfs5mno';
   const templateID = 'template_i5731hi';
   
   emailjs
   .send(serviceID, templateID, params)
   .then(
   res =>{
   document.getElementById('name').value = "";
   document.getElementById('email').value = "";
   document.getElementById('message').value = "";
   console.log(res);
   if (sender.innerText === 'Sending...') {
   sender.innerHTML = 'Sent';
   }
   setTimeout(function(){
    if (sender.innerText === 'Sent') {
    sender.innerHTML === 'Send';
    }
   }, 1500);
   }
   );
   }