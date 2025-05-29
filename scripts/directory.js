document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.querySelector("#cards");
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");

    gridButton.addEventListener("click", () => {
        cardsContainer.classList.add("grid-view");
        cardsContainer.classList.remove("list-view");
    });

    listButton.addEventListener("click", () => {
        cardsContainer.classList.add("list-view");
        cardsContainer.classList.remove("grid-view");
    });

    // Cargar datos desde members.json
    fetch("../scripts/directory.json")
        .then(response => response.json())
        .then(data => {
            data.members.forEach(member => {
                const card = document.createElement("div");
                card.classList.add("member-card");
                card.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <h2>${member.name}</h2>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
                    <p><strong>Phone:</strong> <a href="tel:${member.phoneNumber}">${member.phoneNumber}</a></p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                `;
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error loading member data:", error);
            cardsContainer.innerHTML = "<p>Failed to load member data.</p>";
        });
});
