const apiKey = '__API_KEY__';
const endpoint = `https://api.giphy.com/v2/emoji?api_key=${apiKey}&limit=100&offset=0`;
const emojiList = document.getElementById('emoji-list');

document.addEventListener('DOMContentLoaded',  async function () {
  let emojiData;

  try {
    emojiData = await fetchEmojis();
    console.log(emojiData);

    // handle error when list is empty
    if (emojiData.length === 0) {
      document.getElementById(
        'emoji-list'
      ).innerHTML = `<p>No emojis found. Contact support for assistance</p>`;
      return;
    }

    emojiData.forEach((emoji) => {
      // create div
      const card = document.createElement('div');
      card.className = 'card';

      //  create img
      const img = document.createElement('img');
      img.src = emoji.images.fixed_height.url;
      img.alt = emoji.title;

      //  Add title to div
      const title = document.createElement('p');
      title.textContent = emoji.title;

      card.appendChild(img);
      card.appendChild(title);

      emojiList.appendChild(card);

    })

    
  } catch (error) {
      console.error("Error fetching data", error)
  }
})


const fetchEmojis = async () => {
  const response = await fetch(endpoint);

  const responseData = await response.json();
  return responseData.data;
}





















// const exampleArray = [{name: "Temi", age: 40, favouriteColor: 'red'}, {name: "Sheila", age: 18, favouriteColor: 'pink'}, {name: "Mo", age: 55, favouriteColor: 'red'}]

// function displayPersonData() {
//   for (let i = 0; i < exampleArray.length; i++ ) {
//     const personObject = exampleArray[i];
//     const personString = ` Today, ${personObject.name} let's have fun`

//     console.log('personString', personString);

//     const personDiv = document.createElement('div')
//     personDiv.innerHTML = `Name: ${personObject.name},Age: ${personObject.age}, Favourite Colour: ${personObject.favouriteColor}`;
    
//     document.body.appendChild(personDiv)
//     console.log(personDiv)
//   }
// }

// displayPersonData();



