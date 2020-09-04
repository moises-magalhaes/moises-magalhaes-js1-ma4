const container = document.querySelector(".container");
const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

async function fetchProperties() {
    try {

        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        container.innerHTML = "";

        const games = json.results;
        //       const ratings = json.results;
        //       const tags = json.results;

        for (let i = 0; i <= games.length; i++) {
            console.log(games[i]);
            console.log(games[i] && games[i].name);
            console.log(games[i] && games[i].rating);
            console.log(games[i] && games[i].released);

            if (i === 20) {
                break;
            };



            container.innerHTML += `<a href="question3.html?id=${games[i] && games[i].id}" class="card">
                         <div class="image" style="background-image: url(${games[i] && games[i].background_image}); height: 150px;width: 150px;"></div>
                           <div class="name">
                           <h2 class="title">${games[i] && games[i].name}</h2>
                           </div>
                           <div class="rating">
                                <p class="title">${games[i] && games[i].rating}</p>
                          </div>
                          <div class="released">
                          <p class="title">${games[i] && games[i].released}</p>
                    </div>
                           </a>`;
        }

        //    games.forEach(function (game) {
        //        container.innerHTML += `<a href="question3.html?id=${game.id}" class="card">
        //        <div class="image" style="background-image: url(${game.background_image}); height: 150px;width: 150px;"></div>
        //        <div class="name">
        //        <h2 class="title">${game.name}</h2>
        //        </div>
        //        <div class="name">
        //        <p class="title">${game.tags.language}</p>
        //        </div>
        //        </a>`;
        //<h1>${json.results}</h1>
        //    })
    }

    catch (error) {
        console.log(error);
        container.innerHTML = "An error has occurred when calling the API";
    }


}

fetchProperties();