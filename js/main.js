document.addEventListener('DOMContentLoaded',function(){
    var status = 'under50';
    var navbar = document.getElementById('navigation');
    var letters = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    window.addEventListener('scroll',function(){
        if ( window.pageYOffset > 50){
            if (status =='under50'){
                status = 'over50';
                navbar.classList.add('fixedTop');
                navbar.classList.add('animated');
                navbar.classList.add('fadeInDown');
            }
        }
        else if ( window.pageYOffset <= 50) {
            if ( status == 'over50') {
                status ='under50';
                navbar.classList.remove('fixedTop');
                navbar.classList.remove('animated');
                navbar.classList.remove('fadeInDown');
            }
        }
    })

    //Check email validation
    var submit = document.getElementById('submit-bt');
    submit.onclick = function(){
        inputEmail = document.formEmail.email;
        valueEmail = inputEmail.value;
        var noti = document.getElementById('notify');

        if ( valueEmail == ''){
            noti.style.display = 'block';
            noti.innerHTML = 'Email không hợp lệ';
            return false;
        } 
        else if ( valueEmail.match(letters)){
            return true;
        }
        else {
            noti.style.display = 'block';
            noti.innerHTML = 'Email không hợp lệ';
            return false;
        }
    }
},false);
//Quantity

//Jquery
$(document).ready(function () {
    $('.list-tab span').on('click',function(e){
        e.preventDefault();
        $('.list-tab span').removeClass('active');
        $(this).addClass('active');

        var number = $(this).parent().index() +1;
        $('ul.tab-content li ._1tab').removeClass('show');
        $('ul.tab-content li:nth-child(' + number +') ._1tab').addClass('show');
    });

    // reveal load
    new WOW().init();

    //Sidebar
    $('.more-button').on('click',function(e){
        e.preventDefault();
        $('#sideBar-block').toggleClass('move-right');
        $('.overlay').toggleClass('xh');
        if ($('#sideBar-block').hasClass('move-right')) {
            $('html,body').css('overflow','hidden');
        }
        else {
            $('html,body').css('overflow','visible');
        }
    })

    $('.overlay').on('click',function(e){
        $('#sideBar-block').removeClass('move-right');
        $(this).removeClass('xh');
        $('html,body').css('overflow','visible');
    })
    
    $('a.remove').on('click',function(e){
        e.preventDefault();
        $('#sideBar-block').removeClass('move-right');
        $('.overlay').removeClass('xh');
        $('html,body').css('overflow','visible');
    })

    //SlideUp
    $('.item-details-mobile').slideUp();
    $('#sideBar-block ul li a[href^="#"]').on('click',function(e){
        e.preventDefault();
        $(this).next().slideToggle();
    })
});