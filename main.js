

d3.selectAll('polygon').on('mouseenter', moveSelectedElementOnTop());

function selectElement(evt) {
  selectedElement = evt.target;
  currentX = evt.clientX;
  currentY = evt.clientY;

  selectedElement.setAttributeNS(null, "onmousemove", "moveElement(evt)");
  selectedElement.setAttributeNS(null, "onmouseout", "deselectElement(evt)");
  selectedElement.setAttributeNS(null, "onmouseup", "deselectElement(evt)");
}

function deselectElement(evt){
  if(selectedElement != 0){
    selectedElement.removeAttributeNS(null, "onmousemove");
    selectedElement.removeAttributeNS(null, "onmouseout");
    selectedElement.removeAttributeNS(null, "onmouseup");
    selectedElement = 0;
  }
}

function addHex(){
  var hex = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
  hex.setAttribute("points",defaultHexCoordinates);
  hex.setAttribute("transform","matrix(1 0 0 1 0 0)");
  hex.setAttribute("onmousedown","selectElement(evt)");
  hex.setAttribute("class","hex");
  hex.setAttribute("class",hex.getAttribute("class") + " " + getColor());
  svg.appendChild(hex);
  d3.select(hex).on('mouseenter', moveSelectedElementOnTop());
}

function getColor(){
  return $("#color").val();
}
