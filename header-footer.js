// Header HTML Template
const headerHTML = `<!-- Header -->
<header>
    <div class="header-container">
        <div class="logo-container">
            <a href="index.html">
                <img src="assets/logo.webp" alt="TopCap Construction Logo" class="logo">
            </a>
        </div>
        <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav id="nav">
            <div class="back-button" id="backButton" style="display: none;">← Back</div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li class="dropdown about-dropdown">
                    <a href="about/index.html" class="dropdown-toggle about-toggle">About</a>
                    <ul class="dropdown-menu">
                        <li><a href="about/index.html#our-team">Our Team</a></li>
                        <li><a href="about/testimonials.html">Testimonials</a></li>
                    </ul>
                </li>
                <li class="dropdown projects-dropdown">
                    <a href="projects/index.html" class="dropdown-toggle projects-toggle">Our Projects</a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item-with-submenu">
                            <a href="projects/index.html#current-projects">Current Projects</a>
                            <ul class="submenu">
                                <li><a href="currentprojects/1/index.html">Current Projects 1</a></li>
                                <li><a href="currentprojects/2/index.html">Current Projects 2</a></li>
                                <li><a href="currentprojects/3/index.html">Current Projects 3</a></li>
                                <li><a href="currentprojects/4/index.html">Current Projects 4</a></li>
                                <li><a href="currentprojects/5/index.html">Current Projects 5</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="projects/index.html#custom-homes">Custom Homes</a>
                            <ul class="submenu">
                                <li><a href="customhomes/1/index.html">Custom Homes 1</a></li>
                                <li><a href="customhomes/2/index.html">Custom Homes 2</a></li>
                                <li><a href="customhomes/3/index.html">Custom Homes 3</a></li>
                                <li><a href="customhomes/4/index.html">Custom Homes 4</a></li>
                                <li><a href="customhomes/5/index.html">Custom Homes 5</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="projects/index.html#multi-unit">Multi Unit</a>
                            <ul class="submenu">
                                <li><a href="multiunit/1/index.html">Multi Unit 1</a></li>
                                <li><a href="multiunit/2/index.html">Multi Unit 2</a></li>
                                <li><a href="multiunit/3/index.html">Multi Unit 3</a></li>
                                <li><a href="multiunit/4/index.html">Multi Unit 4</a></li>
                                <li><a href="multiunit/5/index.html">Multi Unit 5</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="projects/index.html#whole-house-remodel">Whole House Remodel</a>
                            <ul class="submenu">
                                <li><a href="wholehouseremodel/1/index.html">Whole House Remodel 1</a></li>
                                <li><a href="wholehouseremodel/2/index.html">Whole House Remodel 2</a></li>
                                <li><a href="wholehouseremodel/3/index.html">Whole House Remodel 3</a></li>
                                <li><a href="wholehouseremodel/4/index.html">Whole House Remodel 4</a></li>
                                <li><a href="wholehouseremodel/5/index.html">Whole House Remodel 5</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="projects/index.html#kitchen-remodel">Kitchen Remodel</a>
                            <ul class="submenu">
                                <li><a href="kitchenremodel/1/index.html">Kitchen Remodel 1</a></li>
                                <li><a href="kitchenremodel/2/index.html">Kitchen Remodel 2</a></li>
                                <li><a href="kitchenremodel/3/index.html">Kitchen Remodel 3</a></li>
                                <li><a href="kitchenremodel/4/index.html">Kitchen Remodel 4</a></li>
                                <li><a href="kitchenremodel/5/index.html">Kitchen Remodel 5</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="projects/index.html#bathroom-remodel">Bathroom Remodel</a>
                            <ul class="submenu">
                                <li><a href="bathroomremodel/1/index.html">Bathroom Remodel 1</a></li>
                                <li><a href="bathroomremodel/2/index.html">Bathroom Remodel 2</a></li>
                                <li><a href="bathroomremodel/3/index.html">Bathroom Remodel 3</a></li>
                                <li><a href="bathroomremodel/4/index.html">Bathroom Remodel 4</a></li>
                                <li><a href="bathroomremodel/5/index.html">Bathroom Remodel 5</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="projects/index.html#commercial">Commercial</a>
                            <ul class="submenu">
                                <li><a href="commercial/1/index.html">Commercial 1</a></li>
                                <li><a href="commercial/2/index.html">Commercial 2</a></li>
                                <li><a href="commercial/3/index.html">Commercial 3</a></li>
                                <li><a href="commercial/4/index.html">Commercial 4</a></li>
                                <li><a href="commercial/5/index.html">Commercial 5</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="projects/index.html#living-spaces">Living Spaces</a>
                            <ul class="submenu">
                                <li><a href="livingspaces/1/index.html">Living Spaces 1</a></li>
                                <li><a href="livingspaces/2/index.html">Living Spaces 2</a></li>
                                <li><a href="livingspaces/3/index.html">Living Spaces 3</a></li>
                                <li><a href="livingspaces/4/index.html">Living Spaces 4</a></li>
                                <li><a href="livingspaces/5/index.html">Living Spaces 5</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="projects/index.html#adus">ADUS (Accessory Dwelling Units)</a>
                            <ul class="submenu">
                                <li><a href="adus/1/index.html">ADUS 1</a></li>
                                <li><a href="adus/2/index.html">ADUS 2</a></li>
                                <li><a href="adus/3/index.html">ADUS 3</a></li>
                                <li><a href="adus/4/index.html">ADUS 4</a></li>
                                <li><a href="adus/5/index.html">ADUS 5</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="getting-started/index.html">Getting Started</a></li>
                <li><a href="press-awards/index.html">Press & Awards</a></li>
                <li><a href="contact/index.html">Contact</a></li>
                <li class="header-social-media">
                    <a href="#" class="header-social-icon" aria-label="Nextdoor"><img src="assets/nextdoor.png" alt="Nextdoor"></a>
                    <a href="https://www.facebook.com/TopCapConstructionCA" target="_blank" rel="noopener noreferrer" class="header-social-icon" aria-label="Facebook"><img src="assets/facebook-logo.png" alt="Facebook"></a>
                    <a href="https://www.instagram.com/topcapremodels" target="_blank" rel="noopener noreferrer" class="header-social-icon" aria-label="Instagram"><img src="assets/instagram.png" alt="Instagram"></a>
                    <a href="https://www.yelp.com/biz/topcap-construction-el-dorado-hills-3?osq=topcap+construction" target="_blank" rel="noopener noreferrer" class="header-social-icon" aria-label="Yelp"><img src="assets/yelp.png" alt="Yelp"></a>
                    <a href="https://www.houzz.com/pro/topcapconstruction/topcap-construction-inc" target="_blank" rel="noopener noreferrer" class="header-social-icon" aria-label="Houzz"><img src="assets/houzz.png" alt="Houzz"></a>
                    <a href="#" class="header-social-icon" aria-label="YouTube"><img src="assets/youtube.png" alt="YouTube"></a>
                </li>
            </ul>
        </nav>
    </div>
</header>`;

