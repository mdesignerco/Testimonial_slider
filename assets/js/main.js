const testimonials = document.getElementById('testimonials');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

const comments= [
    {
        id: 1,
        name: 'Tanya Sinclair',
        profession : 'UX Engineer',
        quote: `“ I’ve been interested in coding for a while but never taken the jump, until now.
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so
        excited about the future.”`,
        img: '/assets/images/image-tanya.jpg'
    },
    {
        id: 2,
        name: 'John Tarkpor',
        profession : 'Junior Front-end Developer',
        quote: `“ If you want to lay the best foundation possible I’d recommend taking this course.
        The depth the instructors go into is incredible. I now feel so confident about
        starting up as a professional developer. ”`,
        img: '/assets/images/image-john.jpg'
    }
];

function show(index) {
        testimonials.innerHTML =
        `<div class="testimonials__content">
            <p class="testimonials__content__p">
                ${comments[index].quote}
            </p>
            <div class="testimonials__content__author">
                <h4 class="testimonials__content__author__h4">
                    ${comments[index].name}
                </h4>
                <span class="testimonials__content__author__span">
                    ${comments[index].profession}
                </span>
            </div>
            </div>
            <div class="testimonials__img">
                <img src="${comments[index].img}" alt="${comments[index].name}">
                <ul class="navigation_testimonials">
                    <li>  <img onclick="getPrevious()" src="/assets/images/icon-prev.svg" alt="Previous"></li>
                    <li>  <img onclick="getNext()" src="/assets/images/icon-next.svg" alt="Next"></li>
                </ul>
            </div>
        </div>`
}

function getPrevious() {
    show(0);
}

function getNext() {
    show(1);
}


function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        show(0)
    }
    else if (e.keyCode == '39') {
        show(1)
    }
}

window.onkeydown = checkKey;
document.onreadystatechange=()=> show(0);
