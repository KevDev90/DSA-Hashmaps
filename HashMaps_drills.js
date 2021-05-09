HashMap = require('./hashmap.js')

MAX_LOAD_RATIO = 0.5
SIZE_RATIO = 3

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log('str1 ',map1.get(str1));
    console.log('str3 ',map2.get(str3));
}

function dup(string){
    const duplicate = new HashMap();
    for (let i = 0; i < string.length; i++) {
        duplicate.set(string[i], string[i]);
    }
    
    console.log(duplicate);
    let newStr = '';
    duplicate._hashTable.forEach(letter => {
    newStr += letter.value;
    });
    console.log(newStr);
}

const palindrome = (string) => {
    const palindromeMap = new Map()
    let odd = 0
    for (let i = 0; i < string.length; i++) {
      if (palindromeMap.get(string[i]) === undefined) {
        palindromeMap.set(string[i], 1)
      }
      else {
        let char = palindromeMap.get(string[i])
        palindromeMap.set(string[i], char+=1)
      }
    }
    for (let i = 0; i < palindromeMap.size; i++) {
      if(palindromeMap.get(string[i]) % 2 !==0) {
        odd++
        console.log('odd', odd)
      }
      if(odd > 1) {
        return false
      }
    }
    return true
  }

function main(){
    let lor = new HashMap()
    lor.set("Hobbit", "Bilbo")
    lor.set("Hobbit", "Frodo")
    lor.set("Wizard", "Gandolf")
    lor.set("Human", "Aragon")
    lor.set("Elf", "Legolas")
    lor.set("Maiar", "The Necromancer")
    lor.set("Maiar", "Sauron")
    lor.set("RingBearer", "Gollum")
    lor.set("LadyOfLight", "Galadriel")
    lor.set("HalfElven", "Arwen")
    lor.set("Ent", "Treebeard")
    console.log(lor)
    console.log(lor.get("Maiar"))
    console.log(lor.get("Hobbit"))


    WhatDoesThisDo();

    const string = 'google all that you think can think of';
    const string2 = 'google';

    dup(string)
    dup(string2)

    const strang = 'acecarr';
    console.log(palindrome(''))
    console.log(palindrome(strang))
}

main()