
// AUTO SELECT TYPE FROM CARD CLICK
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");

    if (type) {
        document.getElementById("style").value = type;
    }
};

function recommend() {
    let style = document.getElementById("style").value;
    let budget = document.getElementById("budget").value;

    let resultHTML = "";

    if (style === "power") {
        resultHTML = `
        <div class="result-card">
            <h3>Power Racket</h3>
            <p>Best for smashes</p>
        </div>`;
    }

    else if (style === "speed") {
        resultHTML = `
        <div class="result-card">
            <h3>Speed Racket</h3>
            <p>Best for fast gameplay</p>
        </div>`;
    }

    else {
        resultHTML = `
        <div class="result-card">
            <h3>Balanced Racket</h3>
            <p>Best for all-round play</p>
        </div>`;
    }

    if (budget === "low") {
        resultHTML += `<p>💰 Beginner level</p>`;
    } 
    else if (budget === "mid") {
        resultHTML += `<p>💰 Intermediate level</p>`;
    } 
    else {
        resultHTML += `<p>💰 Professional level</p>`;
    }

    document.getElementById("result").innerHTML = resultHTML;
}