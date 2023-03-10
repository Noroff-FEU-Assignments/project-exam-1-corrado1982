const postContainer = document.querySelector(".post-row-container");
const preArrow = document.querySelector("#slide-arrow-prev");
const newArrow = document.querySelector("#slide-arrow-next");
const slide1 = document.querySelector(".slide-1");
const slide2 = document.querySelector(".slide-2");
const slide3 = document.querySelector(".slide-3");
const slideSingle = document.querySelector(".slide-single");
// const slides = document.querySelector(".slide");
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
    slide1.innerHTML = "";
    const slideOne = "";

    for (let i = 0 ; i < 4; i++) {
      
        // const id = result[i].id;
        // const image = result[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
        // const title = result[i].title.rendered;
        // const previousText = result[i].excerpt.rendered;

        // let slides = document.getElementsByClassName(".card-row");
        
        slide1.innerHTML += 
        `<div class="card-row">
        <a href="detail.html?id=${result[i].id}">
        <h2>${result[i].title.rendered}</h2>
        <img src="${result[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" alt="image of ${result[i].title.rendered}" />
        <p class="paragraf">${result[i].excerpt.rendered}</p>
        </a>
        </div>`;
        
    };

    for (let i = 4 ; i < 8; i++) {
      
        slide2.innerHTML += 
        `<div class="card-row">
        <a href="detail.html?id=${result[i].id}">
        <h2>${result[i].title.rendered}</h2>
        <img src="${result[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" alt="image of ${result[i].title.rendered}" />
        <p class="paragraf">${result[i].excerpt.rendered}</p>
        </a>
        </div>`;
        
    };
    for (let i = 8 ; i < 12; i++) {
      
        slide3.innerHTML += 
        `<div class="card-row">
        <a href="detail.html?id=${result[i].id}">
        <h2>${result[i].title.rendered}</h2>
        <img src="${result[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" alt="image of ${result[i].title.rendered}" />
        <p class="paragraf">${result[i].excerpt.rendered}</p>
        </a>
        </div>`;
        
    };

    // ESPERIMENT
    for (let i = 0 ; i < 4; i++) {
      
        slideSingle.innerHTML += 
        `<div class="card-row">
        <a href="detail.html?id=${result[i].id}">
        <h2>${result[i].title.rendered}</h2>
        <img src="${result[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" alt="image of ${result[i].title.rendered}" />
        <p class="paragraf">${result[i].excerpt.rendered}</p>
        </a>
        </div>`;
        
    };

    // END
        // let slides = document.getElementsByClassName(".card-row");
        let slideIndex = 1 ;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
           function showSlides(n) {
            // let slides = document.querySelector(".slide-single");
            let slides = document.getElementsByClassName("slide");
            console.log(slides);
            if (n > slides.length) {slideIndex = 1};
            if (n < 1) {slideIndex = slides.length};
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
              }
              slides[slideIndex-1].style.display = "flex";
          
              
            }
            preArrow.onclick = function(){
                plusSlides(-1);
            };
            newArrow.onclick = function(){
                plusSlides(1);
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


// PRESO DA W3

// <script>
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(r) {
//   showSlides(slideIndex += r);
// }


// function showSlides(r) {
//   //let i;
//   let slides = document.getElementsByClassName("mySlides");

  
//   if (r > slides.length) 
//   		{slideIndex = 1} 
        
//   if (r < 1)
//   		{slideIndex = slides.length}
  
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
  
//   slides[slideIndex-1].style.display = "block";  
 
// }
// </script>
