'use strict';$(window).load(function() {	$('#loading').addClass('animated fadeOut');	$('#loading').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {		$('#intro1').removeClass('hidden');		$('#intro1-content').addClass('animated fadeIn');		$('#jun-kath').addClass('animated fadeIn');		$('#click_here').addClass('animated fadeInDown');	});	$('#click_here').on('click', function() {		$('#intro1').addClass('animated fadeOutLeft');		$('#intro1-transition').removeClass('hidden');		$('#intro1-transition-bg').addClass('animated fadeInRight');	});});