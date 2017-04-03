import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import './modules/Scroller';
import $ from 'jquery';

$(document).ready(function() {
 
	var $bg = $('.o-banner__bg');
	var backgroundImage = window.getComputedStyle($bg[0], null).backgroundImage;
	var image = backgroundImage.match(/url\((.*?)\)/)[1];
			image = image.replace(/"/g, "");
			var sprite = new Image();
			sprite.src = image;
   			sprite.onload = function() {
   				$bg.addClass('dumbo');
				}				
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






