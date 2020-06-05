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
        "<tr><th>Week</th><th>Date</th><th>Meat</th></tr>"
    );
    
    let topicCount = topicsArray.length;
    let oneDayMS=24*60*60*1000;
    for(let i=0;i<topicCount;i++){
        let thisDate = new Date(startDate.getTime()+7*i*oneDayMS)
        let trSpecial = "<tr>";

        if(topicsArray[i]=="Canned food"){
            trSpecial = "<tr style='background-color:rgb(255,231,186)'>";
        }
       else if(topicsArray[i]=="Wagyu!!"){
            trSpecial = "<tr style='background-color:rgb(255,114,86)'>";
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