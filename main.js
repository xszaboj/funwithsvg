

//d3.selectAll('polygon').on('mouseenter', moveSelectedElementOnTop());

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
    if(isInTrash(selectedElement)){
      removeElement(selectedElement);
    }
    else{
      selectedElement.removeAttributeNS(null, "onmousemove");
      selectedElement.removeAttributeNS(null, "onmouseout");
      selectedElement.removeAttributeNS(null, "onmouseup");
    }
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

function createLine(type){
  var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
  setLineCoordinatesByType(line, type);
  line.setAttribute("class", "line");
  line.setAttribute("transform","matrix(1 0 0 1 0 0)");
  line.setAttribute("onmousedown","selectElement(evt)");
  svg.appendChild(line);
  d3.select(line).on('mouseenter', moveSelectedElementOnTop());
}

function setLineCoordinatesByType(line, type){
  switch(type){
        case "horizontal":
          setLineCoordinates(line, 10, 10, pathWidth+10, 10);
        break;
        case "right":
          setLineCoordinates(line, 0, 0, pathWidth/2, pathHeight);
        break;
        case "left":
          setLineCoordinates(line, 50, 0, -(pathWidth/2)+50, pathHeight);
        break;
    }
}

function setLineCoordinates(e, x1, y1, x2, y2){
  e.setAttribute("x1",x1);
  e.setAttribute("y1",y1);
  e.setAttribute("x2",x2);
  e.setAttribute("y2",y2);
}

function getColor(){
  return $("#color").val();
}

function getPathType(){
  return $("#path").val();
}