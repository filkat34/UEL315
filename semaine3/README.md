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

- [x] Exercice 1 (en entier) - Yamine
- [ ] Exercice 2 (requêtes 1 à 5)
- [ ] Exercice 2 (requêtes 6 à 9) - Kamo
- [x] Exercice 3 (requêtes 1 à 5) - Filippos
- [ ] Exercice 3 (requêtes 6 à 10)

## Exercice 1

### Requête 1.1

```js
// only show the "name.official" field (hide the id)
const projectionFields = {
  _id: 0,
  name: { official: 1 },
};

// find the countries n°10 to 22 (skip the 9 firsts)
db.pays
  .find()
  .skip(9) // skip the 9 firsts
  .limit(22 - 10) // get the number of countries we want
  .projection(projectionFields);
```

Playground result :

```js
[
  {
    name: {
      official: "Republic of Armenia",
    },
  },
  {
    name: {
      official: "American Samoa",
    },
  },
  {
    name: {
      official: "Antarctica",
    },
  },
  {
    name: {
      official: "Territory of the French Southern and Antarctic Lands",
    },
  },
  {
    name: {
      official: "Antigua and Barbuda",
    },
  },
  {
    name: {
      official: "Commonwealth of Australia",
    },
  },
  {
    name: {
      official: "Republic of Austria",
    },
  },
  {
    name: {
      official: "Republic of Azerbaijan",
    },
  },
  {
    name: {
      official: "Republic of Burundi",
    },
  },
  {
    name: {
      official: "Kingdom of Belgium",
    },
  },
  {
    name: {
      official: "Republic of Benin",
    },
  },
  {
    name: {
      official: "Burkina Faso",
    },
  },
];
```

### Requête 1.2

```js
// only show the "name.official" field (hide the id)
const projectionFields = {
  _id: 0,
  name: { official: 1 },
};

// find the countries n°10 to 22, sorted by area
db.pays
  .find()
  .skip(9) // skip the 9 firsts
  .limit(22 - 10) // get the number of countries we want
  .sort({ area: 1 }) // sort by area in ascending order
  .projection(projectionFields);
```

Playground result :

```js
[
  {
    name: {
      official:
        "Macao Special Administrative Region of the People's Republic of China",
    },
  },
  {
    name: {
      official: "Sint Maarten",
    },
  },
  {
    name: {
      official: "United States Minor Outlying Islands",
    },
  },
  {
    name: {
      official: "Territory of Norfolk Island",
    },
  },
  {
    name: {
      official: "Pitcairn Group of Islands",
    },
  },
  {
    name: {
      official: "Bouvet Island",
    },
  },
  {
    name: {
      official: "Saint Martin",
    },
  },
  {
    name: {
      official: "Bermuda",
    },
  },
  {
    name: {
      official: "British Indian Ocean Territory",
    },
  },
  {
    name: {
      official: "Most Serene Republic of San Marino",
    },
  },
  {
    name: {
      official: "Bailiwick of Guernsey",
    },
  },
  {
    name: {
      official: "Anguilla",
    },
  },
];
```

### Requête 1.3

```js
// find a specific country (by its capital): Mayotte
db.pays.findOne({ capital: ["Mamoudzou"] });
```

Playground result :

