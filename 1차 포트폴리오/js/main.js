// 카카오영입 메인 JS - main.js //
var mob = 0;
if ($(window).width() < 500) mob = 1;
console.log("모바일:" + mob);


$(function () { //////// jQB//////
    
    ////////////////////////////////////////////////////////////
    // 1. 상단영역에 마우스 오버시 하얀배경 메뉴로 변경
    // 변경 대상: .top
    ////////////////////////////////////////////////////////////
    if (!mob) { //모바일이 아닐때

        $(".top").hover(
            function () { //over
                $(this).addClass("on");
            },
            function () { //out
                $(this).removeClass("on");
            }); //////// hover //////////

    } ///// if ///////////////////

    ///////////////////////////////////////////////////////////////////
    // 3. 새로고침시 스몰배너(.s1 img, .wstxt) 랜덤변경 
    //////////////////////////////////////////////////////////////////
    // 3-1. 새로 고침시 인사이드 카카오 이미지 및 색상 변경
    // 변경 대상: .insdek
    /////////////////////////////////////////////////////////////////

    var bgcolor = ["#dddddd", "#dddddd", "#ffbdbd", "#ffd6b5", "#b7eba3", "#b9e3f1"]

    var temp = 0;


    // 랜덤수 만들기
    // 1~5사이의 수
    var rdn = Math.ceil(Math.random() * 5);
    ////console.log("랜덤수:" + rdn);

    // 랜덤수 체크
    while (rdn === temp) {
        var rdn = Math.ceil(Math.random() * 5);
        //console.log("다시랜덤수" + rdn);
    } ///// while ///////

    // 임시변수에 확정된 랜덤수 저장
    temp = rdn;

    $(".insidek")
        .append('<img src="images/sban1_' + rdn + '.gif" alt="인사이드카카오이미지">')
        .css({
            backgroundColor: bgcolor[rdn]
        });


    ///////////////////////////////////////////////////////////////////////
    // 3-2. 새로 고침시 카카오스러움 txt 변경//////////////////////////////////
    // 변경 대상: .wstxt
    //////////////////////////////////////////////////////////////////////
    var wtxt = ["무엇이든 본질만 남기고<br>처음부터 다시 생각해 봅니다.<br><br>Back to Basic ",
               "스스로 몰입하고<br>주도적으로 일합니다.<br><br>Act for Yourself",
               "세상을 선하게<br>바꾸려고 노력합니다.<br><br>Tech for Good",
               "나보다 동료의 생각이<br>더 옳을 수 있다는 믿음을 가집니다.<br><br>Trust to Trust",
               "가보지 않은 길을<br>두려워 하지 않습니다.<br><br>Willing to Venture"];

    var wtcolor = ["#dddddd", "#dddddd", "#dddddd", "#dddddd", "#dddddd"]

    var rnum = 0;
    // 랜덤수 만들기
    // 1~5사이의 수
    var rdn2 = Math.floor(Math.random() * 4);
    //console.log("랜덤수2:" + rdn2);

    // 랜덤수 체크(같은수 연속안나오게)
    while (rdn2 === rnum) {
        var rdn2 = Math.floor(Math.random() * 4);
        //console.log("다시랜덤수2:" + rdn2);
    } ///// while ///////

    // 임시변수에 확정된 랜덤수 저장(다음번에 비교함)
    rnum = rdn2;

    $(".wstxt")
        .empty()
        .append(wtxt[rdn2])
        .parent().css({
            backgroundColor: wtcolor[rdn2]
        });


    ////////////////////////////////////////////////////////////////////////
    // 4. 하단영역에 관련사이트(#fsite),한국어(#lang) 클릭시 박스 보이기
    ////////////////////////////////////////////////////////////////////////
    // 변경 대상: #fsite .fsbox / 변경 대상: #lang .langbox
    ////////////////////////////////////////////////////////////////////////
    $("#fsite a,#lang a").click(function (e) {

        e.preventDefault();

        if ($(this).next().css("display") === "none") {

            $(this).next().show(10, function () {

                $(this).prev().find(".sbtn").hide(10, function () {
                    $(this).next().show(10);

                }); /// hide //////

            }); // show ////////
        } //// if /////////////////////
        else {
            $(this).next().hide(10, function () {

                $(this).prev().find(".sbtn2").hide(10, function () {
                    $(this).prev().show(10);
                }); /// show //////


            }); // hide ////////
        } ////// else ////////////////////


    }); //////// click ////////////



    /***********************모바일 버전 JS***********************/

    ///////하단영역에 관련사이트(.mfsite),한국어(.mlang) 클릭시 박스 보이기///////
    // 이벤트 대상: .mfsite, .mlang  /////////////////////////////////////// 
    // 변경대상: .mfsbox , .mlangbox //////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    $(".mfsite a").click(function (e) {

        e.preventDefault();

        if ($(this).parent().css("height") === "45px") {

            $(this).parent().animate({
                height: "164px"
            }, 200, function () {

                $(this).find(".sbtn").hide(5, function () {
                    $(this).next().show(5);
                }); ///hide///

            }); /// animate ////


        } ///// if /////////////////////////////
        else {

            $(this).parent().animate({
                height: "45px"
            }, 200, function () {

                $(this).find(".sbtn2").hide(5, function () {
                    $(this).prev().show(5);
                }); //hide ///

            }); /////animatte///

        } /////// else ////////

    }); /////// click ///////////////////////////////////////


    $(".mlang a").click(function (e) {

        e.preventDefault();

        if ($(this).parent().css("height") === "45px") {

            $(this).parent().animate({
                height: "134px"
            }, 200, function () {

                $(this).find(".sbtn").hide(5, function () {
                    $(this).next().show(5);
                }); ///hide///

            }); /// animate ////);

        } ///// if /////////////////////////////
        else {

            $(this).parent().animate({
                height: "45px"
            }, 200, function () {

                $(this).find(".sbtn2").hide(5, function () {
                    $(this).prev().show(5);
                }); //hide ///

            }); /////animatte/// 

        } /////// else ////////

    }); /////// click ///////////////////////////////////////

    //////////////////////////////////////////////////////////
    /////// 햄버거버튼 클릭시 모바일 메뉴 보이기
    // 이벤트 대상: #ham
    // 변경 대상: .momenu
    ///////////////////////////////////////////////////////////

    $("#ham").click(function () {

        $(".momenu").show();

    }); //////// click ///////////////

    $(".close").click(function () {

        $(".momenu").hide();

    }); //////// click ///////////////
    
    ///////////////////////////////////////////////
    ///// 위로 이동 박스 클릭시 상단으로 올라가기///////
    // 이벤트 대상: .topbtn
    ///////////////////////////////////////////////
    $(".topbtn").click(function(){
        
        $("html,body").animate({
            scrollTop:"0"
        },800);
        
    });//////// click //////////
    
    
    ////////////////////////////////////////////////////////
    //// 모바일에서 PC웹 보기 버튼 클릭시 PC웹 버전으로 변경 //////
    // 이벤트 대상 : .pcbtn 
    ////////////////////////////////////////////////////////
    
    $(".pcbtn").click(function(){
        location.href = "main2.html";
    });///////// click /////////
    
    
    ////////////////////////////////////////////////////////////
    // PC 웹 버전에서 모바일웹 보기 버튼 클릭시  모바일 버전으로 변경///
    // 이벤트 대상: .mbtn
    ///////////////////////////////////////////////////////////
    
    $(".mbtn").click(function(e){
        e.preventDefault();
        
        location.href = "main.html";
    });///////// click /////////

    
    


}); //////// jQB///////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////
// 2. 메인 배너의 방향 버튼 클릭시 배너 이동
//// 로드 구역 ///////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", function () {

    // 1. 로드구역 확인
    //console.log("로딩완료!");

    // 2. 이벤트 대상 선정
    var abtn = document.querySelectorAll('.abtn');

    // 3. 이벤트 종류 : click

    // (0) 왼쪽버튼
    abtn[0].onclick = function () {

        // 함수호출 확인
        ////console.log("왼쪽!");
        // 함수호출
        goSlide(0);
        // 이동속성 없애기
        return false;

    }; ////// click /////////////////


    // (1)오른쪽버튼
    abtn[1].onclick = function () {

        // 함수호출확인!
        ////console.log("오른쪽!");
        //함수호출
        goSlide(1);
        // 이동속성 없애기
        return false;

    }; //// click ///////////////////


}); /////// 로드 구역/////////////////////////////////////
///////////////////////////////////////////////////////


