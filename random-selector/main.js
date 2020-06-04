window.onload=function(){
    //this.document.write("Hello JavaScript");
}
$(document).ready(function(){
    $("input").click(function(){
        let list_num = $("#choices li").length;
        let random_pick = Math.floor(Math.random()*list_num);
        $("H1").text($("#choices li").eq(random_pick).text());
        let pic = document.getElementById("pic");
        pic.setAttribute("src","random-selector/"+meal[random_pick]);
    });
})