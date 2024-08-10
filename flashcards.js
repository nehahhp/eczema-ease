document.addEventListener('DOMContentLoaded', function() {
    const flashcards = {
        overview: [
            {
                question: 'What is eczema?',
                answer: 'Eczema is a chronic skin condition characterized by inflammation, redness, and itching. Common types include atopic dermatitis, contact dermatitis, and dyshidrotic eczema. It can be triggered by various factors, including allergens, irritants, and stress. Symptoms can vary in severity and may flare up periodically.'
            }
        ],
        management: [
            {
                question: 'How can you manage eczema?',
                answer: 'Management includes skincare routines, avoiding triggers, and following prescribed treatments.'
            }
        ],
        skincareRoutine: [
            {
                question: 'What is the daily skincare routine for eczema?',
                answer: 'Follow these steps for a gentle and effective skincare routine tailored for eczema-prone skin: Use mild, fragrance-free cleansers to avoid irritation. Moisturize the skin immediately after bathing to lock in moisture. Apply a thick moisturizer or emollient at least twice a day. Avoid hot showers and opt for lukewarm water instead. Pat the skin dry gently with a soft towel; do not rub.'
            }
        ],
        triggersAvoidance: [
            {
                question: 'How can you avoid eczema triggers?',
                answer: 'Avoid common triggers such as harsh soaps, detergents, certain foods, and environmental allergens. Keep a diary to track potential triggers and patterns in flare-ups. Wear breathable, cotton clothing to reduce skin irritation. Use hypoallergenic bedding and avoid exposure to dust mites and pet dander. Stay away from known allergens and irritants, such as pollen and smoke.'
            }
        ],
        medicalTreatments: [
            {
                question: 'What are the medical treatments for eczema?',
                answer: 'Consult a healthcare provider for personalized treatment plans, which may include topical steroids, immunomodulators, antihistamines, and biologics. Follow the prescribed treatment regimen consistently for the best results. Discuss the use of over-the-counter medications with your doctor. Be aware of potential side effects of prescribed medications. Consider light therapy (phototherapy) if recommended by your healthcare provider.'
            }
        ],
        lifestyleAdjustments: [
            {
                question: 'What lifestyle adjustments can help manage eczema?',
                answer: 'Manage stress through relaxation techniques such as yoga, meditation, and deep breathing exercises. Incorporate regular physical activity into your routine. Maintain a healthy diet rich in anti-inflammatory foods such as fruits, vegetables, and omega-3 fatty acids. Stay hydrated by drinking plenty of water throughout the day. Ensure you get adequate sleep to support overall health and skin recovery.'
            }
        ],
        supportEducation: [
            {
                question: 'How can support and education help with eczema management?',
                answer: 'Join support groups and connect with others who have eczema for shared experiences and tips. Stay informed about the latest research and treatment options through reputable sources like the National Eczema Association. Educate family and friends about eczema to gain their support and understanding. Keep up with new developments and clinical trials that may offer new treatment possibilities.'
            }
        ]
    };

    const renderFlashcards = (category, containerId) => {
        const container = document.getElementById(containerId);
        category.forEach(card => {
            const flashcard = document.createElement('div');
            flashcard.classList.add('flashcard');

            const flashcardInner = document.createElement('div');
            flashcardInner.classList.add('flashcard-inner');

            const flashcardFront = document.createElement('div');
            flashcardFront.classList.add('flashcard-front');
            flashcardFront.innerHTML = `<p>${card.question}</p>`;

            const flashcardBack = document.createElement('div');
            flashcardBack.classList.add('flashcard-back');
            flashcardBack.innerHTML = `<p>${card.answer}</p>`;

            flashcardInner.appendChild(flashcardFront);
            flashcardInner.appendChild(flashcardBack);
            flashcard.appendChild(flashcardInner);
            container.appendChild(flashcard);
        });
    };

    renderFlashcards(flashcards.overview, 'overview');
    renderFlashcards(flashcards.management, 'management');
    renderFlashcards(flashcards.skincareRoutine, 'skincare-routine');
    renderFlashcards(flashcards.triggersAvoidance, 'triggers-avoidance');
    renderFlashcards(flashcards.medicalTreatments, 'medical-treatments');
    renderFlashcards(flashcards.lifestyleAdjustments, 'lifestyle-adjustments');
    renderFlashcards(flashcards.supportEducation, 'support-education');
});
