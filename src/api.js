export function fetchGalleryData() {
  const requests = [];

  return fetch(
    "https://www.rijksmuseum.nl/api/nl/collection?key=nakTpO7Z&culture=en&toppieces=true&imgonly=true&ps=25"
  )
    .then((response) => response.json())
    .then((galleryData) => {
      const objectNumbers = [];
      galleryData.artObjects.forEach((object) => {
        objectNumbers.push(object.objectNumber);
      });

      objectNumbers.forEach((objectNumber) => {
        requests.push(
          fetch(
            `https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=nakTpO7Z`
          ).then((response) => response.json())
        );
      });
    })
    .then(() => {
      return Promise.allSettled(requests).then((data) => {
        const filteredArray = data.filter((element) => {
          if (element.status === "fulfilled") return true;
        });
        const artObjects = filteredArray.map((element) => {
          return element.value.artObject;
        });
        return artObjects;
      });
    });
}
