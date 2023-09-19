function jokefetch() {
    const xhr = new XMLHttpRequest();
    const url = "https://v2.jokeapi.dev/joke/Any";

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {

            if (xhr.status === 200) 
            {
                const joke = JSON.parse(xhr.responseText);
                const jokes = document.getElementById('get_joke');
                jokes.innerHTML = "<h3>" + joke.setup + "</h3>" + "<p>" + joke.delivery + "</p>";
            } 
            else {
                console.log("Error", xhr.status);
            }
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}