```js
{
  "_id": {
    "$oid": "697257a47002bdcec222545a"
  },
  "name": {
    "common": "Mayotte",
    "official": "Department of Mayotte",
    "native": {
      "fra": {
        "official": "Département de Mayotte",
        "common": "Mayotte"
      }
    }
  },
  "tld": [
    ".yt"
  ],
  "cca2": "YT",
  "ccn3": "175",
  "cca3": "MYT",
  "cioc": "",
  "independent": false,
  "status": "officially-assigned",
  "unMember": false,
  "unRegionalGroup": "",
  "currencies": {
    "EUR": {
      "name": "Euro",
      "symbol": "€"
    }
  },
  "idd": {
    "root": "+2",
    "suffixes": [
      "62"
    ]
  },
  "capital": [
    "Mamoudzou"
  ],
  "altSpellings": [
    "YT",
    "Department of Mayotte",
    "Département de Mayotte"
  ],
  "region": "Africa",
  "subregion": "Eastern Africa",
  "languages": {
    "fra": "French"
  },
  "translations": {
    "ara": {
      "official": "مايوت",
      "common": "مايوت"
    },
    "bre": {
      "official": "Departamant Mayotte",
      "common": "Mayotte"
    },
    "ces": {
      "official": "Mayotte",
      "common": "Mayotte"
    },
    "deu": {
      "official": "Übersee-Département Mayotte",
      "common": "Mayotte"
    },
    "est": {
      "official": "Mayotte",
      "common": "Mayotte"
    },
    "fin": {
      "official": "Mayotte",
      "common": "Mayotte"
    },
    "fra": {
      "official": "Département de Mayotte",
      "common": "Mayotte"
    },
    "hrv": {
      "official": "Odjel Mayotte",
      "common": "Mayotte"
    },
    "hun": {
      "official": "Mayotte",
      "common": "Mayotte"
    },
    "ita": {
      "official": "Dipartimento di Mayotte",
      "common": "Mayotte"
    },
    "jpn": {
      "official": "マイヨット島",
      "common": "マヨット"
    },
    "kor": {
      "official": "마요트",
      "common": "마요트"
    },
    "nld": {
      "official": "Afdeling Mayotte",
      "common": "Mayotte"
    },
    "per": {
      "official": "مجموعه شهرستانی مایوت",
      "common": "مایوت"
    },
    "pol": {
      "official": "Majotta",
      "common": "Majotta"
    },
    "por": {
      "official": "Departamento de Mayotte",
      "common": "Mayotte"
    },
    "rus": {
      "official": "Департамент Майотта",
      "common": "Майотта"
    },
    "slk": {
      "official": "Department Mayotte",
      "common": "Mayotte"
    },
    "spa": {
      "official": "Departamento de Mayotte",
      "common": "Mayotte"
    },
    "srp": {
      "official": "Kolektivitet Majot",
      "common": "Majot"
    },
    "swe": {
      "official": "Departementsområdet Mayotte",
      "common": "Mayotte"
    },
    "tur": {
      "official": "Mayotte",
      "common": "Mayotte"
    },
    "urd": {
      "official": "مایوٹ",
      "common": "مایوٹ"
    },
    "zho": {
      "official": "马约特",
      "common": "马约特"
    }
  },
  "latlng": [
    -12.83333333,
    45.16666666
  ],
  "landlocked": false,
  "borders": [],
  "area": 374,
  "flag": "🇾🇹",
  "demonyms": {
    "eng": {
      "f": "Mahoran",
      "m": "Mahoran"
    },
    "fra": {
      "f": "Mahoraise",
      "m": "Mahorais"
    }
  }
}
```

### Requête 1.4

```js
// search for countries with Dutch as one of their language:
// they must have the "languages.nld" property, because nld = Netherlands
const schema = {
  $jsonSchema: {
    required: ["languages"],
    properties: {
      languages: {
        bsonType: "object",
        required: ["nld"],
      },
    },
  },
};

// only show the "name.official" field (hide the id)
const projectionFields = {
  _id: 0,
  name: { official: 1 },
};

// execute the search
db.pays.find(schema).projection(projectionFields);
```

Playground result :

```js
[
  {
    name: {
      official: "Aruba",
    },
  },
  {
    name: {
      official: "Kingdom of Belgium",
    },
  },
  {
    name: {
      official: "Bonaire, Sint Eustatius and Saba",
    },
  },
  {
    name: {
      official: "Country of Curaçao",
    },
  },
  {
    name: {
      official: "Kingdom of the Netherlands",
    },
  },
  {
    name: {
      official: "Republic of Suriname",
    },
  },
  {
    name: {
      official: "Sint Maarten",
    },
  },
];
```

### Requête 1.5

```js
// search for countries beginning with 'D'
const query = {
  "name.official": { $regex: /^D/ },
};

db.pays.find(query).projection({ _id: 0, name: { official: 1 } });
```

