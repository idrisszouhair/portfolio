const french = document.querySelector('#france-flag');
const english = document.querySelector('#uk-flag');

document.getElementById('france-flag').addEventListener('click', function () {
    french.style.display = 'none';
    english.style.display = 'block';

})

document.getElementById('uk-flag').addEventListener('click', function () {
    french.style.display = 'block';
    english.style.display = 'none';
})