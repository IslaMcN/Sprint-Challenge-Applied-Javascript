// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const head = document.createElement('div');
    const date = document.createElement('span');
    const Lambda = document.createElement('h1');
    const temp = document.createElement('span');
    
    head.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = "March 28, 2019";
    Lambda.textContent = "Lambda Times";
    temp.textContent = "98 degress";

    container.appendChild(head);

    head.appendChild(date);
    head.appendChild(Lambda);
    head.appendChild(temp);



    return Header

}
const container = document.querySelector('.header-container')

Header()