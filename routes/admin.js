var express = require('express');
var router = express.Router();

var helper = require('../helpers/helper')

/* GET users listing. */
router.get('/', function (req, res, next) {
  helper.getAllproD().then((products) => {
    console.log(products)
    res.render('users/user_Ui', { products })
  })
});

router.get('/add', function (req, res) {
  res.render('admin/add_product')

})

router.post('/add', function (req, res) {
  console.log(req.body)
  console.log(req.files.image)

  helper.ddNwePro(req.body, (id) => {
    let image = req.files.image
    image.mv('./public/Beimg/' + id + '.jpg', (error) => {
      if (!error) {
        res.redirect('add')
      } else {
        console.log('err')
      }
    })
  })

})









module.exports = router;
