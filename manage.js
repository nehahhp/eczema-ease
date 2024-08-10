document.addEventListener('DOMContentLoaded', function() {
    const careForm = document.getElementById('careForm');
    const careTableBody = document.querySelector('#careTable tbody');

    if (careForm) {
        careForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Extract values from the form
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const skincare = document.getElementById('skincare').value;
            const medicine = document.getElementById('medicine').value;
            const lifestyle = document.getElementById('lifestyle').value;
            const externalFactors = document.getElementById('externalFactors').value;
            const diet = document.getElementById('diet').value;
            const homeTech = document.getElementById('homeTech').value;

            // Create a new table row with the submitted data
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${date}</td>
                <td>${time}</td>
                <td>${skincare}</td>
                <td>${medicine}</td>
                <td>${lifestyle}</td>
                <td>${externalFactors}</td>
                <td>${diet}</td>
                <td>${homeTech}</td>
            `;

            // Append the new row to the table
            careTableBody.appendChild(newRow);

            // Reset the form fields
            careForm.reset();
        });
    }
});
