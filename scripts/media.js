function changeMedia(source, type) {
    const mainMedia = document.getElementById('mainMedia');
    if (type === 'video') {
        mainMedia.outerHTML = `<video id="mainMedia" controls><source src="${source}" type="video/mp4"></video>`;
    } else {
        mainMedia.outerHTML = `<img id="mainMedia" src="${source}" alt="Preview">`;
    }
}