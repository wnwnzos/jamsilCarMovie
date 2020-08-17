$(function () {

    // GNB a링크를 클리하면 해당페이지 위치로 이동 애니메이션 //
    // 이벤트 대상: .gnb a
    $(".gnb a").click(function (e) {
        $(this).parent()
            .addClass("on") // 클래스넣기
            .siblings()
            .removeClass("on")
        
        




        // 1. a태그 기본이동 막기
        e.preventDefault();

        // 2. a태그의 href값 읽어오기(이동할 페이지 아이디값)
        var pid = $(this).attr("href");
        console.log("아이디:" + pid);

        // 3. 이동할 페이지 아이디로 페이지 위치값(top값) 구하기
        // offset() 메서드로 현재 요소 위치,크기정보를 알 수 있다!
        var pgpos = $(pid).offset().top;
        console.log("top값:" + pgpos);

        // 4. 스크롤 이동 애니메이션 
        // 대상: html,body
        $("html,body").animate({
            scrollTop: pgpos + "px"
        }, 800);




    }); /////////// click ////////////////////////




    /*top퀵메뉴 클릭시 위로*/
    $("#top").click(function () {
        $(".gnb li").eq(0).addClass("on")
            .siblings()
            .removeClass("on")
        $('html, body').animate({
            scrollTop: 0
        }, 800); /////////// animate //////////////////

        return false;



    }); ///////////////// click ////////////////////////////



    /*퀵메뉴위치이동*/
    $('#btn1').click(function () {

        var offset = $('.section1').offset();
        //선택한 태그의 위치를 반환

        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.8초 동안 부드럽게 해당 위치로 이동함.
        $('html').animate({
            scrollTop: offset.top
        }, 800)

        $(".gnb li").eq(0).addClass("on")
            .siblings()
            .removeClass("on");


    }); ///////////////// click ////////////////////////////
    
    
//    /*현재상영작 화살표 클릭시 움직이기*/
//    
//    $(".arrow_right").click(function(){
//        $("#now1")
//            .fadeOut(1000).next().fadeIn(1000).fadeOut(1000).
//        
       
    
          
       
        
           
       
        
  //  }); ///////////////// click ////////////////////////////
    
    
    

    $('#btn2').click(function () {

        var offset = $('.section2').offset();

        $('html').animate({
            scrollTop: offset.top
        }, 800)

        $(".gnb li").eq(1).addClass("on")
            .siblings()
            .removeClass("on");

        ////////// css //////////////

    }); ///////////////// click ////////////////////////////

    $('#btn3').click(function () {

        var offset = $('.section3').offset();

        $('html').animate({
            scrollTop: offset.top
        }, 800)
        
        $(".gnb li").eq(2).addClass("on")
        .siblings()
        .removeClass("on")

       

    }); ///////////////// click ////////////////////////////

    $('#btn4').click(function () {

        var offset = $('.section4').offset();

        $('html').animate({
            scrollTop: offset.top
        }, 800)

        $(".gnb li").eq(3).addClass("on")
        .siblings()
        .removeClass("on")

        

    }); ///////////////// click ////////////////////////////

    $('#btn5').click(function () {

        var offset = $('.section5').offset();

        $('html').animate({
            scrollTop: offset.top
        }, 800)
        
        $(".gnb li").eq(4).addClass("on")
        .siblings()
        .removeClass("on")


      

    }); ///////////////// click ////////////////////////////

    $('#btn6').click(function () {

        var offset = $('.section6').offset();

        $('html').animate({
            scrollTop: offset.top
        }, 800)
        
        $(".gnb li").eq(5).addClass("on")
        .siblings()
        .removeClass("on")


    }); ///////////////// click ////////////////////////////

    $('#btn7').click(function () {

        var offset = $('.section7').offset();

        $('html').animate({
            scrollTop: offset.top
        }, 800)
        
        $(".gnb li").eq(6).addClass("on")
        .siblings()
        .removeClass("on")


    }); //////////////// click ////////////////////////////





    /*현재상영작 포스터 오버시 예고편보기 */
    $(".poster_img").mouseenter(function () {
        $(".seemv").css({
            display: "block"

        });
    });
    $(".poster_img").mouseleave(function () {
        $(".seemv").css({
            display: "none"
        });
    });

    /*예고편보기 클릭시 영상띄우기*/
    $(".seemv").click(function () {
        $(".see_mv").fadeIn(3000);
    }); //////////// click //////////////////////


    /*상영예정작 버튼클릭시*/
    $(".btn_more").click(function () {
        $(this).parent("h3").next(".mv_info").toggle("slow");
        $(this).toggleClass("active");



    }); ///////// click ////////////


    /*공지사항*/
    $(".btn_notice").click(function () {

        $(this).parent("li").next(".sec_notice").slideToggle("slow");
        $("i", this).toggleClass("fas fa-plus-circle fas fa-minus-circle");



    }); ///////////////  click /////////////////////









}); ///////////// 제이쿼리 구역 //////////////////////



