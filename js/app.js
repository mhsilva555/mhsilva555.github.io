const progress = document.querySelectorAll('.progress-status');

progress.forEach((index) => {
    let = percentage = index.getAttribute('data-percentage')
    index.innerHTML = '<span style="width: '+percentage+'%">'+percentage+'%</span>'    
});