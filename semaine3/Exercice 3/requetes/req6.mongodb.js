// Connexion à la BDD
use("UEL315_S3");

// Afficher le nombre de publications de type « Article » depuis 2012
db.getCollection("dblp").countDocuments({
  type: "Article",
  year: { $gte: 2012 },
});
