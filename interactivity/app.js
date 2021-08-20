console.log('Fetch Dictionary');
//debugger;

// Searching through a url
function onSearch() {
    // console.log('search');
    let searchInputElement = document.getElementById('search-input');
    let resultsElement = document.getElementById('results');

    console.log('Search button pressed, searching for: ' + searchInputElement.value);

    // grabbing data from a website, the 'then' waits for the repsonse from the server
    fetch(
        'https://api.dictionaryapi.dev/api/v2/entries/en/' + 
        searchInputElement.value
    )
    .then(
        // Converting repsonse into json format, grabs header before body
        response => response.json()
    )
    .then(
        json => {
            let firstDefinition = json[0];
            let word = `
                    <h1>${firstDefinition.word}</h1>
                    <p>${firstDefinition.phonetic}</p><br>
                `

            resultsElement.innerHTML = word;
            // console.log(firstDefinition)

            for (let currentDefinition of json) { // Loop for each definition in json
                //                              \/ Changed the current definition the loop is on.
                let firstMeaning = currentDefinition.meanings[0];
                let firstMeaningPartOfSpeech = firstMeaning.partOfSpeech;
                let firstMeaningDefinition = firstMeaning.definitions[0];
                
                // console.log(firstMeaningPartOfSpeech);
                // console.log(firstMeaningDefinition.definition);
                //                    \/ Changed to current definition.
                
                let outPutHTML = `
                    <p>${firstMeaningPartOfSpeech}</p>
                    <p>Definition: ${firstMeaningDefinition.definition}</p>
                    <p>Example: ${firstMeaningDefinition.example}</p><br>
                `

                // Added +=              \/ here
                resultsElement.innerHTML += outPutHTML;
            }

    });
}

/* Way 1
function onSearch() {
    // console.log('search');
    let searchInputElement = document.getElementById('search-input');

    console.log('Search button pressed, searching for: ' + searchInputElement.value);
    fetch(
        'https://api.dictionaryapi.dev/api/v2/entries/en/' + 
        searchInputElement.value
    )
    .then(
        onResponse()
    );
    console.log(json);
    //document.getElementById('content').innerHTML = 
}

function onResponse() {

}
*/

/* Part I
// Searching through a url
function onSearch() {
    // console.log('search');
    let searchInputElement = document.getElementById('search-input');
    let resultsElement = document.getElementById('results');

    console.log('Search button pressed, searching for: ' + searchInputElement.value);

    // grabbing data from a website, the 'then' waits for the repsonse from the server
    fetch(
        'https://api.dictionaryapi.dev/api/v2/entries/en/' + 
        searchInputElement.value
    )
    .then(
        // Converting repsonse into json format, grabs header before body
        response => response.json()
    )
    .then(
        json => {
            let firstDefinition = json[0];
            let firstMeaning = firstDefinition.meanings[0];
            let firstMeaningDefinition = firstMeaning.definitions[0];
            //console.log(firstDefinition.word);
            //console.log(firstDefinition.phonetic);
            console.log(firstMeaningDefinition.example);
            console.log(firstMeaningDefinition.definition);

            for(i=0;i<firstMeaningDefinition.length;i++) {
                console.log(firstMeaningDefinition.definition[i]);
            }

            let outPutHTML = `
                <h1>${firstDefinition.word}</h1>
                <p>${firstDefinition.phonetic}</p>
                <h2>Meaning</h2>
                <p>${firstMeaningDefinition.definition}</p>
                <p>${firstMeaningDefinition.example}</p>   
            `

            resultsElement.innerHTML = outPutHTML;
        }
    );
}
*/