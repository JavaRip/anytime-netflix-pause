console.log('hello from anytimePause');
document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        const videoPlayer = document.querySelector('video');
        const timeRemaining = videoPlayer.duration - videoPlayer.currentTime;
        if (timeRemaining <= 10) {
            location.reload();
        }
    }
});