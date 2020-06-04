$(document).ready(function(){
   setTable();
    
   $("#inputDate").change(function(){
       let InputDate = $(this).val();
       //console.log(inputDate);//yyyy-mm-dd
       let splitText = InputDate.split("-");
       console.log(splitText);
       setMonthAndDay(splitText[1],splitText[2]);
       setTable();
   });

});

function setTable(){
    
    $("#courseTable").empty();
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></tr>"
    );
    
    let topicCount = topicsArray.length;
    let oneDayMS=24*60*60*1000;
    for(let i=0;i<topicCount;i++){
        let thisDate = new Date(startDate.getTime()+7*i*oneDayMS)
        let trSpecial = "<tr>";

        if(topicsArray[i]=="不上課"){
            trSpecial = "<tr style='background-color:lightyellow'>";
        }

        $("#courseTable").append(
        trSpecial+
        "<td>"+(i+1)+"</td>"+
        "<td>"+thisDate.toLocaleDateString().slice(5)+"</td>"+
        "<td>"+topicsArray[i]+"</td>"+
        "</tr>"
        );
    }

}