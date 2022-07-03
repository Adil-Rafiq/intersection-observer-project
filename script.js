let header = document.querySelector('header');
let home = document.querySelector('.home-intro');

const homeObsOptions = {
    threshold: 0.25
}
const homeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        header.classList.toggle('nav-scrolled', !entry.isIntersecting);
    })
}, homeObsOptions)

homeObserver.observe(home);

// -----------------------------------------------//


let columns = document.querySelector('.columns');

const colFadeInObs = new IntersectionObserver(entries => {
    let columns = entries[0];
    if (!columns.isIntersecting) {
        return;
    }
    else {
        columns.target.classList.add('appear');
        colFadeInObs.unobserve(columns.target);
    }
    
}, {
    threshold: 1,
    rootMargin: '0px 0px -60px 0px'
})

colFadeInObs.observe(columns);


// -----------------------------------------------//
let sliders = document.querySelectorAll('.slide-in');

const slidersInObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            slidersInObs.unobserve(entry.target);
        }
    })
}, {
    threshold: 0,
    rootMargin: '0px 0px -200px 0px'
})

sliders.forEach(slider => {
    slidersInObs.observe(slider);
})