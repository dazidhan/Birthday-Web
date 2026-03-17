document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    
    // Memberikan interaksi sederhana pada menu hamburger
    menuBtn.addEventListener("click", () => {
        const bars = menuBtn.querySelectorAll(".bar");
        
        // Animasi toggle warna sebagai indikator klik
        bars.forEach(bar => {
            bar.style.backgroundColor = bar.style.backgroundColor === 'red' ? '' : 'red';
        });

        setTimeout(() => {
            bars.forEach(bar => {
                bar.style.backgroundColor = ''; // kembali ke warna asal
            });
        }, 300);
        
        console.log("Menu diklik!");
    });
});