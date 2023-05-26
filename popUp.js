const projects = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    technologies: `
          <li>Ruby on Rails</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>HTML</li>`,
    source: '<p class="btn"><a href="#" onclick="openModal()">See project</a></p>',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    technologies: `
          <li>Ruby on Rails</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>HTML</li>`,
    source: '<p class="btn"><a href="#" onclick="openModal()">See project</a></p>',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    technologies: `
          <li>Ruby on Rails</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>HTML</li>`,
    source: '<p class="btn"><a href="#" onclick="openModal()">See project</a></p>',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    technologies: `
          <li>Ruby on Rails</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>HTML</li>`,
    source: '<p class="btn"><a href="#" onclick="openModal()">See project</a></p>',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    technologies: `
          <li>Ruby on Rails</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>HTML</li>`,
    source: '<p class="btn"><a href="#" onclick="openModal()">See project</a></p>',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    technologies: `
          <li>Ruby on Rails</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>HTML</li>`,
    source: '<p class="btn"><a href="#" onclick="openModal()">See project</a></p>',
  },
];

const dynamicWorkSecton = document.getElementById('worksection');

for (let i = 0; i < projects.length; i += 1) {
  const fetch = document.getElementById('worksection').innerHTML;
  dynamicWorkSecton.innerHTML = `
    <div class="card item1">
      <div class="card-info">
        <h3>${projects[i].name}</h3>
        <ul>
          ${projects[i].technologies}
        </ul>
        <div class="btnbar">
          ${projects[i].source}
        </div>
      </div>
    </div>${fetch}`;
}

const myModal = document.getElementById('popup');

function openModal() {
  document.getElementById('popup-wrapper').style.display = 'block';
}
function closeModals() {
  document.getElementById('popup-wrapper').style.display = 'none';
}
openModal();
closeModals();
function closeModal(event) {
  if (event.target === myModal) {
    document.getElementById('popup-wrapper').style.display = 'none';
  }
}

window.addEventListener('click', closeModal);
