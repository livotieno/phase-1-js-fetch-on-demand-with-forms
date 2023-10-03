const init = () => {
  
    const input = document.querySelector("#searchByID");
    const form = document.querySelector("form");
    const title = document.querySelector("h4");
    const summary = document.querySelector("p");

    form.addEventListener("submit", (e) => {

        e.preventDefault();
        const idToSearch = input.value;

        fetch(`http://localhost:3000/movies/${idToSearch}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            summary.textContent = data.summary;
            title.textContent = data.title;
        });
    });
};

document.addEventListener('DOMContentLoaded', init);