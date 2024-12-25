const btn = document
    .querySelector('.read-more-buto');

const text = document
    .querySelector('.desc-read-more');

const cardHolder = document
    .querySelector('.grid-homepage')

cardHolder
.addEventListener('click', e => {

    const current = e.target;

    const isReadMoreBtn = current.className.includes('read-more-buto');

    if (!isReadMoreBtn)
        return;

    const currentText = e.target.parentNode.querySelector('.desc-read-more');

    currentText.classList.toggle('desc-read-more--open');

    current.textContent = current.textContent.includes('Read More...') ? 'Read Less...' : 'Read More...';
});