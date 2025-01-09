// $(document).ready(function() {
 

//     $("#stream1_btn").on("click", function() {
//         $(".stream1").removeClass('highlight_stream');
//        $(".stream2").removeClass('highlight_stream');
//        $(".stream3").removeClass('highlight_stream');
//          $(".stream1").addClass('highlight_stream');
//    });
//    $("#stream2_btn").on("click", function() {
//        $(".stream1").removeClass('highlight_stream');
//        $(".stream2").removeClass('highlight_stream');
//        $(".stream3").removeClass('highlight_stream');
//          $(".stream2").addClass('highlight_stream');
//    });
//    $("#stream3_btn").on("click", function() {
//        $(".stream1").removeClass('highlight_stream');
//        $(".stream2").removeClass('highlight_stream');
//        $(".stream3").removeClass('highlight_stream');
//          $(".stream3").addClass('highlight_stream');
//    });


// }); 



// $(document).ready(function() {
 

//     $("#stream1_btn").on("click", function() {
//         $(".stream1").removeClass('highlight_stream').show('fast', 1000);
//        $(".stream2").removeClass('highlight_stream').hide();
//        $(".stream3").removeClass('highlight_stream').hide();
//          $(".stream1").addClass('highlight_stream').slidedown();
//    });
//    $("#stream2_btn").on("click", function() {
//        $(".stream1").removeClass('highlight_stream').hide();
//        $(".stream2").removeClass('highlight_stream').show();
//        $(".stream3").removeClass('highlight_stream').hide();
//          $(".stream2").addClass('highlight_stream').show();
//    });
//    $("#stream3_btn").on("click", function() {
//        $(".stream1").removeClass('highlight_stream').hide();
//        $(".stream2").removeClass('highlight_stream').hide();
//        $(".stream3").removeClass('highlight_stream').show();
//          $(".stream3").addClass('highlight_stream').show();
//    });


// }); 



// $(document).ready(function() {
 

//     $("#stream1_btn").on("click", function() {
//         $(".stream1").slideDown();
//        $(".stream2").removeClass('highlight_stream').hide();
//        $(".stream3").removeClass('highlight_stream').hide();
//          $(".stream1").slideDown();
//    });
//    $("#stream2_btn").on("click", function() {
//        $(".stream1").removeClass('highlight_stream').hide();
//        $(".stream2").removeClass('highlight_stream').fadeIn();
//        $(".stream3").removeClass('highlight_stream').hide();
//          $(".stream2").addClass('highlight_stream').fadeIn();
//    });
//    $("#stream3_btn").on("click", function() {
//        $(".stream1").removeClass('highlight_stream').hide();
//        $(".stream2").removeClass('highlight_stream').hide();
//        $(".stream3").removeClass('highlight_stream').fadeTo(1000, 0.5);
//          $(".stream3").addClass('highlight_stream').fadeTo(1000, 0.5);
//    });
// }

// }); 

$(document).ready(function() {
 

    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream').show('fast', 1000);
       $(".stream2").removeClass('highlight_stream').hide();
       $(".stream3").removeClass('highlight_stream').hide();
         $(".stream1").addClass('highlight_stream').slidedown();
   });
   $("#stream2_btn").on("click", function() {
       $(".stream1").removeClass('highlight_stream').hide();
       $(".stream2").removeClass('highlight_stream').show();
       $(".stream3").removeClass('highlight_stream').hide();
         $(".stream2").addClass('highlight_stream').show();
   });
   $("#stream3_btn").on("click", function() {
       $(".stream1").removeClass('highlight_stream').hide();
       $(".stream2").removeClass('highlight_stream').hide();
       $(".stream3").removeClass('highlight_stream').show();
         $(".stream3").addClass('highlight_stream').show();
   });

   $("myButton").addClass('blueBoc');
   $("myButton").removeClass('blueBoc');

   // change to method chaining
   $("myButton").addClass('blueBoc').removeClass('blueBoc');

   //events methodchaining

   $("myButton").mouseenter().show().hide().mouseleave();

}); 

$("#myButton").mouseenter(
    function () {
      $(this).show(); // Show on mouse enter
    }
  );

$("#myButton").mouseleave (
    function () {
    $(this).hide(); // Hide on mouse leave
  }
);

