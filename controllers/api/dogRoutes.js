//??????????
const router = require('express').Router();
const { User, Dog } = require('../../models'); //why no tag?????????

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
    const dogData = await Category.findAll({
      include: Product 
    });

    res.status(200).json(dogData)
  } catch (err) {
    res.status(500).json(err)
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
    const dogData = await Category.findByPk(req.params.id, {
      include: Product 
    });
    if(!dogData) {
      res.status(404).json({message: "No category found with that id!"});
      return;
    }
    res.status(200).json(dogData)

  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
  
});

router.post('/', async (req, res) => { 
  // create a new category
  try{
    const dogData = await Category.create(req.body);
    res.status(200).json(dogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => { 
  // update a category by its `id` value
  try{
    const dogData = await Category.update(req.body, {
      where: {
        category_id: req.params.id
      },
    })
    if(!dogData) {
      res.status(404).json({ message: "No category found with this id!"});
      // return; //IS RETURN NEEDED?
    }
    res.status(200).json(dogData);

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => { 
  try{
    const dogData = await Category.destroy({
      where: {
        category_id: req.params.id,
      },
    });
    if(!dogData) {
      res.status(404).json({message: 'No category found with that id!'});
      return;
    }
    res.status(200).json(dogData);

  }catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});

module.exports = router;
