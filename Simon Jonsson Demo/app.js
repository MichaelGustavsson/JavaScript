const placeholder = document.querySelector('#place-holder');
const listWorkouts = async () => {
  const url = 'http://localhost:3005/workouts';

  const response = await fetch(url);
  const data = await response.json();

  generateHtml(data);
};

const generateHtml = (workouts) => {
  workouts.forEach((workout) => {
    const div = document.createElement('div');

    const workoutHeader = createHeader('h2', workout.exercise);
    workoutHeader.classList.add('workout-header');

    div.appendChild(workoutHeader);
    div.appendChild(createHeader('h3', 'Reps'));

    const reps = document.createElement('ul');
    div.appendChild(reps);

    workout.reps.forEach((rep) => {
      reps.appendChild(createList(rep));
    });

    div.appendChild(createHeader('h3', 'Weights'));
    const weights = document.createElement('ul');
    div.appendChild(weights);

    workout.weight.forEach((weight) => {
      weights.appendChild(createList(weight));
    });
    placeholder.appendChild(div);
  });
};

const createList = (text) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(text));
  return li;
};

const createHeader = (element, text) => {
  const header = document.createElement(element);
  header.appendChild(document.createTextNode(text));

  return header;
};

listWorkouts();
