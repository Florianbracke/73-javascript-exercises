(() => {
    
    fetch("http://restcountries.eu/rest/v2/all/")
        .then(
            function(response) {
                console.log(response);
    
                    response.json().then(function(country){
                        console.log(country);
            })
})
})();