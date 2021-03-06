    var menu = document.getElementById('menu');
    var menuStatus=false;
/******************PERSONALIZE MENU**********************/
    var menuSize=new Number(50); //this is a percent
    var menuHidePosition=new Number(25);
    var menuAnnimateAmmount= menuSize+menuHidePosition + "%";
    var menubgColor="#5a5959";
    var menuOpacity ="1";
    var menuShadowEnabled = true;
    var menuShadow = "rgba(0, 0, 0, 0.14902) 30px 0px 30px 0px";
    var menuOverHeader = true;

/******************PERSONALIZE MENU*********************/ 
/******************PERSONALIZE SHADE*********************/
    var shadeInclude = true;
    var shadeOpacity = ".8";
    var shadeBGColor = "black"; 
    //var shadebg = "linear-gradient(to right,black 30%,transparent)";
    var menuTitle={
        fonttype: "arial",
        fontsize: new Number(20),
        color: "#fff",
        bgcolor: "#5a5959",
        padding: "4px 0 4px 10px",
        background: "linear-gradient(rgba(90,89,89,1) 5%, rgba(66,65,65,1) 85%",
        topborder: "solid #6b6b6b 1px",
        bottomborder: "solid #3d3d3d 1px",
        textshadow: "0px -1px 1px #333",
        centered: ""
    };
    var menuItem ={
        color: "#fff",
        fontSize: new Number(14),
        hover:{
            bgColor: "#716f6f",
            color: "#fff"
        }
    };
    var menuItemActive={
        background: "linear-gradient(#1e1d1d, #383737 21%)",
        bgColor: "#383737"
    };
/******************PERSONALIZE MENU*********************/
$(document).ready(function(){
    //Create the shade, and get the menu object

    

    $(menu).css({
        "width": menuSize + "%",
        "height": "100%",
        "display": "block !important",
        "float": "left",
        "margin-top": function(){
            if (!menuOverHeader){
                return $("#header").height();
            }else{
                return 0;
            }
            //Doesn't Take Into Account Possible negative Margin-Top
        },
        "z-index": 999999,
        "top":0,
        "left":0,
        "background": menubgColor,
        "opacity": menuOpacity,
        "position":"absolute",
        "left": "-" + (menuSize+menuHidePosition) + "%" ,
        "box-shadow": function(){
            if (menuShadowEnabled){
                return menuShadow;
            }else{
               return ""; 
            }
        }
    });
    $("#menu header").css({
        "font-family": menuTitle.fonttype,
        "font-size":menuTitle.fontsize + 'px',
        "color":menuTitle.color,
        "margin":0,
        "background-color":menuTitle.bgcolor,
        "padding":menuTitle.padding,
        "background": menuTitle.background,
        "border-top": menuTitle.topborder,
        "border-bottom":menuTitle.bottomborder,
        "text-shadow": menuTitle.textshadow
    });
    $('.sub-menu').css({
        "border-bottom": "solid #333 1px",
        "box-shadow": "0 1px 0 #727272",
        "color": menuItem.color,
        "font-size": (menuItem.fontSize * 1.25) + 'px',
        "font-family": "arial",
        "text-decoration": "underline",
        "display": "block",
        "padding": "10px 0px 10px 10px",
        "text-shadow": "0px 1px 1px #000000"        
    });
    $("#menu ul").css({
        "margin":"0",
        "padding": "0",
        "width": "100%",
        "overflow-y": "scroll"
    });
    $("#menu ul li").css({
        "list-style-type": "none",
        "margin": "0"
    });
    $('#menu ul li a:link, #menu ul li a:visited, .sub-menu li a').css({
        "border-bottom": "solid #333 1px",
        "box-shadow": "0 1px 0 #727272",
        "color": menuItem.color,
        "font-size": menuItem.fontSize + "px",
        "font-family": "arial",
        "text-decoration": "none",
        "display": "block",
        "padding": "10px 0px 10px 10px",
        "text-shadow": "0px 1px 1px #000000",
      });
      



    $('#menu ul li a:hover, #menu ul li a:active').css({
        "background-color": menuItem.hover.bgColor,
        "color": menuItem.hover.color
      });
    
    $('.active').css({
        "background-color": menuItemActive.bgColor,
        "background": menuItemActive.background
      });
      
      
      $('#menu footer').css({
          "position": "absolute",
          "bottom":"0",
          "width":"100%",
          "border-bottom": "solid #333 1px"
          
      });

    if (shadeInclude){
        var shade =document.createElement('div');
        shade.id = "shade";
        document.body.appendChild(shade);
        $(shade).css({
            "position":"absolute",
            "top":"0",
            "left":"0",
            "overflow": "hidden",
            "opacity": shadeOpacity,
            "display":"none",
            "z-index": "999998",
            "background-color": shadeBGColor,
            //"background": shadebg,
            "width":"100%",
            "height":"100%",
            "margin-top": function(){
                if (!menuOverHeader){
                    return $("#header").height();
                }else{
                    return 0;
                }
                //Doesn't Take Into Account Possible negative Margin-Top
            }
        });
    };
    $('#menutrigger').css({
        "width": "2px",
        "height": "100%",
        "display": "block !important",
        "float": "left",
        "margin-left": "-1px",
        "z-index": 999997,
        "top":0,
        "left":0,
        "position":"absolute",
                        "background-color": "pink"
    });





    $(shade).click(function(){
       if(menuStatus ){
           toggleMenu();
       };
    });
    $("#showmenubutton").click(function(){
            toggleMenu();
            return false;
    });

    $(".menutrigger").on("swipeleft", function(){
        console.log('menutrigger swipeleft');
        if (menuStatus){
            toggleMenu();   
        }
    });

    $(".menutrigger").on("swiperight", function(){
        console.log('menutrigger swiperight');
        if (!menuStatus){
            toggleMenu();  
        }
    });

    //Menu Item State Change
    $("#menu li a").click(function(){
            var p = $(this).parent();
            if($(p).hasClass('active')){
                    $("#menu li").removeClass('active');
            } else {
                    $("#menu li").removeClass('active');
                    $(p).addClass('active');
            }
    });


});
function toggleMenu(){
    if(!menuStatus ){
        setMenu(true);
        return false;
    } else {
        setMenu(false);
        return false;
    }
};
function setMenu(state){
    if(state&&!menuStatus){
        //The Following code is used for a 'Push' annimation
        /*$(".ui-page-active").animate({
                marginLeft: "+="+menuSize+"px",
          }, 300);
        */
       menuStatus = true;
        $(menu).animate({
              left: "+=" + menuAnnimateAmmount,
        }, 300);
        shadeStatus(menuStatus);
        return false;
    } else if (!state&&menuStatus){
        menuStatus = false;
         //The following code is used for a push annimation
         /*$(".ui-page-active").animate({
            marginLeft: "0px",
        }, 300);*/
        $(menu).animate({
              left: "-=" + menuAnnimateAmmount,
        }, 300);
        shadeStatus(menuStatus);
        return false;
    }
};
function shadeStatus(menuStatus){
    if (menuStatus){
        $(shade).fadeIn(400);
    }
    else{
        $(shade).fadeOut(400);
    }
};
