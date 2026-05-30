// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form verilerini al
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validation
        if (name && email && subject && message) {
            // Başarılı mesaj
            alert('Teşekkürler! Mesajınız başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.');
            
            // Formu temizle
            contactForm.reset();
            
            // Konsola log
            console.log('Form gönderildi:', {
                name: name,
                email: email,
                subject: subject,
                message: message
            });
        } else {
            alert('Lütfen tüm alanları doldurunuz!');
        }
    });
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Navbar active link update on scroll
window.addEventListener('scroll', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Mevcut sayfayı aktif yap
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const activeLink = document.querySelector(`.nav-links a[href="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
});

console.log('KeremTuran.com Blog loaded successfully!');