const menuToggle = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar');
const shadow = document.querySelector('.shadow');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');
const vid1 = document.querySelector('.vid1');
const vid2 = document.querySelector('.vid2');
const vid3 = document.querySelector('.vid3');

const changeVideo = (id) => {
    if(id === 'vid1'){
        dot1.classList.add('active');
        dot2.classList.remove('active');
        dot3.classList.remove('active');
        vid1.style.display = 'block';
        vid2.style.display = 'none';
        vid3.style.display = 'none';
    }else if(id === 'vid2'){
        dot1.classList.remove('active');
        dot2.classList.add('active');
        dot3.classList.remove('active');
        vid1.style.display = 'none';
        vid2.style.display = 'block';
        vid3.style.display = 'none';
    }else if(id === 'vid3'){
        dot1.classList.remove('active');
        dot2.classList.remove('active');
        dot3.classList.add('active');
        vid1.style.display = 'none';
        vid2.style.display = 'none';
        vid3.style.display = 'block';
    }
}

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

shadow.addEventListener('click', () => {
   navbar.classList.remove('active');
});

dot1.addEventListener('click', () => {changeVideo('vid1')});
dot2.addEventListener('click', () => {changeVideo('vid2')});
dot3.addEventListener('click', () => {changeVideo('vid3')});
changeVideo('vid1');