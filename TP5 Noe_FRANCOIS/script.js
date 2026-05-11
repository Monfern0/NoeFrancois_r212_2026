// Données
const projets = [
  { id: 1, titre: "Site vitrine",     description: "Un site pour une boulangerie locale. Design responsive et moderne.", tags: ["HTML", "CSS"] },
  { id: 2, titre: "Quiz interactif",  description: "Application de quiz avec score et timer.",                           tags: ["JS", "HTML"] },
  { id: 3, titre: "Portfolio v1",     description: "Ma première version de portfolio.",                                  tags: ["HTML", "CSS"] },
  { id: 4, titre: "Dashboard météo",  description: "Tableau de bord météo avec API Open Meteo.",                        tags: ["JS", "CSS"] },
  { id: 5, titre: "Blog tech",        description: "Blog statique sur le développement web.",                           tags: ["HTML", "CSS", "JS"] },
  { id: 6, titre: "Jeu du pendu",     description: "Jeu du pendu en JavaScript vanilla.",                               tags: ["JS"] }
];

// ---- Affichage ----

function afficherProjets(liste) {
  const grille = document.querySelector('#grille');
  grille.innerHTML = '';

  liste.forEach(projet => {
    const carte = document.createElement('div');
    carte.className = 'carte';
    carte.innerHTML = `
      <h3>${projet.titre}</h3>
      <p>${projet.description}</p>
      <div class="carte-tags">
        ${projet.tags.map(t => `<span>${t}</span>`).join('')}
      </div>
      <button data-id="${projet.id}">Voir détail</button>
    `;
    grille.appendChild(carte);
  });

  grille.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => ouvrirModale(Number(btn.dataset.id)));
  });
}

// ---- Filtres ----

document.querySelectorAll('.filtre').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filtre').forEach(f => f.classList.remove('actif'));
    btn.classList.add('actif');

    const tag = btn.dataset.tag;
    const liste = tag === 'tous' ? projets : projets.filter(p => p.tags.includes(tag));
    afficherProjets(liste);
  });
});

// ---- Modale ----

const modale = document.querySelector('#modale');

function ouvrirModale(id) {
  const projet = projets.find(p => p.id === id);
  if (!projet) return;

  document.querySelector('#modale-body').innerHTML = `
    <h2>${projet.titre}</h2>
    <p>${projet.description}</p>
    <p>Tags : ${projet.tags.join(', ')}</p>
  `;

  modale.setAttribute('aria-hidden', 'false');
  document.querySelector('#modale-fermer').focus();
}

function fermerModale() {
  modale.setAttribute('aria-hidden', 'true');
}

document.querySelector('#modale-fermer').addEventListener('click', fermerModale);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') fermerModale();
});

// ---- Thème sombre ----

const btnTheme = document.querySelector('#btn-theme');

function appliquerTheme(dark) {
  document.body.classList.toggle('dark', dark);
  btnTheme.textContent = dark ? '☀️' : '🌙';
  btnTheme.setAttribute('aria-label', dark ? 'Désactiver le mode sombre' : 'Activer le mode sombre');
}

// Restaurer le thème sauvegardé
appliquerTheme(localStorage.getItem('theme') === 'dark');

btnTheme.addEventListener('click', () => {
  const dark = !document.body.classList.contains('dark');
  appliquerTheme(dark);
  localStorage.setItem('theme', dark ? 'dark' : 'light');
});

// ---- Init ----

afficherProjets(projets);