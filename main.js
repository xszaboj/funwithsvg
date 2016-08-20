$("#add").click(function(){
  var svg = document.getElementsByTagName('svg')[0]; //Get svg element
  var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
  newElement.setAttribute("points","40,0 120,0 160,70 120,140 40,140 0,70");
  newElement.setAttribute("transform","matrix(1 0 0 1 0 0)");
  newElement.setAttribute("onmousedown","selectElement(evt)");
  newElement.setAttribute("class","hex");
  var color = $("#color").val();
  newElement.setAttribute("class","hex");
  newElement.setAttribute("class",newElement.getAttribute("class") + " " +color);
  svg.appendChild(newElement);
  d3.select(newElement).on('mouseenter', function() {
        this.parentElement.appendChild(this);
      });
});

d3.selectAll('polygon').on('mouseenter', function() {
        this.parentElement.appendChild(this);
      });

  var selectedElement = 0;
  var currentX = 0;
  var currentY = 0;
  var currentMatrix = 0;

  function selectElement(evt) {
    selectedElement = evt.target;
    currentX = evt.clientX;
    currentY = evt.clientY;
    currentMatrix = selectedElement.getAttributeNS(null, "transform").slice(7,-1).split(' ');
    
      for(var i=0; i<currentMatrix.length; i++) {
        currentMatrix[i] = parseFloat(currentMatrix[i]);
      }

    
    selectedElement.setAttributeNS(null, "onmousemove", "moveElement(evt)");
    selectedElement.setAttributeNS(null, "onmouseout", "deselectElement(evt)");
selectedElement.setAttributeNS(null, "onmouseup", "deselectElement(evt)");
  }

function moveElement(evt){
  dx = evt.clientX - currentX;
  dy = evt.clientY - currentY;
  currentMatrix[4] += dx;
  currentMatrix[5] += dy;
  newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
            
  selectedElement.setAttributeNS(null, "transform", newMatrix);
  currentX = evt.clientX;
  currentY = evt.clientY;
}

function deselectElement(evt){
  if(selectedElement != 0){
    selectedElement.removeAttributeNS(null, "onmousemove");
    selectedElement.removeAttributeNS(null, "onmouseout");
    selectedElement.removeAttributeNS(null, "onmouseup");
  //console.log(d3.select(selectedElement));
    //debugger; 
    console.log(selectedElement.transform.baseVal[0].matrix.e);
    console.log(selectedElement.transform.baseVal[0].matrix.f);
    //selectedElement.transform.baseVal[0].matrix.e = 0
    //selectedElement.transform.baseVal[0].matrix.f = 0
    selectedElement = 0;
  }
}
/*
for(var i= 0; i < 100; i++){
  d3.select("svg").append("line").attr("x1", i*10).attr("y1", "0").attr("x2", i*10).attr("y2", "1000").attr("style", "stroke:rgba(0,0,0,0.5);stroke-width:2");
}

for(var i= 0; i < 100; i++){
  d3.select("svg").append("line").attr("x1", 0).attr("y1", i*10).attr("x2", 1000).attr("y2", i*10).attr("style", "stroke:rgba(0,0,0,0.5);stroke-width:2");
}
*/
