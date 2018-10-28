function triangleArea(a, b, c) {

    if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0 || isNaN(c) || c <= 0 || a+b<=c || b+c<=a || c+a<=b)
      return -1;
    else {
      var p = (a+b+c)/2;
      var z = Math.round(Math.sqrt(p*(p-a)*(p-b)*(p-c))*100)/100;
      return z;
    }
}
