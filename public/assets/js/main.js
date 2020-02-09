window.(document).ready(function(){

    // Start of Input div with <label> effect
    window.$(".common_input_wrapper_2 input, .common_input_wrapper_2 textarea, .common_input_wrapper_with_icon input, .common_input_wrapper_with_icon textarea").focusin(function(){
        (this).siblings("label").css({
            "transform": "translate(15px, 20px)",
            "color": "#EF4B4B"
        });
    }) 


    window.$(".common_input_wrapper_2 input, .common_input_wrapper_2 textarea, .common_input_wrapper_with_icon input, .common_input_wrapper_with_icon textarea").focusout(function(){

        var checkValue = this.value.length;
        console.log(checkValue);

        if(checkValue <= 0 ) {

            window.$(this).siblings("label").css({
            "transform": "translate(15px, 47px)",
            "color": "#989898"
        });

        } else {}           

    })


    window.$('.common_input_wrapper_2 label').click(function(){

        window.$(this).siblings('input').focus();

    });
    // End of Input div with <label> effect 

 // Start --> Toggling active class in job type of job information form
 window.$('.job_type_options > div, .servive_type_options > div, .comm_channel_options > div, .service_select > div, .app_type > div').click(function(){

    window.$(".job_type_options > div, .servive_type_options > div, .comm_channel_options > div, .service_select > div, .app_type > div").not(this).removeClass("active");
    window.$(this).addClass("active");      
})
// End --> Toggling active class in job type of job information form

window.$('td.action i').click(function(){
    var dd = window.$(this).siblings('div.action_dropdown');
    window.$('div.action_dropdown').not(dd).fadeOut();
    window.$(this).siblings('div.action_dropdown').fadeToggle();
})
window.$('.each_job .top .right i').click(function(){
    var dd = window.$(this).siblings('div.job_dropdown');
    window.$('div.job_dropdown').not(dd).fadeOut();
    window.$(this).siblings('div.job_dropdown').fadeToggle();
})
    
// Start of review scroll
var testi_width = 545 * window.$(".list_container .each_review").length;
    window.$(".review_lists .list_container").css("width", testi_width+"px");
// End of review scroll

// Start of landing page script
window.$('.courses_navigator > div').click(function(){    

    window.$(this).siblings('div').removeClass("active_courses_navigator_link");
    window.$(this).addClass("active_courses_navigator_link");
    
})

window.$('.courses_navigator > #top_course').click(function(){  

    window.$(".featured_course_wrapper").fadeOut(200);
    window.$(".top_course_wrapper").delay(200).fadeIn();
})

window.$('.courses_navigator > #featured_course').click(function(){  

    window.$(".top_course_wrapper").fadeOut(200);
    window.$(".featured_course_wrapper").delay(200).fadeIn();
})

var jobs_width = 415 * window.$(".job_opnenings_wrapper > div").length;
    window.$(".job_opnenings_wrapper").css("width", jobs_width+"px");

    
 
// var scroll_val = window.$('.job_opnenings_wrapper_scroll').scrollLeft();
// window.$('.der').click(function(){
//     console.log(window.$('.job_opnenings_wrapper_scroll').scrollLeft());
// })
// End of landing page script

// Input field with icon
window.$('.common_input_wrapper_with_icon input').focusin(function(){
    window.$(this).parent().parent().css("border-color","#EF4B4B");
})

window.$('.common_input_wrapper_with_icon input').focusout(function(){
    window.$(this).parent().parent().css("border-color","#E3E3E3");
})

// Dashboard side nav link
window.$('.side_nav_wrapper a').click(function(){
    window.$(this).siblings().removeClass("active");
    window.$(this).addClass("active");
})
// Dashboard side nav link

window.$('.spanToggle span').click(function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
})

// Settings navigator
window.$('.settings_navigator > div').click(function(){
    window.$(this).siblings().removeClass("active_settings_navigator_link");
    window.$(this).addClass("active_settings_navigator_link");
})

window.$('.settings_navigator > div:first-child').click(function(){
    window.$("#settings_holder > section").not('section:first-child').fadeOut(200);
    window.$("#settings_holder > section:first-child").delay(200).fadeIn();
})

window.$('.settings_navigator > div:nth-child(2)').click(function(){
    window.$("#settings_holder > section").not('section:nth-child(2)').fadeOut(200);
    window.$("#settings_holder > section:nth-child(2)").delay(200).fadeIn();
})

window.$('.settings_navigator > div:nth-child(3)').click(function(){
    window.$("#settings_holder > section").not('section:nth-child(3)').fadeOut(200);
    window.$("#settings_holder > section:nth-child(3)").delay(200).fadeIn();
})

window.$('.settings_navigator > div:nth-child(4)').click(function(){
    window.$("#settings_holder > section").not('section:nth-child(4)').fadeOut(200);
    window.$("#settings_holder > section:nth-child(4)").delay(200).fadeIn();
})

// Settings navigator

// admin Coach and student details page
window.$('.coach_details_navigator > div').click(function(){
    $(this).siblings().removeClass("active_settings_navigator_link");
    $(this).addClass("active_settings_navigator_link");
})

window.$('.coach_details_navigator > div:first-child').click(function(){
    $(".personal_appointment_section").fadeOut(200);
    $(".personal_course_list_section").delay(200).fadeIn();
})
window.$('.coach_details_navigator > div:nth-child(2)').click(function(){
    $(".personal_course_list_section").fadeOut(200);
    $(".personal_appointment_section").delay(200).fadeIn();
})
// admin Coach and student details page

// Create appointment
window.$('#to_appointment_type').click(function(){
    $('.select_service').fadeOut(200);
    $(".appointment_types").delay(200).fadeIn();
})
window.$('#back_to_select_service').click(function(){
    window.$('.appointment_types').fadeOut(200);
    window.$(".select_service").delay(200).fadeIn();
})
window.$('#goto_date_n_time').click(function(){
    window.$('.appointment_types').fadeOut(200);
    window.$(".date_n_time").delay(200).fadeIn();
})
window.$('#back_to_app_type').click(function(){
    window.$('.date_n_time').fadeOut(200);
    window.$(".appointment_types").delay(200).fadeIn();
})
window.$('#goto_review_n_pay').click(function(){
    window.$('.date_n_time').fadeOut(200);
    window.$(".review_n_pay").delay(200).fadeIn();
})
window.$('#goto_status').click(function(){
    window.$('.review_n_pay').fadeOut(200);
    window.$(".status").delay(200).fadeIn();
})
window.$('#bact_to_date').click(function(){
    window.$('.review_n_pay').fadeOut(200);
    window.$(".date_n_time").delay(200).fadeIn();
})
// Create appointment

// mobile top nav toggler
window.$('.mobile_nav_toggler').click(function(){  
    $('.whole_page_wrapper').css({
        'transform': 'translate(-300px,200px)'
    })
    $('.sideMenu_div').css({
        'transform': 'translateX(-300px)'
    })
    $(this).css({
        'opacity': 0
    })
})

window.$('.close_btn').click(function(){ 
    $('.whole_page_wrapper').css({
        'transform': 'translate(0,0)'
    })
    $('.sideMenu_div').css({
        'transform': 'translateX(0)'
    })
    $('.mobile_nav_toggler').css({
        'opacity': 1
    })
})
// mobile top nav toggler

// Start of mobile top nav toggler (Dashboard)
window.$('.dashboard_sidenav_toggler').click(function(){  
    $('.dashboard_body').css({
        // 'transform': 'translateX(300px)',
        // 'margin-left': '300px'
    })
    $('aside.side_nav').css({
        'display': 'block',
        'width': '280px',
        'transform': 'translateX(0)'
    })
    $('aside.side_nav .logo_div img').css({
        'display':'block'
    })
})

window.$('.close_sideNav').click(function(){ 
    $('aside.side_nav').css({
        'transform': 'translateX(-100%)'
    })
    $('aside.side_nav .logo_div img').css({
        'display':'none'
    })
})
// End of mobile top nav toggler (Dashboard)

// Start of Jobs page mobile Toggler
var screenWidth = window.innerWidth;
if(screenWidth <= 889) {
    window.$('.jobs_section_wrapper_div [class*="_header"]').click(function(){
        $(this).siblings('[class*="options_"]').slideToggle()
    })
}
// End of Jobs page mobile Toggler


})


var w = window.innerWidth;
    var h = window.innerHeight;
    console.log(`

        The Screen width is : window.${w}px
        The Screen height is : window.${h}px
    
    `)