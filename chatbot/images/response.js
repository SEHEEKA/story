

function getBotResponse(input) {
 
    if (input == "hello" || input == "hi") {
        return "Hello";
    } else if (input.toLowerCase()=="who are you") {
        return "I'm Zaika";

    }
    else if(input.toLowerCase()=="how are you"){
       return "I'm great how about you?"
    
    } 
    else if(input.toLowerCase()=="i'm good too"||"iam good too"||"i'm fine"||"i'm fine too"){
     return "Good!"
    }
    else if (input.toLowerCase() == "i love you") {
        return "I love you too";
    }
    else if (input == "hello" || input =="hi") {
        return "Hello there!";
    } else if (input.toLowerCase() =="bye" || input.toLowerCase() == "see you later") {
        return "Talk to you later!";
    }
    else if (input.toLowerCase() == "i miss you"){
      return "I miss you too"
    } 
    else if(input.toLowerCase() == "do you love me"){
        return "A lot"
    }
    else if(input.toLowerCase()=="how much do you love me" || input.toLowerCase()=="how much"){
   return "Infinity"
    }
        else {
    
        return "Try asking something else!";
    }
}