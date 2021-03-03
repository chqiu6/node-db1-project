const accountsModel = require("./accounts-model");

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if(!req.body.name || !req.body.budget){
    res.status(400).json({ message : "There's no name or budget" })
  } else if(typeof req.body.name !== "string") {
    res.status(400).json({ message: "name of account must be a string" })
  } else if(req.body.name.length < 3 || req.body.name.length > 100) {
    res.status(400).json({ message: "name of account must be between 3 and 100" })
  } else if(typeof req.body.budget !== "number") {
    res.status(400).json({ message: "budget of account must be a number" })
  } else if(req.body.budget < 0 || req.body.budget > 1000000) {
    res.status(400).json({ message: "budget of account is too large or too small" })
  } else{
    next();
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try { 
    const accountNames = await accountsModel.getAll()
    const nameCheck = accountNames.map(account => account.name == req.body.name)
    if(nameCheck){ 
      res.status(400).json({ message: "that name is taken" })
    } else{
      next();
    }
  } catch(err) {
    next(err);
  }
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try { 
    const accountIdCheck = accountsModel.getById()
    if(!accountIdCheck) {
      res.status(404).json({ message: "account not found" })
    } else {
      next();
    }
  } catch(err) {
    next(err);
  }
}
