$("#add").click(function(){
    createHex();
});

$("#add-path").click(function(){
    var type = getPathType();
    createLine(type);
});

$("#locked").click(function(){
    if(!$("#locked").is(":checked")){
        d3.selectAll('polygon').on('mouseenter', moveSelectedElementOnTop());
    }
    else{
        d3.selectAll('polygon').on('mouseenter', null);
    }
});