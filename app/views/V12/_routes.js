const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

const minAllowedAge = 16;
const maxAllowedAge = 110;
const today = new Date(Date.now());

router.all('/service/dob-router', function(req, res, next){
  console.log("min age is " + minAllowedAge + "and max age is " + maxAllowedAge);
  console.log("today is " + today);
  var dob = new Date( req.session.data['date-year'], req.session.data['date-month'], req.session.data['date-day']);
console.log(dob);
  var ageDate = today - dob.getTime();
  console.log(ageDate);
  var temp = ageDate.getFullYear();
var yrs = Math.abs(temp - 1970);
  if (yrs < minAllowedAge || yrs > maxAllowedAge) {
    return res.redirect ('../sorry/cant_help_age');
  } else {
    return res.redirect('interview-date');
  }


  next();


});


/*
  const minAllowedAge = 16;
  const maxAllowedAge = 110;
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var dob = new Date(	document.getElementById('date-year').value,
      document.getElementById('date-month').value,
      document.getElementById('date-day').value);
    var ageDate = new Date(Date.now() - dob.getTime());
    const yrs = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (yrs < minAllowedAge || yrs > maxAllowedAge) {
      window.location = '../sorry/cant_help_age';
    } else {
      window.location = 'interview_date';
    }
  })
 */



module.exports = router
