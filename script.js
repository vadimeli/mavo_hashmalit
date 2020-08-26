var currentQuestionNumber = 0;

function defaultResize(){
    $('.main-wrapper').css('height', window.innerHeight + 'px');
    $('.wrapper #vid1').css('max-height', window.innerHeight + 'px');

    $('.question-1, .question-2, .question-3, .question-4, .question-5, .question-6, .question-7, .question-8, .question-9 ').css('max-height', window.innerHeight + 'px');
}

$(window).resize(function(){
    defaultResize();
    changeQ3SpotsPosition();
    changeQ5SpotsPosition();
});


$( document ).ready(function() {
    defaultResize();
});



$(".main-wrapper .enter-screen > img").click(function () {
    $(".main-wrapper .enter-screen").css("display", "none");
    $(".wrapper #vid-1").css("display", "block");
    $(".wrapper #vid-1 video")[0].play();


    let myInterval = setInterval(myTimer, 1000);

    function myTimer() {
        console.log($(".wrapper #vid-1 video")[0].currentTime);
        if($(".wrapper #vid-1 video")[0].currentTime>=120 && $(".wrapper #vid-1 video")[0].currentTime<=121){
            $(".wrapper #vid-1 video")[0].pause();
            $(".question-1").css('display', 'flex');
            myStopFunction();
        }
    }

    function myStopFunction() {
        clearInterval(myInterval);
    }


});



// On Seek
function onSeekingFunction(){
    if($(".wrapper #vid-1 video")[0].currentTime < 120){
        continueVideoPlay(0);
    }
    if($(".wrapper #vid-1 video")[0].currentTime < 424 && $(".wrapper #vid-1 video")[0].currentTime > 121){
        continueVideoPlay(1);
    }
    if($(".wrapper #vid-1 video")[0].currentTime < 685 && $(".wrapper #vid-1 video")[0].currentTime > 425){
        continueVideoPlay(3);
    }
    if($(".wrapper #vid-1 video")[0].currentTime < 984 && $(".wrapper #vid-1 video")[0].currentTime > 686){
        continueVideoPlay(5);
    }
    if($(".wrapper #vid-1 video")[0].currentTime < 1213 && $(".wrapper #vid-1 video")[0].currentTime > 985){
        continueVideoPlay(6);
    }
    if($(".wrapper #vid-1 video")[0].currentTime < 1469 && $(".wrapper #vid-1 video")[0].currentTime > 1214){
        continueVideoPlay(7);
    }
}


function continueVideoPlay(qNumber) {
    let myNumber = parseInt(qNumber);
    currentQuestionNumber = qNumber;
    switch(myNumber) {
        case 0:
            playVideoWithTimeCount(myNumber+1, 120, null);
            break;
        case 1:
            $(".question-1").css('display', 'none');
            playVideoWithTimeCount(myNumber+1, 424, null);
            break;
        case 2:
            $(".question-2").css('display', 'none');
            $(".question-3").css('display', 'flex');
            break;
        case 3:
            $(".question-3").css('display', 'none');
            playVideoWithTimeCount(myNumber+1, 685, null);
            break;
        case 4:
            $(".question-4").css('display', 'none');
            $(".question-5").css('display', 'flex');
            break;
        case 5:
            $(".question-5").css('display', 'none');
            playVideoWithTimeCount(myNumber+1, 984, null);
            break;
        case 6:
            $(".question-6").css('display', 'none');
            playVideoWithTimeCount(myNumber+1, 1213, null);
            break;
        case 7:
            $(".question-7").css('display', 'none');
            playVideoWithTimeCount(myNumber+1, 1469, null);
            break;
        case 8:
            $(".question-8").css('display', 'none');
            $(".question-9").css('display', 'flex');
            break;
        default:
            $(".question-"+myNumber).css('display', 'none');
            $(".wrapper #vid-1 video")[0].play();
    }
}


function playVideoWithTimeCount(qNumber, time, videoNumber) {
    console.log("qNumber", qNumber);
    console.log("time", time);
    $(".wrapper #vid-1 video")[0].play();
    let myInterval = setInterval(myTimer, 1000);

    function myTimer() {
        console.log($(".wrapper #vid-1 video")[0].currentTime);
        if($(".wrapper #vid-1 video")[0].currentTime>=time && $(".wrapper #vid-1 video")[0].currentTime<=time+2){
            $(".wrapper #vid-1 video")[0].pause();
            if(videoNumber === null || typeof videoNumber === 'undefined'){
                $(".question-"+qNumber).css('display', 'flex');
            } else {
                $(".play-extra-video").data('video-number', videoNumber);
                $(".play-extra-video").css('display', 'block');
            }



            myStopFunction();
        }
    }

    function myStopFunction() {
        clearInterval(myInterval);
    }

}


