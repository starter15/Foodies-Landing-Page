document.addEventListener('DOMContentLoaded', () => {
    
    const navLinks = document.querySelector('.nav-links');

    

    document.getElementById('FeedbackForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        document.getElementById('FeedbackForm').reset();
    });
});
