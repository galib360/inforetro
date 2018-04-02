var mouse = false;
    //$(document.body).mouseover(function(){isOnDiv=true;});
    //$(document.body).mouseleave(function(){isOnDiv=false;});
	var lineColor="#0000ff";
	//var data = [[0, 50], [100, 80], [200, 40], [300, 60], [300, 60],[300, 60],[300, 60],[300, 60],[300, 60], [400, 30]];
    var capture =[[null,null]];
    var info = document.getElementById('info');
    function relevant(){lineColor="#00ff00";}
    function notrelevant(){lineColor="#ff0000";}

    function tellPos(p){
        info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;
        capture.push([p.pageX,p.pageY]);
    }

    addEventListener('mousemove', tellPos, false);
    $("body").mouseover(function(){
                                mouse=true;
                                push();
                }).mouseleave(function(){
                                mouse=false;
     
    });
    
    function push(){
    
    if(mouse===true){
    document.onmousemove = function(e) {
    var event = e || window.event;
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
    }

    function mousemov() {
        capture.push([window.mouseX,window.mouseY]);
    }

    //window.onload = function() {
        setInterval(mousemov, 1500);
    //}
    }
    }
    
    function draw(){
        //console.log(capture[5]);
        var capture1 = capture;
        capture1.shift();
        var lineGenerator = d3.line();
        var pathString = lineGenerator(capture1);
        var count=0;
        var i = 0;
    
        d3.select("svg").append('circle')
            .attr('cx', capture1[0][0])
            .attr('cy', capture1[0][1])
            .attr('r', 5)
            .attr("stroke", "black")
            .style('fill', '#c20c');
    

        d3.select('path')
            .attr('d', pathString)
            .attr("stroke", lineColor)
            .style("fill","none");
    
    
    
    
        while(i<capture1.length){
            count=0;
            radius=0;
            for(j=i+1;j<capture1.length; j++){
            
            
                if (capture1[j][0]==capture1[i][0] && capture1[j][1]==capture1[i][1]){
                    radius+=2;
                    count++;
                }
                else{
                    break;
                }
            }
            if(radius>0){
                d3.select("svg").append('circle')
                    .attr('cx', capture1[i][0])
                    .attr('cy', capture1[i][1])
                    .attr('r', radius)
                    .attr("stroke", "black")
                    .style('fill', 'none');
            }
            if(count>0){
                i = i+count;
            }
            else{
                i++;
            }
        }
        d3.select("svg").append('circle')
            .attr('cx', capture1[capture1.length-1][0])
            .attr('cy', capture1[capture1.length-1][1])
            .attr('r', 5)
            .attr("stroke", "black")
            .style('fill', '#ff00ff');
    }
    

    
    function show(){
        console.log(capture);
    }
    

    
    function screenshot(){
        html2canvas(document.body).then(function(canvas) {
        // Export the canvas to its data URI representation
        //var base64image = canvas.toDataURL("image/png");
        var a = $("<a>").attr("href", canvas.toDataURL('image/png'))
            .attr("download", "output.png")
            .appendTo("body");
            a[0].click();
            a.remove();
            
            // Open the image in a new window
            //window.open(base64image , "_blank");
        });
    }
    
    function screenshot2(){
        html2canvas(document.body).then(function(canvas){
            var img = canvas.toDataURL('image/png');

                $.ajax({
                    type: "POST",
                    url: "../save.php",
                    data: { 
                        imgBase64: img
                    }
                    }).done(function(o) {
                            console.log('saved'); 
                        });
        });
    }
function redirect(url){
    setTimeout(function(){
        window.location.replace(url);
    }, 2000);
    
}
