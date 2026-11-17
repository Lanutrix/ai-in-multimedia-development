/* Навигация по «книге»: одна страница за раз */
let currentPage = 1;
const totalPages = 40;

/* Карта ссылок меню -> номера страниц */
const pageMap = {
    1: 1,   // Титул
    2: 2,   // Введение
    3: 3,   // Раздел 1. 3D-моделирование
    4: 11,  // Раздел 2. Фото
    5: 20,  // Раздел 3. Видео
    6: 31,  // Раздел 4. Аудио
    7: 39,  // Заключение
    8: 40   // Источники
};

/* Определяет, к какому пункту меню относится страница */
function sectionLinkForPage(pageNum) {
    let section = 1;
    for (const linkNum in pageMap) {
        if (pageMap[linkNum] <= pageNum) {
            section = Number(linkNum);
        }
    }
    return section;
}

function showPage(pageNum, preventScroll = false) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const pageElement = document.getElementById('page-' + pageNum);
    if (pageElement) {
        pageElement.classList.add('active');
        currentPage = pageNum;
        markActiveLink();
        if (!preventScroll) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}

function markActiveLink() {
    const section = sectionLinkForPage(currentPage);
    document.querySelectorAll('.header-links a').forEach(link => {
        link.classList.toggle('active', Number(link.dataset.page) === section);
    });
}

function nextPage() {
    showPage(currentPage < totalPages ? currentPage + 1 : 1);
}

function prevPage() {
    showPage(currentPage > 1 ? currentPage - 1 : totalPages);
}

function goToPage(originalPageNum) {
    showPage(pageMap[originalPageNum] || originalPageNum);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Кнопка «наверх» */
window.addEventListener('scroll', () => {
    const btn = document.getElementById('toTopBtn');
    btn.classList.toggle('show', window.scrollY > 50);
});

/* Стрелки клавиатуры как в электронной книге */
window.addEventListener('keydown', (event) => {
    if (event.target.matches('input, textarea, select')) return;
    if (event.key === 'ArrowRight') nextPage();
    if (event.key === 'ArrowLeft') prevPage();
});

window.onload = () => showPage(1);
