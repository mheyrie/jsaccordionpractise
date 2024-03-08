const accordions = document.querySelectorAll('.questions-container');

// Adding event listener to toggle active class
for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const answer = this.querySelector('.answer');
        const question = this.querySelector('.question');
        if (this.classList.contains('active')) {
            answer.style.height = answer.scrollHeight + 'px';
            question.style.fontSize = '15px';
            
        } else {
            answer.style.height = 0;
            question.style.fontSize = '22px';
            
        }
    });
}