// Footer HTML Template
const footerHTML = `<!-- Footer -->
<footer>
    <div class="footer-container">
        <div class="footer-left">
            <h3>TopCap Construction</h3>
            <p>3075 Alhambra Dr Suite 106</p>
            <p>Cameron Park, CA 95682</p>
            <p>Phone: example phone</p>
            <p class="copyright">© TopCap Construction</p>
        </div>
        <div class="footer-right">
            <h4>Social Media</h4>
            <div class="social-media">
                <a href="#" class="social-icon" aria-label="Nextdoor"><img src="assets/nextdoor.png" alt="Nextdoor"></a>
                <a href="https://www.facebook.com/TopCapConstructionCA" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook"><img src="assets/facebook-logo.png" alt="Facebook"></a>
                <a href="https://www.instagram.com/topcapremodels" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram"><img src="assets/instagram.png" alt="Instagram"></a>
                <a href="https://www.yelp.com/biz/topcap-construction-el-dorado-hills-3?osq=topcap+construction" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Yelp"><img src="assets/yelp.png" alt="Yelp"></a>
                <a href="https://www.houzz.com/pro/topcapconstruction/topcap-construction-inc" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Houzz"><img src="assets/houzz.png" alt="Houzz"></a>
                <a href="#" class="social-icon" aria-label="YouTube"><img src="assets/youtube.png" alt="YouTube"></a>
            </div>
        </div>
    </div>
</footer>`;

