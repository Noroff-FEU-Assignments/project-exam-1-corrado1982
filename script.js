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
        // if(i === 0 && i < 4) {
        // return slideOne;
        // };
        const id = result[i].id;
        const image = result[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
        const title = result[i].title.rendered;
        const previousText = result[i].excerpt.rendered;
        let slides = document.getElementsByClassName(".card-row");

        postContainer.innerHTML += 
        `<div class="card-row">
        <a href="detail.html?id=${id}">
        <h2>${title}</h2>
        <img src="${image}" alt="image of ${title}" />
        <p class="paragraf">${previousText}</p>
        </a>
        </div>`;
        
        
        let slideIndex = 1 ;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
           function showSlides(n) {
            let slides = document.getElementsByClassName("card-row");
            // console.log(slides);
            if (n > slides.length) {slideIndex = 1};
            if (n < 1) {slideIndex = slides.length};
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
              }
              slides[slideIndex-1].style.display = "block";
            //   slides[slideIndex-1].style.display += "block";
            //   slides[slideIndex].style.display = "block";
              
            }
            preArrow.onclick = function(){
            plusSlides(-1);
            };
            newArrow.onclick = function(){
                plusSlides(1);
                };
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
