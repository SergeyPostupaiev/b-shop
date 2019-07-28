  // Scrolling Effect

  $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('.navv').addClass('black new-menu');
        }

        else {
              $('.navv').removeClass('black new-menu');
        }
  })


  $(document).ready(function() {
    // window.scrollTo(0,document.body.scrollHeight);
    let scrt = $("#pay").height() + $("#services").height() + $("#home").height() + $("#reserv").height() + $("#reserv").height()/6;
    window.scrollTo(0, scrt);




    // Menu-toggle button

    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
          $("nav ul").toggleClass("pad");
    });


    var scrollLink = $('.scroll');
    var scrollBtn = $(".scroll-btn");

    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });

    scrollBtn.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });

    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();

      scrollLink.each(function() {

        var sectionOffset = $(this.hash).offset().top - 20;

        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })

    })


    //Active link switching for tablet
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();

      scrollLink.each(function() {

        var sectionOffset = $(this.hash).offset().top - 20;

        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('small-active');
          $(this).parent().siblings().removeClass('small-active');
        }
      })

    })


  })
