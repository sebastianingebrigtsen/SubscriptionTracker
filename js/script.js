document.getElementById('toggle-options').addEventListener('click', function () {
  const optionsSection = document.getElementById('options');
  const toggleIcon = document.getElementById('toggle-icon');
  const toggleText = document.getElementById('toggle-text');

  if (optionsSection.classList.contains('hidden')) {
    // Show the options smoothly
    optionsSection.classList.remove('hidden');
    optionsSection.classList.add('block');

    // Transition for height and opacity
    setTimeout(() => {
      optionsSection.style.maxHeight = optionsSection.scrollHeight + 'px';
      optionsSection.style.opacity = '1';
    }, 10); // Small delay for smooth opening

    // Rotate the icon to point up
    toggleIcon.classList.add('rotate-180');

    // Change button text
    toggleText.textContent = 'Less Options';
  } else {
    // Smoothly hide the options
    optionsSection.style.maxHeight = '0px';
    optionsSection.style.opacity = '0';

    // After transition is done, hide the content entirely
    setTimeout(() => {
      optionsSection.classList.add('hidden');
    }, 500); // Slightly longer delay for a slower closing effect

    // Rotate the icon to point down
    toggleIcon.classList.remove('rotate-180');

    // Change button text
    toggleText.textContent = 'More Options';
  }
});
