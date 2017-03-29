import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';
import Modal from './modules/Modal';
import Parallax from 'parallax-scroll';
const parallax = new Parallax('.js-parallax', {
  speed: 0.5, // Anything over 0.5 looks silly 
});
parallax.animate();
var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), "60%");
new RevealOnScroll($('.reveal'), "70%");
var stickyHeader = new StickyHeader();
var modal = new Modal();



