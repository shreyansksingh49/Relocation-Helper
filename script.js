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
            "Rent: ₹6500 | WiFi: Yes | Food: yes";
        document.getElementById("community").innerText =
            "Residents from Bihar";
    }
     if (selectedPG === "green") {
        document.getElementById("pgName").innerText = "Gamma PG";
        document.getElementById("pgInfo").innerText =
            "Rent: ₹8000 | WiFi: Yes | Food: yes";
        document.getElementById("community").innerText =
            "Residents from Chandigarh";
    }
     if (selectedPG === "green") {
        document.getElementById("pgName").innerText = "Pride PG";
        document.getElementById("pgInfo").innerText =
            "Rent: ₹5500 | WiFi: Yes | Food: No";
        document.getElementById("community").innerText =
            "Residents from Sultanpur";
    }
     if (selectedPG === "green") {
        document.getElementById("pgName").innerText = "Planex PG";
        document.getElementById("pgInfo").innerText =
            "Rent: ₹9000 | WiFi: Yes | Food: Yes| GYM : Yes";
        document.getElementById("community").innerText =
            "Residents from Noida";
    }
     if (selectedPG === "green") {
        document.getElementById("pgName").innerText = "Tagore Boys PG";
        document.getElementById("pgInfo").innerText =
            "Rent: ₹4000 | WiFi: No | Food: No";
        document.getElementById("community").innerText =
            "Residents from Kolkata";
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
