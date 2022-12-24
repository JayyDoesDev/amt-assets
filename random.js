function random() {
    const images = document.querySelector("img")
    let dir = ["assets/animated-blue-star25.gif", "assets/animated-gold-star25.gif"]
    return dir[Math.floor(Math.random() * dir.length)];
}

images.src = random();