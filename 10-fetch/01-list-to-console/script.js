(() => {
    
    fetch("https://restcountries.eu/rest/v2/all%22")
        .then(
            function(response) {
                console.log(response);
    
                    response.json().then(function(country){
                        console.log(country);
            })
})
})();