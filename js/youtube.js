$(function () { // jQB //////////////////////////////
    console.log("로딩완료!");






    var img = $("#video1");
    var configObject = {
        sourceUrl: img.attr("data-videourl"),
        triggerElement: "#" + img.attr("id"),
        progressCallback: function () {
            console.log("Callback Invoked.");
        }
    };

    var videoBuild = new YoutubeOverlayModule(configObject);
    videoBuild.activateDeployment();







}); // jQB ///////////////////////////////////////////////////
