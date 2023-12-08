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





    const connexionButton = document.querySelector('.connexion input');
    const dohAudio = document.getElementById('dohAudio');
    const dohImage = document.getElementById('dohImage');
    const enterButton = document.querySelector('.entrer input');


    connexionButton.addEventListener('click', function () {
        // Ajustez la propriété margin-top pour initier l'animation
        connexionButton.style.marginTop = '80vh';
        dohAudio.play();
        dohImage.classList.remove('hidden');

        // Réinitialisez la valeur de margin-top après une courte période de temps (par exemple, 500ms)
        setTimeout(function () {
            connexionButton.style.marginTop = '10px';
            dohImage.classList.add('hidden') // Réinitialisez à la position initiale
        }, 500);
    });

    enterButton.addEventListener('click', function () {
        window.location.href = "accueil.html";
    });

});