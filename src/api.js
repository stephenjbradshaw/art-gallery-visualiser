export function fetchGalleryData() {
  const requests = [];

  return fetch(
    "https://www.rijksmuseum.nl/api/nl/collection?key=nakTpO7Z&culture=en&toppieces=true&imgonly=true&ps=25",
    {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  )
    .then((response) => response.json())
    .then((galleryData) => {
      const objectNumbers = [];
      galleryData.artObjects.forEach((object) => {
        objectNumbers.push(object.objectNumber);
      });
      console.log(objectNumbers, "object numbers");

      objectNumbers.forEach((objectNumber) => {
        requests.push(
          fetch(
            `https://www.rijksmuseum.nl/api/nl/collection/${objectNumber}?key=nakTpO7Z`,
            {
              mode: "cors",
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            }
          ).then((response) => response.json())
        );
      });
    })
    .then(() => {
      console.log(requests, "requests");
      return Promise.allSettled(requests).then((data) => {
        console.log(data, "data from promise allSettled");
        const filteredArray = data.filter((element) => {
          if (element.status === "fulfilled") return true;
        });
        console.log(filteredArray, "filtered array");
        const artObjects = filteredArray.map((element) => {
          return element.value.artObject;
        });
        console.log(artObjects, "values only");
      });
    });
}
