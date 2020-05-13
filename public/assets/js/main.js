window.$(document).ready(function () {
  // Start of Input div with <label> effect
  $(
    ".common_input_wrapper_2 input, .common_input_wrapper_2 textarea, .common_input_wrapper_with_icon input, .common_input_wrapper_with_icon textarea"
  ).focusin(function () {
    $(this).siblings("label").css({
      transform: "translate(15px, 20px)",
      color: "#EF4B4B",
    });
  });

  $(
    ".common_input_wrapper_2 input, .common_input_wrapper_2 textarea, .common_input_wrapper_with_icon input, .common_input_wrapper_with_icon textarea"
  ).focusout(function () {
    var checkValue = this.value.length;
    console.log(checkValue);

    if (checkValue <= 0) {
      $(this).siblings("label").css({
        transform: "translate(15px, 47px)",
        color: "#989898",
      });
    } else {
    }
  });

  $(".common_input_wrapper_2 label").click(function () {
    $(this).siblings("input").focus();
  });
  // End of Input div with <label> effect

  // Start --> Toggling active class in job type of job information form
  $(
    ".job_type_options > div, .servive_type_options > div, .comm_channel_options > div, .service_select > div, .app_type > div"
  ).click(function () {
    $(
      ".job_type_options > div, .servive_type_options > div, .comm_channel_options > div, .service_select > div, .app_type > div"
    )
      .not(this)
      .removeClass("active");
    $(this).addClass("active");
  });
  // End --> Toggling active class in job type of job information form

  $("td.action i").click(function () {
    var dd = $(this).siblings("div.action_dropdown");
    $("div.action_dropdown").not(dd).fadeOut();
    $(this).siblings("div.action_dropdown").fadeToggle();
  });
  $(".each_job .top .right i").click(function () {
    var dd = $(this).siblings("div.job_dropdown");
    $("div.job_dropdown").not(dd).fadeOut();
    $(this).siblings("div.job_dropdown").fadeToggle();
  });

  // Start of review scroll
  var testi_width = 545 * $(".list_container .each_review").length;
  $(".review_lists .list_container").css("width", testi_width + "px");
  // End of review scroll

  // Start of landing page script
  $(".courses_navigator > div").click(function () {
    $(this).siblings("div").removeClass("active_courses_navigator_link");
    $(this).addClass("active_courses_navigator_link");
  });

  $(".courses_navigator > #top_course").click(function () {
    $(".featured_course_wrapper").fadeOut(200);
    $(".top_course_wrapper").delay(200).fadeIn();
  });

  $(".courses_navigator > #featured_course").click(function () {
    $(".top_course_wrapper").fadeOut(200);
    $(".featured_course_wrapper").delay(200).fadeIn();
  });

  // var scroll_val = $('.job_opnenings_wrapper_scroll').scrollLeft();
  // $('.der').click(function(){
  //     console.log($('.job_opnenings_wrapper_scroll').scrollLeft());
  // })
  // End of landing page script

  // Input field with icon
  $(".common_input_wrapper_with_icon input").focusin(function () {
    $(this).parent().parent().css("border-color", "#EF4B4B");
  });

  $(".common_input_wrapper_with_icon input").focusout(function () {
    $(this).parent().parent().css("border-color", "#E3E3E3");
  });

  // Dashboard side nav link
  $(".side_nav_wrapper a").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
  // Dashboard side nav link

  $(".spanToggle span").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  // Settings navigator
  $(".settings_navigator > div").click(function () {
    $(this).siblings().removeClass("active_settings_navigator_link");
    $(this).addClass("active_settings_navigator_link");
  });

  $(".settings_navigator > div:first-child").click(function () {
    $("#settings_holder > section").not("section:first-child").fadeOut(200);
    $("#settings_holder > section:first-child").delay(200).fadeIn();
  });

  $(".settings_navigator > div:nth-child(2)").click(function () {
    $("#settings_holder > section").not("section:nth-child(2)").fadeOut(200);
    $("#settings_holder > section:nth-child(2)").delay(200).fadeIn();
  });

  $(".settings_navigator > div:nth-child(3)").click(function () {
    $("#settings_holder > section").not("section:nth-child(3)").fadeOut(200);
    $("#settings_holder > section:nth-child(3)").delay(200).fadeIn();
  });

  $(".settings_navigator > div:nth-child(4)").click(function () {
    $("#settings_holder > section").not("section:nth-child(4)").fadeOut(200);
    $("#settings_holder > section:nth-child(4)").delay(200).fadeIn();
  });

  // Settings navigator

  // admin Coach and student details page
  $(".coach_details_navigator > div").click(function () {
    $(this).siblings().removeClass("active_settings_navigator_link");
    $(this).addClass("active_settings_navigator_link");
  });

  $(".coach_details_navigator > div:first-child").click(function () {
    $(".personal_appointment_section").fadeOut(200);
    $(".personal_course_list_section").delay(200).fadeIn();
  });
  $(".coach_details_navigator > div:nth-child(2)").click(function () {
    $(".personal_course_list_section").fadeOut(200);
    $(".personal_appointment_section").delay(200).fadeIn();
  });
  // admin Coach and student details page

  // Create appointment
  $("#to_appointment_type").click(function () {
    $(".select_service").fadeOut(200);
    $(".appointment_types").delay(200).fadeIn();
  });
  $("#back_to_select_service").click(function () {
    $(".appointment_types").fadeOut(200);
    $(".select_service").delay(200).fadeIn();
  });
  $("#goto_date_n_time").click(function () {
    $(".appointment_types").fadeOut(200);
    $(".date_n_time").delay(200).fadeIn();
  });
  $("#back_to_app_type").click(function () {
    $(".date_n_time").fadeOut(200);
    $(".appointment_types").delay(200).fadeIn();
  });
  $("#goto_review_n_pay").click(function () {
    $(".date_n_time").fadeOut(200);
    $(".review_n_pay").delay(200).fadeIn();
  });
  $("#goto_status").click(function () {
    $(".review_n_pay").fadeOut(200);
    $(".status").delay(200).fadeIn();
  });
  $("#bact_to_date").click(function () {
    $(".review_n_pay").fadeOut(200);
    $(".date_n_time").delay(200).fadeIn();
  });
  // Create appointment

  // mobile top nav toggler
  $(".mobile_nav_toggler").click(function () {
    $(".whole_page_wrapper").css({
      transform: "translate(-300px,200px)",
    });
    $(".sideMenu_div").css({
      transform: "translateX(-300px)",
    });
    $(this).css({
      opacity: 0,
    });
  });

  $(".close_btn").click(function () {
    $(".whole_page_wrapper").css({
      transform: "translate(0,0)",
    });
    $(".sideMenu_div").css({
      transform: "translateX(0)",
    });
    $(".mobile_nav_toggler").css({
      opacity: 1,
    });
  });
  // mobile top nav toggler

  // Start of mobile top nav toggler (Dashboard)
  $(".dashboard_sidenav_toggler").click(function () {
    $(".dashboard_body").css({
      // 'transform': 'translateX(300px)',
      // 'margin-left': '300px'
    });
    $("aside.side_nav").css({
      display: "block",
      width: "280px",
      transform: "translateX(0)",
    });
    $("aside.side_nav .logo_div img").css({
      display: "block",
    });
  });

  $(".close_sideNav").click(function () {
    $("aside.side_nav").css({
      transform: "translateX(-100%)",
    });
    $("aside.side_nav .logo_div img").css({
      display: "none",
    });
  });
  // End of mobile top nav toggler (Dashboard)

  // Start of Jobs page mobile Toggler
  var screenWidth = window.innerWidth;
  if (screenWidth <= 889) {
    $('.jobs_section_wrapper_div [class*="_header"]').click(function () {
      $(this).siblings('[class*="options_"]').slideToggle();
    });
  }
  // End of Jobs page mobile Toggler
  // Couser Creation form toggler
  $(".course_navigator > div").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
  $("#docs_form_button").click(function () {
    $("#course_links_form").fadeOut(200);
    $("#course_docs_form").delay(200).fadeIn();
  });
  $("#link_form_button").click(function () {
    $("#course_docs_form").fadeOut(200);
    $("#course_links_form").delay(200).fadeIn();
  });

  $(".course_navigator > div").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
  $("#video_form_button").click(function () {
    $("#video_links_form").fadeOut(200);
    $("#video_file_form").delay(200).fadeIn();
  });
  $("#video_link_form_button").click(function () {
    $("#video_file_form").fadeOut(200);
    $("#video_links_form").delay(200).fadeIn();
  });
  // End of Couser Creation form toggler
  // Coach sliders toggler
  if (window.innerWidth <= 494) {
    var coachScrollWrapperWidth = Math.round($(".slider_full_row").width());

    var setCoachWrapperWidth =
      365 * $(".coaches_wrapper_div2 .each_coach").length;
    $(".coaches_wrapper_div2").css("width", setCoachWrapperWidth + "px");

    var numberOfCardPerPage = Math.round(coachScrollWrapperWidth / 365);
    var lenghtOfCardContainer = $(".coaches_wrapper_div2 .each_coach").length;
    var numberOfScrolls = lenghtOfCardContainer - numberOfCardPerPage;
    var lee = 0;

    $("#coachMoveLeft").click(function () {
      if (lee === 0) {
        return;
      }
      numberOfScrolls += 1;
      lee -= 365;
      $(".coaches_wrapper_div2").css({
        transform: "translate3d(-" + lee + "px, 0, 0)",
      });
    });
    $("#coachMoveRight").click(function () {
      if (numberOfScrolls === 0) {
        return;
      }
      numberOfScrolls -= 1;
      lee += 365;
      $(".coaches_wrapper_div2").css({
        transform: "translate3d(-" + lee + "px, 0, 0)",
      });
    });
  } else {
    var coachScrollWrapperWidth = Math.round($(".slider_full_row").width());

    var setCoachWrapperWidth =
      410 * $(".coaches_wrapper_div2 .each_coach").length;
    $(".coaches_wrapper_div2").css("width", setCoachWrapperWidth + "px");

    var numberOfCardPerPage = Math.round(coachScrollWrapperWidth / 410);
    var lenghtOfCardContainer = $(".coaches_wrapper_div2 .each_coach").length;
    var numberOfScrolls = lenghtOfCardContainer - numberOfCardPerPage;
    var lee = 0;

    $("#coachMoveLeft").click(function () {
      if (lee === 0) {
        return;
      }
      numberOfScrolls += 1;
      lee -= 410;
      $(".coaches_wrapper_div2").css({
        transform: "translate3d(-" + lee + "px, 0, 0)",
      });
    });
    $("#coachMoveRight").click(function () {
      if (numberOfScrolls === 0) {
        return;
      }
      numberOfScrolls -= 1;
      lee += 410;
      $(".coaches_wrapper_div2").css({
        transform: "translate3d(-" + lee + "px, 0, 0)",
      });
    });
  }

  // End of Coach sliders toggler
  // Jobs Slider Toggler
  var jobs_width = 402 * $(".job_opnenings_wrapper > div").length;
  $(".job_opnenings_wrapper").css("width", jobs_width + "px");

  var jobsScrollWrapperWidth = Math.round(
    $(".job_opnenings_wrapper_scroll").width()
  );

  // var setCoachWrapperWidth =
  //   410 * $(".coaches_wrapper_div2 .each_coach").length;
  // $(".coaches_wrapper_div2").css("width", setCoachWrapperWidth + "px");

  var numberOfjobsPerPage = Math.round(jobsScrollWrapperWidth / 410);
  var lenghtOfJobsContainer = $(".coaches_wrapper_div2 .each_coach").length;
  var numberOfScrolls_ = lenghtOfJobsContainer - numberOfjobsPerPage;
  var leep = 0;

  $("#jobsMoveLeft").click(function () {
    if (leep === 0) {
      return;
    }
    numberOfScrolls_ += 1;
    leep -= 402;
    $(".job_opnenings_wrapper").css({
      transform: "translate3d(-" + leep + "px, 0, 0)",
    });
  });
  $("#jobsMoveRight").click(function () {
    if (numberOfScrolls_ === 0) {
      return;
    }
    numberOfScrolls_ -= 1;
    leep += 402;
    $(".job_opnenings_wrapper").css({
      transform: "translate3d(-" + leep + "px, 0, 0)",
    });
  });
  // End of Jobs Slider Toggler
});

var w = window.innerWidth;
var h = window.innerHeight;
console.log(`

        The Screen width is : ${w}px
        The Screen height is : ${h}px
    
    `);
