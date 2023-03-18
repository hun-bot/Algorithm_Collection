export function spinWords(words: string): string {
    let newWords:string[];
        newWords=words.split(' ').map(element => {
            if(element.length>=5){
                return element.split('').reverse().join('')
            }
            else return element
        });
        return newWords.join(' ')
}

export class Kata {
    static spinWords(words: string) {
      return words.split(" ").map(w => Kata.shouldSpin(w) ? Kata.spinWord(w) : w).join(" ");
    }
    
    static shouldSpin(word: string) : boolean { 
      return word ? word.length >= 5 : false;
    }
    
    static spinWord(word: string): string {
      return word.split("").reverse().join("");
    }
  }

spinWords('Hey fellow warriors')