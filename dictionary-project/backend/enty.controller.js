const Entry = require("./entry.model");

exports.findByWord = (req, res) => {
    Entry.findByWord(req.query.keyword, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            console.log(`Not found definition with keyword ${req.params.keyword}.`)
            res.send([]); 
          } else {
            console.log("Error retrieving definition with keyword " + req.params.keyword);
            res.send([]);
          }
        } else res.send(data);
      });
};