const postContainer = document.querySelector(".post-container");
const url = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/?per_page=100&_embed";
//sorted by date by default

async function getPosts() {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);
    console.log(result[0]._embedded.wpfeaturedmedia);
    
    // .media_details.sizes.large
    for (i = 0 ; i < result.length; i++) {
        // const firstSlide = [0][1][2][3] ;
        const secondSlide = "";
        const thirdSlide = "";

        const image = result[i]._embedded["wp:featuredmedia"][0].source_url;
        const title = result[i].title.rendered;
        const previousText = result[i].excerpt.rendered;

        postContainer.innerHTML += 
        // `<div class="card-post">
        // <h2>${result[firstSlide].title.rendered}</h2>
        // <img src="${result[firstSlide]._embedded["wp:featuredmedia"][0].source_url}" alt="image of something" />
        // <p>${result[firstSlide].excerpt.rendered}</p>
        // </div>`;
        `<div class="card-post">
        <h2>${title}</h2>
        <img src="${image}" alt="image of something" />
        <p>${previousText}</p>
        </div>`;
    };

};
getPosts();