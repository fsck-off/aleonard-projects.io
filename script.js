document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const localStorageKey = 'darkModeEnabled';

    // 1. Check for saved preference on page load
    const savedMode = localStorage.getItem(localStorageKey);
    if (savedMode === 'true') {
        body.classList.add('dark-mode');
    }

    // 2. Add event listener to the toggle button
    darkModeToggle.addEventListener('click', () => {
        // 3. Toggle the 'dark-mode' class on the body
        body.classList.toggle('dark-mode');

        // 4. Save the preference to local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem(localStorageKey, 'true');
        } else {
            localStorage.setItem(localStorageKey, 'false');
        }
    });
});