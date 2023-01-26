const postContainer = document.querySelector(".post-container");
const url = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/?per_page=100&_embed";

// console.log("ciaao");
async function getPosts() {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);
    console.log(result[0]._embedded.wpfeaturedmedia);
    // const image = result[i]._embedded.wp.featuredmedia[0].media_details.sizes.full.source_url;

    for (i = 0 ; i < result.length; i++) {
        postContainer.innerHTML += 
        `<div>
        <h2>${result[i].title.rendered}</h2>
        <img src="${result[i]._embedded["wp:featuredmedia"][0].source_url}" alt="image of something" />
        </div>`;
    };

};
getPosts();