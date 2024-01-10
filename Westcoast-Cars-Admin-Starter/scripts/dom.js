/*******************************************************************************/
// DOM Manipulering
/*******************************************************************************/
const createCard = (vehicle) => {
  const div = document.createElement('div');
  div.classList.add('vehicle-image');
  div.appendChild(createImage(vehicle.imageUrl, vehicle.id));
  div.appendChild(createVehicleInfo(vehicle));

  return div;
};

const createImage = (imageUrl, id) => {
  const image = document.createElement('img');
  image.setAttribute('src', `../content/images/${imageUrl}`);
  image.setAttribute('id', id);

  return image;
};

const createVehicleInfo = (vehicle) => {
  const paragraph = document.createElement('p');
  paragraph.appendChild(
    document.createTextNode(`${vehicle.manufacturer} ${vehicle.model}`)
  );

  return paragraph;
};

const addImageClickHandler = (images) => {
  images.forEach((image) => {
    const src = image.getAttribute('src');
    const vehicleId = image.getAttribute('id');

    image.addEventListener('click', () => {
      console.log(location);
      location.href = `/pages/vehicle-details.html?id=${vehicleId}`;
    });
  });
};

export { createCard, addImageClickHandler };
