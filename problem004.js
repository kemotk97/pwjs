function getTotalNumberOfNewYaersEveSundays(a, b) {
  var x = 0;
  var l = b-a;
  for(var i=0;i<=l;i++){
    var z = a+i;
    var d = new Date('January 1,'+z);
    if(d.getDay() == 0)
      x++;
  }
  return x;
}
