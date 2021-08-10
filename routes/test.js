const express = require('express');
const router = express();
const testCtrl = require('../controllers/test');

router.post('/test/create', testCtrl.createTest);
router.post('/test/update', testCtrl.updateTest);

module.exports = router;