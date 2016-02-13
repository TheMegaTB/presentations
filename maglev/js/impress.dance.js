/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//var dance = window.dance = function (){
//    
//    var init = function () {
//        impress().init();
//        alert('inited');
//    };
//    
//    
//    
//    
//};

function previewmode () {

    $('body').append('<div>In Preview Mode</div>');
    $('.substep.future').removeClass('future').addClass('present');
};



$('[data-substep="first"]').children().addClass('substep');


//$('[data-substep="all"]').children('[data-substep="all"] li *').addClass('substep');
//$('[data-substep="all"]').children().each(function (key, val) {
//  
//    if($(val).children().length <= 0){
//       $(val).addClass('substep');
//    }else{
////      $(val).contents().filter(function() {
////        return this.nodeType === 3;
////      }).each(function() {
////        this.nodeValue = $.trim(this.nodeValue);
////      }).wrap('<span class="ttt"></span>');
//      
//      $(val).children().addClass('substep'); 
//      
//    };
//});



$('.substep').addClass('future');

function substepNext() {
    var activeStep = document.querySelector(".step.active");
    var future = activeStep.querySelectorAll(".future");
    var present = activeStep.querySelectorAll(".present");
    var past = activeStep.querySelectorAll(".past");

    if (future.length === 0) {
        impress().next(); 
        $(present).addClass('future').removeClass('present');
        $(past).addClass('future').removeClass('past');
    } else {
        $(future[0]).addClass('present').removeClass('future');
        if (present.length > 0) {
            $(present).addClass('past').removeClass('present');
        }



//                    var event = document.createEvent("CustomEvent");
//                    event.initCustomEvent("impress:substep:enter", true, true);
//                    future[0].dispatchEvent(event);
    }

}

function substepPrev() {
    impress().prev();
}

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 9 || (event.keyCode >= 32 && event.keyCode <= 34) || (event.keyCode >= 37 && event.keyCode <= 40)) {
        switch (event.keyCode) {
        case 33: // pg up
        case 37: // left
        case 38: // up
            substepPrev();
            break;
        case 9: // tab
        case 32: // space
        case 34: // pg down
        case 39: // right
        case 40: // down
            substepNext();
            break;
        }

        event.preventDefault();
    }
}, false);