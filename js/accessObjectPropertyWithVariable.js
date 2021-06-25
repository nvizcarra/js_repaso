



















var someObj = {
    propName: "John"
  };
  function propPrefix(str) {
    var s = "prop";
    return s + str; // propName
  }
  var someProp = propPrefix("Name"); // propName
  console.log(someObj[someProp]); // propName