const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

router.post('/update-or-cancel', function (req, res) {

  const updateEori = req.session.data['update-or-cancel']

  if (updateEori === 'Update an EORI number') {
    res.redirect('update-an-eori-number')
  } else {
    res.redirect('enter-an-eori-number')
  }
})

router.post('/success-or-fail', function (req, res) {

  let successFail = req.session.data['update-current-eori-number']

  if (successFail === 'GB205672212000') {
    res.redirect('current-enrolments')
  }
  else if (successFail === 'GB612599232321') {
    res.redirect('current-enrolments-2')
  }
})


router.post('/cancel-current-enrolments', function (req, res) {

  var blue = req.session.data['cancel-enrolments']

  if (blue.includes("ctc")) {
    res.redirect('ctc-enrolled-interruption')
  }
  if (blue.includes("atar")) {
    res.redirect('loading-cancel')
  }
  else {
    res.redirect('loading-cancel-fail')
  }
})

router.post('/enter-eori', function (req, res) {

  let successFail = req.session.data['current-eori-number']

  if (successFail === 'GB205672212000') {
    res.redirect('loading-cancel')
  }
  else if (successFail === 'GB612599232321') {
    res.redirect('loading-cancel-fail')
  }
})


module.exports = router
