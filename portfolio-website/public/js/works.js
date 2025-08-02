// Load data and set event listeners on cards
fetch('../data/works.json')
    .then(response => response.json())
    .then(data => {
        const cardContainer = document.getElementById('cardContainer');
        const cardTemplate = document.getElementById('cardTemplate');

        data.forEach(work => {
            const clone = cardTemplate.content.cloneNode(true);
            const card = clone.querySelector('.card');
            const modal = document.getElementById('workModal');

            // Fill in the card details
            card.querySelector('.thumbnail').src = work.thumbnail;
            card.querySelector('.card-title').textContent = work.title;
            card.querySelector('.card-description').textContent = work.description;
            
            // Add click event to open modal
            card.addEventListener('click', () => onModalOpen(work));

            // Append the cloned card to the container
            cardContainer.appendChild(clone);
        }); 
    })
    .catch(error => console.error('Error loading works:', error));


// Modal logic
function onModalOpen(work) {
    // Show the modal
    const modal = document.getElementById('workModal');
    modal.classList.remove('hidden');

    // Set the header modal content
    document.querySelector('.header h1').textContent = work.title;
    document.querySelector('.header p').textContent = work.description;

    // Embed the video
    document.querySelector('.modal-video').src = work.video;

    // Set the software info
    const softwareList = modal.querySelector('.modal-software-info ul');
    softwareList.innerHTML = `
        <li><h3>Made with: </h3></li>
        ${work.software.map(s => `
        <li>
            <a href="#" aria-label="${s.name}">
            <img src="${s.icon}" alt="${s.name} Icon"/>
            </a>
        </li>
        `).join('')}
    `;
    
    // Project details
    modal.querySelector('.modal-details').textContent = work.details;

    // Gallery images
    const galleryContainer = modal.querySelector('.modal-gallery');
    galleryContainer.innerHTML = work.gallery.map(image => `
        <img src="${image}" alt="Gallery Image"/>
    `).join('');
}

// Ensure DOM is loaded before attaching modal close event listener
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('workModal');
    const closeBtn = document.getElementById('closeModal');
    if (modal && closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            // Reset the video source to stop playback
            document.querySelector('.modal-video').src = '';
        });
    }
});
