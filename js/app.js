const progress = document.querySelectorAll('.progress-status');

progress.forEach((index) => {
    let = percentage = index.getAttribute('data-percentage')
    index.innerHTML = '<span style="width: '+percentage+'%">'+percentage+'%</span>'    
});

const headline_button = document.getElementById('headline-button');
headline_button.addEventListener('click', () => {
    let scrollDiv = document.getElementById("about").offsetTop;
    window.scrollTo({
        top: scrollDiv,
        behavior: 'smooth'
    });
})