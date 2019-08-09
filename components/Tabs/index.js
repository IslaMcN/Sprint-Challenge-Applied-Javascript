// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topic = document.createElement('div');
topic.classList.add('topics')

function newTabs(things) {
    const tabs = document.querySelector('.topics');
    things.forEach((topics) => {
        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = topics;
    tabs.classList.add('tabs');
    topics.appendChild(tab)
},
    )   
}

const topics = axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then((response) => {
    console.log(response);
    topics.map(newTabs(response.data.topics))
    });