// ===============================================
var isAnswered = false;


$(".close-q, .next-q").click(function () {
    let qNumber = $(this).data('question');
    let isQuestionAnswered = $(this).data('answered');
    if(isAnswered === true || isQuestionAnswered === true){
        continueVideoPlay(qNumber);
        isAnswered = false
    } else {
        alert("להמשך יש לענות על השאלה")
    }
});

// Q - 1
let q1_click = false;
$(".question-1 > div > div > .answers > div").click(function () {
    if(q1_click === true){
        return;
    }

    q1_click = true;
    isAnswered = true;
    $(".question-1 > div > .next-q").data('answered', true);

    if($(this).data('answer') == true){
        $(this).css('background-color', '#aae322');
        $(this).append('<img src="assets/images/right.png"/>');
    } else {
        $(this).css('background-color', '#f46b6b');
        $(this).append('<img src="assets/images/wrong.png"/>');
        $(".question-1 > div > div > .answers > div").each(function () {
            if($(this).data('answer') == true){
                $(this).css('background-color', '#aae322');
                $(this).append('<img src="assets/images/right.png"/>');
            }
        })
    }

    // Remove Hover Effect
    $(".question-1 > div > div > .answers > div").bind("mouseover", function () {
        if($(this).css('background-color') == "rgb(176, 176, 185)"){
            $(this).css('background-color', '#e6e6e6');
        }
    });
    //===========================================================================

    $(".question-1 > div > .next-q").css('visibility', 'visible');
});

// Q - 2
let q2_click = false;
$(".question-2 > div > div > .answers > div").click(function () {
    if(q2_click === true){
        return;
    }

    q2_click = true;
    isAnswered = true;
    $(".question-2 > div > .next-q").data('answered', true);

    if($(this).data('answer') == true){
        $(this).css('background-color', '#aae322');
        $(this).append('<img src="assets/images/right.png"/>');
    } else {
        $(this).css('background-color', '#f46b6b');
        $(this).append('<img src="assets/images/wrong.png"/>');
        $(".question-2 > div > div > .answers > div").each(function () {
            if($(this).data('answer') == true){
                $(this).css('background-color', '#aae322');
                $(this).append('<img src="assets/images/right.png"/>');
            }
        })
    }

    // Remove Hover Effect
    $(".question-2 > div > div > .answers > div").bind("mouseover", function () {
        if($(this).css('background-color') == "rgb(176, 176, 185)"){
            $(this).css('background-color', '#e6e6e6');
        }
    });
    //===========================================================================

    $(".question-2 > div > .next-q").css('visibility', 'visible');
});


// Q - 3
let q3_click = false;
$(".question-3 > div > div > .answers > div").click(function () {
    if(q3_click === true){
        return;
    }

    q3_click = true;
    isAnswered = true;
    $(".question-3 > div > .next-q").data('answered', true);

    if($(this).data('answer') == true){
        $(this).css('background-color', '#aae322');
        $(this).append('<img src="assets/images/right.png"/>');
    } else {
        $(this).css('background-color', '#f46b6b');
        $(this).append('<img src="assets/images/wrong.png"/>');
        $(".question-3 > div > div > .answers > div").each(function () {
            if($(this).data('answer') == true){
                $(this).css('background-color', '#aae322');
                $(this).append('<img src="assets/images/right.png"/>');
            }
        })
    }

    // Remove Hover Effect
    $(".question-3 > div > div > .answers > div").bind("mouseover", function () {
        if($(this).css('background-color') == "rgb(176, 176, 185)"){
            $(this).css('background-color', '#e6e6e6');
        }
    });
    //===========================================================================

    $(".question-3 > div > .next-q").css('visibility', 'visible');
});



// Q - 4
let q3spotsPosition = [];
function changeQ3SpotsPosition(){
    if(q3spotsPosition.length !== 0){
        for(let i = 0; i < q3spotsPosition.length; i++){
            q3spotsPosition[i][0].draggable.position({
                my: "center",
                at: "center",
                of: q3spotsPosition[i][1],
                using: function(pos) {
                    $(this).css(pos);
                }
            });
        }
    }
}

