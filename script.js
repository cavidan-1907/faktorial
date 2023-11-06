function faktoriyal(n) {
    if (n === 0) {
      return 1; 
    } else if (n < 0) {
      return "menfi ededin faktoriali elme melum deyil"; 
    } else {
      return n * faktoriyal(n - 1);
   
    }
  }
  const netice=faktoriyal(6)
  console.log(netice);