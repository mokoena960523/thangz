let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   navbar.classList.remove('active');
}

// loader part

let loading = document.querySelector('.loader-container');

function loader() {
   // body...
   loading.classList.add('fade-out');
}

function fadeOut() {
   // body...
   setInterval(loader, 3000);
}

window.onload = fadeOut;