import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import foo from './modules/Scroller';
import $ from 'jquery';

$(document).ready(function() {
 $('.o-banner__bg').addClass('dumbo');
});

import Modal from './modules/Modal';
import Parallax from 'parallax-scroll';

const parallax = new Parallax('.js-parallax', {
  speed: 0.5, // Anything over 0.5 looks silly 
});
parallax.animate();

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.box'), "80%");
new RevealOnScroll($('.text'), "95%");
new RevealOnScroll($('.slide'), "70%");
var modal = new Modal();






