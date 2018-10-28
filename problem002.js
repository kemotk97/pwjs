function stringRotate(a, b) {
  if(isNaN(b) || b<0)
    return "";
  else {
    var array = a.split("");
    for(var i=0;i<b;i++){
      var t = array[0];
      array.shift();
      array.push(t);
    }
    array = array.join("");
    return array;
  }
}
