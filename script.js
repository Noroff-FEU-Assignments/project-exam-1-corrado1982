const postContainer = document.querySelector(".post-container");
const preArrow = document.querySelector("#slide-arrow-prev");
const newArrow = document.querySelector("#slide-arrow-next");
const baseUrl = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/?per_page=4&_embed";
//sorted by date by default


async function getPosts(url) {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);
    console.log(result[0]._embedded.wpfeaturedmedia);
    
    for (i = 0 ; i < result.length; i++) {

        const image = result[i]._embedded["wp:featuredmedia"][0].source_url;
        const title = result[i].title.rendered;
        const previousText = result[i].excerpt.rendered;
        
        postContainer.innerHTML += 
        `<div class="card-post">
        <h2>${title}</h2>
        <img src="${image}" alt="image of something" />
        <p>${previousText}</p>
        </div>`;
    };
};
getPosts(baseUrl);

newArrow.onclick = function() {
    const addPage = 2 ;
    const newUrl = baseUrl + `&page=${addPage}`;
    postContainer.innerHTML = "";

    
    
        
    getPosts(newUrl);
}