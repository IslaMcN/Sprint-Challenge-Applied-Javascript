// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// 
// topic.classList.add('topics')
const tabs = document.querySelector('.topics');

function newTabs(topic) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic
}
      


const topics = axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then((response) => {
    console.log(response);
    topics.map(banana => {
        tabs.appendChild(newTabs(banana))
    }
        )
    });


    // data.map(data => {
    //     article.appendChild(createComponent(data))
    //   })