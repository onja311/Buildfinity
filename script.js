document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            button.style.transform = "scale(1.1)";
            setTimeout(() => button.style.transform = "scale(1)", 200);
            alert(`Action activée: ${button.textContent}`);
        });

        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "#ff4500";
        });

        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "";
        });
    });
});