document.addEventListener('DOMContentLoaded', function () {
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomFontFamily() {
        const fontFamilies = ['Arial, sans-serif', 'Verdana, sans-serif', 'Courier New, monospace', 'Georgia, serif', 'Times New Roman, serif'];
        return fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    }
    function getRandomFontSize() {
        return Math.floor(Math.random() * 20) + 14 + 'px'; // Taille de police aléatoire entre 14px et 34px
    }

    const cvnoirAudio = document.getElementById('cvnoirAudio');
    cvnoirAudio.play();

    document.documentElement.style.setProperty('--header-bg-color', getRandomColor());
    document.documentElement.style.setProperty('--header-text-color', getRandomColor());
    document.documentElement.style.setProperty('--input-bg-color1', getRandomColor());
    document.documentElement.style.setProperty('--input-bg-color2', getRandomColor());
    document.documentElement.style.setProperty('--input-bg-color3', getRandomColor());
    document.documentElement.style.setProperty('--input-bg-color4', getRandomColor());
    document.documentElement.style.setProperty('--img-bg-color', getRandomColor());
    document.documentElement.style.setProperty('--body-bg-color', getRandomColor());
    document.documentElement.style.setProperty('--font-family', getRandomFontFamily());
    document.documentElement.style.setProperty('--font-size', getRandomFontSize());


const components = [
    document.getElementById('title1'),
    document.getElementById('title2'),
    document.getElementById('title3'),
    document.getElementById('cell1'),
    document.getElementById('cell2'),
    document.getElementById('cell3'),
    document.getElementById('image1'),
    document.getElementById('image2'),
    document.getElementById('image3'),
    document.getElementById('text1'),
    document.getElementById('text2'),
    document.getElementById('text3')
];

// Mélanger les composants
for (let i = components.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [components[i], components[j]] = [components[j], components[i]];
}

// Réorganiser les composants dans le document
const container = document.body;
components.forEach(component => {
    container.appendChild(component);
});

let timer;  // Variable pour stocker le minuteur

function startTimer() {
    timer = setInterval(function () {
        // Cacher tout sauf le lampadaire
        document.body.style.overflow = 'hidden';  // Empêcher le défilement de la page
        document.getElementById('header').style.display = 'none';
        document.getElementById('myTable').style.display = 'none';
        document.getElementById('lampadaire').style.zIndex = '2';  // Faire en sorte que le lampadaire soit au-dessus de l'overlay
        document.getElementById('overlay').style.display = 'block';
    }, 2000);
}

// Démarrer le minuteur au chargement de la page
startTimer();

document.getElementById('lampadaire').addEventListener('click', function () {
    // Réinitialiser le minuteur
    clearInterval(timer);
    // Réafficher tout
    document.body.style.overflow = '';  // Rétablir le défilement de la page
    document.getElementById('header').style.display = 'block';
    document.getElementById('myTable').style.display = 'table';
    document.getElementById('lampadaire').style.zIndex = '2';  // Rétablir le z-index du lampadaire
    document.getElementById('overlay').style.display = 'none';
    // Redémarrer le minuteur après le clic
    startTimer();
});

            document.getElementById('applyAvatar').addEventListener('click', function () {
                const selectedAvatar = document.getElementById('avatarList').value;
                document.getElementById('avatar').src = selectedAvatar;

                document.getElementById('avatarSelector').style.display = 'none';
                document.body.style.overflow = '';
                document.getElementById('myTable').style.display = 'table';
                document.getElementById('header').style.display = 'flex';
                document.getElementById('lampadaire').style.zIndex = '2';
                document.getElementById('avatar').style.zIndex = '2';
                document.getElementById('overlay').style.display = 'none';
                startTimer();
            });     

});