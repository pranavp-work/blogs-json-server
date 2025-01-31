const container = document.querySelector('.blogs');
const searchTerm = document.querySelector('.search');

const renderPosts = async (term) => {
    let uri = 'http://localhost:3000/posts?_sort=likes';
    if(term) {
        uri += `&q=${term}`
    }
    console.log(uri);
    const response = await fetch(uri);
    console.log(response);
    const posts = await response.json();
    console.log(posts);

    let template = ``;
    posts.forEach(post => {
        template += `
        <div class = 'post'>
            <h2>${post.title}</h2>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body.slice(0, 200)}</p>
            <a href = "/details.html?id=${post.id}">read more...</a>
        </div>
        `
    })

    container.innerHTML = template;

    // let searchKey = searchTerm.term.value;
    // searchTerm.addEventListener('change', () => {
    //     console.log(searchTerm.term.value)
    // })
    
    searchTerm.addEventListener('submit', (e) => {
        e.preventDefault();
        renderPosts(searchTerm.term.value)
    })
}

window.addEventListener('DOMContentLoaded', () => renderPosts());