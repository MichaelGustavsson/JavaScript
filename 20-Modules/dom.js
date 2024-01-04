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
  image.setAttribute('src', `/assets/images/${imageUrl}`);
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
      alert(`Bilens id är ${vehicleId}, bilens bildkälla är: ${src}`);
    });
  });
};

// Exportera createCard och addImageClickHandler
// namngiven export
export { createCard, addImageClickHandler };
