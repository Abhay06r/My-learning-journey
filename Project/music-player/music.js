const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
const trackTitle = document.getElementById('track-title');

const tracks = [
    { title: "Track 1", src: "track1.mp3" },
    { title: "Track 2", src: "track2.mp3" },
    { title: "Track 3", src: "track3.mp3" }
];

let currentTrackIndex = 0;

function loadTrack(index) {
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
    audio.load();
}

function playTrack() {
    audio.play();
    playButton.textContent = 'Pause';
}

function pauseTrack() {
    audio.pause();
    playButton.textContent = 'Play';
}

playButton.addEventListener('click', () => {
    if (audio.paused) {
        playTrack();
    } else {
        pauseTrack();
    }
});

prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

audio.addEventListener('timeupdate', () => {
    const progressValue = (audio.currentTime / audio.duration) * 100;
    progress.value = progressValue;
});

progress.addEventListener('input', () => {
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Load the first track
loadTrack(currentTrackIndex);