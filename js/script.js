async function getAnime(){
    try{
    const response = await fetch("https://animechan.vercel.app/api/quotes");

    console.log(response);
    const animedetail = await response.json();



    animedetail.forEach(element => createRandomQuote(element));
    } 
    catch(err){
        console.log(err);
    }
}

function createRandomQuote(quote){
    const anime = quote.anime;
    const character = quote.character;
    const quotes = quote.quote;


    
    const info = document.createElement("div");
    info.setAttribute("class","quotedetail");
    // info.setAttribute("onclick","showchap()");
    info.innerHTML = `
        <h4 class="anime">${anime}</h4>
        <p class="character">${character}</p>
        <p class = "quote">${quotes}</p>   
    `
    

    anime_details.append(info);

    document.body.append(anime_details);

}

const anime_details = document.createElement("div");
anime_details.setAttribute("class","container");

getAnime();
