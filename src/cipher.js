window.cipher = {
    // Función cifrado
    encode: (offset, string) => {
      // Declarando variables
      let code = 0;
      let newCode = 0;
      let newString = '';
      let encodedString = '';
      // Recorriendo los caracteres del string
      for (let i = 0; i < string.length; i++) {
        // Obteniendo el código ASCII de cada caracter
        code = string.charCodeAt(i);
        //Formula cifrado
        if (code >= 65 && code <= 90) {
          newCode = (code - 65 + offset) % 26 + 65;
          newString = String.fromCharCode(newCode);
          encodedString += newString;
        } else if (code >= 97 && code <= 122) {
          newCode = (code - 97 + offset) % 26 + 97;
          newString = String.fromCharCode(newCode);
          encodedString += newString;
        } else if(code >= 48 && code <= 57){
          newCode = (code - 48 + offset)% 10 + 48;
          newString = String.fromCharCode(newCode);
          encodedString += newString;  
        } else {
          newString = String.fromCharCode(code);
          encodedString += newString;
        }
      }
      return encodedString;  
    },
    // Función descifrado
    decode: (offset, string) => {
      // Declarando variables
      let code = 0;
      let newCode = 0;
      let newString = '';
      let decodedString = '';
      // Recorriendo los caracteres del string
      for (let i = 0; i < string.length; i++) {
        // Obteniendo el código ASCII de cada caracter
        code = string.charCodeAt(i);
        //Formula descifrado
        if (code >= 65 && code <= 90) {
          newCode = (code - 90 - offset) % 26 + 90;
          newString = String.fromCharCode(newCode);
          decodedString += newString;
        } else if (code >= 97 && code <= 122) {
          newCode = (code - 122 - offset) % 26 + 122;
          newString = String.fromCharCode(newCode);
          decodedString += newString;
        } else if(code >= 48 && code <= 57){
          newCode = (code - 57 - offset)% 10 + 57;
          newString = String.fromCharCode(newCode);
          decodedString += newString;  
        } else { 
          decodedString += String.fromCharCode(code);
        }
      }
      return decodedString;
    },
  }