const apiKey = 'MFHh5JqdgRVmnYxuWFFz7pxUdpvPcsJY';
const endpoint = `https://api.giphy.com/v2/emoji?api_key=MFHh5JqdgRVmnYxuWFFz7pxUdpvPcsJY&limit=100&offset=0`;
const emojiList = document.getElementById('emoji-list');

document.addEventListener('DOMContentLoaded', async function () {
  let emojiData;
  // fetch emojis categories

  try {
    emojiData = await fetchEmojis();

    if (emojiData.length === 0) {
      document.getElementById(
        'emoji-list'
      ).innerHTML = `<p>No emojis found. Contact support for assistance</p>`;
      return;
    }

    emojiData.forEach((emoji) => {
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = emoji.images.fixed_height.url;
      img.alt = emoji.title;

      const title = document.createElement('p');
      title.textContent = emoji.title;

      const rating = document.createElement('p');
      rating.textContent = `Rating: ${emoji.rating.toUpperCase()}`;

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(rating);
      emojiList.appendChild(card);
    });
  } catch (error) {
    document.getElementById(
      'emoji-list'
    ).innerHTML = `<p>Error: Could not fetch weather data</p>`;
    console.error('Error fetching data:', error);
  }
});

const fetchEmojis = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  emojiData = data.data;
  return data.data;
};

// fetch(endpoint)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('data', data);
//     const emojis = data.data;
//     emojis.forEach((emoji) => {
//       const card = document.createElement('div');
//       card.className = 'card';

//       const img = document.createElement('img');
//       img.src = emoji.images.fixed_height.url;
//       img.alt = emoji.title;

//       const title = document.createElement('p');
//       title.textContent = emoji.title;

//       const rating = document.createElement('p');
//       rating.textContent = `Rating: ${emoji.rating.toUpperCase()}`;

//       card.appendChild(img);
//       card.appendChild(title);
//       card.appendChild(rating);
//       emojiList.appendChild(card);
//     });
//   })
//   .catch((error) => console.error('Error fetching data:', error));

// https://nationalize.io/documentation#localization
// https://www.weather.gov/documentation/services-web-api#/default/glossary
