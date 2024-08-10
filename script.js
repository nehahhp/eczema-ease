document.addEventListener('DOMContentLoaded', () => {
    const columnContainers = document.querySelectorAll('.column .items');
    const categoryButtons = document.querySelectorAll('.category-btn');

    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            loadItems(category);
        });
    });

    function loadItems(category) {
        // Define items for each category
        const items = {
            Cream: ['Cera Ve', 'Aveeno', 'Eucerin'],
            Soap: ['Dove', 'Cetaphil', 'Neutrogena'],
            Medicine: ['Hydrocortisone', 'Benzocaine', 'Calamine'],
            OTCShots: ['Cortisone Shot', 'Kenalog Shot'],
            ExternalFactors: ['Cedar Pollen', 'Oak Pollen', 'Dust Mites', 'Pet Dander', 'Mold Spores'],
            Homeopathy: ['Sulphur', 'Graphites', 'Rhus Tox', 'Mezereum', 'Arsenicum Album'], // Added category
            DietaryChanges: ['Gluten-Free', 'Dairy-Free', 'Sugar-Free', 'Anti-Inflammatory Foods', 'Omega-3 Supplements'], // Added category
            LifestyleChanges: ['Stress Management', 'Regular Exercise', 'Sleep Hygiene', 'Hydration', 'Skincare Routine'], // Added category
            EnvironmentalFactors: ['Humidifier', 'Air Purifier', 'Dust-Free Environment', 'Hypoallergenic Bedding'], // Added category
            PrescriptionMedications: ['Tacrolimus', 'Pimecrolimus', 'Cyclosporine', 'Methotrexate', 'Dupilumab'], // Added category
            TopicalTreatments: ['Steroid Creams', 'Non-Steroidal Creams', 'Moisturizers', 'Barrier Creams', 'Ointments'] // Added category
        };

        const itemPool = document.getElementById('itemPool');
        itemPool.innerHTML = ''; // Clear previous items
        (items[category] || []).forEach(item => {
            const div = document.createElement('div');
            div.textContent = item;
            div.setAttribute('draggable', 'true');
            div.setAttribute('id', item.replaceAll(' ', ''));
            div.setAttribute('class', 'item');
            itemPool.appendChild(div);
        });
        addDragListeners();
    }

    function addDragListeners() {
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            item.addEventListener('dragstart', e => {
                e.dataTransfer.setData('text/plain', e.target.id);
            });
        });

        // Select both the column containers and the item pool
        const containers = document.querySelectorAll('.column .items, #itemPool');

        containers.forEach(container => {
            container.addEventListener('dragover', e => {
                e.preventDefault(); // Necessary to allow dropping
            });

            container.addEventListener('drop', e => {
                e.preventDefault();
                const itemId = e.dataTransfer.getData('text/plain');
                const item = document.getElementById(itemId);
                if (!container.contains(item)) {
                    container.appendChild(item);
                }
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const symptomForm = document.getElementById('symptomForm');
    const symptomsTableBody = document.querySelector('#symptomsTable tbody');

    if (symptomForm) {
        symptomForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Extract values from the form
            const date = symptomForm.querySelector('#date').value;
            const time = symptomForm.querySelector('#time').value;
            const symptoms = symptomForm.querySelector('#symptoms').value;
            const severity = symptomForm.querySelector('#severity').value;

            // Log values to the console
            console.log(`Date: ${date}, Time: ${time}, Symptoms: ${symptoms}, Severity: ${severity}`);

            // Create a new table row with the submitted data
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${date}</td>
                <td>${time}</td>
                <td>${symptoms}</td>
                <td>${severity}</td>
            `;

            // Append the new row to the table
            symptomsTableBody.appendChild(newRow);

            // Reset the form fields
            symptomForm.reset();
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const photoInput = document.getElementById('photoInput');
    const processButton = document.getElementById('processButton');
    const uploadedPhoto = document.getElementById('uploadedPhoto');
    const resultText = document.getElementById('resultText');

    photoInput.addEventListener('change', function(event) {
        const photo = event.target.files[0];
        if (photo) {
            const reader = new FileReader();
            reader.onload = function(e) {
                uploadedPhoto.src = e.target.result;
                uploadedPhoto.style.display = 'block';
            };
            reader.readAsDataURL(photo);
        }
    });

    processButton.addEventListener('click', function() {
        const resultText = document.getElementById('resultText');
        const hasEczema = Math.random() > 0.5; // Random result for demonstration

        if (hasEczema) {
            resultText.textContent = 'Eczema Detected';
            resultText.style.color = 'red';
        } else {
            resultText.textContent = 'No Eczema Detected';
            resultText.style.color = 'green';
        }
    });
});


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

let map;
let service;
let infowindow;

function initMap() {
    const center = { lat: -33.8688, lng: 151.2195 };

    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 15,
    });

    const input = document.getElementById('search-input');
    const searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds());
    });

    let markers = [];

    searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }

            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            // Create a marker for each place.
            markers.push(
                new google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}

// Initialize the map
google.maps.event.addDomListener(window, 'load', initMap);

