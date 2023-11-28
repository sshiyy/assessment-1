// for log in and sign up pop up
let activeModal = null;

function openModal(modalId) {
    if (activeModal) {
        document.getElementById(activeModal).style.display = 'none';
    }
    document.getElementById(modalId).style.display = 'flex';
    activeModal = modalId;
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    activeModal = null;
}

function login() {
    // Implement your login logic here
    // For simplicity, let's just close the modal for now
    closeModal('loginModal');
}

function signup() {
    // Implement your signup logic here
    // For simplicity, let's just close the modal for now
    closeModal('signupModal');
}