/*////////////////////////////////////////////////
    함수명: goSlide
    기능: 
            오른쪽버튼 클릭시 배너는 다음순번으로 변경
            왼쪽버튼 클릭시 배너는 이전순번으로 변경
            
            1. 이벤트 종류: click
            2. 이벤트 대상: .abtn (양쪽이동버튼)
            3. 변경대상: .slide li
            4. 변경내용: 변경대상의 특정순번 li에 
                    class="on" 주기
                    이때, 미리 셋팅된 class에 의해서
                    opacity가 0인 투명 li가 
                    opacity 1로 보이게 되고 
                    트랜지션으로 인해 애니메이션된다.
*/ ////////////////////////////////////////////////

var snum = 0;

function goSlide(dir) { //dir(왼쪽:0, 오른쪽:1)

    // 1. 함수호출, 전달값 확인
    //console.log("슬라이드이동" + dir);

    // 2. 변경대상: .slide li
    var tg = document.querySelectorAll('.slide li');
    ////console.log("슬라이드개수:"+tg.length);

    // 3. 버튼 구분하여 배너순번 증감하기
    // 오른쪽버튼
    if (dir) { //dir이 1이면 true
        // 확인
        ////console.log("오른쪽");
        // 배너순번 증가
        snum++;
        // 한계수 설정
        if (snum === tg.length) snum = 0;


    } //// if ////////

    //왼쪽버튼
    else {
        // 확인
        ////console.log("왼쪽");
        // 배너순번 감소
        snum--;
        //한계수 설정
        if (snum === -1) snum = tg.length - 1;
    } /////// else ///////

    // 변경된 배너 순번 확인
    //console.log("배너순번확인" + snum);

    // 4. 해당순번에 class="on" 넣기

    // 클래스 전부 지우기
    for (var x of tg) {
        x.classList.remove("on");
    } /// for of //////////

    // tg에 class="on" 넣기
    tg[snum].classList.add("on");


    //.tit_name text 바꾸기
    document.querySelector('.tit_name').innerHTML = txt1[snum];


    // .say text 바꾸기
    document.querySelector('#say').innerHTML = txt2[snum];
    //console.log("확인!");


    // .icon_itw text 넣기
    document.querySelectorAll('.icon_itw').innerHTML = "INTERVIEW >";


    // .pagenum text 바꾸기
    document.querySelector('#pagenum').innerHTML = txt3[snum];





} /////// goSlide 함수 ///////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////

