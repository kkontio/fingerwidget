widget.onshow = onshow;
var base_url = "http://www.hs.fi";

function onshow() {
    load_comic("http://www.hs.fi/fingerpori/");
}

function load_comic(strip_url) {
    $.get(strip_url, null, parse_data);
}

function parse_data(data) {
    var current_img_url = $(data).find("#full-comic > div + div + div > img").attr("src");
    var prev_url = base_url + $(data).find(".prev-cm").attr("href");
    var next_url = base_url + $(data).find(".next-cm").attr("href");    
    
    $("#fingerpori").attr("src", current_img_url);
    
    var prev_arrow = $("#previous");
    var next_arrow = $("#next");
    
    //Check if previous comics exist and hide controls if not
    if (prev_url !== "http://www.hs.fi/fingerpori/") {
        prev_arrow.off("click");
        prev_arrow.on("click", function() { load_comic(prev_url); });
        prev_arrow.show();
    } else {
        prev_arrow.off("click");
        prev_arrow.hide();
    }
    if (next_url !== "http://www.hs.fi/fingerpori/") {
        next_arrow.off("click");
        next_arrow.on("click", function() { load_comic(next_url); });
        next_arrow.show();
    } else {
        next_arrow.off("click");
        next_arrow.hide();
    }
}

