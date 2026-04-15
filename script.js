const API_URL = "https://hauora.onrender.com/pgs";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("pg-list");

    container.innerHTML = "";

    data.forEach(pg => {
      const card = document.createElement("div");
      card.className = "pg-card";

      card.innerHTML = `
        <h2>${pg.name}</h2>
        <p><b>Location:</b> ${pg.location}</p>
        <p><b>Price:</b> ₹${pg.price}</p>
        <button onclick="viewDetails('${pg.name}')">View Details</button>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

// redirect to details page
function viewDetails(name) {
  localStorage.setItem("selectedPG", name);
  window.location.href = "details.html";
}