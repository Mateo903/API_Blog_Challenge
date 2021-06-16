const router = require('express').Router();

router.get('/', (req, res) => {
  res.send("ITS WORKING!");
});

module.exports = router