$( ".draggable" ).draggable({
    containment: ".question-4 > div",
    // revert: true
});

$( ".droppable" ).droppable({
    drop: function( event, ui ) {
        q3spotsPosition.push([ui, $(this)]);
        let dragData = $(ui.helper[0]).data('name');
        let dropData = $(this).data('name');
        ui.draggable.position({
            my: "center",
            at: "center",
            of: $(this),
            using: function(pos) {
                $(this).animate(pos, "slow", "linear");
            }
        });
        if(dragData === dropData){
            $(ui.helper[0]).data('answer', 'true');
        } else {
            $(ui.helper[0]).data('answer', 'false');
        }

        $(ui.helper[0]).data('spot', 'true');

        // show check button if all spots used
        let isSpotsUsed = true;
        $(".question-4 > div > div > .answers > span").each(function () {
           if($(this).data('spot') === false){
               isSpotsUsed = false;
           }
        });
        if(isSpotsUsed === true){
            // $(".question-4 > div > div > .answers > .check-answer").css('display', 'flex');
            $(".question-4 > div > div > .buttons-container > .check-answer").css('visibility', 'visible');
        }
    }
});

$(".question-4 > div > div > .buttons-container > .check-answer").click(function () {
    $( ".draggable" ).draggable({
        disabled: true
    });

    let isAllCorrect = true;
    $(".question-4 > div > div > .answers > span").each(function () {
        if($(this).data('answer') === 'true'){
            $(this).css('border', '3px solid green');
        } else {
            $(this).css('border', '3px solid red');
            isAllCorrect = false;
        }
    });

    isAnswered = true;
    $(".question-4 > div > .next-q").data('answered', true);

    if(isAllCorrect === true){
        $(".question-4 > div > div > .buttons-container > .check-answer").css('display', 'none');
        $(".question-4 > div > div > .buttons-container > .correct-answer").css('display', 'none');
        $(".question-4 > div > div > .buttons-container > .next-q").css('display', 'flex');
    } else {
        $(".question-4 > div > div > .buttons-container > .check-answer").css('display', 'none');
        $(".question-4 > div > div > .buttons-container > .correct-answer").css('display', 'flex');
        $(".question-4 > div > div > .buttons-container > .next-q").css('display', 'flex');
    }
});

$(".question-4 > div > div > .buttons-container > .correct-answer").click(function () {
    $(".question-4 > div > div > .answers").html('');
    $(".question-4 > div > div > .table-wrap > div > span > span").css('display', 'block');
});






// Q - 5
let q5spotsPosition = [];
function changeQ5SpotsPosition(){
    if(q5spotsPosition.length !== 0){
        for(let i = 0; i < q5spotsPosition.length; i++){
            q5spotsPosition[i][0].draggable.position({
                my: "center",
                at: "center",
                of: q5spotsPosition[i][1],
                using: function(pos) {
                    $(this).css(pos);
                }
            });
        }
    }
}

$( ".draggable-5" ).draggable({
    containment: ".question-5 > div",
    // revert: true
});

$( ".droppable-5" ).droppable({
    drop: function( event, ui ) {
        q3spotsPosition.push([ui, $(this)]);
        let dragData = $(ui.helper[0]).data('name');
        let dropData = $(this).data('name');
        ui.draggable.position({
            my: "center",
            at: "center",
            of: $(this),
            using: function(pos) {
                $(this).animate(pos, "slow", "linear");
            }
        });
        if(dragData === dropData){
            $(ui.helper[0]).data('answer', 'true');
        } else {
            $(ui.helper[0]).data('answer', 'false');
        }

        $(ui.helper[0]).data('spot', 'true');

        // show check button if all spots used
        let isSpotsUsed = true;
        $(".question-5 > div > div > .answers > span").each(function () {
            if($(this).data('spot') === false){
                isSpotsUsed = false;
            }
        });
        if(isSpotsUsed === true){
            // $(".question-5 > div > div > .answers > .check-answer").css('display', 'flex');
            $(".question-5 > div > div > .buttons-container > .check-answer").css('visibility', 'visible');
        }
    }
});

