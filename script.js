fetch("https://hauora.onrender.com/pgs")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("pg-list");

    data.forEach(pg => {
      const div = document.createElement("div");
      div.classList.add("card");

      div.innerHTML = `
        <h2>${pg.name}</h2>
        <p>${pg.location}</p>
        <p>₹${pg.price}</p>
        <button onclick="viewDetails('${pg.name}')">View Details</button>
      `;

      container.appendChild(div);
    });
  });

function viewDetails(name) {
  window.location.href = `details.html?name=${name}`;
}
