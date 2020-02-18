$(document).ready(function() 
{
    //listener for tooltip rollover
    $(".eleClick").on("click", seeLinks);

    //once clicked, this function collects the link data embedded in <a> and renders them on the page
    function seeLinks ()
    {
        $(".moreInfoDetail").remove();

        var appID = $(this).attr("id");
        var appLink = $(this).attr("data-app");
        var gitLink = $(this).attr("data-git");

        var appInsert = "<div class = 'moreInfoDetail'><a class = 'font-green' href ='" + appLink + "' target='_blank'>Live Application</a></div>"
        var gitInsert = "<div class = 'moreInfoDetail'><a class = 'font-green' href ='" + gitLink + "' target='_blank'>GitHub Source</a></div>"

        $(this).append(appInsert);
        $(this).append(gitInsert);
    }


    //this function posts new contact form data into the DB
    $("#submitButton").on("click", formSubmit);
    
    function formSubmit(event) 
    {
        event.preventDefault();

        //collect the values from input
        var enteredName =  $("#enteredName").val().trim();
        var enteredEmail =  $("#enteredEmail").val().trim();
        var enteredMessage =  $("#enteredMessage").val();

        //make sure name and email are not empty
        if (!enteredName || !enteredEmail || !enteredMessage) 
        {
            console.log("Name, email, and message are all required.");
            return
        };

        //create an object of the column name key:value pair
        var newMessage = {myName: enteredName, myEmail: enteredEmail, myMessage: enteredMessage};
        
        console.log (newMessage);

        
        $.post("/contact", newMessage, function() 
        {
            console.log("New message saved.")
            location.reload();
        });
    };
});