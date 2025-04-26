# Workflow

## Build UI

1.  **Set up project and integrate CDNs:**
    * Initialize project structure (e.g., using `npm init -y` if you plan to use a framework later, or simply create HTML, CSS, and JS files).
    * Include necessary CDNs in your `index.html` (e.g., for CSS frameworks like Bootstrap or Tailwind CSS, JavaScript libraries like jQuery if needed, or icon libraries like Font Awesome).
    * *(Consideration: Will you use a framework/library or vanilla JavaScript? This decision will impact your setup.)*

2.  **Push to GitHub:**
    * Initialize a Git repository (`git init`).
    * Create a `.gitignore` file to exclude unnecessary files (e.g., `node_modules`, `.DS_Store`).
    * Add initial files (`git add .`).
    * Commit your initial setup (`git commit -m "Initial project setup with CDNs"`).
    * Create a repository on GitHub.
    * Link your local repository to the remote repository (`git remote add origin <your_github_repository_url>`).
    * Push your code to GitHub (`git push -u origin main`).
    * *(Benefit: Version control and collaboration.)*

3.  **Set up background and page layout:**
    * Implement the basic HTML structure (`header`, `main`, `footer` or semantic equivalents).
    * Apply CSS for the overall page layout (e.g., using Flexbox or Grid).
    * Add background styles (colors, images, gradients).
    * Ensure responsiveness for different screen sizes (using media queries or a responsive framework).
    * *(Consideration: How will the layout adapt to different devices?)*

4.  **Create Phone Screen UI:**
    * **Background:** Implement the specific background for the phone screen area.
    * **Top part:** Design and code the elements in the top section (e.g., status bar with time, battery, icons).
    * **Slider (Unlock Mechanism):**
        * Structure the HTML for the slider element and its track/thumb.
        * Apply CSS to style the slider.
        * *(Functionality will be added later in the "Functionalities" section.)*
    * *(Consideration: How will the slider interaction feel natural on a touch device?)*

5.  **Create Apps Screen UI:**
    * Design the layout for the app icons (e.g., using a grid).
    * Create placeholders or actual icons for the apps.
    * Add any necessary labels or styling for the app icons.
    * *(Consideration: How will the app icons be arranged and how will they look?)*

6.  **Create Contact List Screen UI:**
    * **Search Bar:**
        * Implement the HTML `<input>` element for the search bar.
        * Add basic styling.
        * *(Consideration: Will you include a clear button or live search functionality?)*
    * **Filter:**
        * Design and implement UI elements for filtering contacts (e.g., dropdown menus, buttons for different groups).
        * Apply styling to the filter controls.
        * *(Consideration: What filtering options will be available?)*
    * **Accordion:**
        * Structure the HTML for the accordion (e.g., headers and collapsible content areas for contact groups or initial letters).
        * Apply CSS to style the accordion.
        * *(Functionality for toggling the accordion will be added later.)*
    * *(Consideration: How will the contact list be visually organized? Will you use virtual scrolling for large lists?)*

## Functionalities

1.  **Slide to unlock then go to app screen:**
    * Add JavaScript event listeners to the slider element (e.g., `touchstart`, `touchmove`, `touchend` or `mousedown`, `mousemove`, `mouseup`).
    * Implement logic to detect a swipe gesture.
    * Upon successful swipe, hide the lock screen UI and display the apps screen UI (using CSS `display` property or similar).
    * *(Consideration: How will you handle touch vs. mouse events? What visual feedback will the user get during the slide?)*

2.  **Click on contact app icon to open the contact list:**
    * Add a JavaScript event listener (`click`) to the contact app icon.
    * When clicked, hide the apps screen UI and display the contact list screen UI.
    * *(Consideration: Will there be any animation or transition when navigating between screens?)*

3.  **Show the spinner while fetching data from the API:**
    * Create the HTML and CSS for a loading spinner element (can be a simple CSS animation or an image).
    * In your JavaScript, before making the API call, display the spinner (e.g., by changing its CSS `display` property).
    * Once the API call is complete (regardless of success or failure), hide the spinner.
    * *(Consideration: How will the spinner be visually integrated into the UI?)*

4.  **Display contact list in the UI:**
    * Fetch data from the API using `fetch` or `XMLHttpRequest`.
    * Handle the API response (parse JSON).
    * Iterate through the received contact data.
    * Dynamically create HTML elements (e.g., `<div>`, `<li>`, `<span>`) for each contact.
    * Populate these elements with the contact information (name, phone number, etc.).
    * Append the created elements to the contact list container in your HTML.
    * *(Consideration: How will you handle potential errors during the API call? How will you structure the contact data in the UI?)*

5.  **Search the user:**
    * Add a JavaScript event listener (`input`) to the search bar.
    * Get the current value entered in the search bar.
    * Filter the displayed contact list based on the search term (e.g., by checking if the contact name or other relevant fields include the search term).
    * Update the UI to show only the matching contacts.
    * *(Consideration: Will the search be case-sensitive? Will you implement debouncing to avoid excessive filtering on every keystroke?)*

This augmented workflow provides more specific steps and considerations for each stage. Remember that this is still a high-level plan, and you'll likely encounter more detailed implementation challenges as you build. Good luck!