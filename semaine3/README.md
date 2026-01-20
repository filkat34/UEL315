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

```javascript
const newBook = db.getCollection("dblp").insertOne({
  type: "Book",
  title:
    "Modern Database Systems: The Object Model, Interoperability, and Beyond.",
  year: 1995,
  publisher: "ACM Press and Addison-Wesley",
  authors: ["Won Kim"],
  source: "DBLP",
});
console.log(newBook);
```

Sortie console :

```javascript
{
  acknowledged: true,
  insertedId: ObjectId('696ea8e22cb59dfa64fc830e')
}
```

### Requête 2

```javascript
// Insérer un nouvel enregistrement dans la collection
const newArticle = db.getCollection("dblp").insertOne({
  type: "Article",
  title: "Pas d'inspiration",
  year: 2026,
  publisher: "PULIM",
  authors: ["Filippos Katsanos", "John Doe"],
  source: "DBLP",
});

console.log(newArticle);
```

Sortie console :

```javascript
{
  acknowledged: true,
  insertedId: ObjectId('696ea8e22cb59dfa64fc830f')
}
```

### Requête 3

```javascript
// Afficher le nombre de publications de type « Book »
const bookCount = db.getCollection("dblp").countDocuments({ type: "Book" });
console.log("Nombre de livres:", bookCount);
```

Sortie console :

```console
Nombre de livres:
92
```

### Requête 4

```javascript
// Afficher toutes les publications dont je suis l'auteur
const authorName = "Filippos Katsanos";
const authorsPublications = db
  .getCollection("dblp")
  .find({ authors: authorName });
console.log(`Publications de ${authorName}:`, authorsPublications.toArray());
```

Sortie console :

```console
Publications de Filippos Katsanos:
[
  {
    _id: ObjectId('696eab4b383f3160efdab934'),
    type: 'Article',
    title: "Pas d'inspiration",
    year: 2026,
    publisher: 'PULIM',
    authors: [ 'Filippos Katsanos', 'John Doe' ],
    source: 'DBLP'
  },
]
```

### Requête 5

```javascript
//Afficher les titres des publications de type « Article » depuis 2012
const articlesSince2012 = db
  .getCollection("dblp")
  .find({ type: "Article", year: { $gte: 2012 } });
const titlesSince2012 = articlesSince2012
  .map((article) => article.title)
  .toArray();
console.log("Titres des articles depuis 2012:", titlesSince2012);
```

Sortie console :

