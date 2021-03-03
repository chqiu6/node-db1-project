const router = require('express').Router()
const accountsModel = require("./accounts-model");

const {checkAccountPayload, checkAccountNameUnique, checkAccountId } = require("./accounts-middleware");

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try { 
    const accountsGet = await accountsModel.getAll()
    res.status(200).json(accountsGet);
    console.log("testing");
  } catch(err) {
    next(err);
  }
})

router.get('/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accountsId = await accountsModel.getById(req.params.id)
    res.status(200).json(accountsId)
  } catch(err) {
    next(err);
  }
})

router.post('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try { 
    const accountsCreate = await accountsModel.create(req.body)
    res.status(201).json(accountsCreate);
  } catch(err) {
    next(err);
  }
})

router.put('/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  try { 
    const accountsUpdate = await accountsModel.updateById(req.params.id, req.body)
    res.status(200).json(accountsUpdate);
    console.log("testing put request");
  } catch(err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accountsDelete = await accountsModel.deleteById(req.params.id)
    res.status(200).json(accountsDelete);
  } catch (err) {
    next(err);
  } 
})

router.use((err, req, res, next) => { // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: 'something went wrong inside the accounts router',
    errMessage: err.message,
  })
})

module.exports = router;
