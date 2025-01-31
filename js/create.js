const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();

    const document = {
        title: form.name.value,
        body: form.body.value,
        likes: 0
    }

    const uri = 'http://localhost:3000/posts'

    await fetch(uri, {
        method: 'POST',
        body: JSON.stringify(document),
        headers: { 'Content-Type': 'application/json' }
    })

    window.location.replace('/index.html')
}


form.addEventListener('submit', createPost);