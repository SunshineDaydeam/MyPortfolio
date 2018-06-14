//Nav Bar Buttons
function displayHome(){
    //Change Page Display
    $("#homePage").removeClass("d-none");
    $("#aboutPage").addClass("d-none");
    $("#contactPage").addClass("d-none");
    $("#portPage").addClass("d-none");
    //Change Button Display
    $("#homeBtn").addClass("border-highlight-nav border-secondary");
    $("#aboutBtn").removeClass("border-highlight-nav border-secondary");
    $("#portBtn").removeClass("border-highlight-nav border-secondary");
    $("#contactBtn").removeClass("border-highlight-nav border-secondary");
};
function displayAbout(){
    $("#homePage").addClass("d-none");
    $("#aboutPage").removeClass("d-none");
    $("#contactPage").addClass("d-none");
    $("#portPage").addClass("d-none");
    //Change Button Display
    $("#homeBtn").removeClass("border-highlight-nav border-secondary");
    $("#aboutBtn").addClass("border-highlight-nav border-secondary");
    $("#portBtn").removeClass("border-highlight-nav border-secondary");
    $("#contactBtn").removeClass("border-highlight-nav border-secondary");
};
function displayPortfolio(){
    $("#homePage").addClass("d-none");
    $("#aboutPage").addClass("d-none");
    $("#contactPage").addClass("d-none");
    $("#portPage").removeClass("d-none");
    //Change Button Display
    $("#homeBtn").removeClass("border-highlight-nav border-secondary");
    $("#aboutBtn").removeClass("border-highlight-nav border-secondary");
    $("#portBtn").addClass("border-highlight-nav border-secondary");
    $("#contactBtn").removeClass("border-highlight-nav border-secondary");
}
function displayReferences(){}
function displayContact(){
    $("#homePage").addClass("d-none");
    $("#aboutPage").addClass("d-none");
    $("#contactPage").removeClass("d-none");
    $("#portPage").addClass("d-none");
    //Change Button Display
    $("#homeBtn").removeClass("border-highlight-nav border-secondary");
    $("#aboutBtn").removeClass("border-highlight-nav border-secondary");
    $("#portBtn").removeClass("border-highlight-nav border-secondary");
    $("#contactBtn").addClass("border-highlight-nav border-secondary");
};
//Home Button
$("#homeBtn").on("click", function(){
    displayHome();
});
//About Button
$("#aboutBtn").on("click", function(){
    displayAbout();
});
//Portfolio Button
$("#portBtn").on("click", function(){
    displayPortfolio();
});
//Contact Button
$("#contactBtn").on("click", function(){
    displayContact()
;});

//Open Contact Form Button
$("#openContactBtn").on("click", function(){
    $("#contactMeForm").removeClass("d-none");
    $("#openContactBtn").addClass("d-none");
});
//Hide Contact Form after Sent
$("#sendBtn").on("click", function(){
    $("#contactMeForm").addClass("d-none");
    $("#openContactBtn").removeClass("d-none");
});

$("#freelanceBtn").on("click", function(){
    displayContact();
    $("#subjectBox").val("Website Build Inquiry");
    $("#contactMeForm").removeClass("d-none");
    $("#openContactBtn").addClass("d-none");
});

$("#corpBtn").on("click", function(){
    displayContact();
    $("#subjectBox").val("Job Opportunity Inquiry");
    $("#contactMeForm").removeClass("d-none");
    $("#openContactBtn").addClass("d-none");
});

$("#portWebBtn").on("click", function(){
    if ($("#webRow").attr("data-state") == "shown"){
        $(this).text("Web Apps...");
        $("#webRow").hide();
        $("#webRow").attr("data-state", "hidden");
    }
    else{
        $(this).text("Web Apps");
        $("#webRow").show();
        $("#webRow").attr("data-state", "shown");
    }
});
$("#portGamesBtn").on("click", function(){
    console.log($(this));
    if ($("#gamesRow").attr("data-state") == "shown"){
        $(this).text("Games...");
        $("#gamesRow").hide();
        $("#gamesRow").attr("data-state", "hidden");
    }
    else{
        $(this).text("Games");
        $("#gamesRow").show();
        $("#gamesRow").attr("data-state", "shown");
    }
});