$(".question-5 > div > div > .buttons-container > .check-answer").click(function () {
    $( ".draggable-5" ).draggable({
        disabled: true
    });

    let isAllCorrect = true;
    $(".question-5 > div > div > .answers > span").each(function () {
        if($(this).data('answer') === 'true'){
            $(this).css('border', '3px solid green');
        } else {
            $(this).css('border', '3px solid red');
            isAllCorrect = false;
        }
    });

    isAnswered = true;
    $(".question-5 > div > .next-q").data('answered', true);

    if(isAllCorrect === true){
        $(".question-5 > div > div > .buttons-container > .check-answer").css('display', 'none');
        $(".question-5 > div > div > .buttons-container > .correct-answer").css('display', 'none');
        $(".question-5 > div > div > .buttons-container > .next-q").css('display', 'flex');
    } else {
        $(".question-5 > div > div > .buttons-container > .check-answer").css('display', 'none');
        $(".question-5 > div > div > .buttons-container > .correct-answer").css('display', 'flex');
        $(".question-5 > div > div > .buttons-container > .next-q").css('display', 'flex');
    }
});

$(".question-5 > div > div > .buttons-container > .correct-answer").click(function () {
    $(".question-5 > div > div > .answers").html('');
    $(".question-5 > div > div > .table-wrap > div > span > span").css('display', 'block');
});





// Q - 6
let q6_click = false;

function checkIfMarked(){
    let isMarked = false;
    $(".question-6 > div > div > .answers > div").each(function () {
        if($(this).data('marked') == true){
            isMarked = true;
        }
    });

    return isMarked;
}

$(".question-6 > div > div > .answers > div").click(function () {
    if(q6_click === true){
        return;
    }

    if($(this).data('marked') == false){
        $(this).css('background-color', '#b0b0b9');
        $(this).data('marked', true);
    } else {
        $(this).css('background-color', '#e6e6e6');
        $(this).data('marked', false);
    }

    if(checkIfMarked() === true){
        $(".question-6 > div > .check-q-6").css('visibility', 'visible');
    } else {
        $(".question-6 > div > .check-q-6").css('visibility', 'hidden');
    }

});


$(".question-6 > div > .check-q-6").click(function () {
    if(q6_click === true){
        return;
    }

    q6_click = true;
    isAnswered = true;
    $(".question-6 > div > .next-q").data('answered', true);


    $(".question-6 > div > div > .answers > div").each(function () {
        if($(this).data('marked') == true){
            console.log('marked');
            if($(this).data('answer') == true){
                $(this).css('background-color', '#aae322');
                $(this).append('<img src="assets/images/right.png"/>');
            } else {
                $(this).css('background-color', '#f46b6b');
                $(this).append('<img src="assets/images/wrong.png"/>');
            }
        } else if($(this).data('answer') == true) {
            $(this).css('background-color', '#aae322');
        }
    });

    $(".question-6 > div > .check-q-6").css('display', 'none');
    $(".question-6 > div > .next-q").css('display', 'block');

    // Remove Hover Effect
    $(".question-6 > div > div > .answers > div").bind("mouseover", function () {
        if($(this).css('background-color') == "rgb(176, 176, 185)"){
            $(this).css('background-color', '#e6e6e6');
        }
    });
    //===========================================================================

    $(".question-6 > div > .next-q").css('visibility', 'visible');
});




// let numberOfCurrectQ6 = 0;
// $(".question-6 > div > div > .answers > div").click(function () {
//     if($(this).data('answer') == true){
//         numberOfCurrectQ6++;
//         console.log(numberOfCurrectQ6);
//         if(numberOfCurrectQ6 === 4){
//             isAnswered = true;
//             $(".question-6 > div > .close-q").data('answered', true);
//         }
//         $(this).css('background-color', '#aae322');
//         $(this).append('<img src="assets/images/right.png"/>');
//     } else {
//         isAnswered = true;
//         $(".question-6 > div > .close-q").data('answered', true);
//         $(".question-6 > div > div > .answers > div > div").each(function () {
//             if($(this).data('answer') == true){
//                 $(this).css('background-color', '#aae322');
//                 $(this).append('<img src="assets/images/right.png"/>');
//             } else {
//                 $(this).css('background-color', '#f46b6b');
//                 $(this).append('<img src="assets/images/wrong.png"/>');
//             }
//         })
//     }
// });






