import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initHomeFunctions();
  }
  private initHomeFunctions(): void {
    /*------------------------------*/
    /* Scroll to top
    /*------------------------------*/

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
    });

    $('.scrollup').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 2000);
      return false;
    });


    /*------------------------------*/
    /* Smooth scroll
    /*------------------------------*/


    // tslint:disable-next-line:no-unused-expression
    'use strict';
    $('.scroll a[href^=\'#\']').on('click', function (e) {
      e.preventDefault();
      const hash = this.hash;
      $('html, body').stop().animate({
        scrollTop: $(hash).offset().top
      }, 2000, 'easeOutExpo');
    });

    $('.collapse ul li a').click(function () {
      $('.navbar-toggle:visible').click();
    });

    /*------------------------------*/
    /* Sticky Header
    /*------------------------------*/

    jQuery('#header').sticky({
      topSpacing: 0
    });

    /*------------------------------*/
    /* Related project carousel
    /*------------------------------*/

    $('.related-project-carousel').owlCarousel({
      autoPlay: 3000,
      slideSpeed: 200,
      items: 4,
      itemsDesktop: [1199, 4],
      itemsDesktopSmall: [979, 3],
      stopOnHover: true,
      pagination: false,
      navigation: true,
      navigationText: [
        '<i class=\'fa fa-angle-left\'></i>',
        '<i class=\'fa fa-angle-right\'></i>'
      ],

    });

    let onMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      onMobile = true;
    }

    /*------------------------------*/
    /* Mixitup portfolio
    /*------------------------------*/

    jQuery('.work-grid').mixitup({
      targetSelector: '.mix',
    });



    /*------------------------------*/
    /* Magnific popup
    /*------------------------------*/

    $('.popup-image').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      }

    });
  }
}
