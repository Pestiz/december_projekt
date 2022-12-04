const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ID = urlParams.get('id')

const baseUrl = `https://flowerpowercorp.one/Shreeded/wp-json/wc/store/products/${ID}`;
singlePostDescription = document.querySelector(".single_post")

async function getPosts(url) {
    const response = await fetch(url);
    posts = await response.json();
    singlePostDescription.innerHTML += `
    <div class="post">
                
    <img src="${posts.images[0].src}" alt="${posts.images[0].alt}" class="image">

    <div class="date">
        <i class="far fa-clock"></i>
        <span>13 april, 2012</span>
    </div>

    <h3 class="title">${posts.name}</h3>

    <p class="text" id="id_Text">${posts.description}</p>
    </p>

        <div class="links">
            <a href="#" class="user">
                <i class="far fa-user">
                    <span>by admin</span>
                </i>
            </a>
        </div>
</div>
    
    `
}


getPosts(baseUrl);