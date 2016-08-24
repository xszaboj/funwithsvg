function moveElement(evt){
  var currentMatrix = selectedElement.getAttributeNS(null, "transform").slice(7,-1).split(' ');
  var newMatrix = getNewMatrix(evt, transformToFloatMatrix(currentMatrix));            
  selectedElement.setAttributeNS(null, "transform", newMatrix);
  currentX = evt.clientX;
  currentY = evt.clientY;
}

function transformToFloatMatrix(currentMatrix){
    for(var i=0; i<currentMatrix.length; i++) {
      currentMatrix[i] = parseFloat(currentMatrix[i]);
    }
    return currentMatrix;
}

function getNewMatrix(evt, currentMatrix){
    var dx = evt.clientX - currentX;
    var dy = evt.clientY - currentY;
    currentMatrix[4] += dx;
    currentMatrix[5] += dy;
    return "matrix(" + currentMatrix.join(' ') + ")";
}

function moveSelectedElementOnTop(){
   return function() {
        this.parentElement.appendChild(this);
   };
}