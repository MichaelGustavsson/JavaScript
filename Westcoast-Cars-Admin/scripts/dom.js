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

// createVehicleList som tar två argument
// 1. listan av bilar
// 2. Vilket element som vi ska addera bilarna till
const createVehicleList = (vehicles, element) => {
  // Loopa igenom alla bilar vehicles
  // För varje bil skapa en div
  // Den skapade diven skall läggas till element som vi skickade in
  vehicles.forEach((vehicle) => {
    const container = createDiv();
    container.setAttribute('vehicleid', vehicle.id);
    container.appendChild(createSpan(vehicle.manufacturer));
    container.appendChild(createSpan(vehicle.model));
    container.appendChild(createSpan(`Årsmodell ${vehicle.modelYear}`));
    container.appendChild(createSpan(`Antal köra km ${vehicle.mileage}`));
    element.appendChild(container);
  });
};

const createDiv = () => {
  // const div = document.createElement('div');
  // return div;
  return document.createElement('div');
};

const createSpan = (text) => {
  const span = document.createElement('span');
  span.innerText = text;
  return span;
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

export { createCard, addImageClickHandler, createVehicleList };
