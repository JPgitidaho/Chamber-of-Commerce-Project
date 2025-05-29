const cardsContainer = document.getElementById('cards');
const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');

// Cambia la vista a cuadrícula
function switchToGrid() {
    cardsContainer.classList.remove('list-view');
}

// Cambia la vista a lista
function switchToList() {
    cardsContainer.classList.add('list-view');
}

// Eventos para botones de vista
gridButton.addEventListener('click', switchToGrid);
listButton.addEventListener('click', switchToList);

// Cargar datos desde el archivo JSON
async function getMemberData() {
    try {
        const response = await fetch('../scripts/directory.json'); // Asegúrate que el archivo esté en la misma carpeta
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const fragment = document.createDocumentFragment();

        data.members.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.src = member.image;
            image.alt = `${member.name} Logo`;
            image.loading = 'lazy';
            card.appendChild(image);

            const detailsContainer = document.createElement('div');
            detailsContainer.classList.add('home-grid');
            card.appendChild(detailsContainer);

            const name = document.createElement("p");
            name.textContent = `${member.name}`;
            detailsContainer.appendChild(name);

            const address = document.createElement("p");
            address.textContent = `${member.address}`;
            detailsContainer.appendChild(address);

            const phone = document.createElement('p');
            phone.textContent = member.phoneNumber ? `📱 ${member.phoneNumber}` : 'Phone: N/A';
            detailsContainer.appendChild(phone);

            const email = document.createElement('p');
            email.innerHTML = `📧 <a href="mailto:${member.email}">${member.email}</a>`;
            detailsContainer.appendChild(email);

            const website = document.createElement("p");
            website.innerHTML = `💻 <a href="${member.website}" target="_blank">${member.website}</a>`;
            detailsContainer.appendChild(website);

            fragment.appendChild(card);
        });

        cardsContainer.innerHTML = '';
        cardsContainer.appendChild(fragment);
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        cardsContainer.innerHTML = '<p>Error al cargar los datos del directorio.</p>';
    }
}

getMemberData();
