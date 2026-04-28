// JavaScript for Hover Animations
document.querySelectorAll('.skill-bar').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#80e0a7';  // Change to a lighter color on hover
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#4CAF50';  // Reset to original color when hover ends
    });
});

// JavaScript for View Mode Toggle
document.getElementById('viewModeBtn').addEventListener('click', function () {
    document.body.classList.toggle('mobile-view');  // Toggle the mobile-view class to switch between portrait and mobile
});