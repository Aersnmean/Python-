window.onload=function(){
    window.onscroll = function () {
        let y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (y > 40) {
            document.getElementById("channel").className = "channel channel_fixed";
        }else{
            document.getElementById("channel").className = "channel";
        }
    }

    document.onkeyup = function () {
        word_number()
    }

    //判断文本字数是否超过限制
    function word_number() {
        let input_title1 = document.querySelector(".container>.index_content>.ugcBox_inner>.upload_box>.img_box>.title_input");
        let img_word_number1 = input_title1.value.length;
        let input_submit1 = document.querySelector(".container .img_box .upload-publish");
        document.querySelector(".container>.index_content>.ugcBox_inner>.upload_box>.img_box>.words_number").innerHTML =  img_word_number1 +  "/2000字";
        if (img_word_number1 > 2000){
            input_title1.style = "color: red;";
            input_submit1.style = "background-color: #fb9b9b;"
        }else{
            input_title1.style = "";
            input_submit1.style = "";
        }
        let input_title2 = document.querySelector(".container>.index_content>.ugcBox_inner>.upload_box>.video_box>.title_input");
        let img_word_number2 = input_title2.value.length;
        let input_submit2 = document.querySelector(".container .video_box .upload-publish");
        document.querySelector(".container>.index_content>.ugcBox_inner>.upload_box>.video_box>.words_number").innerHTML =  img_word_number2 +  "/30字";
        if (img_word_number2 > 30){
            input_title2.style = "color: red;";
            input_submit2.style = "background-color: #fb9b9b;";
        }else{
            input_title2.style = "";
            input_submit2.style = "";
        }
        let input_title3 = document.querySelector(".container>.index_content>.ugcBox_inner>.upload_box>.question_box>.title_input");
        let img_word_number3 = input_title3.value.length;
        let input_submit3 = document.querySelector(".container .question_box .upload-publish");
        document.querySelector(".container>.index_content>.ugcBox_inner>.upload_box>.question_box>.words_number").innerHTML =  img_word_number3 +  "/40字";
        if (img_word_number3 > 40){
            input_title3.style = "color: red;";
            input_submit3.style = "background-color: #fb9b9b;";
        }else{
            input_title3.style = "";
            input_submit3.style = "";
        }
    }

    let ugc_tab_item = document.querySelectorAll(".ugc_tab_item");
    let img_box = document.querySelector(".container>.index_content>.ugcBox_inner>.upload_box>.img_box");
    let video_box = document.querySelector(".container>.index_content>.ugcBox_inner>.upload_box>.video_box");
    let question_box = document.querySelector(".container>.index_content>.ugcBox_inner>.upload_box>.question_box");
    for (let i = 0; i < 3; i++) {
        ugc_tab_item[i].onclick = function () {
            for (let i = 0; i < 3; i++) {
                ugc_tab_item[i].className = "left ugc_tab_item";
            }
            ugc_tab_item[i].className = "left ugc_tab_item current";
            if (i == 0) {
                img_box.style = "display: block;";
                video_box.style = "display: none;";
                question_box.style = "display: none;";
            }else if(i == 1) {
                img_box.style = "display: none;";
                video_box.style = "display: block;";
                question_box.style = "display: none;";
            }else{
                img_box.style = "display: none;";
                video_box.style = "display: none;";
                question_box.style = "display: block;";
            }
        }
    }
}