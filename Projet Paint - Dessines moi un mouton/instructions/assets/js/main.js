
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
function loadPalette(colors) {
    const headerDivs = document.querySelectorAll('header div');
    
    colors.forEach((color, index) => {
        if (headerDivs[index]) {
            headerDivs[index].style.backgroundColor = color;
        }
    });
}
}
 // le code de l'étape 1 se passe ici



window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

 document.querySelectorAll('header div').forEach(div => {
        div.addEventListener('click', selectColor);
    });
    // le code de l'étape 2 se passe ici
document.querySelector('main').addEventListener('click', function(event) {
        if (event.target.tagName === 'DIV') {
            const color = getSelectedColor();
            if (color) {
                event.target.style.backgroundColor = color;
            }
        }
    });
});
    // le code de l'étape 3 se passe ici


