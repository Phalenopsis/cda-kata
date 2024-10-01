# pickReviewer Function

## Description

La fonction `pickReviewer` permet de désigner aléatoirement un élève parmi un tableau d'objets **students**. Son objectif est de s'assurer qu'un élève ne puisse pas être désigné deux fois avant que tous les autres aient été choisis au moins une fois. Une fois que tous les élèves ont été choisis, le processus recommence.

## Fonctionnalités

- Sélection aléatoire d'un élève.
- Assure que chaque élève est sélectionné au moins une fois avant qu'un élève puisse être choisi à nouveau.
- Suivi de l'état de sélection grâce à la propriété `hasReviewed` de chaque objet élève.

## Paramètres

- **students** (Array): Un tableau d'objets contenant les informations sur les élèves. Chaque objet élève possède les propriétés suivantes :
  - `name` (String): Le nom de l'élève.
  - `hasReviewed` (Boolean): Un indicateur qui indique si l'élève a déjà été sélectionné.

Exemple de tableau `students` :

```javascript
let eleves = [
  { name: 'Alice', hasReviewed: false },
  { name: 'Bob', hasReviewed: false },
  { name: 'Charlie', hasReviewed: false },
  { name: 'David', hasReviewed: false }
];