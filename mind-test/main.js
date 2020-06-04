$(document).ready(function(){
    let currentQuiz = null;

    $("#startButtom").click(function(){
        if(currentQuiz==null){
            currentQuiz=0;
            //顯示題目
            $("#question").text(questions[0].question);
            //清空選項
            $("#options").empty();
            //顯示選項
            for(let i=0;i<questions[0].answers.length;i++){
                $("#options").append("<input name='options' type=radio value="+i+
                "<label>"+questions[0].answers[i][0]+"</label><br><br>")
            }
            $("#startButtom").attr("value","Next");

        }
        else{
            $.each(
                $(":radio"),function(i,val){
                    if(val.checked){
                        if(isNaN(questions[currentQuiz].answers[i][1])){
                            //最終結果
                            let finalResult = questions[currentQuiz].answers[i][1];
                            //顯示最終成果標題
                            $("#question").text(finalAnswers[finalResult][0]);
                            //清空選項區域
                            $("#options").empty();
                            //顯示最終成果內容
                            $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                            currentQuiz=null;
                            $("#startButtom").attr("value","Restart");
                            }

                            else{
                            //還在作答
                            currentQuiz = questions[currentQuiz].answers[i][1]-1;
                            //顯示題目
                            $("#question").text(questions[currentQuiz].question);
                            //清空選項
                            $("#options").empty();
                            //顯示選項
                            for(let i=0;i<questions[0].answers.length;i++){
                                $("#options").append("<input name='options' type=radio value="+i+
                                "<label>"+questions[currentQuiz].answers[i][0]+"</label><br><br>")
                            }
                        }
                    }
                }
            )
        }

    });
   
});
