# UEL315 Base de données (Groupe D) - Semaine 3

## Membres du groupe

| Etudiant.e  |   Alias    |
| :---------: | :--------: |
| Mathilde C. | Clouddy23  |
|   Kamo G.   | Spaghette5 |
| Mathieu L.  |  mathleys  |
| Filippos K. |  filkat34  |
|  Yamine D.  | yamine-dr  |

## Répartition du travail

- [ ] Exercice 1 (en entier) - Yamine
- [ ] Exercice 2 (requêtes 1 à 5)
- [ ] Exercice 2 (requêtes 6 à 9) - Kamo
- [x] Exercice 3 (requêtes 1 à 5) - Filippos
- [ ] Exercice 3 (requêtes 6 à 10)

## Exercice 1

## Exercice 2

## Exercice 3

### Requête 1

```js
// Ajouter une nouvelle publication de type « Book »
db.getCollection("dblp").insertOne({
  type: "Book",
  title:
    "Modern Database Systems: The Object Model, Interoperability, and Beyond.",
  year: 1995,
  publisher: "ACM Press and Addison-Wesley",
  authors: ["Won Kim"],
  source: "DBLP",
});
```

Playground Result :

```js
{
  "acknowledged": true,
  "insertedId": {
    "$oid": "696f428250d6a3afcbd93e5d"
  }
}
```

### Requête 2

```javascript
// Ajouter une nouvelle publication de type « Article »
db.getCollection("dblp").insertOne({
  type: "Article",
  title: "Pas d'inspiration",
  year: 2026,
  publisher: "PULIM",
  authors: ["Filippos Katsanos", "John Doe"],
  source: "DBLP",
});
```

Playground Result :

```js
{
  "acknowledged": true,
  "insertedId": {
    "$oid": "696f42b90b1683a5a82d390b"
  }
}
```

### Requête 3

```javascript
// Afficher le nombre de publications de type « Book »
db.getCollection("dblp").countDocuments({ type: "Book" });
```

Playground Result :

```console
92
```

### Requête 4

```javascript
// Afficher toutes les publications dont je suis l'auteur
db.getCollection("dblp").find({ authors: "Filippos Katsanos" });
```

Playground result :

```js
[
  {
    _id: {
      $oid: "696f42b90b1683a5a82d390b",
    },
    type: "Article",
    title: "Pas d'inspiration",
    year: 2026,
    publisher: "PULIM",
    authors: ["Filippos Katsanos", "John Doe"],
    source: "DBLP",
  },
];
```

### Requête 5

```javascript
//Afficher le titre de toutes les publications depuis 2012 inclus
//Pour tout afficher utiliser .toArray() pour éviter le retour du curseur seulement
db.getCollection("dblp")
  .find({ year: { $gte: 2012 } }, { title: 1, _id: 0 })
  .toArray();
```

Playground result (extrait) :

```js
[
  {
    "title": "Shared Interfaces for Co-located Interaction."
  },
  {
    "title": "The Semantic Product Memory: An Interactive Black Box for Smart Objects."
  },
  {
    "title": "Perspectives on Reasoning About Time."
  },
  {
    "title": "A SemProM Use Case: Maintenance of Factory and Automotive Components."
  },
  {
    "title": "A SemProM Use Case: Health Care and Compliance."
  },
  {
    "title": "Controlling Interaction with Digital Product Memories."
  },
  {
    "title": "Foundations of Rule Learning"
  },
  {
    "title": "Ubiquitous Display Environments"
  },
  {
    "title": "Considering the Aesthetics of Ubiquitous Displays."
  },
  {
    "title": "Language Processing with Perl and Prolog - Theories, Implementation, and Application"
  },
  {
    "title": "SemProM - Foundations of Semantic Product Memories for the Internet of Things"
  },
  {
    "title": "Audience Measurement for Digital Signage: Exploring the Audience's Perspective."
  },
  {
    "title": "The Smart SemProM."
  } [...]
]
```
