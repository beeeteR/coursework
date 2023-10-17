const catalogBtn = document.getElementById('catalog-arrow')
const catalog = document.querySelector('.catalog')
const btnSVG = catalogBtn.querySelector('svg')

catalogBtn.addEventListener('click', () => {
    if (catalog.classList.contains('expand')) {
        catalog.classList.remove('expand')
        btnSVG.style.transform = ''
    }else {
        catalog.classList.add('expand')
        btnSVG.style.transform = 'rotate(180deg)'
    }
})