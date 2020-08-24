export function fetchGalleryData() {
  fetch(
    "https://www.rijksmuseum.nl/api/nl/collection?key=nakTpO7Z&culture=en&toppieces=true&imgonly=true&ps=25"
  )
    .then((response) => response.json())
    .then((galleryData) => console.log(galleryData));
}

/*



*/
