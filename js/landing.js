/* -------------------------------------------------------------------------------------------
	TODO:
	 - Mimí Maura - Hacia la Eternidad (nadie recuerda que tu querías ser una flecha hacia la eternidad)

------------------------------------------------------------------------------------------- */



$(document).ready(function() {

  // $.firefly({
  //   images : ['images/landing/1.jpg', 'images/landing/2.png', 'images/landing/3.png'],
  //   total : 20,
  //   on: '#divinidad'
  // })

// Cara flotando como el buda, que se le haga zoom o scale deformandose hasta que cubre todo, y ahí aparece otra cara (tipo ludicrous speed, como los gif de maxi)

  let $splash = $('.splash')
  let $icon = $('.icon')

  // Splash violeta fadeout
  var welcome = function(){

    TweenLite.fromTo($splash, .4, {
      autoAlpha: 0,
      opacity: 1,
      ease: Quart.easeIn
    },
    {
      opacity: 0,
      ease: Quart.easeOut
    })

  };


  // $icon.on('hover', function(){
  //   var tween = TweenLite.from(
  //     $icon, .5, {
  //       scale: 1,
  //       ease: Quad.easeInOut
  //     }
  //   );
  // });

  // Icon agregarle adentro un reflejo que se mueva de manera contraria al mouse (inverse parallax). Averiguar cómo se puede acceder y usar el acelerómetro con js (x ahí es un sniff del device, usar el método más económico en performance)


  // Icon/Loader click to enter
  $icon.on('click', function(){
    var tween = TweenLite.fromTo(
      $icon, .8, {
        scale: 1,
        ease: Quad.easeInOut
      },
      {
        scale: 20,
        opacity: 0,
        onComplete: welcome,
        ease: Quad.easeInOut
      }
    );
  });

  // Click count de 3? para que no se vaya a la mierda agregando fireflies
  // Easter egg #1
  $('.astro3').on('click', function() {
    $.firefly({
      total : 30,
      on: '#divinidad'
    });
  });

  // Click to spin con GreenSock
  // Easter egg #2
  // $('.galaxy').on('click', function(){
  //   $(this).css('transform', 'rotate(+20deg)' + easing);
  // });


 // Scale and show tooltip on (seed) hover
 let $box = $(".choices a");
 let $pop = $box.children('.pop');

  $box.hover(
    function() {
      TweenLite.to(
        $(this).find('.pop'), .3, {
        scale:1.2,
        opacity: 1
      });
    },
     function() {
      TweenLite.to(
        $(this).find('.pop'), .5, {
        scale: 1,
        opacity: 0
      });
    }
  );


  // ROADS

  let $redroad = $(".redroad");
  let $overlay = $(".overlay");

  $redroad.on('click', function(){

    $overlay.removeClass('blue').addClass('red');

    var tween = TweenLite.fromTo(
      $icon, .8, {
        scale: 1,
        ease: Quad.easeInOut
      },
      {
        scale: 20,
        opacity: 0,
        onComplete: welcome,
        ease: Quad.easeInOut
        // Volar el splash en el callback
      }
    );
  });

  let $blueroad = $(".blueroad");

  $blueroad.on('click', function(){
    $overlay.removeClass('red').addClass('blue');
  });

  let $eye = $('.allseeingeye')

  $eye.on('click', function(){
    $overlay.removeClass('blue').removeClass('red');
  });

});