// Determine if we're in a subfolder and get the base path
function getBasePath() {
    // Check the script src - most reliable method
    const script = document.currentScript || document.querySelector('script[src*="header-footer.js"]');
    if (script) {
        const scriptSrc = script.getAttribute('src') || script.src || '';
        // Count how many '../' are in the path to determine depth
        if (scriptSrc.includes('../')) {
            // Count the number of '../' occurrences
            const matches = scriptSrc.match(/\.\.\//g);
            if (matches) {
                return matches.join(''); // Return '../' or '../../' etc.
            }
            return '../';
        }
        // If script is just "header-footer.js" or doesn't have '../', we're at root
        return '';
    }
    
    // Fallback: check window location (less reliable but works as backup)
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(p => p && p !== '' && p !== 'index.html');
    
    // If we're at root (no path parts), return empty
    if (pathParts.length === 0) {
        return '';
    }
    
    // Count depth and return appropriate '../' string
    const depth = pathParts.length;
    if (depth > 0) {
        return '../'.repeat(depth);
    }
    
    return '';
}

// Load Header and Footer
function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        const basePath = getBasePath();
        let header = headerHTML;
        
        // Replace ALL asset paths (both src and href)
        header = header.replace(/src="assets\//g, 'src="' + basePath + 'assets/');
        header = header.replace(/href="assets\//g, 'href="' + basePath + 'assets/');
        
        // Replace index.html links (only if they're relative, not already with basePath)
        header = header.replace(/href="index\.html"/g, 'href="' + basePath + 'index.html"');
        
        // Replace other page links - use more specific patterns
        header = header.replace(/href="about\/index\.html/g, 'href="' + basePath + 'about/index.html');
        header = header.replace(/href="about\/testimonials\.html/g, 'href="' + basePath + 'about/testimonials.html');
        header = header.replace(/href="contact\/index\.html/g, 'href="' + basePath + 'contact/index.html');
        header = header.replace(/href="getting-started\/index\.html/g, 'href="' + basePath + 'getting-started/index.html');
        header = header.replace(/href="press-awards\/index\.html/g, 'href="' + basePath + 'press-awards/index.html');
        header = header.replace(/href="projects\/index\.html/g, 'href="' + basePath + 'projects/index.html');
        
        // Replace submenu links - make sure we catch all variations
        header = header.replace(/href="currentprojects\//g, 'href="' + basePath + 'currentprojects/');
        header = header.replace(/href="customhomes\//g, 'href="' + basePath + 'customhomes/');
        header = header.replace(/href="multiunit\//g, 'href="' + basePath + 'multiunit/');
        header = header.replace(/href="wholehouseremodel\//g, 'href="' + basePath + 'wholehouseremodel/');
        header = header.replace(/href="kitchenremodel\//g, 'href="' + basePath + 'kitchenremodel/');
        header = header.replace(/href="bathroomremodel\//g, 'href="' + basePath + 'bathroomremodel/');
        header = header.replace(/href="commercial\//g, 'href="' + basePath + 'commercial/');
        header = header.replace(/href="livingspaces\//g, 'href="' + basePath + 'livingspaces/');
        header = header.replace(/href="adus\//g, 'href="' + basePath + 'adus/');
        
        headerPlaceholder.innerHTML = header;
        initHeaderScripts();
    }
}

function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        const basePath = getBasePath();
        let footer = footerHTML;
        
        // Replace asset paths
        footer = footer.replace(/src="assets\//g, 'src="' + basePath + 'assets/');
        
        footerPlaceholder.innerHTML = footer;
    }
}

// Initialize header functionality after header is loaded
function initHeaderScripts() {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Folder system for mobile - Both About and Projects dropdowns
    const aboutToggle = document.querySelector('.about-toggle');
    const aboutDropdown = document.querySelector('.about-dropdown');
    const projectsToggle = document.querySelector('.projects-toggle');
    const projectsDropdown = document.querySelector('.projects-dropdown');
    const backButton = document.getElementById('backButton');

    function enterFolderView(dropdown) {
        if (window.innerWidth <= 768) {
            nav.classList.add('folder-view');
            dropdown.classList.add('folder-active');
            if (backButton) backButton.style.display = 'block';
            
            // Remove any existing title first
            const existingTitle = nav.querySelector('.folder-title');
            if (existingTitle) {
                existingTitle.remove();
            }
            
            // Create and show title
            const title = document.createElement('div');
            title.className = 'folder-title';
            const toggle = dropdown.querySelector('.dropdown-toggle');
            if (toggle) {
                title.textContent = toggle.textContent.trim();
                // Insert title after back button but before ul
                const ul = nav.querySelector('ul');
                if (ul) {
                    nav.insertBefore(title, ul);
                } else if (backButton && backButton.nextSibling) {
                    nav.insertBefore(title, backButton.nextSibling);
                } else {
                    nav.appendChild(title);
                }
            }
        }
    }

    function exitFolderView() {
        nav.classList.remove('folder-view');
        nav.classList.remove('submenu-view');
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('folder-active');
        });
        document.querySelectorAll('.dropdown-item-with-submenu').forEach(item => {
            item.classList.remove('submenu-active');
        });
        // Hide and remove folder titles
        document.querySelectorAll('.folder-title').forEach(title => {
            title.style.display = 'none';
        });
        if (backButton) backButton.style.display = 'none';
    }

    function enterSubmenuView(submenuItem) {
        if (window.innerWidth <= 768) {
            // Update the folder title text instead of hiding it
            const folderTitle = nav.querySelector('.folder-title');
            const submenuLink = submenuItem.querySelector('a');
            if (folderTitle && submenuLink) {
                folderTitle.textContent = submenuLink.textContent.trim();
            }
            
            // Hide all other items in the same dropdown
            const dropdown = submenuItem.closest('.dropdown');
            if (dropdown) {
                dropdown.querySelectorAll('.dropdown-item-with-submenu').forEach(item => {
                    if (item !== submenuItem) {
                        item.style.display = 'none';
                    } else {
                        // Make sure the active item is visible
                        item.style.display = 'block';
                    }
                });
            }
            // Show only the selected submenu
            nav.classList.add('submenu-view');
            submenuItem.classList.add('submenu-active');
            if (backButton) backButton.style.display = 'block';
        }
    }

    function exitSubmenuView() {
        nav.classList.remove('submenu-view');
        document.querySelectorAll('.dropdown-item-with-submenu').forEach(item => {
            item.classList.remove('submenu-active');
            item.style.display = ''; // Reset display
        });
        // Restore folder title to original dropdown name
        const folderTitle = nav.querySelector('.folder-title');
        const activeDropdown = document.querySelector('.dropdown.folder-active');
        if (folderTitle && activeDropdown) {
            const toggle = activeDropdown.querySelector('.dropdown-toggle');
            if (toggle) {
                folderTitle.textContent = toggle.textContent.trim();
            }
        }
        // Stay in folder view, just exit submenu
        if (backButton) backButton.style.display = 'block';
    }

    if (aboutToggle && aboutDropdown) {
        aboutToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                enterFolderView(aboutDropdown);
            }
        });
    }

    if (projectsToggle && projectsDropdown) {
        projectsToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                enterFolderView(projectsDropdown);
            }
        });
    }

    // Back button functionality
    if (backButton) {
        backButton.addEventListener('click', () => {
            // If in submenu view, go back to dropdown list
            if (nav.classList.contains('submenu-view')) {
                exitSubmenuView();
                // Reset display for all items in active dropdown
                const activeDropdown = document.querySelector('.dropdown.folder-active');
                if (activeDropdown) {
                    activeDropdown.querySelectorAll('.dropdown-menu > li').forEach(item => {
                        item.style.display = '';
                    });
                }
            } else {
                // Otherwise exit folder view completely
                exitFolderView();
            }
        });
    }

    // Handle clicks on project items with submenus (mobile only)
    // Use event delegation to handle dynamically loaded content
    // This handler must run first (use capture phase)
    if (nav) {
        nav.addEventListener('click', (e) => {
            // Check if clicking on a project item with submenu
            const clickedLink = e.target.closest('a');
            if (!clickedLink) return;
            
            // Check if this link is inside a dropdown-item-with-submenu
            let submenuItem = clickedLink.closest('.dropdown-item-with-submenu');
            // If not found, check if the link's parent is the submenu item
            if (!submenuItem && clickedLink.parentElement && clickedLink.parentElement.classList.contains('dropdown-item-with-submenu')) {
                submenuItem = clickedLink.parentElement;
            }
            
            const projectsDropdown = clickedLink.closest('.projects-dropdown');
            
            // Check all conditions
            const isMobile = window.innerWidth <= 768;
            const isFolderView = nav.classList.contains('folder-view');
            const isNotSubmenuView = !nav.classList.contains('submenu-view');
            const hasSubmenuItem = submenuItem !== null;
            const isInProjectsDropdown = projectsDropdown !== null;
            
            if (hasSubmenuItem && 
                isInProjectsDropdown && 
                isMobile && 
                isFolderView &&
                isNotSubmenuView) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                enterSubmenuView(submenuItem);
                return false;
            }
        }, true); // Use capture phase to run before other handlers
    }

    // Handle window resize to close all dropdowns and folder view if switching to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            exitFolderView();
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Close menu when clicking on a link
    // Use event delegation instead of querySelectorAll to handle dynamically loaded content
    if (nav) {
        nav.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;
            
            // Don't close menu if clicking a project item with submenu on mobile
            if (window.innerWidth <= 768 && link.closest('.projects-dropdown .dropdown-item-with-submenu > a') && nav.classList.contains('folder-view')) {
                // This is handled by the earlier handler, just return
                return;
            }
            
            // Close submenu view if clicking a submenu link (actual option)
            if (link.closest('.submenu')) {
                // Don't prevent default - allow navigation, but close menus
                exitSubmenuView();
                exitFolderView();
                if (hamburger) hamburger.classList.remove('active');
                if (nav) nav.classList.remove('active');
            }
            // Close folder view if clicking a dropdown menu link (but not submenu items or project items)
            else if (link.closest('.dropdown .dropdown-menu') && !link.closest('.submenu') && !link.closest('.dropdown-item-with-submenu')) {
                exitFolderView();
                if (hamburger) hamburger.classList.remove('active');
                if (nav) nav.classList.remove('active');
            }
            // Only close main menu, not dropdown on mobile
            else if (!link.classList.contains('dropdown-toggle')) {
                if (hamburger) hamburger.classList.remove('active');
                if (nav) nav.classList.remove('active');
            }
        });
    }
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
