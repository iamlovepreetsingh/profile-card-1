let downBtn = document.querySelector('.down-btn'),
    downIcon = document.querySelector('.down-icon'),
    socialLinks = document.querySelector('.social-links');


downBtn.addEventListener('click', (e) =>{
    if(downIcon.classList.contains('down-icon-active')){
        downIcon.classList.remove('down-icon-active');
        socialLinks.classList.remove('social-links-active');
    }else{
        socialLinks.classList.add('social-links-active');
        downIcon.classList.add('down-icon-active');
    }
})
