  $(document).ready(function(){
        $('.your-class').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: '<button class="slick-next">Next</button>',
          prevArrow: '<button class="slick-prev">Previous</button>'
        });
      });