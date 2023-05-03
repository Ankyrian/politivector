(function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const elems = entry.target.querySelectorAll('.no-reveal');

            elems.forEach(elem => {
                if (entry.isIntersecting && elem) {
                    elem.classList.remove('no-reveal');
                    elem.classList.add('reveal');
                }
            });
        });
    }, {threshold: 0.9});

    window.addEventListener('load', () => {
        document.querySelectorAll('.grid-container div').forEach(elem => observer.observe(elem));
    });
})();