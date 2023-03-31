console.log('working...');

let biolinks = document.querySelectorAll('.members a');
    theLightbox = document.querySelector('#lightbox');
    theLightbox2 = document.querySelector('#lightbox2');

function getHeroData() {
    
    theLightbox.querySelector('.lb_heading').textContent = heroes[this.dataset.member].name;
    theLightbox.querySelector('.lb_text').textContent = heroes[this.dataset.member].bio; 
    theLightbox.querySelector('.lb_achievement').textContent = heroes[this.dataset.member].achievement; 

    theLightbox2.querySelector('.lb_heading').textContent = heroes[this.dataset.member].name;
    theLightbox2.querySelector('.lb_text').textContent = heroes[this.dataset.member].bio; 
    theLightbox2.querySelector('.lb_achievement').textContent = heroes[this.dataset.member].achievement; 
}

biolinks.forEach(link => link.addEventListener('click', getHeroData));


