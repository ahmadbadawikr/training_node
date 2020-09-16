const { Router } =  require('express');
const router = Router();
const { getAll, createOne } = require('../controller/controller.players')

router.route('/')
    .get(getAll)
    .post(createOne);

module.exports = router;