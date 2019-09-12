const router = require("express").Router();
const request = require("request");
const parseString = require("xml2js").parseString;

router.get("/", (req, res) => {
  request(
    "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
    (err, response, body) => {
      if (err) return res.json({ err });
      parseString(body, (err, result) => {
        if (err) return res.json({ err });
        const titles = result.rss.channel[0].item.map(item => item.title[0]);
        res.json({ titles });
      });
    }
  );
});

module.exports = router;
