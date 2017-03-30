import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import scroller from './modules/Scroller';
import $ from 'jquery';
import Modal from './modules/Modal';
import Parallax from 'parallax-scroll';
const parallax = new Parallax('.js-parallax', {
  speed: 0.5, // Anything over 0.5 looks silly 
});
parallax.animate();
var mobileMenu = new MobileMenu();
new RevealOnScroll($('.box'), "70%");
var modal = new Modal();



