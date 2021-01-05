/////// 전역변수 구역 ////////////////
/*
var pno = 0; /// 현재 페이지번호 전역변수
const totnum = 7; /// 전체 페이지수 -> const 는 상수(변경불가)
var psts = 0; /// 광스크롤막기(0-허용,1-막기)       
*/

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








    /*top퀵메뉴 클릭시 위로****************************************/
    $("#top").click(function () {

        $(".quick_navi li")
            .removeClass("active");

        $(".gnb li")
            .removeClass("on")
        $('html, body').animate({
            scrollTop: 0
        }, 800); /////////// animate //////////////////



        return false;



    }); ///////////////// click ////////////////////////////



    /*퀵메뉴위치이동*****************************************************/
    $('#btn1').click(function () {


        var offset = $('.section1').offset();
        //선택한 태그의 위치를 반환

        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.8초 동안 부드럽게 해당 위치로 이동함.
        $('html').animate({
            scrollTop: offset.top
        }, 800)

        $(".quick_navi li").eq(0).addClass("active")
            .siblings()
            .removeClass("active");

        $(".gnb li").eq(0).addClass("on")
            .siblings()
            .removeClass("on");

    }); ///////////////// click ////////////////////////////

    $('#btn2').click(function () {


        var offset = $('.section2').offset();

        $('html').animate({
            scrollTop: offset.top
        }, 800)

        $(".quick_navi li").eq(1).addClass("active")
            .siblings()
            .removeClass("active");

        $(".gnb li").eq(1).addClass("on")
            .siblings()
            .removeClass("on");





    }); ///////////////// click ////////////////////////////

    $('#btn3').click(function () {

        var offset = $('.section3').offset();

        $('html').animate({
            scrollTop: offset.top
        }, 800)

        $(".quick_navi li").eq(2).addClass("active")
            .siblings()
            .removeClass("active");

        $(".gnb li").eq(2).addClass("on")
            .siblings()
            .removeClass("on")



    }); ///////////////// click ////////////////////////////

    $('#btn4').click(function () {

        var offset = $('.section4').offset();

        $('html').animate({
            scrollTop: offset.top
        }, 800)

        $(".quick_navi li").eq(3).addClass("active")
            .siblings()
            .removeClass("active");

        $(".gnb li").eq(3).addClass("on")
            .siblings()
            .removeClass("on")



    }); ///////////////// click ////////////////////////////

    $('#btn5').click(function () {

        var offset = $('.section5').offset();

        $('html').animate({
            scrollTop: offset.top
        }, 800)



        $(".quick_navi li").eq(4).addClass("active")
            .siblings()
            .removeClass("active");

        $(".gnb li").eq(4).addClass("on")
            .siblings()
            .removeClass("on")




    }); ///////////////// click ////////////////////////////

    $('#btn6').click(function () {

        var offset = $('.section6').offset();

        $('html').animate({
            scrollTop: offset.top
        }, 800)

        $(".quick_navi li").eq(5).addClass("active")
            .siblings()
            .removeClass("active");


        $(".gnb li").eq(5).addClass("on")
            .siblings()
            .removeClass("on")

    }); ///////////////// click ////////////////////////////

    $('#btn7').click(function () {


        var offset = $('.section7').offset();

        $('html').animate({
            scrollTop: offset.top
        }, 800)

        $(".quick_navi li").eq(6).addClass("active")
            .siblings()
            .removeClass("active");

        $(".gnb li").eq(6).addClass("on")
            .siblings()
            .removeClass("on")


    }); //////////////// click ////////////////////////////





    /*현재상영작 포스터 오버시 예고편보기 */
    $("#movie_list a").mouseenter(function () {
        $(".seemv").css({
            display: "block"

        });
    });
    $("#movie_list a").mouseleave(function () {
        $(".seemv").css({
            display: "none"
        });
    });


    /*예고편 클릭시*/
    $("#movie_list a").click(function () {
        $("body").css({
            overflowY: "hidden"
        });
        $("#modal").fadeIn();
    });



    /*닫기버튼 클릭시*/
    $("#modal span").click(function () {
        $("body").css({
            overflowY: "auto"
        });
        $("#modal").fadeOut();
        $("#mainVid").attr("src", "")
    })



    /*상영예정작 버튼클릭시*/
    $(".section4>h3").click(function () {
        var htv = $(this).next(".myinfo_box").find(".mv_info").height();
        if ($(this).next(".myinfo_box").height() !== 0) htv = 0;

        $(this).next(".myinfo_box")
            .animate({
                height: htv + "px"
            }, 700)
            .siblings(".myinfo_box")
            .animate({
                height: "0px"
            });



        var isrc = $(this).find(".btn_more img").attr("src");


        console.log(isrc);


        if (isrc === "images/up_icon.png") isrc = "images/down_icon.png";
        else isrc = "images/up_icon.png";

       $(".btn_more").find("img").attr("src", "images/down_icon.png");


        $(this).find(".btn_more img").attr("src", isrc);


    }); ///////// click ////////////




    /*공지사항*/
    $(".section6 ul li").click(function () {

        var htv = $(this).next(".txt").find("p").innerHeight();
        if ($(this).next(".txt").height() !== 0) htv = 0;

        $(this).next(".txt")
            .animate({
                height: htv + "px"
            }, 700)
            .siblings(".txt")
            .animate({
                height: "0px"
            });

        $(".btn_notice i").attr("class", "fas fa-plus-circle");
        $("i", this).toggleClass("fas fa-minus-circle fas fa-plus-circle");

    }); ///////////////  click /////////////////////




    /*모바일 메뉴**********/
    $(".ham").click(function(){
        $(".mobm").stop().slideToggle(300);
        
    });





}); ///////////// jQB //////////////////////
