

var menu_selector = ".top-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}


// Плавный переход по навигации

$(function() {

	$(window).scroll(function() {

	if($(this).scrollTop() != 0) {

	$('#toTop').fadeIn();

	} else {

	$('#toTop').fadeOut();

	}

	});

	$('#toTop').click(function() {

	$('body,html').animate({scrollTop:0},800);

	});

});

     $(document).ready(function(){
        $(".top-menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
    });



// page init
jQuery(function(){
	jQuery('.burger').clickClass({
		classAdd: 'menu-opened',
		addToParent: true
	});
});

/*
 * Add class plugin
 */
jQuery.fn.clickClass = function(opt) {
	var options = jQuery.extend({
		classAdd: 'add-class',
		addToParent: false,
		event: 'click'
	}, opt);

	return this.each(function() {
		var classItem = jQuery(this);
		if(options.addToParent) {
			if(typeof options.addToParent === 'boolean') {
				classItem = classItem.parent();
			} else {
				classItem = classItem.parents('.' + options.addToParent);
			}
		}
		jQuery(this).bind(options.event, function(e) {
			classItem.toggleClass(options.classAdd);
			e.preventDefault();
			return false;
		});
	});
};


$(function() {
    var num = $(".number");
    num.each(function(indx, el) {
    var max = $(el).data("max");
    var duration = 1500;
    var visibility = checkViewport(el);
    $(el).on("animeNum", function() {
        $({n: 0}).animate({n: max}, {
            easing: "linear",
            duration: duration,
            step: function(now, fx) {
                $(el).html(now | 0)
            }
        })
    }).data("visibility", visibility);
    visibility && $(el).trigger("animeNum")
  });

  function checkViewport(el) {
    var H = document.documentElement.clientHeight,
        h = el.scrollHeight,
        pos = el.getBoundingClientRect();
        return pos.top + h > 0 && pos.bottom - h < H
    }
    $(window).scroll(function() {
      num.each(function(indx, el) {
          var visibility = checkViewport(el);
          el = $(el);
          var old = el.data("visibility");
          old != visibility && el.data("visibility", visibility) && !old && el.trigger("animeNum")
      })
    })
  });


  $(window).scroll(function () {
    $(".main-header").toggleClass("header-scroll", $(this).scrollTop() > 0);
  });
 
  let soundToggle = document.querySelector('.toggle_sound');
  let myVideo = document.getElementById('myVideo');

  soundToggle.addEventListener('click', function() {
    myVideo.muted = !myVideo.muted;
    this.classList.toggle('active');
  });

  $(".section-6 .box_title").click(function(){
    $(this).toggleClass("active").next().slideToggle();
  });


AOS.init({disable: 'mobile'});

$('#myScale-1').scroolly([
  {
      from: 'con-top = vp-center',
      to: 'con-bottom = vp-center',
      cssFrom:{height:'0%'},
      cssTo:{height:'100%'}
  },
], $('#containerScale-1'));

$('#myCircle-1').scroolly([
  {
      from: 'el-top = vp-center',
      to: 'el-bottom = vp-center',
      cssFrom:{opacity:'0'},
      cssTo:{opacity:'1'}
  },
]);

$('#myScale-2').scroolly([
  {
      from: 'con-top = vp-center',
      to: 'con-bottom = vp-center',
      cssFrom:{height:'0%'},
      cssTo:{height:'100%'}
  },
], $('#containerScale-2'));

$('#myCircle-2').scroolly([
  {
      from: 'el-top = vp-center',
      to: 'el-bottom = vp-center',
      cssFrom:{opacity:'0'},
      cssTo:{opacity:'1'}
  },
]);

$('#myScale-3').scroolly([
  {
      from: 'con-top = vp-center',
      to: 'con-bottom = vp-center',
      cssFrom:{height:'0%'},
      cssTo:{height:'100%'}
  },
], $('#containerScale-3'));

$('#myCircle-3').scroolly([
  {
      from: 'el-top = vp-center',
      to: 'el-bottom = vp-center',
      cssFrom:{opacity:'0'},
      cssTo:{opacity:'1'}
  },
]);

// window.onload = function(){
//   setTimeout(function(){
//     document.getElementById('myVideo').querySelector("source").src = 'http://angrypenguins.club/wp-content/themes/angrypenguins/images/video.mp4';
//   },5000);
// };




