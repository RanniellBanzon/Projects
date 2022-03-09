const arrow = document.querySelectorAll('.fa-chevron-right');
const movieList = document.querySelectorAll('.movie-list');

arrow.forEach((arrow, index)=>{
    const itemNum = movieList[index].querySelectorAll('img').length;
    let clickCounter = 0;

    arrow.addEventListener('click', () => {
        clickCounter++;
        if(itemNum - (4 + clickCounter) >= 0){
            movieList[index].style.transform = `translateX(${movieList[index].computedStyleMap().get('transform')[0].x.value-350}px)`;
        } else{
            movieList[index].style.transform = 'translateX(0)';
            clickCounter = 0;
        }
    });

    
})





