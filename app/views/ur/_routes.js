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

router.post('/update-or-cancel-2', function (req, res) {

  const updateEori = req.session.data['update-or-cancel']

  if (updateEori === 'Update an EORI number') {
    res.redirect('update-an-eori-number')
  } else {
    res.redirect('enter-an-eori-number-2')
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
    res.redirect('success-cancel')
  }
  else {
    res.redirect('services-couldnt-update')
  }
})

router.post('/enter-eori', function (req, res) {

  let successFail = req.session.data['current-eori-number']

  if (successFail === 'GB205672212000') {
    res.redirect('success-cancel')
  }
  else if (successFail === 'GB612599232321') {
    res.redirect('services-couldnt-update')
  }
})

router.post('/cancel-subscription', function (req, res) {

  const cancelSubscription = req.session.data['cancel-subscription']

  if (cancelSubscription === 'yes') {
    res.redirect('success-cancel')
  } else if (cancelSubscription === 'no') {
    res.redirect('enter-an-eori-number')
  }
})

router.post('/cancel-subscription-2', function (req, res) {

  const cancelSubscription = req.session.data['cancel-subscription']

  if (cancelSubscription === 'yes') {
    res.redirect('services-couldnt-update')
  } else if (cancelSubscription === 'no') {
    res.redirect('enter-an-eori-number-2')
  }
})

router.post('/replace-eori', function (req, res) {

  const replaceEori = req.session.data['replace-eori']

  if (replaceEori === 'yes') {
    res.redirect('update-or-cancel-success-notification')
  } else if (replaceEori === 'no') {
    res.redirect('update-an-eori-number')
  }
})

module.exports = router
