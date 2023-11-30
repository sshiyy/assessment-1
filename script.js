// for log in, sign up, and contact modals
let activeModal = null;

function openModal(modalId, event) {
    if (activeModal) {
        // If there's an active modal, prevent opening another one
        return;
    }

    document.getElementById(modalId).style.display = 'flex';
    activeModal = modalId;
    
    event.preventDefault(); // Prevent the default behavior (scrolling to the top)
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    activeModal = null;
}

function login() {
    closeModal('loginModal');
}

function signup() {
    closeModal('signupModal');
}

// Add similar functions for other modals
function openContactModal(event) {
    openModal('contactModal', event);
}

function openFaqsModal(event) {
    openModal('faqsModal', event);
}

function openReturnsModal(event) {
    openModal('returnsModal', event);
}


