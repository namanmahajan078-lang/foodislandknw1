/* ============================================
   FOOD ISLAND — Menu Page Renderer
   Dynamic menu rendering with category filtering
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const categoriesContainer = document.getElementById('menuCategories');
  const menuContainer = document.getElementById('menuContainer');

  if (!categoriesContainer || !menuContainer || typeof MENU_DATA === 'undefined') return;

  let activeCategory = 'all';

  // ── Build Category Filter Buttons ──
  function buildCategoryButtons() {
    const allBtn = document.createElement('button');
    allBtn.className = 'menu-cat-btn active';
    allBtn.textContent = 'All Items';
    allBtn.dataset.category = 'all';
    allBtn.setAttribute('role', 'tab');
    allBtn.setAttribute('aria-selected', 'true');
    categoriesContainer.appendChild(allBtn);

    MENU_DATA.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'menu-cat-btn';
      btn.textContent = `${cat.icon} ${cat.category}`;
      btn.dataset.category = cat.category;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', 'false');
      categoriesContainer.appendChild(btn);
    });

    // Event delegation
    categoriesContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.menu-cat-btn');
      if (!btn) return;

      activeCategory = btn.dataset.category;

      // Update active state
      categoriesContainer.querySelectorAll('.menu-cat-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      renderMenu();

      // Smooth scroll to menu content
      const navHeight = document.getElementById('navbar')?.offsetHeight || 80;
      const catBarHeight = categoriesContainer.offsetHeight;
      const menuTop = menuContainer.getBoundingClientRect().top + window.scrollY - navHeight - catBarHeight - 20;
      window.scrollTo({ top: menuTop, behavior: 'smooth' });
    });
  }

  // ── Render a single menu item ──
  function createMenuItem(item) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
      <div class="menu-item-info">
        <div class="menu-item-name">${item.name}</div>
        ${item.desc ? `<div class="menu-item-desc">${item.desc}</div>` : ''}
      </div>
      <div class="menu-item-price">₹${item.price}</div>
    `;
    return div;
  }

  // ── Render the full menu ──
  function renderMenu() {
    menuContainer.innerHTML = '';

    const categoriesToRender = activeCategory === 'all'
      ? MENU_DATA
      : MENU_DATA.filter(cat => cat.category === activeCategory);

    categoriesToRender.forEach(cat => {
      const section = document.createElement('div');
      section.className = 'menu-category-section reveal visible';

      // Category header
      const totalItems = cat.items
        ? cat.items.length
        : cat.subcategories
          ? cat.subcategories.reduce((sum, sub) => sum + sub.items.length, 0)
          : 0;

      section.innerHTML = `
        <div class="menu-category-header">
          <span class="menu-category-icon">${cat.icon}</span>
          <h2 class="menu-category-title">${cat.category}</h2>
          <span class="menu-category-count">${totalItems} items</span>
        </div>
      `;

      // Items or subcategories
      if (cat.items) {
        const grid = document.createElement('div');
        grid.className = 'menu-items-grid';
        cat.items.forEach(item => grid.appendChild(createMenuItem(item)));
        section.appendChild(grid);
      }

      if (cat.subcategories) {
        cat.subcategories.forEach(sub => {
          const subTitle = document.createElement('h3');
          subTitle.className = 'menu-subcategory-title';
          subTitle.textContent = sub.name;
          section.appendChild(subTitle);

          const grid = document.createElement('div');
          grid.className = 'menu-items-grid';
          sub.items.forEach(item => grid.appendChild(createMenuItem(item)));
          section.appendChild(grid);
        });
      }

      menuContainer.appendChild(section);
    });

    // Animate in
    requestAnimationFrame(() => {
      menuContainer.querySelectorAll('.menu-category-section').forEach((sec, i) => {
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(20px)';
        setTimeout(() => {
          sec.style.transition = 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
          sec.style.opacity = '1';
          sec.style.transform = 'translateY(0)';
        }, i * 80);
      });
    });
  }

  // ── Initialize ──
  buildCategoryButtons();
  renderMenu();

  // ── Search functionality ──
  // Add search bar to categories
  const searchWrapper = document.createElement('div');
  searchWrapper.style.cssText = 'width:100%; display:flex; justify-content:center; margin-bottom:1rem;';
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = '🔍 Search menu items...';
  searchInput.className = 'form-input';
  searchInput.id = 'menuSearch';
  searchInput.style.cssText = 'max-width:400px; text-align:center; background:var(--clr-surface); border-color:var(--clr-border);';
  searchWrapper.appendChild(searchInput);
  categoriesContainer.parentNode.insertBefore(searchWrapper, categoriesContainer);

  let searchTimeout;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const query = searchInput.value.trim().toLowerCase();

      if (!query) {
        renderMenu();
        return;
      }

      menuContainer.innerHTML = '';

      // Filter and display matching items
      const results = [];
      MENU_DATA.forEach(cat => {
        const matchedItems = [];

        if (cat.items) {
          cat.items.forEach(item => {
            if (item.name.toLowerCase().includes(query) ||
                (item.desc && item.desc.toLowerCase().includes(query))) {
              matchedItems.push(item);
            }
          });
        }

        if (cat.subcategories) {
          cat.subcategories.forEach(sub => {
            sub.items.forEach(item => {
              if (item.name.toLowerCase().includes(query) ||
                  (item.desc && item.desc.toLowerCase().includes(query))) {
                matchedItems.push(item);
              }
            });
          });
        }

        if (matchedItems.length > 0) {
          results.push({ ...cat, items: matchedItems, subcategories: undefined });
        }
      });

      if (results.length === 0) {
        menuContainer.innerHTML = `
          <div class="text-center" style="padding: 4rem 0;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
            <h3 style="font-family: var(--ff-heading); margin-bottom: 0.5rem;">No items found</h3>
            <p style="color: var(--clr-text-muted);">Try searching for something else — like "paneer", "dosa", or "paratha"</p>
          </div>
        `;
        return;
      }

      results.forEach(cat => {
        const section = document.createElement('div');
        section.className = 'menu-category-section';

        section.innerHTML = `
          <div class="menu-category-header">
            <span class="menu-category-icon">${cat.icon}</span>
            <h2 class="menu-category-title">${cat.category}</h2>
            <span class="menu-category-count">${cat.items.length} results</span>
          </div>
        `;

        const grid = document.createElement('div');
        grid.className = 'menu-items-grid';
        cat.items.forEach(item => grid.appendChild(createMenuItem(item)));
        section.appendChild(grid);

        menuContainer.appendChild(section);
      });

      // Animate
      requestAnimationFrame(() => {
        menuContainer.querySelectorAll('.menu-category-section').forEach((sec, i) => {
          sec.style.opacity = '0';
          sec.style.transform = 'translateY(20px)';
          setTimeout(() => {
            sec.style.transition = 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
            sec.style.opacity = '1';
            sec.style.transform = 'translateY(0)';
          }, i * 80);
        });
      });
    }, 300);
  });
});
