// HOME → RESULTS
function goToResults() {
    let hometown = document.getElementById("hometown").value;

    // Save data in browser
    localStorage.setItem("hometown", hometown);

    // Redirect
    window.location.href = "results.html";
}

// RESULTS PAGE LOAD
window.onload = function () {
    let hometown = localStorage.getItem("hometown");

    if (document.getElementById("match")) {
        if (hometown && hometown.toLowerCase() === "kanpur") {
            document.getElementById("match").innerText =
                "✅ People from your area live here (High Match)";
        } else {
            document.getElementById("match").innerText =
                "⚠️ Medium Match";
        }
    }

    // DETAILS PAGE DATA
    let selectedPG = localStorage.getItem("pg");

    if (selectedPG === "sunrise") {
        document.getElementById("pgName").innerText = "Sunrise PG";
        document.getElementById("pgInfo").innerText =
            "Rent: ₹7500 | WiFi: Yes | Food: Available";
        document.getElementById("community").innerText =
            "Residents from UP & Kanpur";
    }

    if (selectedPG === "green") {
        document.getElementById("pgName").innerText = "Green Nest PG";
        document.getElementById("pgInfo").innerText =
            "Rent: ₹6500 | WiFi: Yes | Food: No";
        document.getElementById("community").innerText =
            "Residents from Bihar";
    }
};

// RESULTS → DETAILS
function viewDetails(pgName) {
    localStorage.setItem("pg", pgName);
    window.location.href = "details.html";
}
function goBack() {
    window.location.href = "results.html";
}
function goBack() {
    window.location.href = "results.html";
}
fetch("https://hauora.onrender.com/pgs")
.then(res => res.json())
.then(data => {

    let container = document.querySelector(".pg-container");
    container.innerHTML = "";

    data.forEach(pg => {
        container.innerHTML += `
            <div class="pg-card">
                <h3>${pg.name}</h3>
                <p>📍 ${pg.location}</p>
                <p>₹${pg.price}</p>

                <button onclick='storePG(${JSON.stringify(pg)})'>
                    View Details
                </button>
            </div>
        `;
    });
});
function storePG(pg) {
    localStorage.setItem("pgData", JSON.stringify(pg));
    window.location.href = "details.html";
}