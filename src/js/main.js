document.addEventListener('DOMContentLoaded', () => {
    // Navigation menu toggle
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.querySelector('nav .hidden.md\\:flex');

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
    });

    // Load page content based on current page
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('calendar.html')) {
        loadCalendarContent();
    } else if (currentPage.includes('about.html')) {
        loadAboutContent();
    } else {
        loadHomeContent();
    }
});

function loadHomeContent() {
    const mainContent = document.querySelector('section');
    if (!mainContent) return;

    const iframe = document.createElement('iframe');
    iframe.src = "https://docs.google.com/document/d/e/2PACX-1vTzq6r1VDj9Z8bPt46sA3V7zPvxSwRRjK1wBTm3jcw5o39Ux43oSXwwXBRcDAHEvZNKxjhRM8ciTwly/pub";
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    
    mainContent.appendChild(iframe);
}

function loadCalendarContent() {
    console.log('Loading calendar content...');
    const mainContent = document.querySelector('main');
    if (!mainContent) {
        console.error('Main content element not found');
        return;
    }
    console.log('Main content element found');

    const container = document.createElement('div');
    container.className = "overflow-hidden rounded-lg shadow-lg w-full h-[800px]";
    
    const iframe = document.createElement('iframe');
    iframe.src = "https://calendar.google.com/calendar/embed?src=ge3p207bq69rq3m8ufugntrpu8%40group.calendar.google.com&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1&height=800&wkst=1&bgcolor=%23ffffff&ctz=America%2FPhoenix";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";
    iframe.className = "w-full h-full";
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('scrolling', 'no');
    
    container.appendChild(iframe);
    mainContent.appendChild(container);
    console.log('Calendar iframe added to page');
}

function loadAboutContent() {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const content = `
        <div class="max-w-7xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-8 text-gray-900">About Us</h2>
            <p class="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">The Carl Hayden High School Marching Band is a dedicated group of musicians and performers who strive for excellence in everything they do.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div class="glass p-8 rounded-2xl hover-card">
                    <div class="h-16 w-16 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center hover-pulse">
                        <i class="fas fa-music text-3xl text-blue-700"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800">Our Mission</h3>
                    <p class="text-gray-700">To provide a safe and inclusive environment for all students to learn and grow as musicians and performers.</p>
                </div>

                <!-- Similar updates for other cards -->
            </div>
        </div>
    `;
    
    mainContent.innerHTML = content;
}

function updateNavLinks() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.add('nav-link');
    });
}

function updateButtons() {
    const buttons = document.querySelectorAll('a[href="#"], button');
    buttons.forEach(button => {
        button.classList.add('hover-button');
    });
}
