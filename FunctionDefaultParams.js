
/**
 *
 * ===================================  ES5 VERSION  ==========================================
 */
var translateHello = function(language) {
  switch (language) {
    case "Spanish":
      return "Hola";
    case "English":
      return "Hello";
    case "Hindi":
      return "नमस्ते";
    case "Punjabi":
      return "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ";
    case "French":
      return "Bonjour";
    case "Turkish":
      return "Merhaba";
  }
};

console.log(translateHello("French"))


/**
 *
 * ===================================  ES5 VERSION  ==========================================
 */
var translateHello = function(language = "English", options) {
    switch (language) {
      case "Spanish":
        return "Hola";
      case "English":
        return "Hello";
      case "Hindi":
        return "नमस्ते";
      case "Punjabi":
        return "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ";
      case "French":
        return "Bonjour";
      case "Turkish":
        return "Merhaba";
    }
  };
  
  console.log(translateHello("French"))
  console.log(translateHello())
