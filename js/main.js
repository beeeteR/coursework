const catalogBtn = document.getElementById('catalog-arrow')
const catalog = document.querySelector('.catalog')
const btnSVG = catalogBtn.querySelector('svg')

const btnLeft = document.querySelector('.popular__arrow.--left')
const btnRight = document.querySelector('.popular__arrow.--right')
const popularItems = document.querySelectorAll('.popular__item')


catalogBtn.addEventListener('click', () => {
    if (catalog.classList.contains('expand')) {
        catalog.classList.remove('expand')
        btnSVG.style.transform = ''
    } else {
        catalog.classList.add('expand')
        btnSVG.style.transform = 'rotate(180deg)'
    }
})


btnRight.addEventListener('click', () => {
    changeActivePopularItem(null, 1)
})
btnLeft.addEventListener('click', () => {
    changeActivePopularItem(null, -1)
})
popularItems.forEach(el => {
    el.addEventListener('click', () => {
        changeActivePopularItem(el)
    })
})

function changeActivePopularItem(item = null, direction = 1) {
    for (let i = 0; i < popularItems.length; i++) {
        const el = popularItems[i];

        if (el.classList.contains('--item-active')) {
            el.classList.remove('--item-active')

            if (item === null) {
                switch (direction) {
                    case 1:
                        if (i === popularItems.length - 1) {
                            popularItems[0].classList.add('--item-active')
                        } else {
                            popularItems[i + 1].classList.add('--item-active')
                        }
                        break;
                    case -1:
                        if (i === 0) {
                            popularItems[popularItems.length - 1].classList.add('--item-active')
                        } else {
                            popularItems[i - 1].classList.add('--item-active')
                        }
                        break;
                }
                break
            } else {
                item.classList.add('--item-active')
            }
        }
    }
}