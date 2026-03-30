En prenant un tableau au format json, on peut intégrer des données au JS
Puis, une fois intégrées au JS, on peut les faire apparaître dans le HTML grâce à :
document.createElement(), element.innerHTML

Ensuite on peut les filtrer avec une liste de tags et un if 

De plus, on peut ajouter nous même localement des données étant sous le même format
Bien penser à event.preventDefault() pour éviter le rechargement de la page au moment du submit. Avec .value, on lit les contenus des inputs, et avec .push, on fait en sorte d'ajouter
les données entrées dans la mini base de données, tant que la page n'est pas actualisée

Cela se fait grâce à localStorage.setItem et localStorage.getItem pour stocker et récupérer une chaine 
et avec JSON.stringify, in convertit notre tableau en texte, et vice versa avec JSON.parse
