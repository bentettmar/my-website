const continueReading = document.getElementById('continue-reading');
const continueReadingBtn = document.getElementById('continue-reading-btn');

const continueReading2 = document.getElementById('continue-reading2');
const continueReadingBtn2 = document.getElementById('continue-reading-btn2');

function continueAboutMe() {
    continueReadingBtn.style.display = 'none';
    continueReading.style.display = 'block';
}

function hideAboutMe() {
    continueReadingBtn.style.display = 'block';
    continueReading.style.display = 'none';
}

function continueHireMe() {
    continueReadingBtn2.style.display = 'none';
    continueReading2.style.display = 'block';
}

function hideHireMe() {
    continueReadingBtn2.style.display = 'block';
    continueReading2.style.display = 'none';
}