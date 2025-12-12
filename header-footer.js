// Header HTML Template - All paths are root-relative (start with /)
const headerHTML = `<!-- Header -->
<header>
    <div class="header-container">
        <div class="logo-container">
            <a href="/">
                <img src="/assets/logo.webp" alt="TopCap Construction Logo" class="logo">
            </a>
        </div>
        <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav id="nav">
            <div class="back-button" id="backButton" style="display: none;"><span class="back-arrow"></span> Back</div>
            <ul>
                <li><a href="/">Home</a></li>
                <li class="dropdown about-dropdown">
                    <a href="/about" class="dropdown-toggle about-toggle">About</a>
                    <ul class="dropdown-menu">
                        <li><a href="/about/our-team/">Our Team</a></li>
                        <li><a href="/about/testimonials/">Testimonials</a></li>
                        <li><a href="/careers/">Careers</a></li>
                    </ul>
                </li>
                <li class="dropdown projects-dropdown">
                    <a href="/projects/" class="dropdown-toggle projects-toggle">Projects</a>
                    <ul class="dropdown-menu">
                        <li><a href="/projects/">Current Projects</a></li>
                        <li class="dropdown-item-with-submenu">
                            <a href="/custom-homes/">Custom Homes</a>
                            <ul class="submenu">
                                <li><a href="/custom-homes/ashbury/">Ashbury</a></li>
                                <li><a href="/custom-homes/sierra-oaks/">Sierra Oaks</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="/whole-house-remodel/">Whole House Remodels</a>
                            <ul class="submenu">
                                <li><a href="/whole-house-remodel/18th-ave/">18th Ave</a></li>
                                <li><a href="/whole-house-remodel/21st-street/">21st Street</a></li>
                                <li><a href="/whole-house-remodel/coldwater/">Coldwater</a></li>
                                <li><a href="/whole-house-remodel/eichler/">Eichler</a></li>
                                <li><a href="/whole-house-remodel/lincoln/">Lincoln</a></li>
                                <li><a href="/whole-house-remodel/magic-morgan/">Magic Morgan</a></li>
                                <li><a href="/whole-house-remodel/stone-canyon/">Stone Canyon</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="/multi-unit/">Multi Unit Projects</a>
                            <ul class="submenu">
                                <li><a href="/multi-unit/22nd-street/">22nd Street</a></li>
                                <li><a href="/multi-unit/bartlett/">Bartlett</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="/kitchen-remodel/">Kitchen Remodels</a>
                            <ul class="submenu">
                                <li><a href="/kitchen-remodel/castro/">Castro</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="/bathroom-remodel/">Bathroom Remodels</a>
                            <ul class="submenu">
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="/living-spaces/">Living Spaces</a>
                            <ul class="submenu">
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="/commercial/">Commercial</a>
                            <ul class="submenu">
                                <li><a href="/commercial/davids-tea/">David's Tea</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="dropdown getting-started-dropdown">
                    <span class="dropdown-toggle getting-started-toggle">Getting Started</span>
                    <ul class="dropdown-menu">
                        <li><a href="/contact/">Pre-Meeting Worksheet</a></li>
                        <li><a href="/why-choose-us/">Why Choose Us?</a></li>
                    </ul>
                </li>
                <li><a href="/press-awards/">Press & Awards</a></li>
                <li><a href="/contact/">Contact</a></li>
                <li class="header-social-media">
                    <a href="https://nextdoor.com/pages/sacdev-inc-el-dorado-hills-ca/" target="_blank" rel="noopener noreferrer" class="header-social-icon" aria-label="Nextdoor"><img src="/assets/nextdoor.png" alt="Nextdoor"></a>
                    <a href="https://www.facebook.com/TopCapConstructionCA" target="_blank" rel="noopener noreferrer" class="header-social-icon" aria-label="Facebook"><img src="/assets/facebook-logo.png" alt="Facebook"></a>
                    <a href="https://www.instagram.com/topcapremodels" target="_blank" rel="noopener noreferrer" class="header-social-icon" aria-label="Instagram"><img src="/assets/instagram.png" alt="Instagram"></a>
                    <a href="https://www.yelp.com/biz/topcap-construction-el-dorado-hills-3?osq=topcap+construction" target="_blank" rel="noopener noreferrer" class="header-social-icon" aria-label="Yelp"><img src="/assets/yelp.png" alt="Yelp"></a>
                    <a href="https://www.houzz.com/pro/topcapconstruction/topcap-construction-inc" target="_blank" rel="noopener noreferrer" class="header-social-icon" aria-label="Houzz"><img src="/assets/houzz.png" alt="Houzz"></a>
                    <a href="#" class="header-social-icon" aria-label="YouTube"><img src="/assets/youtube.png" alt="YouTube"></a>
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
                <a href="https://nextdoor.com/pages/sacdev-inc-el-dorado-hills-ca/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Nextdoor"><img src="/assets/nextdoor.png" alt="Nextdoor"></a>
                <a href="https://www.facebook.com/TopCapConstructionCA" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook"><img src="/assets/facebook-logo.png" alt="Facebook"></a>
                <a href="https://www.instagram.com/topcapremodels" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram"><img src="/assets/instagram.png" alt="Instagram"></a>
                <a href="https://www.yelp.com/biz/topcap-construction-el-dorado-hills-3?osq=topcap+construction" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Yelp"><img src="/assets/yelp.png" alt="Yelp"></a>
                <a href="https://www.houzz.com/pro/topcapconstruction/topcap-construction-inc" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Houzz"><img src="/assets/houzz.png" alt="Houzz"></a>
                <a href="#" class="social-icon" aria-label="YouTube"><img src="/assets/youtube.png" alt="YouTube"></a>
            </div>
        </div>
    </div>
</footer>`;

