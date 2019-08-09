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


function NewTabs(topic) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic

    return tab
}
const tabs = document.querySelector('.topics');
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
    response.data.topics.map((arrayItem) => {
     tabs.appendChild(NewTabs(arrayItem));
    })
  })


// newTabs(topics)
// topics.forEach( (item) => {
//     let New = newTabs(item);
//     tabs.appendChild(New);
// })
    
    
 



    // let newComponents = data.map( (arrayItem) => {
    //     let newButton = buttonCreator(arrayItem);
        
    //     // Remember, we always need to return something when we use .map
    //     return newButton;
    // }}
    // data.map(data => {
    //     article.appendChild(createComponent(data))
    //   })