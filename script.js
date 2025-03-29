document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("askButton").addEventListener("click", async function() {
        let question = document.getElementById("userInput").value;
        let response = await fetch("http://localhost:3000/get-advice", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: question })
        });
        let data = await response.json();
        document.getElementById("output").innerText = data.answer;
    });
});