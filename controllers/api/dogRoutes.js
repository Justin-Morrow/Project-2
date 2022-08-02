//??????????
const router = require('express').Router();
const { Dog } = require('../../models'); //add USER?
// const withAuth = require('../../utils/auth')



router.post('/', async (req, res) => { //profile? //aADD withAuth
    // find all categories
    try{
      const newDog = await Dog.create({
        ...req.body,
        // user_id: req.session.user_id, 
      });
  
      res.status(200).json(newDog)
    } catch (err) {
      res.status(400).json(err)
    }
    // be sure to include its associated Products
  });

router.get('/', async (req, res) => { //ADD withAuth
  try{
    const dogData = await Dog.findAll({
      // include: User 
    });

    res.status(200).json(dogData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => { //add with auth
  try{
    const dogData = await Dog.findByPk(req.params.id, {
      // include: User 
    });
    if(!dogData) {
      res.status(404).json({message: "No Dog found with that id!"});
      return;
    }
    res.status(200).json(dogData)

  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
  
});

// router.put('/:id', withAuth, async (req, res) => { 
//   // update a category by its `id` value
//   try{
//     const dogData = await Dog.update(req.body, {
//       where: {
//         category_id: req.params.id
//       },
//     })
//     if(!dogData) {
//       res.status(404).json({ message: "No category found with this id!"});
//       // return; //IS RETURN NEEDED?
//     }
//     res.status(200).json(dogData);

//   } catch (err) {
//     console.log(err)
//     res.status(500).json(err);
//   }
// });

router.delete('/:id', async (req, res) => { // add with auth
  try{
    const dogData = await Dog.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id, //?????
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
