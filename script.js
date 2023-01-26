const postContainer = document.querySelector(".post-container");
const url = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/?per_page=100";

// console.log("ciaao");
async function getPosts() {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);

    for (i = 0; i < result.length; i++) {
        postContainer.innerHTML += 
        `<div>
        <h2>${result[i].title.rendered}</h2>
        <img href=${result[i].title.rendered} >
        </div>`
    }

};
getPosts();