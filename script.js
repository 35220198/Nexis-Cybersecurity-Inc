function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const mobileToggle = document.getElementById('mobileToggle');
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('open');
}

function filterSolutions(category, btn) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cards = document.querySelectorAll('.solution-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function openModal(title, stage, imgSrc, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalStage').innerText = stage;
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalDesc').innerText = description;
    
    const modal = document.getElementById('solutionModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('solutionModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

function handleContact(event) {
    event.preventDefault();
    alert('Emergency inquiry submitted to Nexis SOC Command. An incident director has been dispatched.');
}