Playground result :

```js
[
  {
    name: {
      official: "Democratic Republic of the Congo",
    },
  },
  {
    name: {
      official: "Dominican Republic",
    },
  },
  {
    name: {
      official: "Democratic Socialist Republic of Sri Lanka",
    },
  },
  {
    name: {
      official: "Department of Mayotte",
    },
  },
  {
    name: {
      official: "Democratic People's Republic of Korea",
    },
  },
  {
    name: {
      official: "Democratic Republic of São Tomé and Príncipe",
    },
  },
  {
    name: {
      official: "Democratic Republic of Timor-Leste",
    },
  },
];
```

### Requête 1.6

```js
// only show the "name.official" field (hide the id)
const projectionFields = {
  _id: 0,
  name: { official: 1 },
};

// execute the search: countries between 400000 and 500000 km²
db.pays
  .find({ area: { $gt: 400000, $lt: 500000 } })
  .projection(projectionFields);
```

```js
[
  {
    name: {
      official: "Republic of Cameroon",
    },
  },
  {
    name: {
      official: "Republic of Iraq",
    },
  },
  {
    name: {
      official: "Kingdom of Morocco",
    },
  },
  {
    name: {
      official: "Independent State of Papua New Guinea",
    },
  },
  {
    name: {
      official: "Republic of Paraguay",
    },
  },
  {
    name: {
      official: "Kingdom of Sweden",
    },
  },
  {
    name: {
      official: "Turkmenistan",
    },
  },
  {
    name: {
      official: "Republic of Uzbekistan",
    },
  },
];
```

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
//Afficher le titre de toutes les publications de type « Article » depuis 2012
// Pour tout afficher utiliser .toArray() pour éviter le retour du curseur seulement
db.getCollection("dblp")
  .find({ type: "Article", year: { $gte: 2012 } }, { title: 1, _id: 0 })
  .toArray();
