document.addEventListener('DOMContentLoaded', () => {
    const heartButton = document.getElementById('heartButton');
    const heartAudio = document.getElementById('heart-audio');
    const heartEyes = document.getElementById('heartEyes');
    const eye1_1 = document.getElementById('eye1_1');
    const eye1_2 = document.getElementById('eye1_2');
    const heartEyeArray = document.querySelectorAll('.sillylove .eye');

    // Başlangıçta gözler gizli
    heartEyes.style.display = 'none';

    // Kalp butonuna tıklayınca müzik çalacak ve gözler görünecek
    heartButton.addEventListener('click', () => {
        heartButton.style.display = 'none';  // Butonu gizle
        heartEyes.style.display = 'flex';   // Kalp gözlerini göster
        heartAudio.play().catch((error) => {
            console.log("Müzik çalma hatası: ", error);
        });

        // Gözlerin animasyonlarını başlat
        heartEyeArray.forEach(heartEye => {
            heartEye.classList.add('heartbeat'); // Animasyonu başlat
        });

        // Gözleri gizlemek
        eye1_1.classList.add('hide');
        eye1_2.classList.add('hide');
    });

    // Müzik bittiğinde, butonu geri getir ve gözleri geri göster
    heartAudio.addEventListener('ended', () => {
        heartAudio.currentTime = 0;  // Müziği başa sarıyoruz
        heartButton.style.display = 'block';  // Butonu tekrar göster
        heartEyes.style.display = 'none';  // Kalp gözlerini gizle

        // Gözlerin animasyonunu durdur
        heartEyeArray.forEach(heartEye => {
            heartEye.classList.remove('heartbeat'); // Animasyonu durdur
        });

        // Gözleri geri getirmek
        eye1_1.classList.remove('hide');
        eye1_2.classList.remove('hide');
    });

    // Mouse hareketi ile gözlerin hareket etmesi
    document.addEventListener('mousemove', (event) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;

        // Hareket alanları
        const moveRangeX = 15;
        const moveRangeY = 4;

        const moveX = (deltaX / centerX) * moveRangeX;
        const moveY = (deltaY / centerY) * moveRangeY;

        // Kalp gözlerinin konumlarını eski gözlerin hareketine göre güncelle
        heartEyeArray.forEach((heartEye, index) => {
            // Sol gözler
            if (index < 2) {
                heartEye.style.transform = `translate(${moveX - 5}px, ${moveY}px)`;
            } 
            // Sağ gözler
            else {
                heartEye.style.transform = `translate(${(-moveX + 5) * 0.5}px, ${-moveY}px)`;
            }
        });
    });
});