var txt1 = ["테크 / Doyle",
            "테크 / Kenny",
            "테크 / Harry",
            "디자인 / Daniel",
            "디자인 / Carine",
            "브랜드마케팅 / Kate",
            "서비스비즈 / Arnold",
            "서비스비즈 / Yeda",
            "서비스비즈 / Songsong",
            ];

var txt2 = ["항상 재밌게 일하고자 하는 <br>동료를 기다리고 있습니다.",
            "사용자, 광고주, 회사가 원하는 <br>가치를 고민하고 연구합니다.",
            "카카오는 모바일 서비스의 <br>최전방이며 기회의 땅!",
            "소비자들에게 [경험]을 유도해 <br>마음을 움직이게 하는 <br>통합 브랜딩",
            "카카오의 <br>인상을 디자인합니다.",
            "카카오의 브랜드 경쟁력 <br>향상을 고민하고 있습니다.",
            "광고 효율과 매출 모두 <br>올릴 수 있는 타겟팅 기획!",
            "카카오톡에 다양한 서비스를<br> 연결하여 사용자 편의성을 <br>높입니다.",
            "매일 뉴스 보고 1boon짜리 <br>만드는 콘텐츠 제작자!",
            ];

var txt3 = ["1 / 9",
            "2 / 9",
            "3 / 9",
            "4 / 9",
            "5 / 9",
            "6 / 9",
            "7 / 9",
            "8 / 9",
            "9 / 9",
            ];
