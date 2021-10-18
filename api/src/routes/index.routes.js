const { Router } = require('express');
const router = Router();

//routes
router.get('/', (req, res) => {
    res.json({
        "api_version": '1.0'
    });
});

module.exports = router;