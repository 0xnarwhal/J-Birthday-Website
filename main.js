document.addEventListener('DOMContentLoaded', () => {
    const rotateText = document.getElementById('rotating-text');
    var rotatingTextSection = document.getElementById("rotating-text-section");

    const helloArray = [
        "Hello",
        "Hola",
        "Hallo",
        "你好",
        "Halo",
        "Bonjour",
        "Ciao",
        "こんにちは"
    ];

    const loveArray = [
        "My Love",
        "Amore Mio",
        "Meine Liebe",
        "Sayangku",
        "Mi Amor",
        "愛しい人",
        "Mon Amour",
        "我的爱人"
    ];

    const images = [
        "assets/img/r1.jpg",
        "assets/img/r2.jpg",
        "assets/img/r3.jpg",
        "assets/img/r4.jpg",
        "assets/img/r5.jpg",
        "assets/img/r6.jpg",
        "assets/img/r7.jpg"
    ]

    var i = 0;
    setInterval(function() {
        rotatingTextSection.style.backgroundImage = "url(" + images[i] + ")";
        i = i + 1;
        if (i == images.length) {
            i =  0;
        }
    }, 1500);

    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * helloArray.length);
        const randomIndex2 = Math.floor(Math.random() * helloArray.length);
        rotateText.textContent = helloArray[randomIndex] + ', ' + loveArray[randomIndex2]+ ' ♥';
    }, 2000)
});


