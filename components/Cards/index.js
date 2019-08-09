// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        
        const ards = document.querySelector('.tab');
        ards.addEventListener('click', ()=>{
            justwork(response.data.articles.bootstrap)
            justwork(response.data.articles.Javascript)
            justwork(response.data.articles.technology)
            justwork(response.data.articles.jquery)
            justwork(response.data.articles.node)
        })
        
    })
function justwork (work) {
    const cooperate = work;
    cooperate.forEach(element => {
        cards.appendChild(articleCard(element))
    });
}
function articleCard(article) {

    let newCard = document.createElement('div');
    newCard.classList.add('card');

    let newHeadline = document.createElement('div');
    newHeadline.classList.add('headline');
    newHeadline.textContent = `${article.headline}`

    let authorContainer = document.createElement('div');
    authorContainer.classList.add('author');

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    let img = document.createElement('img');
    img.src = article.authorPhoto;

    let author = document.createElement('span');
    author.textContent = `${article.authorName}`;




    newCard.appendChild(newHeadline);
    newCard.appendChild(authorContainer);
    authorContainer.appendChild(imgContainer);
    imgContainer.appendChild(img);
    authorContainer.appendChild(author);


    // newCard.addEventListener('click', () => {
    //   newCard.classList.toggle('selected')
    // })
    return newCard
}





