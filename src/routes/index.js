const { Router } = require('express');

const router = Router();

// Ruta GET para /sounds
router.get('/sounds', (req, res) => {
  const responseString = "pelotu2 dev";
  res.send(responseString);
});

module.exports = router;