const detailContainer = document.querySelector(".detail-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/" + id;
console.log(url)
async function getDetailPost() {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);

    // const image = result._embedded["wp:featuredmedia"][0].source_url;
        const title = result.title.rendered;
        const previousText = result.excerpt.rendered;

    detailContainer.innerHTML = 
    `<div>
    <h2>${title}</h2>
    <div>${result.content.rendered} </div>
    <p>${previousText}</p>
    </a>
    </div>`;
};
getDetailPost(url);
