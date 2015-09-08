function titleCase(str) {
  var words = str.split(" ");
  for ( var i =0; i<words.length ; i++) {
    
    words[i].replace
    (words[i].charAt(0)
     ,words[i].charAt(0).toUpperCase());
    
  }
  
  str = words.join(" ");
  
  
  return str;
}

titleCase("I'm a little tea pot");