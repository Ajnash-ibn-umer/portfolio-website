$(document).ready(()=>{
    let $btns=$('.project-area .button-group button')



    $btns.click((e)=>{
        $('.project-area .button-group button').removeClass('active')
        e.target.classList.add('active')
console.log('ok');
        let selector=$(e.target).attr('data-filter')
        console.log(selector);
        $('.project-area .grid').isotope({
            filter:selector
        })

        
    })
    $('.project-area .button-group #btn-1').trigger('click');



    //owl-courosel


    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        data:true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items:2
            }
        }
    })


    let nav_offset_top=$('.header').height();

    function navbarFixed(){
        console.log(nav_offset_top);
        if($('.header').length){
            $(window).scroll(function(){
                let scroll=$(window).scrollTop();
                if(scroll>=nav_offset_top){
                    $('.header .menu').addClass('navbar_fixed')
                }else{
                    $('.header .menu').removeClass('navbar_fixed') 
                }
            })
        }
    }
    navbarFixed()
})