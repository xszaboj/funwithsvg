$("#add").click(function(){
    addHex();
});

$("#add-path").click(function(){
    var type = getPathType();
    createLine(type);
});