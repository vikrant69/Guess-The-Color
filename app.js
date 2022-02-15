
        // RESET
        function reset(){
            var incol='rgb(255, 192, 203)';
            document.getElementById('top').style.backgroundColor=incol;
            document.getElementById('box1').style.backgroundColor=incol;
            document.getElementById('box2').style.backgroundColor=incol;
            document.getElementById('box3').style.backgroundColor=incol;
            document.getElementById('box4').style.backgroundColor=incol;
            document.getElementById('box5').style.backgroundColor=incol;
            document.getElementById('box6').style.backgroundColor=incol;
            document.getElementById('generate-rgb').innerHTML= 'RGB'+'('+0 +', '+0+', '+0+')';
            document.getElementById('win').innerHTML='';
        }

        // WIN
        function win(){
            document.getElementById('win').innerHTML='You Won';
            
            document.getElementById('top').style.backgroundColor=colset;
            document.getElementById('box1').style.backgroundColor=colset;
            document.getElementById('box2').style.backgroundColor=colset;
            document.getElementById('box3').style.backgroundColor=colset;
            document.getElementById('box4').style.backgroundColor=colset;
            document.getElementById('box5').style.backgroundColor=colset;
            document.getElementById('box6').style.backgroundColor=colset;
        }

        // TRY AGAIN
        function tryAgain(){
            document.getElementById('win').innerHTML='Ops! Try Again';
            
        }
        // CHECK
        var colset;

        function check(col,box){
            if(col===colset){
                win();
            }
            else {
                tryAgain()
                document.getElementById(box).style.backgroundColor = 'rgb(34, 32, 32)';
            } 
        }

        function check1(){
            var col = document.getElementById('box1').style.backgroundColor;
            check(col,'box1');
        }

        function check2(){
            var col = document.getElementById('box2').style.backgroundColor;
            check(col,'box2'); 
        }

        function check3(){
            var col = document.getElementById('box3').style.backgroundColor;
            check(col,'box3'); 
        }

        function check4(){
            var col = document.getElementById('box4').style.backgroundColor;
            check(col,'box4'); 
        }

        function check5(){
            var col = document.getElementById('box5').style.backgroundColor;
            check(col,'box5');  
        }

        function check6(){
            var col = document.getElementById('box6').style.backgroundColor;
            check(col,'box6');  
        }

        // COLOR THE BOXES
        function box1(red, green, blue, cbox){
            if(cbox[0]){
                document.getElementById('box1').style.backgroundColor='rgb(' + red + ',' + green + ',' + blue + ')';
            }else{
                var r = Math.floor((Math.random()*255)+1);
                var g = Math.floor((Math.random()*255)+1);
                var b = Math.floor((Math.random()*255)+1);
                document.getElementById('box1').style.backgroundColor='rgb(' + r + ',' + g + ',' + b + ')';
            }
           
        }

        function box2(red, green, blue, cbox){
            if(cbox[1]){
                document.getElementById('box2').style.backgroundColor='rgb(' + red + ',' + green + ',' + blue + ')';
            }else{
                var r = Math.floor((Math.random()*255)+1);
                var g = Math.floor((Math.random()*255)+1);
                var b = Math.floor((Math.random()*255)+1);
                document.getElementById('box2').style.backgroundColor='rgb(' + r + ',' + g + ',' + b + ')';
            }
           
        }

        function box3(red, green, blue, cbox){
            if(cbox[2]){
                document.getElementById('box3').style.backgroundColor='rgb(' + red + ',' + green + ',' + blue + ')';
            }else{
                var r = Math.floor((Math.random()*255)+1);
                var g = Math.floor((Math.random()*255)+1);
                var b = Math.floor((Math.random()*255)+1);
                document.getElementById('box3').style.backgroundColor='rgb(' + r + ',' + g + ',' + b + ')';
            }
           
        }

        function box4(red, green, blue, cbox){
            if(cbox[3]){
                document.getElementById('box4').style.backgroundColor='rgb(' + red + ',' + green + ',' + blue + ')';
            }else{
                var r = Math.floor((Math.random()*255)+1);
                var g = Math.floor((Math.random()*255)+1);
                var b = Math.floor((Math.random()*255)+1);
                document.getElementById('box4').style.backgroundColor='rgb(' + r + ',' + g + ',' + b + ')';
            }
           
        }

        function box5(red, green, blue, cbox){
            if(cbox[4]){
                document.getElementById('box5').style.backgroundColor='rgb(' + red + ',' + green + ',' + blue + ')';
            }else{
                var r = Math.floor((Math.random()*255)+1);
                var g = Math.floor((Math.random()*255)+1);
                var b = Math.floor((Math.random()*255)+1);
                document.getElementById('box5').style.backgroundColor='rgb(' + r + ',' + g + ',' + b + ')';
            }
           
        }

        function box6(red, green, blue, cbox){
            if(cbox[5]){
                document.getElementById('box6').style.backgroundColor='rgb(' + red + ',' + green + ',' + blue + ')';
            }else{
                var r = Math.floor((Math.random()*255)+1);
                var g = Math.floor((Math.random()*255)+1);
                var b = Math.floor((Math.random()*255)+1);
                document.getElementById('box6').style.backgroundColor='rgb(' + r + ',' + g + ',' + b + ')';
            }
           
        }

        function alterRGB(){
            var red = Math.floor((Math.random()*255)+1);
            var green = Math.floor((Math.random()*255)+1);
            var blue = Math.floor((Math.random()*255)+1);

            document.getElementById('generate-rgb').innerHTML= 'RGB'+'('+red +', '+green+', '+blue+')';

            document.getElementById("top").style.backgroundColor='rgb(' + ((red*5)%255) + ',' + ((green*5)%255) + ',' + ((blue*5)%255) + ')';
            
            colset= 'rgb'+'('+red +', '+green+', '+blue+')'
            var ind = Math.floor((Math.random())*6);
            var cbox = [false, false,false, false,false, false];
            cbox[ind]=true;
            console.log( cbox);
            box1(red, green, blue, cbox);
            box2(red, green, blue, cbox);
            box3(red, green, blue, cbox);
            box4(red, green, blue, cbox);
            box5(red, green, blue, cbox);
            box6(red, green, blue, cbox);
        }
  