$(document).ready(function() 
    {
    var modal = $("#myModal");

    //listerner and fuction for opening the modal
    $(".openModal").on("click", openModal)

    function openModal ()
    {
        modal.css("display", "block");
    };

    //listerner and fuction for closing the modal
    $("#closeModal").on("click", closeModel)

    function closeModel ()
    {
        modal.css("display", "none");
        location.reload();
    };

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) 
    // {
    //     if (event.target == modal) 
    //     {
    //         modal.css("display", "none");
    //     }
    // };
});