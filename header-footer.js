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
            <div class="back-button" id="backButton" style="display: none;"><span class="back-arrow"></span> Back</div>
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
                            <a href="customhomes/index.html">Custom Homes</a>
                            <ul class="submenu">
                                <li><a href="customhomes/ashbury-st/index.html">Ashbury St</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="multiunit/index.html">Multi Unit</a>
                            <ul class="submenu">
                                <li><a href="multiunit/22nd-street/index.html">22nd Street</a></li>
                                <li><a href="multiunit/bartlett-6/index.html">Bartlett 6</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="wholehouseremodel/index.html">Whole House Remodel</a>
                            <ul class="submenu">
                                <li><a href="wholehouseremodel/18th-ave-peter-parker/index.html">18th Ave - Peter Parker</a></li>
                                <li><a href="wholehouseremodel/21st-street/index.html">21st Street</a></li>
                                <li><a href="wholehouseremodel/coldwater-drive/index.html">Coldwater Drive</a></li>
                                <li><a href="wholehouseremodel/lincoln/index.html">Lincoln</a></li>
                                <li><a href="wholehouseremodel/stone-canyon/index.html">Stone Canyon</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="kitchenremodel/index.html">Kitchen Remodel</a>
                            <ul class="submenu">
                                <li><a href="kitchenremodel/castro-st/index.html">Castro St</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-item-with-submenu">
                            <a href="commercial/index.html">Commercial</a>
                            <ul class="submenu">
                                <li><a href="commercial/davids-tea/index.html">David's Tea</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="getting-started/index.html">Getting Started</a></li>
                <li><a href="press-awards/index.html">Press & Awards</a></li>
                <li><a href="contact/index.html">Contact</a></li>
                <li class="header-social-media">
                    <a href="https://nextdoor.com/pages/sacdev-inc-el-dorado-hills-ca/" target="_blank" rel="noopener noreferrer" class="header-social-icon" aria-label="Nextdoor"><img src="assets/nextdoor.png" alt="Nextdoor"></a>
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
                <a href="https://nextdoor.com/pages/sacdev-inc-el-dorado-hills-ca/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Nextdoor"><img src="assets/nextdoor.png" alt="Nextdoor"></a>
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
function loadHeader(forceReload = false) {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        // If header already exists and we're not forcing reload, skip
        if (!forceReload && headerElement && headerPlaceholder.querySelector('header')) {
            // Just update paths if needed, but don't reload
            return;
        }
        
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
        
        // Replace submenu links - only if they don't already have basePath
        if (!header.includes(basePath + 'customhomes/')) {
            header = header.replace(/href="customhomes\/index\.html/g, 'href="' + basePath + 'customhomes/index.html');
            header = header.replace(/href="customhomes\//g, 'href="' + basePath + 'customhomes/');
        }
        if (!header.includes(basePath + 'multiunit/')) {
            header = header.replace(/href="multiunit\/index\.html/g, 'href="' + basePath + 'multiunit/index.html');
            header = header.replace(/href="multiunit\//g, 'href="' + basePath + 'multiunit/');
        }
        if (!header.includes(basePath + 'wholehouseremodel/')) {
            header = header.replace(/href="wholehouseremodel\/index\.html/g, 'href="' + basePath + 'wholehouseremodel/index.html');
            header = header.replace(/href="wholehouseremodel\//g, 'href="' + basePath + 'wholehouseremodel/');
        }
        if (!header.includes(basePath + 'kitchenremodel/')) {
            header = header.replace(/href="kitchenremodel\/index\.html/g, 'href="' + basePath + 'kitchenremodel/index.html');
            header = header.replace(/href="kitchenremodel\//g, 'href="' + basePath + 'kitchenremodel/');
        }
        if (!header.includes(basePath + 'commercial/')) {
            header = header.replace(/href="commercial\/index\.html/g, 'href="' + basePath + 'commercial/index.html');
            header = header.replace(/href="commercial\//g, 'href="' + basePath + 'commercial/');
        }
        
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
            const currentPath = window.location.pathname;
            
            // Resolve relative URLs properly
            let resolvedUrl;
            if (href.startsWith('/')) {
                // Absolute path
                resolvedUrl = href;
            } else if (href.startsWith('./')) {
                // Relative to current directory
                const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
                resolvedUrl = currentDir + href.substring(2);
            } else {
                // Relative path - resolve from current location
                const baseUrl = new URL(window.location.href);
                const currentDir = baseUrl.pathname.substring(0, baseUrl.pathname.lastIndexOf('/') + 1);
                resolvedUrl = new URL(href, baseUrl.origin + currentDir).pathname;
            }
            
            // Normalize the path (remove double slashes, etc.)
            resolvedUrl = resolvedUrl.replace(/\/+/g, '/');
            
            // Handle hash links (same page anchors)
            if (currentPath === resolvedUrl && href.includes('#')) {
                // Allow normal anchor navigation
                return;
            }
            
            // Skip if it's the same page without hash
            if (currentPath === resolvedUrl && !href.includes('#')) {
                e.preventDefault();
                return;
            }
            
            // Intercept internal navigation
            e.preventDefault();
            navigateToPage(resolvedUrl);
        } catch (err) {
            // If URL parsing fails, allow normal navigation
            console.error('URL parsing error:', err);
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
        // Update URL without reload
        window.history.pushState({ url: url }, '', url);
        
        // Load the page content
        await loadPageContent(url, true);
    } catch (error) {
        console.error('Navigation error:', error);
        // Fallback to normal navigation
        window.location.href = url;
    } finally {
        isNavigating = false;
    }
}

// Load page content via AJAX
async function loadPageContent(url, scrollToTop = true) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to load page');
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
        
        // STEP 1: Replace ALL styles in <head> (keep header-footer styles, replace everything else)
        const newStyles = doc.querySelectorAll('head style');
        const existingStyles = Array.from(document.querySelectorAll('head style'));
        
        // Identify which existing styles are header-footer related
        const headerFooterStyles = existingStyles.filter(style => {
            const styleText = style.textContent || '';
            return styleText.includes('header') || styleText.includes('footer') || 
                   styleText.includes('Header') || styleText.includes('Footer') ||
                   styleText.includes('.header') || styleText.includes('.footer') ||
                   styleText.includes('#header') || styleText.includes('#footer');
        });
        
        // Remove all non-header-footer styles
        existingStyles.forEach(style => {
            if (!headerFooterStyles.includes(style)) {
                style.remove();
            }
        });
        
        // Add all new styles from the loaded page (except header-footer ones)
        newStyles.forEach(newStyle => {
            const styleText = newStyle.textContent || '';
            // Skip header-footer styles (we keep the existing ones)
            if (!styleText.includes('header') && !styleText.includes('footer') && 
                !styleText.includes('Header') && !styleText.includes('Footer') &&
                !styleText.includes('.header') && !styleText.includes('.footer') &&
                !styleText.includes('#header') && !styleText.includes('#footer')) {
                const styleElement = document.createElement('style');
                styleElement.textContent = styleText;
                document.head.appendChild(styleElement);
            }
        });
        
        // STEP 2: Update page title
        const newTitle = doc.querySelector('title');
        if (newTitle) {
            document.title = newTitle.textContent;
        }
        
        // STEP 3: Extract and replace body content (everything except header)
        // Get all content from new page's body
        const newBodyContent = doc.body;
        
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
        
        // STEP 3.5: Force update hero image by finding it in new styles and applying directly
        const heroElement = document.querySelector('.project-hero');
        if (heroElement) {
            // Find the hero image URL from the new page's styles
            newStyles.forEach(newStyle => {
                const styleText = newStyle.textContent || '';
                // Look for .project-hero background-image
                const heroMatch = styleText.match(/\.project-hero\s*\{[^}]*background-image:\s*url\(['"]?([^'")]+)['"]?\)/);
                if (heroMatch) {
                    let imageUrl = heroMatch[1];
                    // Resolve relative URLs
                    if (!imageUrl.startsWith('http') && !imageUrl.startsWith('//') && !imageUrl.startsWith('/')) {
                        const newPageBase = url.substring(0, url.lastIndexOf('/') + 1);
                        try {
                            imageUrl = new URL(imageUrl, window.location.origin + newPageBase).pathname;
                        } catch (e) {
                            // If URL parsing fails, use as-is
                        }
                    }
                    // Apply directly to element
                    heroElement.style.backgroundImage = `url('${imageUrl}')`;
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
        const newScripts = doc.querySelectorAll('script');
        newScripts.forEach(oldScript => {
            // Skip header-footer.js
            if (oldScript.src && oldScript.src.includes('header-footer.js')) {
                return;
            }
            
            const newScript = document.createElement('script');
            if (oldScript.src) {
                newScript.src = oldScript.src;
                newScript.async = oldScript.async;
                newScript.defer = oldScript.defer;
            } else {
                newScript.textContent = oldScript.textContent;
            }
            document.body.appendChild(newScript);
        });
        
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
