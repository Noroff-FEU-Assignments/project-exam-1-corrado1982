const detailContainer = document.querySelector(".detail-container");

const bigPic = document.querySelector(".big-pic");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const emb = "?_embed&"
const url = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/posts/"  + id + emb ;
console.log(id)
console.log(url)
async function getDetailPost() {
    const data = await fetch(url);
    const result = await data.json();
    

    // const image = result._embedded["wp:featuredmedia"][0].source_url;
        const title = result.title.rendered;
        // const previousText = result.excerpt.rendered;
        //const image = result._embedded["wp:featuredmedia"][0].source_url;


    detailContainer.innerHTML = 
    `<div class="detail-item">
    <h2>${title}</h2>
    
    <div class="pic-to-click">${result.content.rendered} </div>
    
    </div>
    <div> <img class="big-pic" src="${result._embedded["wp:featuredmedia"][0].source_url}" alt="we"/> </div>
    `;
};
getDetailPost(url);
//<div> <img src="${result._embedded["wp:featuredmedia"][0].source_url}" alt="we"/> </div>
const picToClick = document.querySelector(".pic-to-click");
console.log(picToClick);
picToClick.onclick = function (){
    console.log("clicked")
// bigPic.style.display = "block";
}