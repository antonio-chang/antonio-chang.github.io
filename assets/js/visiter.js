

// MENU SHOW
const showMenu = (toggleId, navId) => {

    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

//ACTIVE AND REMOVE MENU
//querySelectorAll is for class!
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {

    //Active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

$(document).ready(function () {
    var dataSet = [[]];
    req = new XMLHttpRequest();
    req.responseType = 'json';
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.readyState === 4 && this.status === 200) {
                const comments = this.response;
                console.log(comments)
                let size = comments.length;
                for (let i = 0; i < size; i++) {
                    let cur_name = comments[i].name;
                    for (let j = 0; j < comments[i].comment.length; j++) {
                        var person = { Name: cur_name, Comment: comments[i].comment[j].text, date: comments[i].comment[j].date };
                        dataSet.push(person);
                    }
                }

                $('#visitor_table').DataTable({
                    "columnDefs": [{
                        "defaultContent": " ",
                        "targets": "_all"
                    }],
                    data: dataSet,
                    columns: [
                        { "data": "Name", "name": "Name", "title": "Name" },
                        { "data": "Comment", "name": "Comment", "title": "Comment" },
                        { "data": "date", "name": "Date", "title": "Date" },
                    ],
                    searching: false,
                    paging: false,
                    info: false
                });
            }
        }
    }
    req.open("GET", "http://localhost:3000/getAll", true);
    req.send();
});
