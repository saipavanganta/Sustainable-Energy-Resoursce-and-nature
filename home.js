// scripts.js

function goToMainPage() {
    // Hide home section
    document.getElementById('home').style.display = 'none';
    // Show main section
    document.getElementById('main').style.display = 'block';
}

function showSection(sectionId) {
    // Hide all main sections
    document.getElementById('home-main').style.display = 'none';
    document.getElementById('geothermal-main').style.display = 'none';
    document.getElementById('wind-main').style.display = 'none';
    document.getElementById('tidal-main').style.display = 'none';

    // Show the selected main section
    document.getElementById(sectionId + '-main').style.display = 'block';
}

function showContent(contentType) {
    // Hide all main sections
    document.getElementById('home-main').style.display = 'none';
    document.getElementById('geothermal-main').style.display = 'geothermal-main';
    document.getElementById('wind-main').style.display = 'wind-main';
    document.getElementById('tidal-main').style.display = 'tidal-main';

    // Show the selected main section
    document.getElementById(contentType + '-main').style.display = 'block';
}
