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

function isInTrash(element){
    var trash = document.getElementById("trash");
    if(intersectRect(trash, element)){
        return true;
    }
    return false;
}

function intersectRect(r1, r2) {
    var r1 = r1.getBoundingClientRect();    //BOUNDING BOX OF THE FIRST OBJECT
    var r2 = r2.getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT
 
    //CHECK IF THE TWO BOUNDING BOXES OVERLAP
  return !(r2.left > r1.right || 
           r2.right < r1.left || 
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}

function removeElement(element){
    element.parentNode.removeChild(element);
}