let gifURL = "https://api.giphy.com/v1/gifs/random?q=ryan+gosling&api_key=9JUMywLontkrE7DyXlO2Ny5CxVmOm78o&limit=5";

document.addEventListener("DOMContentLoaded", Iniciar);

function Iniciar()
{
    console.log(gifURL);
    fetch(gifURL)
        .then((response) => {
        return response.json();
        })

        .then((data) => {
        //console.log(data);
        const lista = document.getElementById("gifRandom")
        let item = lista.querySelector(`#gif`);
        item.getElementsByTagName("img")[0].setAttribute("src", data.data.images.original.url);


        // pintarGib(data)
        })

        .catch((error) => {
        console.log(error);
        });
};