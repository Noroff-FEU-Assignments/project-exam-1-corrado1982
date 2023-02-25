const postsContainer = document.querySelector(".posts-container");
const nextPosts = document.querySelector(".next-posts");
const search = document.querySelector("#search");
var page = 2;
// var page = 1;
// const pageUrl = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/?per_page=10&_embed&page" + page;

const pageUrl = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/?per_page=10&_embed&page=1";
const baseUrl = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/?per_page=10&_embed&page=";


// search.onkeyup = function() {
//     console.log(event.target.value);
// }

async function getCards (url) {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);

    

    postsContainer.innerHTML = "";
    for (i = 0 ; i < result.length; i++) {
        const id = result[i].id;
        const image = result[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
        const title = result[i].title.rendered;
        const previousText = result[i].excerpt.rendered;

        
        // console.log(result[i].title.rendered);
        
        // search.onkeyup = function() {
        //     console.log(event.target.value);
        // }

        // const filteredPots = result.filter(filterPosts);
        // function filterPosts(posts) {
        //     if(posts.title.rendered.includes(event.target.value)){
        //         console.log("ma allora funziona?");
        //     }
        // }
        // console.log(filteredPots);

        if(result.length < 10) {
            nextPosts.style.display = "none";
        }  

        postsContainer.innerHTML += 
        `<div class="card-post">
        <a href="detail.html?id=${id}">
        <h2>${title}</h2>
        <img src="${image}" alt="image of ${title}" />
        <p>${previousText}</p>
        </a>
        </div>`
        ;
       
    };
}
 
getCards(pageUrl);

nextPosts.onclick = function() {
    const addPage = page ++ ;
    const newUrl = baseUrl + addPage;
    
   newCards(newUrl);
}

//prova


async function newCards (url) {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);
    
    for (i = 0 ; i < result.length; i++) {
        const id = result[i].id;
        const image = result[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
        const title = result[i].title.rendered;
        const previousText = result[i].excerpt.rendered;

        if(result.length < 10) {
            nextPosts.style.display = "none";
        }
        
        postsContainer.innerHTML += 
        `<div class="card-post">
        <a href="detail.html?id=${id}">
        <h2>${title}</h2>
        <img src="${image}" alt="image of ${title}" />
        <p>${previousText}</p>
        </a>
        </div>`
        ;
    };
}
