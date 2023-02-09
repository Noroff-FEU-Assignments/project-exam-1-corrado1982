const detailContainer = document.querySelector(".detail-container");
const detailItem = document.querySelector(".detail-item");
const titleContainer = document.querySelector(".title");
const imageContainer = document.querySelector(".image-preview");
const textContainer = document.querySelector(".text-container");
const modalContainer = document.querySelector(".modal-container");
const modalContent = document.querySelector(".modal-content");
const bigPic = document.querySelector(".big-pic");
const body = document.querySelector("#body-page");

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
        const image = result._embedded["wp:featuredmedia"][0].source_url;
        const modalImage = result._embedded["wp:featuredmedia"][0].source_url;
        
        titleContainer.innerHTML = `<h2>${title}</h2>`;
        imageContainer.innerHTML = `<img class="pic-to-click" src="${image}"/>`;
        textContainer.innerHTML = `<div>${result.content.rendered} </div>`;
        
        // detailContainer.innerHTML = `<div> <img class="big-pic" src="${result._embedded["wp:featuredmedia"][0].source_url}" alt="we"/> </div>`;

    // detailContainer.innerHTML = 
    // `<div class="detail-item">
    // <h2>${title}</h2>
    // <img class="pic-to-click" src="${image}"/>
    // <div>${result.content.rendered} </div>
    
    // </div>
    // <div> <img class="big-pic" src="${result._embedded["wp:featuredmedia"][0].source_url}" alt="we"/> </div>
    // `;
    imageContainer.onclick = function (){
        // detailItem.innerHTML = "";
        modalContainer.innerHTML = `<img class="modal-content" src="${result._embedded["wp:featuredmedia"][0].source_url}"/>`;
        console.log("clicked")
    modalContainer.style.display = "flex";
    }
    modalContainer.onclick = function () {
modalContainer.style.display = "none";
console.log("clicked body");
    }

};
getDetailPost(url);
//<div> <img src="${result._embedded["wp:featuredmedia"][0].source_url}" alt="we"/> </div>
// const picToClick = document.querySelector(".pic-to-click");
// console.log(picToClick);
// imageContainer.onclick = function (){
//     modalContainer.innerHTML = `<img class="modal-content" src="${result._embedded["wp:featuredmedia"][0].source_url}"/>`;
//     console.log("clicked")
// bigPic.style.display = "block";
// }