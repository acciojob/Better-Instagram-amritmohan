//your code here

const images = document.querySelectorAll('.image');
let draggedElement = null;

// Drag start event
images.forEach(image => {
    image.addEventListener('dragstart', (e) => {
        draggedElement = image;
        setTimeout(() => image.style.opacity = '0.5', 50);
    });

    image.addEventListener('dragend', () => {
        setTimeout(() => draggedElement.style.opacity = '1', 50);
        draggedElement = null;
    });

    image.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    image.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedElement && draggedElement !== image) {
            // Swap background images
            let temp = image.style.backgroundImage;
            image.style.backgroundImage = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = temp;
        }
    });
});
