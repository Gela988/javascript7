let currentPage = 1;
let totalPages;

function getUsers(page) {
    function render() {
        let response = this.responseText;
        let responseData = JSON.parse(response);

        var fragment = document.createDocumentFragment();

        responseData.data.forEach(element => {
            let li = document.createElement('li');
            li.classList.add('li-users');

            let span = document.createElement('span');
            span.textContent = element.email;

            let img = document.createElement('img');
            img.src = element.avatar;
            img.classList.add('image-class');

            li.appendChild(span);
            li.appendChild(img);

            fragment.appendChild(li);
        });

        document.getElementById('user-list').innerHTML = ' ';

        document.getElementById('user-list').appendChild(fragment);

        totalPages = responseData.total_pages;
    }

    let requist = new XMLHttpRequest();
    requist.addEventListener('load', render);
    requist.open('GET', 'https://reqres.in/api/users?page=' + page);
    requist.send();
}


document.getElementById('prev').addEventListener('click', function() {
    // currentPage = currentPage + 1;
    if (currentPage === 1) {
        return;
    }
    currentPage -= 1;
    getUsers(currentPage);
})

document.getElementById('next').addEventListener('click', function() {
    // currentPage = currentPage + 1;
    if (currentPage === totalPages) {
        return;
    }
    currentPage += 1;
    getUsers(currentPage);
})

getUsers(currentPage);

