// script.js
function submitForm() {
    // Validation logic here
    // You can add more specific validation for each field if needed

    // Gather the input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const country = document.getElementById('country').value;
    const gender = document.getElementById('male').checked ? 'Male' : (document.getElementById('female').checked ? 'Female' : '');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Display the gathered information in the popup
    const popupContent = document.getElementById('popupContent');
    popupContent.innerHTML = `
        <p><b>First Name:</b> ${firstName}</p>
        <p><b>Last Name:</b> ${lastName}</p>
        <p><b>Date of Birth:</b> ${dateOfBirth}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Gender:</b> ${gender}</p>
        <p><b>Profession:</b> ${profession}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile Number:</b> ${mobile}</p>
    `;

    document.getElementById('popup').style.display = 'block';

    resetForm();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}
