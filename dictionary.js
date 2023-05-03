let words = [];

function addWord() {
  let input = document.getElementById("addInput").value.trim();
  if (input) {
    words.push(input);
    document.getElementById("addInput").value = "";
    showWords(words);
  }
}

function showWords(words) {
    let list = document.getElementById("wordList");
    list.innerHTML = "";
    for (let i = 0; i < words.length; i++) {
      let item = document.createElement("li");
      item.innerHTML = words[i];
      list.appendChild(item);
    }
  }
  
  function searchWords() {
    let input = document.getElementById("searchInput").value.trim();
    let searchResult = document.getElementById("searchResult");
  
    if (input) {
      let matchingWords = words.filter(function(word) {
        return word.toLowerCase().indexOf(input.toLowerCase()) > -1;
      });
      if (matchingWords.length > 0) {
        showWords(matchingWords);
        searchResult.innerHTML = "The word " + input + " was found in the dictionary";
      } else {
        showWords(words);
        searchResult.innerHTML = "The word " + input + " was not found in the dictionary";
      }
    } else {
        showWords(words);
        searchResult.innerHTML = "";
      }
  }
  
let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", searchWords);

showWords(words);
