const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("dark_theme");

    const isdark = body.classList.contains("dark_theme");

    btn.innerHTML = isdark ?" <i class='ri-sun-line'></i> ":" <i class='ri-contrast-2-line'></i>";
});

