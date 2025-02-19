 const validateBrackets = (str: string) => {
      const brackets: Record<string, string> = {
        "[": "]",
        "{": "}",
        "(": ")",
      };

      const openBr = Object.keys(brackets);
      const closedBr = Object.values(brackets);
      const arr: string[] = [];

      for (const char of str) {
        if (openBr.includes(char)) {
          arr.push(char);
        } else if (closedBr.includes(char)) {
          if (brackets[arr[0]] === char) {
            arr.pop();
          } else {
            return false;
          }
        }
      }

      return !arr.length;
    };

export default validateBrackets;