```console
Titres des articles depuis 2012:
[
  'Shared Interfaces for Co-located Interaction.',
  'The Semantic Product Memory: An Interactive Black Box for Smart Objects.',
  'Perspectives on Reasoning About Time.',
  'A SemProM Use Case: Maintenance of Factory and Automotive Components.',
  'A SemProM Use Case: Health Care and Compliance.',
  'Controlling Interaction with Digital Product Memories.',
  'Considering the Aesthetics of Ubiquitous Displays.',
  "Audience Measurement for Digital Signage: Exploring the Audience's Perspective.",
  'The Smart SemProM.',
  'A SemProM Use Case: Tracking & Tracing for Green Logistics and Integrity Control.',
  'Interaction Modalities for Digital Product Memories.',
  'From Research to Practice: Automated Negotiations with People.',
  'A Summary of End-User Feedback on Digital Product Memories.',
  'The Design, Deployment and Evaluation of Situated Display-Based Systems to Support Coordination and Community.',
  'The SemProM Data Format.',
  'DPM Mapper: A Concept to Bridge the Gap Between XML-Based Digital Product Memories and Their Binary Representation.',
  'Supporting Interaction with Digital Product Memories.',
  'Towards an Integrated Framework for Semantic Product Memories.',
  'Virtual Technologies and Empowerment of Users of Rehabilitation.',
  'A Robotic Platform for Building and Exploiting Digital Product Memories.',
  'Hardware Requirements for Digital Product Memories.',
  'Ubiquitous Display Environments: An Overview.',
  "Analysis and Prediction of Museum Visitors' Behavioral Pattern Types.",
  'A Digital Product Memory Architecture for Cars.',
  'Applying Digital Product Memories in Industrial Production.',
  'The Block Interface: Accessing Digital Product Memories.',
  'Challenges and Solutions of Ubiquitous User Modeling.',
  'Using Basic RFID-Based Digital Product Memories for Protection against Counterfeit Goods in Manufacturing Plants.',
  'Enhancement of Consumer Support in Retail Scenarios by Utilization of Semantic Product Memories.',
  'Distributed Digital Product Memories.',
  'Capturing Sensor Data in the SemProM Automotive Scenario.',
  'Trust Management of Ubiquitous Multi-Display Environments.',
  'xioScreen: Experiences Gained from Building a Series of Prototypes of Interactive Public Displays.',
  'Context-Sensitive Display Environments.',
  'The Object Memory Server for Semantic Product Memories.',
  'SemProM - Dissemination and Impact.',
  'Clustering and Prediction of Rankings Within a Kemeny Distance Framework.',
  'Supervised Classification of Facial Expressions.',
  'Correction of Incoherences in Statistical Matching.',
  'Importance Sampling: A Variance Reduction Method for Credit Risk Models.',
  'Classifying Tourism Destinations: An Application of Network Analysis.',
  'A Hierarchical Clustering Approach to Modularity Maximization.',
  "Measuring the Success Factors of a Website: Statistical Methods and an Application to a 'Web District'.",
  'Assessing Stability in NonLinear PCA with Hierarchical Data.',
  'Model-Based Classification Via Patterned Covariance Analysis.',
  'Nonparametric Multivariate Inference Via Permutation Tests for CUB Models.',
  'Recognising Cello Performers Using Timbre Models.',
  'Clustering Data Streams by On-Line Proximity Updating.',
  'Auralization of Auditory Models.',
  'A New Fuzzy Method to Classify Professional Profiles from Job Announcements.',
  'Energy Consumption - Gross Domestic Product Causal Relationship in the Italian Regions.',
  'A Gaussian-Von Mises Hidden Markov Model for Clustering Multivariate Linear-Circular Data.',
  'Factor Preselection and Multiple Measures of Dependence.',
  'A Simplified Latent Variable Structural Equation Model with Observable Variables Assessed on Ordinal Scales.',
  'Logic Based Conjoint Analysis Using the Commuting Quantum Query Language.',
  'Shared Components Models in Joint Disease Mapping: A Comparison.',
  'The Analysis of Network Additionality in the Context of Territorial Innovation Policy: The Case of Italian Technological Districts.',
  'One-Mode Three-Way Analysis Based on Result of One-Mode Two-Way Analysis.',
  'Comparison of Some Chosen Tests of Independence of Value-at-Risk Violations.',
  'Robustness Versus Consistency in Ill-Posed Classification and Regression Problems.',
  'The Combined Median Rank-Based Gini Index for Customer Satisfaction Analysis.',
  'Parallel Coordinate Plots in Archaeology.',
  'Modified Randomized Modularity Clustering: Adapting the Resolution Limit.',
  'Antecedents and Outcomes of Participation in Social Networking Sites.',
  'On Clustering and Classification Via Mixtures of Multivariate t-Distributions.',
  'On the Simultaneous Analysis of Clinical and Omics Data: A Comparison of Globalboosttest and Pre-validation Techniques.',
  'Size and Power of Multivariate Outlier Detection Rules.',
  'On Matters of Invariance in Latent Variable Models: Reflections on the Concept, and its Relations in Classical and Item Response Theory.',
  'Comparison of Classical and Sequential Design of Experiments in Note Onset Detection.',
  'Simulation Experiments for Similarity Indexes Between Two Hierarchical Clusterings.',
  'A Model for the Clustering of Variables Taking into Account External Data.',
  'Product Design Optimization Using Ant Colony And Bee Algorithms: A Comparison.',
  'Using the Variation Coefficient for Adaptive Discrete Beta Kernel Graduation.',
  'Hospital Clustering in the Treatment of Acute Myocardial Infarction Patients Via a Bayesian Semiparametric Approach.',
  'Factor PD-Clustering.',
  'A Continuous Time Mover-Stayer Model for Labor Market in a Northern Italian Area.',
  'On the Number of Modes of Finite Mixtures of Elliptical Distributions.',
  'Ordering Curves by Data Depth.',
  'Cluster Analysis Based on Pre-specified Multiple Layer Structure.',
  'Local Clique Merging: An Extension of the Maximum Common Subgraph Measure with Applications in Structural Bioinformatics.',
  'A Two Layers Incremental Discretization Based on Order Statistics.',
  'Correspondence Analysis in the Case of Outliers.',
  'A Comparison of Objective Bayes Factors for Variable Selection in Linear Regression Models.',
  'An Approach to Ranking the Hedge Fund Industry.',
  'Applying Location Planning Algorithms to Schools: The Case of Special Education in Hesse (Germany).',
  'The Application of M-Function Analysis to the Geographical Distribution of Earthquake Sequence.',
  'Component Analysis for Structural Equation Models with Concomitant Indicators.',
  'Model-Based Clustering of Multistate Data with Latent Change: An Application with DHS Data.',
  'Cluster It! Semiautomatic Splitting and Naming of Classification Concepts.',
  'Identification of Risk Factors in Coronary Bypass Surgery.',
  'A Case Study About the Effort to Classify Music Intervals by Chroma and Spectrum Analysis.',
  'Visualizing Data in Social and Behavioral Sciences: An Application of PARAMAP on Judicial Statistics.',
  'Interactive Principal Components Analysis: A New Technological Resource in the Classroom.',
  'Linear Logistic Models with Relaxed Assumptions in R.',
  'Determining the Similarity Between US Cities Using a Gravity Model for Search Engine Query Data.',
  'An Evaluation Measure for Learning from Imbalanced Data Based on Asymmetric Beta Distribution.',
  'Beanplot Data Analysis in a Temporal Framework.',
  'A Further Proposal to Perform Multiple Imputation on a Bunch of Polytomous Items Based on Latent Class Analysis.',
  'Clustering and Registration of Multidimensional Functional Data.',
  'Summarizing and Detecting Structural Drifts from Multiple Data Streams.',
  ... 130 more items
]
```
