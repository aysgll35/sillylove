document.addEventListener('DOMContentLoaded', () => {
    const heartButton = document.getElementById('heartButton');
    const heartAudio = document.getElementById('heart-audio');
    const heartEyes = document.getElementById('heartEyes'); 
    const heartEyeArray = document.querySelectorAll('.heart-eye'); 


    const eye1_1 = document.getElementById('eye1_1');
    const eye1_2 = document.getElementById('eye1_2');
    const eye2_1 = document.getElementById('eye2_1');
    const eye2_2 = document.getElementById('eye2_2');


    heartButton.addEventListener('click', () => {
        heartButton.style.display = 'none';  
        heartEyes.style.display = 'flex';   
        heartAudio.play().catch((error) => {
            console.log("Müzik çalma hatası: ", error);
        });
    });

   
    heartAudio.addEventListener('ended', () => {
        heartAudio.currentTime = 0; 
        heartButton.style.display = 'block';  
        heartEyes.style.display = 'none';  
    });


    document.addEventListener('mousemove', (event) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;

        const moveRangeX = 15;
        const moveRangeY = 4;

        const moveX = (deltaX / centerX) * moveRangeX;
        const moveY = (deltaY / centerY) * moveRangeY;

        eye1_1.style.transform = `translate(${moveX - 2}px, ${moveY + 1}px)`;
        eye1_2.style.transform = `translate(${moveX - 2}px, ${moveY + 1}px)`;



        const reducedX = (-moveX + 5) * 0.5; 
        const reducedY = -moveY;

        eye2_1.style.transform = `translate(${reducedX}px, ${reducedY}px)`;
        eye2_2.style.transform = `translate(${reducedX}px, ${reducedY}px)`;

        
        heartEyeArray.forEach((heartEye, index) => {
          
            if (index < 2) {
                heartEye.style.transform = `translate(${moveX - 5}px, ${moveY}px)`;
            } else {
                heartEye.style.transform = `translate(${reducedX}px, ${reducedY}px)`;
            }
        });
    });
});
