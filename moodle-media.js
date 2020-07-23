let els = document.querySelectorAll('a');
for (let i = els.length; i--;) {
    if (els[i].href.includes(".mp3")) {
        let sound = document.createElement('audio');
        sound.controls = 'controls';
        sound.src = els[i].href;
        sound.type = 'audio/mpeg';
        els[i].parentElement.appendChild(sound);
    } else if (els[i].href.includes(".mp4")) {
        let video = document.createElement('video');
        video.controls = 'controls';
        video.src = els[i].href;
        video.type = 'video/mp4';
        video.style = 'height:150px';
        els[i].parentElement.appendChild(video);
    }
}