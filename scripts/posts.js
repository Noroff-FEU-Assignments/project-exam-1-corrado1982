const postsContainer = document.querySelector(".posts-container");
const nextPosts = document.querySelector(".next-posts");
var page = 2;
const pageUrl = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/?per_page=10&_embed&page=1";
const baseUrl = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/?per_page=10&_embed&page=";

async function getCards (url) {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);

    for (i = 0 ; i < result.length; i++) {
        const id = result[i].id;
        const image = result[i]._embedded["wp:featuredmedia"][0].source_url;
        const title = result[i].title.rendered;
        const previousText = result[i].excerpt.rendered;

        if(result.length < 10) {
            nextPosts.style.display = "none";
            console.log("don t display it");
        }
        
        postsContainer.innerHTML += 
        `<div class="card-post">
        <a href="#">
        <h2>${title}</h2>
        <img src="${image}" alt="image of something" />
        <p>${previousText}</p>
        </a>
        </div>`
        ;
       
    };
       
}
getCards(pageUrl);


nextPosts.onclick = function() {
    const addPage = page ++;
    const newUrl = baseUrl + addPage;
    
   
   

    getCards(newUrl);
}

