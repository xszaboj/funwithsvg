function selectHex(evt){
  var locked = getLocked();
  if(!locked){
    selectElement(evt);
  }
}

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

function getLocked(){
  return $("#locked").is(":checked");
}