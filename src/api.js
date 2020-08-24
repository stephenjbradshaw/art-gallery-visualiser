export function fetchGalleryData() {
  fetch(
    "https://www.rijksmuseum.nl/api/nl/collection?key=nakTpO7Z&culture=en&toppieces=true&imgonly=true&ps=25"
  )
    .then((response) => response.json())
    .then((galleryData) => {
      
      const objectNumbers = []; 
      galleryData.artObjects.forEach((object) => { 
        objectNumbers.push(object.objectNumber) 
      })
      const requests = [];
      objectNumbers.forEach((objectNumber)=> {
        requests.push(
          fetch(`https://www.rijksmuseum.nl/api/nl/collection/${objectNumber}?key=nakTpO7Z`)

          .then((response) => response.json())
        )
      })
      return Promise.all(requests)
      .then((data) => {
        console.log(data)
      })
    });
    
}

/*



*/
