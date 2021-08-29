  
// Getting references of DOM elements

const inputText = document.querySelector("#input-text");
const button = document.querySelector("#translate-btn");
const outputText = document.querySelector("#output-text");

// Defining the URI 
const apiURL = "https://api.funtranslations.com/translate/dothraki.json";

// Function to format string to URI
const actualEndpoint = (appendText) => {
    return apiURL+"?"+"text="+appendText;
}

//handleError

const errorHandler = (error) => {
    console.log(error);
}


const clickHandler = () => {
    const plainEnglish = inputText.value;
    let dothrakiLanguage = "";

    //api call
    fetch(actualEndpoint(plainEnglish))
    .then(response => response.json())
    .then(json => {dothrakiLanguage = json.contents.translated;
        outputText.innerText = dothrakiLanguage;})
    .catch(errorHandler);

    
}

button.addEventListener("click", clickHandler);