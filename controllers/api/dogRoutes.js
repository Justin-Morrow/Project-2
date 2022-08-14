//??????????
const router = require('express').Router();
const { Dog } = require('../../models'); //add USER?
// const withAuth = require('../../utils/auth')

//===========ADD DOG =================//

router.post('/', async (req,res) => {
  try {
    console.log(req, "DOG REQ++++++++++")
    const newDog = await Dog.create({
      ...req.body, // what does elipses do 
      user_id: req.session.user_id, //user_id? or user.id
    });
    console.log(newDog, "NEW DOG $$$$$$$$$$$")

      res.status(200).json(newDog);
  } catch (err) {
    console.log(err)
      res.status(400).json(err);
  }
});

// router.post('/', async (req, res) => { //profile? //aADD withAuth
//     // find all categories
//     try{
//       const newDog = await Dog.create({
//         ...req.body,
//         // user_id: req.session.user_id, 
//       });
  
//       res.status(200).json(newDog)
//     } catch (err) {
//       res.status(400).json(err)
//     }
//     // be sure to include its associated Products
//   });

//=======================UPDATE DOG=========================//

router.put('/:id', async (req, res) => {
  try{
      const updateDog = await Dog.update({
          ...req.body //??
      },
      {
          where: { //??
              id: req.params.id //??
          }
      });

      if(!updateDog) {
          res.status(404).json({ message: 'no post with this ID'})
      }
      res.status(200).json(updateDog)
  } catch (err) {
    console.log(err)
      res.status(500).json(err)
  }
});

//======================Delete Dog============================//

router.delete('/:id', async (req,res) => {
  try{
      const deleteDog = await Dog.destroy({
          where: {
              id: req.params.id,
              user_id: req.session.user_id
          }
      });

      if(!deleteDog) {
          res.status(404).json({ message: 'no post with that ID.'})
      }
      res.status(200).json(deleteDog)
  } catch (err) {
    console.log(err)
      res.status(500).json(err) //why 500 and not 400 like above
  }
});

module.exports = router;