// Determine if we're running locally (file://) or on a server
function isLocalFile() {
    return window.location.protocol === 'file:';
}

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
function loadHeader(forceReload = false) {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        // If header already exists and we're not forcing reload, skip
        if (!forceReload && headerElement && headerPlaceholder.querySelector('header')) {
            // Just update paths if needed, but don't reload
            return;
        }
        
        // Assets are now always root-relative in the template, so no path replacement needed
        let header = headerHTML;
        
        // For local file system, convert root-relative paths to relative paths
        if (isLocalFile()) {
            const basePath = getBasePath();
            if (basePath) {
                // Replace /assets/ with relative path
                header = header.replace(/src="\/assets\//g, 'src="' + basePath + 'assets/');
                header = header.replace(/href="\/assets\//g, 'href="' + basePath + 'assets/');
            }
        }
        
        // Navigation links stay exactly as they are - no processing
        
        // Only update if content has changed to prevent unnecessary reloads
        const currentHeader = headerPlaceholder.innerHTML.trim();
        const newHeader = header.trim();
        if (forceReload || currentHeader !== newHeader) {
            headerPlaceholder.innerHTML = header;
            headerElement = document.querySelector('header');
        }
        initHeaderScripts();
    }
}

function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        // Assets are now always root-relative in the template, so no path replacement needed
        let footer = footerHTML;
        
        // For local file system, convert root-relative paths to relative paths
        if (isLocalFile()) {
            const basePath = getBasePath();
            if (basePath) {
                // Replace /assets/ with relative path
                footer = footer.replace(/src="\/assets\//g, 'src="' + basePath + 'assets/');
            }
        }
        
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

    // Folder system for mobile - About, Projects, and Getting Started dropdowns
    const aboutToggle = document.querySelector('.about-toggle');
    const aboutDropdown = document.querySelector('.about-dropdown');
    const projectsToggle = document.querySelector('.projects-toggle');
    const projectsDropdown = document.querySelector('.projects-dropdown');
    const gettingStartedToggle = document.querySelector('.getting-started-toggle');
    const gettingStartedDropdown = document.querySelector('.getting-started-dropdown');
    const backButton = document.getElementById('backButton');

    function enterFolderView(dropdown) {
        if (window.innerWidth <= 768) {
            // Clear any hover states on mobile by removing focus and adding a class
            document.body.classList.add('mobile-nav-active');
            setTimeout(() => {
                document.querySelectorAll('a').forEach(link => {
                    link.blur();
                    link.style.pointerEvents = 'auto';
                });
            }, 10);
            
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
        // Clear any hover states on mobile
        if (window.innerWidth <= 768) {
            document.body.classList.add('mobile-nav-active');
            setTimeout(() => {
                document.querySelectorAll('a').forEach(link => {
                    link.blur();
                    link.style.pointerEvents = 'auto';
                });
                document.body.classList.remove('mobile-nav-active');
            }, 100);
        }
        
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
            // Clear any hover states on mobile
            document.body.classList.add('mobile-nav-active');
            setTimeout(() => {
                document.querySelectorAll('a').forEach(link => {
                    link.blur();
                    link.style.pointerEvents = 'auto';
                });
            }, 10);
            
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

    if (gettingStartedToggle && gettingStartedDropdown) {
        gettingStartedToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                enterFolderView(gettingStartedDropdown);
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

    // On mobile, project items with submenus should just navigate to their category pages
    // No submenu functionality on mobile - removed

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
            
            // On mobile, project items with submenus should just navigate (no submenu shown)
            // Close submenu view if clicking a submenu link (actual option) - desktop only
            if (link.closest('.submenu')) {
                // Don't prevent default - allow navigation, but close menus
                exitSubmenuView();
                exitFolderView();
                if (hamburger) hamburger.classList.remove('active');
                if (nav) nav.classList.remove('active');
            }
            // Close folder view if clicking any dropdown menu link (including project items with submenus on mobile)
            else if (link.closest('.dropdown .dropdown-menu') && !link.closest('.submenu')) {
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

// Cache header element to prevent unnecessary reloads
let headerElement = null;
let isNavigating = false;

// SPA Navigation - prevent header reload on internal navigation
function setupSPANavigation() {
    // Only enable SPA navigation on desktop (PC)
    const isDesktop = window.innerWidth > 768;
    if (!isDesktop) return;
    
    // Intercept clicks on internal links
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        if (!href) return;
        
        // Skip external links, anchors, and special links
        if (href.startsWith('http') || href.startsWith('//') || 
            href.startsWith('#') || href.startsWith('mailto:') || 
            href.startsWith('tel:') || link.hasAttribute('target') ||
            link.hasAttribute('download') || link.hasAttribute('data-no-spa')) {
            return;
        }
        
        // Skip if already navigating
        if (isNavigating) {
            e.preventDefault();
            return;
        }
        
        try {
            // Skip external links
            if (href.startsWith('http') || href.startsWith('//')) {
                return;
            }
            
            // Skip hash-only links
            if (href.startsWith('#')) {
                return;
            }
            
            // Use href exactly as-is - no processing
            e.preventDefault();
            navigateToPage(href);
        } catch (err) {
            console.error('Navigation error:', err);
            return;
        }
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.url) {
            loadPageContent(e.state.url, false);
        }
    });
}

// Navigate to a new page without reloading header
async function navigateToPage(url) {
    if (isNavigating) return;
    isNavigating = true;
    
    try {
        // Normalize URL - remove any index.html and ensure trailing slash for folders
        let normalizedUrl = url;
        if (normalizedUrl.endsWith('/index.html')) {
            normalizedUrl = normalizedUrl.replace('/index.html', '/');
        } else if (normalizedUrl.endsWith('index.html')) {
            normalizedUrl = normalizedUrl.replace('index.html', '');
            if (!normalizedUrl.endsWith('/')) {
                normalizedUrl += '/';
            }
        }
        
        // Ensure trailing slash for folder paths (unless it's the root or has a file extension)
        if (normalizedUrl !== '/' && !normalizedUrl.endsWith('/') && !normalizedUrl.match(/\.[a-zA-Z0-9]+$/)) {
            normalizedUrl += '/';
        }
        
        let fetchUrl = normalizedUrl;
        let historyUrl = normalizedUrl;
        
        // If root-relative path (starts with /), convert to proper path for local file system
        if (normalizedUrl.startsWith('/') && !normalizedUrl.startsWith('//') && !normalizedUrl.startsWith('http')) {
            if (isLocalFile()) {
                // For local file system, convert root-relative to relative based on current depth
                const currentPath = window.location.pathname;
                // Remove drive letter for Windows (e.g., /C:/Users/...)
                const cleanPath = currentPath.replace(/^\/[a-zA-Z]:\//, '/');
                const pathParts = cleanPath.split('/').filter(p => p && p !== '' && p !== 'index.html');
                const depth = pathParts.length;
                
                // Convert /about/ to ../../about/index.html (if depth is 2)
                if (depth > 0) {
                    // Remove leading slash and add index.html for local file system
                    let localPath = normalizedUrl.substring(1);
                    if (localPath && !localPath.endsWith('/')) {
                        localPath += '/';
                    }
                    localPath += 'index.html';
                    historyUrl = '../'.repeat(depth) + localPath;
                } else {
                    historyUrl = normalizedUrl.substring(1) + 'index.html';
                }
                fetchUrl = new URL(historyUrl, window.location.href).href;
            } else {
                // On server, explicitly append index.html for folder paths
                // GitHub Pages and most servers need explicit index.html
                if (normalizedUrl.endsWith('/')) {
                    fetchUrl = window.location.origin + normalizedUrl + 'index.html';
                } else {
                    fetchUrl = window.location.origin + normalizedUrl + '/index.html';
                }
                historyUrl = normalizedUrl;
            }
        } else if (!normalizedUrl.startsWith('http') && !normalizedUrl.startsWith('//') && !normalizedUrl.startsWith('file://')) {
            // Relative path - resolve it
            if (normalizedUrl.endsWith('/')) {
                fetchUrl = new URL(normalizedUrl + 'index.html', window.location.href).href;
            } else {
                fetchUrl = new URL(normalizedUrl, window.location.href).href;
            }
            historyUrl = normalizedUrl;
        } else {
            // Already absolute
            fetchUrl = normalizedUrl;
            historyUrl = normalizedUrl;
        }
        
        // Update browser URL - use clean URL without index.html
        window.history.pushState({ url: historyUrl }, '', historyUrl);
        
        // Load the page content
        await loadPageContent(fetchUrl, true);
    } catch (error) {
        console.error('Navigation error:', error);
        window.location.href = url;
    } finally {
        isNavigating = false;
    }
}

// Load page content via AJAX
async function loadPageContent(url, scrollToTop = true) {
    try {
        // URL is already absolute from navigateToPage - use as-is
        const fetchUrl = url;
        
        console.log('Fetching URL:', fetchUrl);
        let actualFetchUrl = fetchUrl;
        let response = await fetch(actualFetchUrl);
        
        // If 404 and URL ends with index.html, try without index.html (some servers auto-serve it)
        if (!response.ok && actualFetchUrl.endsWith('/index.html')) {
            const altUrl = actualFetchUrl.replace('/index.html', '/');
            console.log('Trying alternative URL without index.html:', altUrl);
            response = await fetch(altUrl);
            if (response.ok) {
                // Update actualFetchUrl for the rest of the function
                actualFetchUrl = altUrl;
            }
        }
        
        // If still 404, try with lowercase (GitHub Pages is case-sensitive)
        if (!response.ok && actualFetchUrl.includes('/About/') || actualFetchUrl.includes('/Testimonials/')) {
            const lowerUrl = actualFetchUrl.replace('/About/', '/about/').replace('/Testimonials/', '/testimonials/');
            console.log('Trying lowercase URL:', lowerUrl);
            response = await fetch(lowerUrl);
            if (response.ok) {
                actualFetchUrl = lowerUrl;
            }
        }
        
        if (!response.ok) {
            console.error('Fetch failed:', response.status, response.statusText, 'for URL:', actualFetchUrl);
            throw new Error(`Failed to load page: ${response.status} ${response.statusText}`);
        }
        
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Find the header placeholder - we'll keep it untouched
        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');
        
        if (!headerPlaceholder || !footerPlaceholder) {
            // Fallback: reload the page
            window.location.href = url;
            return;
        }
        
        // Get new page's content
        const newHeaderPlaceholder = doc.getElementById('header-placeholder');
        const newFooterPlaceholder = doc.getElementById('footer-placeholder');
        
        if (!newHeaderPlaceholder || !newFooterPlaceholder) {
            // Fallback: reload the page
            window.location.href = url;
            return;
        }
        
        // STEP 1: Replace ALL content in <head> (except header-footer.js script)
        // Remove everything from head except header-footer.js
        const headChildren = Array.from(document.head.children);
        headChildren.forEach(child => {
            // Keep header-footer.js script
            if (child.tagName === 'SCRIPT' && child.src && child.src.includes('header-footer.js')) {
                return;
            }
            // Remove everything else
            child.remove();
        });
        
        // Add ALL new head content from loaded page (except header-footer.js)
        const newHeadChildren = Array.from(doc.head.children);
        newHeadChildren.forEach(newChild => {
            // Skip header-footer.js script
            if (newChild.tagName === 'SCRIPT' && newChild.src && newChild.src.includes('header-footer.js')) {
                return;
            }
            
            // Clone and append
            const cloned = newChild.cloneNode(true);
            document.head.appendChild(cloned);
        });
        
        // STEP 2: Update page title (already done above, but ensure it's set)
        const newTitle = doc.querySelector('title');
        if (newTitle) {
            document.title = newTitle.textContent;
        }
        
        // STEP 3: Replace ALL body content (except header and footer placeholders)
        // Extract content between header and footer from new page
        const tempDiv = document.createElement('div');
        let current = newHeaderPlaceholder.nextSibling;
        while (current && current !== newFooterPlaceholder) {
            const clone = current.cloneNode(true);
            tempDiv.appendChild(clone);
            current = current.nextSibling;
        }
        
        // Remove ALL old content between header and footer
        const oldContentNodes = [];
        let oldContent = headerPlaceholder.nextSibling;
        while (oldContent && oldContent !== footerPlaceholder) {
            oldContentNodes.push(oldContent);
            oldContent = oldContent.nextSibling;
        }
        oldContentNodes.forEach(node => node.remove());
        
        // Insert new content before footer
        while (tempDiv.firstChild) {
            footerPlaceholder.parentNode.insertBefore(tempDiv.firstChild, footerPlaceholder);
        }
        
        // Force a reflow to ensure DOM is updated before scripts run
        void footerPlaceholder.offsetHeight;
        
        // STEP 3.5: Force update hero image by finding it in new styles and applying directly
        const heroElement = document.querySelector('.project-hero');
        if (heroElement) {
            // Find the hero image URL from the newly added styles
            const allStyles = document.querySelectorAll('head style');
            allStyles.forEach(style => {
                const styleText = style.textContent || '';
                // Look for .project-hero background-image - match across multiple lines
                const heroMatch = styleText.match(/\.project-hero\s*\{[\s\S]*?background-image:\s*url\(['"]?([^'")]+)['"]?\)/);
                if (heroMatch) {
                    let imageUrl = heroMatch[1];
                    // Resolve relative URLs
                    if (!imageUrl.startsWith('http') && !imageUrl.startsWith('//')) {
                        try {
                            // Use the fetchUrl to resolve relative paths
                            const baseUrl = new URL(fetchUrl);
                            const resolvedUrl = new URL(imageUrl, baseUrl);
                            
                            if (isLocalFile()) {
                                // For local files, use the resolved href
                                heroElement.style.backgroundImage = `url('${resolvedUrl.href}')`;
                            } else {
                                // For server, use the pathname
                                heroElement.style.backgroundImage = `url('${resolvedUrl.pathname}')`;
                            }
                        } catch (e) {
                            // If URL parsing fails, try to resolve manually
                            if (imageUrl.startsWith('../')) {
                                // Count ../ levels
                                const upLevels = (imageUrl.match(/\.\.\//g) || []).length;
                                const cleanPath = imageUrl.replace(/\.\.\//g, '');
                                const urlObj = new URL(fetchUrl);
                                const pathParts = urlObj.pathname.split('/').filter(p => p && p !== 'index.html');
                                const newPathParts = pathParts.slice(0, pathParts.length - upLevels);
                                const resolvedPath = '/' + newPathParts.join('/') + '/' + cleanPath;
                                
                                if (isLocalFile()) {
                                    heroElement.style.backgroundImage = `url('${resolvedPath}')`;
                                } else {
                                    heroElement.style.backgroundImage = `url('${window.location.origin}${resolvedPath}')`;
                                }
                            } else {
                                // Use as-is
                                heroElement.style.backgroundImage = `url('${imageUrl}')`;
                            }
                        }
                    } else {
                        // Already absolute
                        heroElement.style.backgroundImage = `url('${imageUrl}')`;
                    }
                }
            });
        }
        
        // STEP 4: Re-initialize all scripts from the new content
        // Remove old scripts (except header-footer.js)
        const oldScripts = Array.from(document.querySelectorAll('script')).filter(script => {
            const isBetweenContent = script.compareDocumentPosition(headerPlaceholder) & Node.DOCUMENT_POSITION_FOLLOWING &&
                                   script.compareDocumentPosition(footerPlaceholder) & Node.DOCUMENT_POSITION_PRECEDING;
            return isBetweenContent && (!script.src || !script.src.includes('header-footer.js'));
        });
        oldScripts.forEach(script => script.remove());
        
        // Add new scripts from the loaded page
        // Use setTimeout to ensure DOM is fully updated and rendered before scripts run
        setTimeout(() => {
            const newScripts = doc.querySelectorAll('script');
            // Get the base URL of the fetched page to resolve relative paths
            const fetchedPageUrl = new URL(actualFetchUrl);
            const fetchedPageBase = fetchedPageUrl.origin + fetchedPageUrl.pathname.substring(0, fetchedPageUrl.pathname.lastIndexOf('/') + 1);
            
            newScripts.forEach(oldScript => {
                // Skip header-footer.js
                if (oldScript.src && oldScript.src.includes('header-footer.js')) {
                    return;
                }
                
                const newScript = document.createElement('script');
                if (oldScript.src) {
                    // Resolve relative paths to absolute paths based on the fetched page location
                    let scriptSrc = oldScript.src;
                    if (scriptSrc.startsWith('../') || scriptSrc.startsWith('./') || (!scriptSrc.startsWith('http') && !scriptSrc.startsWith('/') && !scriptSrc.startsWith('//'))) {
                        // Relative path - resolve it based on the fetched page's location
                        const resolvedUrl = new URL(scriptSrc, fetchedPageBase);
                        scriptSrc = resolvedUrl.href;
                    } else if (scriptSrc.startsWith('/')) {
                        // Root-relative path - make it absolute
                        scriptSrc = window.location.origin + scriptSrc;
                    }
                    newScript.src = scriptSrc;
                    newScript.async = oldScript.async;
                    newScript.defer = oldScript.defer;
                } else {
                    // For inline scripts, wrap in a function that runs after DOM is ready
                    const scriptContent = oldScript.textContent || '';
                    // Execute the script content with requestAnimationFrame to ensure DOM is fully rendered
                    // This is especially important for gallery/lightbox scripts that need to attach event listeners
                    newScript.textContent = `
                        (function() {
                            requestAnimationFrame(function() {
                                requestAnimationFrame(function() {
                                    setTimeout(function() {
                                        ${scriptContent}
                                    }, 100);
                                });
                            });
                        })();
                    `;
                }
                document.body.appendChild(newScript);
            });
        }, 100);
        
        // Scroll to top
        if (scrollToTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Re-initialize header scripts (dropdowns, etc.) - but don't reload header
        initHeaderScripts();
        
        // Dispatch custom event for page-specific initialization
        window.dispatchEvent(new CustomEvent('pageContentLoaded', { detail: { url } }));
        
    } catch (error) {
        console.error('Error loading page content:', error);
        // Fallback to normal navigation
        window.location.href = url;
    }
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    headerElement = document.querySelector('header');
    loadFooter();
    // Setup SPA navigation after header is loaded
    setupSPANavigation();
});
