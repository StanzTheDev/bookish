async function searchBooks() {
    const query = document.getElementById('searchQuery').value;
    const apiKey = 'AIzaSyCxTjfeY_5i8ziZ4EI42f4c2iZ1LoL3SSg';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      displayResults(data.items);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }
  
  function displayResults(items) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    if (items) {
      items.forEach(item => {
        const book = item.volumeInfo;
        resultsDiv.innerHTML += `
          <div class="book">
            <h3>${book.title}</h3>
            <p>Author(s): ${book.authors ? book.authors.join(', ') : 'N/A'}</p>
            <p>${book.description ? book.description : 'No description available'}</p>
            <img src="${book.imageLinks ? book.imageLinks.thumbnail : 'No image available'}" alt="${book.title}">
          </div>
        `;
      });
    } else {
      resultsDiv.innerHTML = '<p>No results found</p>';
    }
  }
  