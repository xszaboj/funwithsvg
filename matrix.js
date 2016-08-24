function renderCoordinates(){
    for(var i= 0; i < 100; i++){
    d3.select("svg").append("line").attr("x1", i*10).attr("y1", "0").attr("x2", i*10).attr("y2", "1000").attr("style", "stroke:rgba(0,0,0,0.5);stroke-width:2");
    }

    for(var i= 0; i < 100; i++){
    d3.select("svg").append("line").attr("x1", 0).attr("y1", i*10).attr("x2", 1000).attr("y2", i*10).attr("style", "stroke:rgba(0,0,0,0.5);stroke-width:2");
    }
}