```

Playground result :

```js
[
  {
    title: "Shared Interfaces for Co-located Interaction.",
  },
  {
    title:
      "The Semantic Product Memory: An Interactive Black Box for Smart Objects.",
  },
  {
    title: "Perspectives on Reasoning About Time.",
  },
  {
    title:
      "A SemProM Use Case: Maintenance of Factory and Automotive Components.",
  },
  {
    title: "A SemProM Use Case: Health Care and Compliance.",
  },
  {
    title: "Controlling Interaction with Digital Product Memories.",
  },
  {
    title: "Considering the Aesthetics of Ubiquitous Displays.",
  },
  {
    title:
      "Audience Measurement for Digital Signage: Exploring the Audience's Perspective.",
  },
  {
    title: "The Smart SemProM.",
  },
  {
    title:
      "A SemProM Use Case: Tracking & Tracing for Green Logistics and Integrity Control.",
  },
  {
    title: "Interaction Modalities for Digital Product Memories.",
  },
  {
    title: "From Research to Practice: Automated Negotiations with People.",
  },
  {
    title: "A Summary of End-User Feedback on Digital Product Memories.",
  },
  {
    title:
      "The Design, Deployment and Evaluation of Situated Display-Based Systems to Support Coordination and Community.",
  },
  {
    title: "The SemProM Data Format.",
  },
  {
    title:
      "DPM Mapper: A Concept to Bridge the Gap Between XML-Based Digital Product Memories and Their Binary Representation.",
  },
  {
    title: "Supporting Interaction with Digital Product Memories.",
  },
  {
    title: "Towards an Integrated Framework for Semantic Product Memories.",
  },
  {
    title: "Virtual Technologies and Empowerment of Users of Rehabilitation.",
  },
  {
    title:
      "A Robotic Platform for Building and Exploiting Digital Product Memories.",
  },
  {
    title: "Hardware Requirements for Digital Product Memories.",
  },
  {
    title: "Ubiquitous Display Environments: An Overview.",
  },
  {
    title:
      "Analysis and Prediction of Museum Visitors' Behavioral Pattern Types.",
  },
  {
    title: "A Digital Product Memory Architecture for Cars.",
  },
  {
    title: "Applying Digital Product Memories in Industrial Production.",
  },
  {
    title: "The Block Interface: Accessing Digital Product Memories.",
  },
  {
    title: "Challenges and Solutions of Ubiquitous User Modeling.",
  },
  {
    title:
      "Using Basic RFID-Based Digital Product Memories for Protection against Counterfeit Goods in Manufacturing Plants.",
  },
  {
    title:
      "Enhancement of Consumer Support in Retail Scenarios by Utilization of Semantic Product Memories.",
  },
  {
    title: "Distributed Digital Product Memories.",
  },
  {
    title: "Capturing Sensor Data in the SemProM Automotive Scenario.",
  },
  {
    title: "Trust Management of Ubiquitous Multi-Display Environments.",
  },
  {
    title:
      "xioScreen: Experiences Gained from Building a Series of Prototypes of Interactive Public Displays.",
  },
  {
    title: "Context-Sensitive Display Environments.",
  },
  {
    title: "The Object Memory Server for Semantic Product Memories.",
  },
  {
    title: "SemProM - Dissemination and Impact.",
  },
  {
    title:
      "Clustering and Prediction of Rankings Within a Kemeny Distance Framework.",
  },
  {
    title: "Supervised Classification of Facial Expressions.",
  },
  {
    title: "Correction of Incoherences in Statistical Matching.",
  },
  {
    title:
      "Importance Sampling: A Variance Reduction Method for Credit Risk Models.",
  },
  {
    title:
      "Classifying Tourism Destinations: An Application of Network Analysis.",
  },
  {
    title: "A Hierarchical Clustering Approach to Modularity Maximization.",
  },
  {
    title:
      "Measuring the Success Factors of a Website: Statistical Methods and an Application to a 'Web District'.",
  },
  {
    title: "Assessing Stability in NonLinear PCA with Hierarchical Data.",
  },
  {
    title: "Model-Based Classification Via Patterned Covariance Analysis.",
  },
  {
    title:
      "Nonparametric Multivariate Inference Via Permutation Tests for CUB Models.",
  },
  {
    title: "Recognising Cello Performers Using Timbre Models.",
  },
  {
    title: "Clustering Data Streams by On-Line Proximity Updating.",
  },
  {
    title: "Auralization of Auditory Models.",
  },
  {
    title:
      "A New Fuzzy Method to Classify Professional Profiles from Job Announcements.",
  },
  {
    title:
      "Energy Consumption - Gross Domestic Product Causal Relationship in the Italian Regions.",
  },
  {
    title:
      "A Gaussian-Von Mises Hidden Markov Model for Clustering Multivariate Linear-Circular Data.",
  },
  {
    title: "Factor Preselection and Multiple Measures of Dependence.",
  },
  {
    title:
      "A Simplified Latent Variable Structural Equation Model with Observable Variables Assessed on Ordinal Scales.",
  },
  {
    title:
      "Logic Based Conjoint Analysis Using the Commuting Quantum Query Language.",
  },
  {
    title: "Shared Components Models in Joint Disease Mapping: A Comparison.",
  },
  {
    title:
      "The Analysis of Network Additionality in the Context of Territorial Innovation Policy: The Case of Italian Technological Districts.",
  },
  {
    title:
      "One-Mode Three-Way Analysis Based on Result of One-Mode Two-Way Analysis.",
  },
  {
    title:
      "Comparison of Some Chosen Tests of Independence of Value-at-Risk Violations.",
  },
  {
    title:
      "Robustness Versus Consistency in Ill-Posed Classification and Regression Problems.",
  },
  {
    title:
      "The Combined Median Rank-Based Gini Index for Customer Satisfaction Analysis.",
  },
  {
    title: "Parallel Coordinate Plots in Archaeology.",
  },
  {
    title:
      "Modified Randomized Modularity Clustering: Adapting the Resolution Limit.",
  },
  {
    title:
      "Antecedents and Outcomes of Participation in Social Networking Sites.",
  },
  {
    title:
      "On Clustering and Classification Via Mixtures of Multivariate t-Distributions.",
  },
  {
    title:
      "On the Simultaneous Analysis of Clinical and Omics Data: A Comparison of Globalboosttest and Pre-validation Techniques.",
  },
  {
    title: "Size and Power of Multivariate Outlier Detection Rules.",
  },
  {
    title:
      "On Matters of Invariance in Latent Variable Models: Reflections on the Concept, and its Relations in Classical and Item Response Theory.",
  },
  {
    title:
      "Comparison of Classical and Sequential Design of Experiments in Note Onset Detection.",
  },
  {
    title:
      "Simulation Experiments for Similarity Indexes Between Two Hierarchical Clusterings.",
  },
  {
    title:
      "A Model for the Clustering of Variables Taking into Account External Data.",
  },
  {
    title:
      "Product Design Optimization Using Ant Colony And Bee Algorithms: A Comparison.",
  },
  {
    title:
      "Using the Variation Coefficient for Adaptive Discrete Beta Kernel Graduation.",
  },
  {
    title:
      "Hospital Clustering in the Treatment of Acute Myocardial Infarction Patients Via a Bayesian Semiparametric Approach.",
  },
  {
    title: "Factor PD-Clustering.",
  },
  {
    title:
      "A Continuous Time Mover-Stayer Model for Labor Market in a Northern Italian Area.",
  },
  {
    title:
      "On the Number of Modes of Finite Mixtures of Elliptical Distributions.",
  },
  {
    title: "Ordering Curves by Data Depth.",
  },
  {
    title: "Cluster Analysis Based on Pre-specified Multiple Layer Structure.",
  },
  {
    title:
      "Local Clique Merging: An Extension of the Maximum Common Subgraph Measure with Applications in Structural Bioinformatics.",
  },
  {
    title: "A Two Layers Incremental Discretization Based on Order Statistics.",
  },
  {
    title: "Correspondence Analysis in the Case of Outliers.",
  },
  {
    title:
      "A Comparison of Objective Bayes Factors for Variable Selection in Linear Regression Models.",
  },
  {
    title: "An Approach to Ranking the Hedge Fund Industry.",
  },
  {
    title:
      "Applying Location Planning Algorithms to Schools: The Case of Special Education in Hesse (Germany).",
  },
  {
    title:
      "The Application of M-Function Analysis to the Geographical Distribution of Earthquake Sequence.",
  },
  {
    title:
      "Component Analysis for Structural Equation Models with Concomitant Indicators.",
  },
  {
    title:
      "Model-Based Clustering of Multistate Data with Latent Change: An Application with DHS Data.",
  },
  {
    title:
      "Cluster It! Semiautomatic Splitting and Naming of Classification Concepts.",
  },
  {
    title: "Identification of Risk Factors in Coronary Bypass Surgery.",
  },
  {
    title:
      "A Case Study About the Effort to Classify Music Intervals by Chroma and Spectrum Analysis.",
  },
  {
    title:
      "Visualizing Data in Social and Behavioral Sciences: An Application of PARAMAP on Judicial Statistics.",
  },
  {
    title:
      "Interactive Principal Components Analysis: A New Technological Resource in the Classroom.",
  },
  {
    title: "Linear Logistic Models with Relaxed Assumptions in R.",
  },
  {
    title:
      "Determining the Similarity Between US Cities Using a Gravity Model for Search Engine Query Data.",
  },
  {
    title:
      "An Evaluation Measure for Learning from Imbalanced Data Based on Asymmetric Beta Distribution.",
  },
  {
    title: "Beanplot Data Analysis in a Temporal Framework.",
  },
  {
    title:
      "A Further Proposal to Perform Multiple Imputation on a Bunch of Polytomous Items Based on Latent Class Analysis.",
  },
  {
    title: "Clustering and Registration of Multidimensional Functional Data.",
  },
  {
    title:
      "Summarizing and Detecting Structural Drifts from Multiple Data Streams.",
  },
  {
    title:
      "Computational Prediction of High-Level Descriptors of Music Personal Categories.",
  },
  {
    title: "Calibration with Spatial Data Constraints.",
  },
  {
    title:
      "Robust Random Effects Models: A Diagnostic Approach Based on the Forward Search.",
  },
  {
    title:
      "A Model-Based Approach for Qualitative Assessment in Opinion Mining.",
  },
  {
    title:
      "Outlier Detection for Geostatistical Functional Data: An Application to Sensor Data.",
  },
  {
    title: "High-Dimensional Bayesian Classifiers Using Non-Local Priors.",
  },
  {
    title:
      "Latent Class Models of Time Series Data: An Entropic-Based Uncertainty Measure.",
  },
  {
    title:
      "The Credit Accumulation Process to Assess the Performances of Degree Programs: An Adjusted Indicator Based on the Result of Entrance Tests.",
  },
  {
    title: "Efficient Spatial Segmentation of Hyper-spectral 3D Volume Data.",
  },
  {
    title:
      "Lifestyle Segmentation Based on Contents of Uploaded Images Versus Ratings of Items.",
  },
  {
    title:
      "Convex Optimization as a Tool for Correcting Dissimilarity Matrices for Regular Minimality.",
  },
  {
    title:
      "Multivariate Modelling of Cross-Commodity Price Relations Along the Petrochemical Value Chain.",
  },
  {
    title: "Modelling Spatial Variations of Fertility Rate in Italy.",
  },
  {
    title:
      "On Two Classes of Weighted Rank Correlation Measures Deriving from the Spearman's ?.",
  },
  {
    title: "An Approach to Forecasting Beanplot Time Series.",
  },
  {
    title:
      "Non-symmetrical Correspondence Analysis of Abbreviated Hard Laddering Interviews.",
  },
  {
    title:
      "Symbolic Cluster Representations for SVM in Credit Client Classification Tasks.",
  },
  {
    title:
      "Spatial Data Mining for Clustering: An Application to the Florentine Metropolitan Area Using RedCap.",
  },
  {
    title:
      "Mixture Model Clustering with Covariates Using Adjusted Three-Step Approaches.",
  },
  {
    title:
      "Solving the Minimum Sum of L1 Distances Clustering Problem by Hyperbolic Smoothing and Partition into Boundary and Gravitational Regions.",
  },
  {
    title:
      "Classification of Data Chunks Using Proximal Vector Machines and Singular Value Decomposition.",
  },
  {
    title:
      "A New Effective Method for Elimination of Systematic Error in Experimental High-Throughput Screening.",
  },
  {
    title: "Issues on Clustering and Data Gridding.",
  },
  {
    title:
      "User-Generated Content for Image Clustering and Marketing Purposes.",
  },
  {
    title: "Inference on the CUB Model: An MCMC Approach.",
  },
  {
    title: "Implications of Axiomatic Consensus Properties.",
  },
  {
    title:
      "Complexity Selection with Cross-validation for Lasso and Sparse Partial Least Squares Using High-Dimensional Data.",
  },
  {
    title:
      "Interpreting Error Measurement: A Case Study Based on Rasch Tree Approach.",
  },
  {
    title:
      "Piano and Guitar Tone Distinction Based on Extended Feature Analysis.",
  },
  {
    title:
      "A Metric Based Approach for the Least Square Regression of Multivariate Modal Symbolic Data.",
  },
  {
    title:
      "Misspecification Resistant Model Selection Using Information Complexity with Applications.",
  },
  {
    title:
      "Optimal Network Revenue Management Decisions Including Flexible Demand Data and Overbooking.",
  },
  {
    title:
      "Detecting Person Heterogeneity in a Large-Scale Orthographic Test Using Item Response Models.",
  },
  {
    title: "Graduation by Adaptive Discrete Beta Kernels.",
  },
  {
    title: "Principal Components Analysis for a Gaussian Mixture.",
  },
  {
    title: "Intrablocks Correspondence Analysis.",
  },
  {
    title: "Dynamic Data Analysis of Evolving Association Patterns.",
  },
  {
    title:
      "Can the Students' Career be Helpful in Predicting an Increase in Universities Income?",
  },
  {
    title: "Visualisation of Cluster Analysis Results.",
  },
  {
    title:
      "High Performance Hardware Architectures for Automated Music Classification.",
  },
  {
    title:
      "Vulnerability of Copula-VaR to Misspecification of Margins and Dependence Structure.",
  },
  {
    title: "Properties of a General Measure of Configuration Agreement.",
  },
  {
    title:
      "Performance Measurement of Italian Provinces in the Presence of Environmental Goals.",
  },
  {
    title:
      "A MCMC Approach for Learning the Structure of Gaussian Acyclic Directed Mixed Graphs.",
  },
  {
    title:
      "External Analysis of Asymmetric Multidimensional Scaling Based on Singular Value Decomposition.",
  },
  {
    title: "Web Panel Representativeness.",
  },
  {
    title: "Grouping Around Different Dimensional Affine Subspaces.",
  },
  {
    title:
      "A Clusterwise Regression Method for the Prediction of the Disposal Income in Municipalities.",
  },
  {
    title:
      "A New Distance Function for Prototype Based Clustering Algorithms in High Dimensional Spaces.",
  },
  {
    title: "An Approach for Topic Trend Detection.",
  },
  {
    title: "Sentiment Analysis of Online Media.",
  },
  {
    title:
      "Visualisation and Analysis of Affiliation Networks as Tools to Describe Professional Profiles.",
  },
  {
    title:
      "Variable Selection in Cluster Analysis: An Approach Based on a New Index.",
  },
  {
    title: "Clustering Ordinal Data via Latent Variable Models.",
  },
  {
    title:
      "Optimal Decision Rules for Constrained Record Linkage: An Evolutionary Approach.",
  },
  {
    title: "A Theoretical and Empirical Analysis of the Black-Litterman Model.",
  },
  {
    title: "Classification of Roman Tiles with Stamp PARDALIVS.",
  },
  {
    title: "Asymmetric Multidimensional Scaling Models for Seriation.",
  },
  {
    title: "Data Stream Summarization by Histograms Clustering.",
  },
  {
    title: "Graphical Models for Eliciting Structural Information.",
  },
  {
    title:
      "Comparing Earth Mover's Distance and its Approximations for Clustering Images.",
  },
  {
    title: "Adaptive Spectral Clustering in Molecular Simulation.",
  },
  {
    title:
      "An Efficient Algorithm for the Detection and Classification of Horizontal Gene Transfer Events and Identification of Mosaic Genes.",
  },
  {
    title: "Regularization and Model Selection with Categorical Covariates.",
  },
  {
    title:
      "Dynamic Principal Component Analysis: A Banking Customer Satisfaction Evaluation.",
  },
  {
    title:
      "Evolutionary Customer Evaluation: A Dynamic Approach to a Banking Case.",
  },
  {
    title:
      "A Two-Phase Clustering Based Strategy for Outliers Detection in Georeferenced Curves.",
  },
  {
    title: "Fundamental Portfolio Construction Based on Mahalanobis Distance.",
  },
  {
    title:
      "Joint Correspondence Analysis Versus Multiple Correspondence Analysis: A Solution to an Undetected Problem.",
  },
  {
    title: "Human-Robot Interaction.",
  },
  {
    title:
      "Motion Planning Using a ToF Camera for Manipulation in Cluttered Environments.",
  },
  {
    title: "Grasping and Control of Multi-Fingered Hands.",
  },
  {
    title: "Rule Set Based Joint State Update.",
  },
  {
    title: "Semantic Attachments for Domain-Independent Planning Systems.",
  },
  {
    title: "Robot Development Process in the DESIRE Project.",
  },
  {
    title:
      "DESIRE WEB 2.0 - Integration Management and Distributed Software Development for Complex Service Robots.",
  },
  {
    title: "Event-Oriented Incremental Component Construction.",
  },
  {
    title: "Scene Analysis for Service Robots.",
  },
  {
    title: "Continual Multiagent Planning.",
  },
  {
    title: "Editorial.",
  },
  {
    title:
      "Range-Based People Detection and Tracking for Socially Enabled Service Robots.",
  },
  {
    title: "Editorial.",
  },
  {
    title: "Navigation in Landmark Networks.",
  },
  {
    title: "Semi Automatic Object Modeling for a Service Robot.",
  },
  {
    title: "Observation and Execution.",
  },
  {
    title: "Face Detection and Person Identification on Mobile Platforms.",
  },
  {
    title: "A High-Speed Tactile Sensor for Slip Detection.",
  },
  {
    title: "Editorial.",
  },
  {
    title:
      "Proactive Continual Planning - - Deliberately Interleaving Planning and Execution in Dynamic Environments.",
  },
  {
    title: "Editorial.",
  },
  {
    title: "Editorial.",
  },
  {
    title: "Structuring Human-Robot-Interaction in Tutoring Scenarios.",
  },
  {
    title: "Editorial.",
  },
  {
    title: "Robot Hardware Design in the DESIRE Project.",
  },
  {
    title: "Identifying Relevant Tactile Features for Object Identification.",
  },
  {
    title:
      "An Automatic Grasp Planning System for Multi-fingered Robotic Hands.",
  },
  {
    title:
      "Component Based Architecture for an Intelligent Mobile Manipulator.",
  },
  {
    title:
      "Layered Programming by Demonstration and Planning for Autonomous Robot Manipulation.",
  },
  {
    title: "A Mixed-Initiative Approach to Interactive Robot Tutoring.",
  },
  {
    title: "Body Schema Learning.",
  },
  {
    title: "Editorial.",
  },
  {
    title: "Innovative Technologies for the Next Generation of Robotic Hands.",
  },
  {
    title: "Exploiting RFID Capabilities Onboard a Service Robot Platform.",
  },
  {
    title: "Grasping Objects of Unknown Geometry with Tactile Feedback.",
  },
  {
    title: "Task-Based Mixed-Initiative Coordination.",
  },
  {
    title: "Flexible Control of Complex Kinematic Chains.",
  },
  {
    title: "3D Environment Modeling Based on Surface Primitives.",
  },
  {
    title: "Editorial.",
  },
  {
    title: "Dual-Arm Manipulation.",
  },
  {
    title: "Task Planning for an Autonomous Service Robot.",
  },
  {
    title:
      "Using the Context-Enhanced Additive Heuristic for Temporal and Numeric Planning.",
  },
  {
    title: "Fault Attacks on Elliptic Curve Cryptosystems.",
  },
  {
    title:
      "Interaction Between Fault Attack Countermeasures and the Resistance Against Power Analysis Attacks.",
  },
  {
    title: "Attacking Block Ciphers.",
  },
  {
    title: "Differential Fault Analysis of DES.",
  },
  {
    title:
      "Design of Cryptographic Devices Resilient to Fault Injection Attacks Using Nonlinear Robust Codes.",
  },
  {
    title:
      "A Survey of Differential Fault Analysis Against Classical RSA Implementations.",
  },
  {
    title: "Fault Attacks on Stream Ciphers.",
  },
  {
    title: "Global Faults on Cryptographic Circuits.",
  },
  {
    title: "Fault Attacks on Pairing-Based Cryptography.",
  },
  {
    title: "Injection Technologies for Fault Attacks on Microprocessors.",
  },
  {
    title: "Lattice-Based Fault Attacks on Signatures.",
  },
  {
    title: "Fault Attacks Against RSA-CRT Implementation.",
  },
  {
    title:
      "On Countermeasures Against Fault Attacks on the Advanced Encryption Standard.",
  },
  {
    title: "Differential Fault Analysis of the Advanced Encryption Standard.",
  },
  {
    title: "Side-Channel Analysis and Its Relevance to Fault Attacks.",
  },
  {
    title:
      "Fault Injection and Key Retrieval Experiments on an Evaluation Board.",
  },
  {
    title: "Countermeasures for Symmetric Key Ciphers.",
  },
  {
    title:
      "On Countermeasures Against Fault Attacks on Elliptic Curve Cryptography Using Fault Detection.",
  },
  {
    title: "Pas d'inspiration",
  },
];
```

```

```
