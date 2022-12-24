import 'swiper/swiper-bundle.css';

// Js / Ts
import nav from "./components/nav";
import slider from './components/slider';
import pageTransition from './components/pageTransition';
import horizontalParallax from './components/horizontalParallax';

// Running Js / Ts functions
const app = () => {
    nav();
    slider();
    pageTransition();
    horizontalParallax();
}

app();