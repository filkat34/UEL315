// connect to the db
use("UEL315_S3");

// search for countries beginning with 'D'
const query = {
  "name.official": { $regex: /^D/ },
};

db.pays.find(query).projection({ _id: 0, name: { official: 1 } });
