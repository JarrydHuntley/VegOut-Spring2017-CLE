//$(function() {
$(document).ready(function () {

    $("#findButton").click(function () {
        console.log("Find Button was clicked.");
        var searchTerm = $("#veggieInput").val();

        var listItems = $(".list-group li");

        //$(".list-group li").effect("shake", { times: 4 }, 1000)

        listItems.each(function () {
            if (!$(this).text().includes(searchTerm)) {
                $(this).hide("slow");
            }
        });

        if (!$("list-group").text().includes(searchTerm)) {

            $("#dialogText").text("Please enter a recipe");
            $("#dialog").dialog('open');

        }
    });

    $("#viewAllButton").click(function () {
        console.log("View all button was clicked");

        $(".list-group li").show("fast");
    });


    $("#dialog").dialog({
        modal: true,
        autoOpen: false,
        title: "Add new recipe",
        width: 400,
        height: 200
    });

});