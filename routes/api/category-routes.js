const router = require('express').Router();
const { request } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  let categories = await Category.findAll();
  let r = [];
  for (
    let c = 0; c < categories.length; c++
  ) {
    let entry = {};
    entry["id"] = categories[c].id;
    entry["category_name"] = categories[c].category_name;
    entry["products"] = await Product.findAll({ where: { category_id: categories[c].id } });
    r.push(entry);
  }
  res.json(r);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  let categories = await Category.findAll({ where: { id: req.params.id } });
  if (categories.length == 0) res.json([]);
  else {
    let entry = {};
    let c = 0;
    entry["id"] = categories[c].id;
    entry["category_name"] = categories[c].category_name;
    entry["products"] = await Product.findAll({ where: { category_id: categories[c].id } });
    res.json(entry);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  // console.log(req.body);
  const cat = await Category.create(req.body);
  res.json(cat);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
   // api/categories/6
   const cat = await Category.update(req.body, {where: {id: req.params.id}});
   res.json(cat);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const cat = await Category.destroy({where: {id: req.params.id}});
  res.json(cat);
});

module.exports = router;