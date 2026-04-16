const API = "https://hauora.onrender.com/pgs";

fetch(API)
.then(res=>res.json())
.then(data=>{
  const container = document.getElementById("pg-list");

  container.innerHTML = "";

  data.forEach(pg=>{
    container.innerHTML += `
      <div class="card">
        <h3>${pg.name}</h3>
        <p>${pg.location}</p>
        <p>₹${pg.price}</p>
        <button onclick="view('${pg.name}')">View Details</button>
      </div>
    `;
  });
});

function view(name){
  localStorage.setItem("pg", name);
  window.location.href="details.html";
}
