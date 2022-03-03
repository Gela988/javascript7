let mainWraper = document.getElementById('post-block');
let overlay = document.getElementById('overlay');
let close = document.getElementById('close');


function ajax() {
    let requist = new XMLHttpRequest();
    requist.open('GET','https://jsonplaceholder.typicode.com/posts');
    requist.addEventListener('load', function() {
        let data = JSON.parse(requist.responseText)

       data.forEach(element => {
            createPost(element);
       });
    })

    requist.send();
}

function createPost(item) {
    let divWraper = document.createElement('div');
    divWraper.classList.add('posts');
    divWraper.setAttribute('data-id', item.id);

    let h1 = document.createElement('h1');
    h1.innerText = item.id;

    let h3 = document.createElement('h3');
    h3.innerText = item.title;
    h3.classList.add('title');

    divWraper.appendChild(h1);
    divWraper.appendChild(h3);

    divWraper.addEventListener('click', function(event) {
        let id = event.target.getAttribute('data-id');
        openOverlay(id);
    })

    mainWraper.appendChild(divWraper);

    console.log(divWraper);
}

function openOverlay(id) {
    overlay.classList.add('active');
    console.log(id);
}

close.addEventListener('click', function() {
    overlay.classList.remove('active');
})

ajax();
