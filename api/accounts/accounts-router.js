const router = require('express').Router()
const accountsModel = require("./accounts-model");

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try { 
    const accountsGet = await accountsModel.getAll()
    res.status(200).json(accountsGet);
  } catch(err) {
    next(err);
  }
})

router.get('/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accountsId = await accountsModel.getById()
    res.status(200).json(accountsId)
  } catch(err) {
    next(err);
  }
})

router.post('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try { 
    const accountsCreate = await accountsModel.create()
    res.status(201).json(accountsCreate);
  } catch(err) {
    next(err);
  }
})

router.put('/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  try { 
    const accountsUpdate = await accountsModel.updateById()
    res.status(200).json(accountsUpdate);
  } catch(err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accountsDelete = await accountsModel.deleteById()
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
