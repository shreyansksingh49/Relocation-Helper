// ================= HOME → RESULTS =================
function goToResults() {
    let hometown = document.getElementById("hometown").value;

    // Save user input
    localStorage.setItem("hometown", hometown);

    // Redirect
    window.location.href = "results.html";
}


// ================= RESULTS PAGE =================
window.onload = function () {

    let hometown = localStorage.getItem("hometown");

    // Match text (only if element exists)
    if (document.getElementById("match")) {
        if (hometown && hometown.toLowerCase() === "kanpur") {
            document.getElementById("match").innerText =
                "✅ People from your area live here (High Match)";
        } else {
            document.getElementById("match").innerText =
                "⚠️ Medium Match";
        }
    }

    // ================= DETAILS PAGE =================
    let selectedPG = localStorage.getItem("pg");

    if (selectedPG === "sunrise") {
        document.getElementById("pgName").innerText = "🏠 Sunrise PG";
        document.getElementById("location").innerText = "📍 Gomti Nagar";
        document.getElementById("price").innerText = "₹7500/month";
        document.getElementById("pgInfo").innerText =
            "Single/Double rooms, WiFi available, Food included";

        document.getElementById("community").innerText =
            "4 residents from UP, 1 from Kanpur";

        document.getElementById("facilitiesList").innerHTML = `
            <li>✔ WiFi</li>
            <li>✔ Food Available</li>
            <li>✔ Laundry</li>
            <li>✔ CCTV Security</li>
        `;
    }

    if (selectedPG === "green") {
        document.getElementById("pgName").innerText = "🏠 Green Nest PG";
        document.getElementById("location").innerText = "📍 Gomti Nagar";
        document.getElementById("price").innerText = "₹6500/month";
        document.getElementById("pgInfo").innerText =
            "Affordable rooms, WiFi available, No food";

        document.getElementById("community").innerText =
            "Residents from Bihar";

        document.getElementById("facilitiesList").innerHTML = `
            <li>✔ WiFi</li>
            <li>✔ Parking</li>
            <li>✔ Security</li>
        `;
    }
     if (selectedPG === "Gamma PG") {
        document.getElementById("pgName").innerText = "🏠 Gamma PG";
        document.getElementById("location").innerText = "📍 Indira Nagar";
        document.getElementById("price").innerText = "₹8000/month";
        document.getElementById("pgInfo").innerText =
            "Affordable rooms, WiFi available, food available";

        document.getElementById("community").innerText =
            "Residents from Bihar";

        document.getElementById("facilitiesList").innerHTML = `
            <li>✔ WiFi</li>
            <li>✔ GYM</li>
            <li>✔ Parking</li>
            <li>✔ Security</li>
        `;
    }
    if (selectedPG === "Pride PG") {
        document.getElementById("pgName").innerText = "🏠 Pride PG";
        document.getElementById("location").innerText = "📍 Matiyari";
        document.getElementById("price").innerText = "₹5500/month";
        document.getElementById("pgInfo").innerText =
            "Affordable rooms, WiFi available, food available";

        document.getElementById("community").innerText =
            "Residents from Noida";

        document.getElementById("facilitiesList").innerHTML = `
            <li>✔ WiFi</li>
            <li>✔ Food</li>
            <li>✔ Security</li>
        `;
    }
     if (selectedPG === "Planex PG") {
        document.getElementById("pgName").innerText = "🏠 Planex PG";
        document.getElementById("location").innerText = "📍 Golf City";
        document.getElementById("price").innerText = "9000/month";
        document.getElementById("pgInfo").innerText =
            "Affordable rooms, WiFi available, food available";

        document.getElementById("community").innerText =
            "Residents from Bengaluru";

        document.getElementById("facilitiesList").innerHTML = `
             <li>✔ WiFi</li>
            <li>✔ GYM</li>
            <li>✔ Parking</li>
            <li>✔ Security</li>
        `;
    }
};


// ================= RESULTS → DETAILS =================
function viewDetails(pgName) {
    localStorage.setItem("pg", pgName);
    window.location.href = "details.html";
}


// ================= BACK BUTTON =================
function goBack() {
    window.location.href = "results.html";
}
