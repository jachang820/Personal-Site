$(document).ready(function () {
    
    getCaption();
    
    $(".card-img").click(function () {
        let details_row = ".details." + this.classList[1];
        let mooc_num = "#mooc" + this.id.substr(this.id.length - 4);
        let mooc_inst = mooc_num + " .mooc-institution";
        let show_card = true;
        if ($(mooc_num).is(':visible')) {
            show_card = false;
        }
        $("#mooc-section").find("div.active").removeClass("active");
        if (show_card) {
            $(mooc_num).addClass("active");
            $(details_row).addClass("active");
        }
        if ($(mooc_inst).text().length > 12) {
            $(mooc_inst).css("font-size", "2.5em");
            $(mooc_inst).css("bottom", "-0.35em");
        }
    });
    $("#slideshow").on("slid.bs.carousel", getCaption);

    function getCaption() {
        $("#carousel-subtitles").html(
            $(".carousel-item.active .carousel-caption").html());
    }

    $("#carousel-subtitles").click(function () {
        $("#grey-out-screen").fadeIn("slow");
        $("#project-modal").slideDown("slow");
    });

    $("#grey-out-screen").click(function () {
        $("#grey-out-screen").fadeOut("slow");
        $("#project-modal").slideUp("slow");
    });
});
