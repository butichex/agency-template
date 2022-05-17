// when using ES6 import / npm
import ScrollTrigger from '@terwanerik/scrolltrigger'
// Create a new ScrollTrigger instance with default options
const scrollTrigger = new ScrollTrigger()

scrollTrigger.add('.left__image', {
    toggle: {
        class: {
            in: 'animateIn',
            out: 'animateOut'
        }
    }
})