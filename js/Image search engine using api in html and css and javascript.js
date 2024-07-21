const accessKey = "cp193E1lgJPL93IXeCblF7BbqxaMlGX8fYVIHkBtttA";

const searchform = document.getElementById("searchForm");
const searchbox = document.getElementById("search_box");
const searchresult = document.getElementById("search_result");
const showmorebtn = document.getElementById("Show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    if (page == 1) {
        searchresult.innerHTML = "";
    }
    // const responce = await fetch(url);
    // const data = await responce.json();

    fetch(url).then((response) => {
        return response.json();
    }).then((results) => {
        console.log(result);
        if (page == 1) {
            searchImages.innerHTML = "";
        }
    })

   const data=result.results;
   console.log(data);
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(image);
        searchresult.appendChild(imagelink);

    })
    showmorebtn.style.display = "block";
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showmorebtn.addEventListener("click", () => {
    page++;
    searchImages();
})

