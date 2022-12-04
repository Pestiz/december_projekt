
const baseUrl = `https://flowerpowercorp.one/Shreeded/wp-json/wc/store/products?per_page=4`;
const fullUrl = `https://flowerpowercorp.one/Shreeded/wp-json/wc/store/products`
const postContainer = document.querySelector(".post_container");
const tagsContainer = document.querySelector(".tags");
const loadMore = document.getElementById('click_me');



let posts = [];
let tags = [];

const loadPosts = (plainPosts) => {
    plainPosts.forEach(function (posts) {
        postContainer.innerHTML +=
            `
        <div class="post">
        <img src="${posts.images[0].src}"
            alt="${posts.images[0].alt}" class="image">
        <div class="date">
            <i class="far fa-clock"></i>
            <span>13 april, 2012</span>
        </div>
        <a href="${window.location.protocol}//${window.location.host}/single-blog-page.html?id=${posts.id}?${posts.name}"><h3 class="title" id="blog_tittle_link">${posts.name}</h3></a>
        <p class="text">${posts.short_description}</p>
        <p class="text">${posts.short_description}</p>
        <div class="links">
            <a href="#" class="user">
                <i class="far fa-user">
                    <span>by admin</span>
                </i>
            </a>
            <a href="#" class="icon">
                <i class="far fa-comment">
                    <span>(45)</span>
                </i>
            </a>
            <a href="#" class="icon">
                <i class="far fa-share-square">
                    <span>(23)</span>
                </i>
            </a>
        </div>
    </div>
    `

    });
}

const loadCategories = (categoriesTags) => {
    categoriesTags.forEach(function (tags) {
        if (typeof tags.categories[0] === "undefined") {

            console.log(`Wrong data plis update wordpress api`)

        }
        else {
            tagsContainer.innerHTML +=
                `
       <a href="#">${tags.categories[0].slug}</a>
       `};
    });
    console.log(categoriesTags)
}

loadMore.addEventListener('click', (e) => {
    postContainer.innerHTML = ` `;
    tagsContainer.innerHTML = ` `;
    getPosts(fullUrl);
    getCategories(fullUrl);
})

async function getPosts(url) {
    const response = await fetch(url);
    posts = await response.json();
    loadPosts(posts);
}

async function getCategories(url) {
    const response = await fetch(url);
    tags = await response.json();
    loadCategories(tags);

}

getPosts(baseUrl);
getCategories(baseUrl);







