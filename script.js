// for log in, sign up,contact,returns and FAQs modals
let activeModal = null;   // to keep track of active modals

function openModal(modalId, event) {
    if (activeModal) {
        return;  // prevent another modal from opening when one is active
    }

    document.getElementById(modalId).style.display = 'flex';   // sets it to flex so now the modal can be viewed
    activeModal = modalId;   // updates the activemodal, so now its not null
    event.preventDefault(); // Prevent the default behaviour which is scrolling to the top from happening
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';  // sets it to none so now the modal cant be seen 
    activeModal = null;  // updates the modal, no now it is back to null
}

function login() {
    closeModal('loginModal');  // to close the login modal
}

function signup() {
    closeModal('signupModal');  // to close the signup modal
}

function openContactModal(event) {  // to open the contact modal
    openModal('contactModal', event);
}

function openFaqsModal(event) {   // to open the FAQs modal
    openModal('faqsModal', event);
}

function openReturnsModal(event) {  // to open the returns modal
    openModal('returnsModal', event);
}

