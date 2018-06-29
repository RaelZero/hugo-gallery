$("div.box-masonry-hover-text-header").click(function(){
    var target = $(this).prev().attr("href");
    window.location.href=target;
})
