
$("#h,#list").mouseenter(function(){
    $("#list").removeClass('d-none');
 });
 $("#h,#list").mouseleave(function(){
    $("#list").addClass("d-none");
 });
 $("#h1,#list1").mouseenter(function(){
    $("#list1").removeClass('d-none');
 });
 $("#h1,#list1").mouseleave(function(){
    $("#list1").addClass("d-none");
 });
 $("#h2,#list2").mouseenter(function(){
    $("#list2").removeClass('d-none');
 });
 $("#h2,#list2").mouseleave(function(){
    $("#list2").addClass("d-none");
 });

$(".owl-carousel").owlCarousel({
    items: 1,
    margin: 20,
    loop: true,
    nav: true,
    });