// Q - 7
let q7_click = false;
$(".question-7 > div > div > .answers > div").click(function () {
    if(q7_click === true){
        return;
    }

    q7_click = true;
    isAnswered = true;
    $(".question-7 > div > .next-q").data('answered', true);

    if($(this).data('answer') == true){
        $(this).css('background-color', '#aae322');
        $(this).append('<img src="assets/images/right.png"/>');
    } else {
        $(this).css('background-color', '#f46b6b');
        $(this).append('<img src="assets/images/wrong.png"/>');
        $(".question-7 > div > div > .answers > div").each(function () {
            if($(this).data('answer') == true){
                $(this).css('background-color', '#aae322');
                $(this).append('<img src="assets/images/right.png"/>');
            }
        })
    }

    // Remove Hover Effect
    $(".question-7 > div > div > .answers > div").bind("mouseover", function () {
        if($(this).css('background-color') == "rgb(176, 176, 185)"){
            $(this).css('background-color', '#e6e6e6');
        }
    });
    //===========================================================================

    $(".question-7 > div > .next-q").css('visibility', 'visible');
});




// Q - 8
let q8_click = false;
$(".question-8 > div > div > .answers > div").click(function () {
    if(q8_click === true){
        return;
    }

    q8_click = true;
    isAnswered = true;
    $(".question-8 > div > .next-q").data('answered', true);

    if($(this).data('answer') == true){
        $(this).css('background-color', '#aae322');
        $(this).append('<img src="assets/images/right.png"/>');
    } else {
        $(this).css('background-color', '#f46b6b');
        $(this).append('<img src="assets/images/wrong.png"/>');
        $(".question-8 > div > div > .answers > div").each(function () {
            if($(this).data('answer') == true){
                $(this).css('background-color', '#aae322');
                $(this).append('<img src="assets/images/right.png"/>');
            }
        })
    }

    // Remove Hover Effect
    $(".question-8 > div > div > .answers > div").bind("mouseover", function () {
        if($(this).css('background-color') == "rgb(176, 176, 185)"){
            $(this).css('background-color', '#e6e6e6');
        }
    });
    //===========================================================================

    $(".question-8 > div > .next-q").css('visibility', 'visible');
});



// Q - 9
let q9_click = false;
$(".question-9 > div > div > .answers > div").click(function () {
    if(q9_click === true){
        return;
    }

    q9_click = true;
    isAnswered = true;
    $(".question-9 > div > .next-q").data('answered', true);

    if($(this).data('answer') == true){
        $(this).css('background-color', '#aae322');
        $(this).append('<img src="assets/images/right.png"/>');
    } else {
        $(this).css('background-color', '#f46b6b');
        $(this).append('<img src="assets/images/wrong.png"/>');
        $(".question-9 > div > div > .answers > div").each(function () {
            if($(this).data('answer') == true){
                $(this).css('background-color', '#aae322');
                $(this).append('<img src="assets/images/right.png"/>');
            }
        })
    }

    // Remove Hover Effect
    $(".question-9 > div > div > .answers > div").bind("mouseover", function () {
        if($(this).css('background-color') == "rgb(176, 176, 185)"){
            $(this).css('background-color', '#e6e6e6');
        }
    });
    //===========================================================================

    $(".question-9 > div > .next-q").css('visibility', 'visible');
});





// Credits
function mainVideoEnded() {
        $(".wrapper #vid-1").css('display', 'none');
        $(".credits").css('display', 'flex');
}






let vid = $(".wrapper #vid-1 video")[0];
vid.addEventListener('canplaythrough', function(e) {
    console.log(e.type, this.seekable.end(0));
});






var myPlayer = amp('vid1', { /* Options */
        techOrder: ["azureHtml5JS", "flashSS", "html5FairPlayHLS","silverlightSS", "html5"],
        "logo": { enabled: false },
        "nativeControlsForTouch": false,
        autoplay: false,
        controls: true,
        // width: "100%",
        // height: "auto",
        poster: ""
    }, function() {
        console.log('Good to go!');
        // add an event listener
        this.addEventListener('ended', function() {
            console.log('Finished!');
            mainVideoEnded();
        });

        this.addEventListener('seeking', function() {
            console.log('seeking!');
            onSeekingFunction();
        });
    }
);

myPlayer.src([{
    src: "https://lomdot-lomdot-euwe.streaming.media.azure.net/5a678976-91bd-4332-afaf-06f522b69b3e/main_movie_HfalaHashmalit.ism/manifest",
    type: "application/vnd.ms-sstr+xml"
}]);


$(".vjs-fullscreen-control").css('display', 'none');






