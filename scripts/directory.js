const cardsContainer = document.querySelector('#cards');
const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');

// Función para cambiar a la vista de cuadrícula
function switchToGrid() {
    cardsContainer.classList.remove('list-view');
}

// Función para cambiar a la vista de lista
function switchToList() {
    cardsContainer.classList.add('list-view');
}

// Asignar eventos a los botones
gridButton.addEventListener('click', switchToGrid);
listButton.addEventListener('click', switchToList);

async function getMemberData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/JPgitidaho/WDD-230-/main/chamber/scripts/directory.json');
        const data = await response.json();

        const fragment = document.createDocumentFragment();

        data.members.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('card');


            if (!cardsContainer.classList.contains('cards')) {
                const image = document.createElement('img');
                image.src = member.image;
                image.alt = `${member.name} Logo`;
                image.loading = 'lazy';
                image.width =300;
                image.height = 180;
                card.appendChild(image);
            }



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
            phone.textContent = member.phoneNumber ? ` 📱${member.phoneNumber}` : 'Phone: N/A';
            detailsContainer.appendChild(phone);


            const email = document.createElement('p');
            email.innerHTML = `📧 <a href="mailto:${member.email}">${member.email}</a>`;
            detailsContainer.appendChild(email);


            const website = document.createElement("p");
            website.innerHTML = `💻: <a href="${member.website}" target="_blank">${member.website}</a>`;
            detailsContainer.appendChild(website);

            fragment.appendChild(card);
        });

        cardsContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar elementos
        cardsContainer.appendChild(fragment);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getMemberData();
});
