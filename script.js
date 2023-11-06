let stars = document.querySelectorAll(".star");

stars.forEach(starEle => {
    starEle.addEventListener('click', (event) => updateRating(event));
});

const updateRating = (event) => {
    let ratingValue = event.target.attributes["data-value"].value;
    const { left, right } = event.target.getBoundingClientRect();
    let mid = (right + left) / 2;
    if(event.clientX < mid)
    {
        ratingValue = ratingValue - 0.5;
    }
    localStorage.setItem("rating", ratingValue);
    fillRating(ratingValue);
}

const fillRating = (ratingValue) => {
    ratingValue = Number(ratingValue);
    stars.forEach(starEle => {
        let value = starEle.attributes["data-value"].value;
        starEle.style = "background: gray";
        if(value <= ratingValue)
        {
            starEle.style = "background: yellow";
        }
        else if(ratingValue === (value - 0.5))
        {
            console.log("test")
            starEle.style = "background: linear-gradient(90deg, yellow 50%, gray 50%)";
        }
    });
    document.getElementById("rating").innerText = "Rating : "+ratingValue;
}

const init = () => {
    let ratingValue = localStorage.getItem("rating");
    if(!ratingValue)
    ratingValue = 0;
    fillRating(ratingValue);
}

init();