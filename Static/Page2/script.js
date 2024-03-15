document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('kyc-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Retrieve form data
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const accountNumber = document.getElementById('account-number').value;

        // Basic validation
        if (!validateName(name)) {
            alert('Name should contain only alphabets.');
            return;
        }

        // You can add more complex validation if needed

        // If all validations pass, you can proceed to further actions
        // For now, we'll just log the data to the console
        console.log('Name:', name);
        console.log('Date of Birth:', dob);
        console.log('Bank Account Number:', accountNumber);

        // Here you can send the form data to a server for further verification
    });

    // Function to validate name (only alphabets)
    function validateName(name) {
        const regex = /^[A-Za-z ]+$/;
        return regex.test(name);
    }
});
