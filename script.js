function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Mostrar a seção inicial ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    showSection('inicio');
});