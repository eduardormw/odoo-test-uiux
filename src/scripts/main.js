document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.nav-link');
    tabs.forEach((tab, index) => {
        tab.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                const nextTab = tabs[index + 1] || tabs[0];
                nextTab.focus();
            } else if (e.key === 'ArrowLeft') {
                const prevTab = tabs[index - 1] || tabs[tabs.length - 1];
                prevTab.focus();
            }
        });
    });
});

document.querySelectorAll('[role="tab"]').forEach((tab) => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('[role="tab"]').forEach(t => t.setAttribute('aria-selected', 'false'));
        e.target.setAttribute('aria-selected', 'true');
    });
});
