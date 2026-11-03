/* =========================================================================
   CONFIGURATION SECTION
   Edit the values below to match your actual contact details.
   Leave a value blank (like "") if you do not want to use that method.
========================================================================= */
const ownerInfo = {
    facebookName: "Azy-ner Ambat",
    facebookURL: "https://www.facebook.com/azy.ambat", // Must include https://
    phoneNumber: "0926 071 2571", // Include country code if helpful
    email: "azynerambat812@gmail.com"
};
/* ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // 1. Setup Facebook
    const fbNameDisplay = document.getElementById('fb-name-display');
    const btnFacebook = document.getElementById('btn-facebook');
    
    if (ownerInfo.facebookName && ownerInfo.facebookURL && !ownerInfo.facebookURL.includes('[YOUR_PROFILE]')) {
        fbNameDisplay.textContent = ownerInfo.facebookName;
        btnFacebook.addEventListener('click', () => {
            window.open(ownerInfo.facebookURL, '_blank', 'noopener,noreferrer');
        });
    } else {
        fbNameDisplay.textContent = "Not yet available";
        btnFacebook.disabled = true;
        btnFacebook.textContent = "Unavailable";
    }

    // 2. Setup Phone Number
    const phoneDisplay = document.getElementById('phone-display');
    const btnCall = document.getElementById('btn-call');
    const btnCopyPhone = document.getElementById('btn-copy-phone');

    if (ownerInfo.phoneNumber && !ownerInfo.phoneNumber.includes('234 567')) {
        phoneDisplay.textContent = ownerInfo.phoneNumber;
        
        // Call button
        btnCall.addEventListener('click', () => {
            window.location.href = `tel:${ownerInfo.phoneNumber.replace(/\s+/g, '')}`;
        });

        // Copy button
        btnCopyPhone.addEventListener('click', () => {
            navigator.clipboard.writeText(ownerInfo.phoneNumber).then(() => {
                showToast();
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    } else {
        phoneDisplay.textContent = "Not yet available";
        btnCall.disabled = true;
        btnCopyPhone.disabled = true;
        btnCall.textContent = "Unavailable";
    }

    // 3. Setup Email
    const emailDisplay = document.getElementById('email-display');
    const btnEmail = document.getElementById('btn-email');

    if (ownerInfo.email && !ownerInfo.email.includes('example.com')) {
        emailDisplay.textContent = ownerInfo.email;
        btnEmail.addEventListener('click', () => {
            window.location.href = `mailto:${ownerInfo.email}`;
        });
    } else {
        emailDisplay.textContent = "Not yet available";
        btnEmail.disabled = true;
        btnEmail.textContent = "Unavailable";
    }
});

// Toast notification logic
function showToast() {
    const toast = document.getElementById("toast");
    toast.className = "toast show";
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}