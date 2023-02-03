console.log("ciao");
const aboutContainer = document.querySelector(".about-container");
const url = "https://issimo.one/ancient-civilizations/wp-json/wp/v2/pages";

async function getAbout() {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);

    aboutContainer.innerHTML = 
    `
    <div>${result[0].content.rendered}</div>
    `
}
getAbout();

