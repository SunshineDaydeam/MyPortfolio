//Nav Bar Buttons
//Home Button
$("#homeBtn").on("click", function(){
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

});
//About Button
$("#aboutBtn").on("click", function(){
    $("#homePage").addClass("d-none");
    $("#aboutPage").removeClass("d-none");
    $("#contactPage").addClass("d-none");
    $("#portPage").addClass("d-none");
    //Change Button Display
    $("#homeBtn").removeClass("border-highlight-nav border-secondary");
    $("#aboutBtn").addClass("border-highlight-nav border-secondary");
    $("#portBtn").removeClass("border-highlight-nav border-secondary");
    $("#contactBtn").removeClass("border-highlight-nav border-secondary");

});
//Portfolio Button
$("#portBtn").on("click", function(){
    $("#homePage").addClass("d-none");
    $("#aboutPage").addClass("d-none");
    $("#contactPage").addClass("d-none");
    $("#portPage").removeClass("d-none");
    //Change Button Display
    $("#homeBtn").removeClass("border-highlight-nav border-secondary");
    $("#aboutBtn").removeClass("border-highlight-nav border-secondary");
    $("#portBtn").addClass("border-highlight-nav border-secondary");
    $("#contactBtn").removeClass("border-highlight-nav border-secondary");

});
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