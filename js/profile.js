$(document).ready(function () {
    
    // Replace default Bootstrap captions since it was unreliable
    function getCaption() {
        $("#carousel-subtitles").html(
            $(".carousel-item.active .carousel-caption").html());
    }

    getCaption();

    // Show modal with project description
    $("#carousel-subtitles").click(function () {
        $("#grey-out-screen").fadeIn("slow");
        $("#project-modal").slideDown("slow");
    });

    // Hide modal with project description
    $("#grey-out-screen").click(function () {
        $("#grey-out-screen").fadeOut("slow");
        $("#project-modal").slideUp("slow");
    });

    // Update captions when slide changes on carousel
    $("#slideshow").on("slid.bs.carousel", getCaption);
    
    // Ensures the details from the correct row opens up when MOOC cards are
    // pressed
    $(".card-img").click(function () {
        let details_row = ".details." + this.classList[1];
        let mooc_num = "#mooc" + this.id.substr(this.id.length - 4);
        let mooc_inst = mooc_num + " .mooc-institution";
        //let show_card = ($(mooc_num).is(':visible')) ? false : true;
        let show_card = true;
        if ($(mooc_num).is(':visible')) {
            show_card = false;
        }

        // Hide details of currently active card
        $("#mooc").find("div.active").removeClass("active");

        // Show details if new card is selected
        if (show_card) {
            $(mooc_num).addClass("active");
            $(details_row).addClass("active");
        }

        // Decrease instutition name font size if too long
        if ($(mooc_inst).text().length > 12) {
            $(mooc_inst).css("font-size", "2.5em");
            $(mooc_inst).css("bottom", "-0.35em");
        }
    });
});
