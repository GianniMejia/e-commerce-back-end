const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  let tags = await Tag.findAll( {include: [Product]});
  res.json(tags);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  res.json(await Tag.findOne({where:{id: req.params.id}, include: Product}))
});

router.post('/', async (req, res) => {
  // create a new tag
  res.json(await Tag.create(req.body));
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  res.json(await Tag.update(req.body, {where: {id: req.params.id}}));

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  res.json(await Tag.destroy({where: {id: req.params.id}}));
});

module.exports = router;