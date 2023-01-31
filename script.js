const postContainer = document.querySelector(".post-container");
const preArrow = document.querySelector("#slide-arrow-prev");
const newArrow = document.querySelector("#slide-arrow-next");
let page = 2;


const pageUrl = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/?per_page=4&_embed&page=1";
//sorted by date by default
const baseUrl = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/?per_page=4&_embed&page=";
const slide = document.querySelector(".card-post");



async function getPosts(url) {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);
    console.log(result[0]._embedded.wpfeaturedmedia);
    
    for (i = 0 ; i < result.length; i++) {
        const id = result[i].id;
        const image = result[i]._embedded["wp:featuredmedia"][0].source_url;
        const title = result[i].title.rendered;
        const previousText = result[i].excerpt.rendered;
        
        postContainer.innerHTML += 
        `<div class="card-post">
        <a href="#">
        <h2>${title}</h2>
        <img src="${image}" alt="image of something" />
        <p class="paragraf">${previousText}</p>
        </a>
        </div>`;
    };
};
getPosts(pageUrl);

newArrow.onclick = function() {
    
    const addPage = page ++;
    const newUrl = baseUrl + addPage;
    if(page === 4) {
        page = 1;
    }
    postContainer.innerHTML = "";
    getPosts(newUrl);
}
// newArrow.addEventListener("click", () => {
//     const slideWidth = slide.clientWidth;
//     postContainer.scrollLeft += slideWidth;
// });