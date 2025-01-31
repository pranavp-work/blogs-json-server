const detailContainer = document.querySelector('.details');
const deleteBtn = document.querySelector('.button')
const id = new URLSearchParams(window.location.search).get('id');
console.log(id);

const uri = 'http://localhost:3000/posts';

const renderDetails = async () => {
    const response = await fetch(`${uri}/${id}`)
    console.log(response)
    const details = await response.json();
    console.log(details);

    detailContainer.innerHTML = `
        <h1>${details.title}</h1>
        <p><small>${details.likes} likes<small></p>
        <p>${details.body}</p>
    `
}

deleteBtn.addEventListener('click', async (e) => {
    await fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })

    window.location.replace('/index.html')
})



window.addEventListener('DOMContentLoaded', () => renderDetails());