const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('You hit the communitycard api');
});

module.exports = router;
