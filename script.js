const postContainer = document.querySelector(".post-row-container");
const preArrow = document.querySelector("#slide-arrow-prev");
const newArrow = document.querySelector("#slide-arrow-next");
// let page = 2;


const pageUrl = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/?per_page=12&_embed";
//sorted by date by default
// const baseUrl = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/?per_page=4&_embed&page=";
// const slide = document.querySelector(".card-post");



async function getPosts(url) {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);
    // console.log(result[0]._embedded.wpfeaturedmedia);
    
    const slideOne = "";

    for (i = 0 ; i < result.length; i++) {
        if(i === 0 && i < 4) {
        return slideOne;
        };
        const id = result[slideOne].id;
        const image = result[slideOne]._embedded["wp:featuredmedia"][0].source_url;
        const title = result[slideOne].title.rendered;
        const previousText = result[slideOne].excerpt.rendered;
        

        postContainer.innerHTML += 
        `<div class="card-row">
        <a href="detail.html?id=${id}">
        <h2>${title}</h2>
        <img src="${image}" alt="image of something" />
        <p class="paragraf">${previousText}</p>
        </a>
        </div>`;
        
    };
};
getPosts(pageUrl);

// newArrow.onclick = function() {
    
//     const addPage = page ++;
//     const newUrl = baseUrl + addPage;
//     if(page === 4) {
//         page = 1;
//     }
//     postContainer.innerHTML = "";
//     getPosts(newUrl);
// }
