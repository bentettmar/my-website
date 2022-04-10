const continueReading = document.getElementById('continue-reading');
const continueReadingBtn = document.getElementById('continue-reading-btn');

function continueAboutMe() {
    continueReadingBtn.style.display = 'none';
    continueReading.style.display = 'block';
}

function hideAboutMe() {
    continueReadingBtn.style.display = 'block';
    continueReading.style.display = 'none';
}