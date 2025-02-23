const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

function create(){
//alert();
    count++;
    document.getElementById('addTextFeild').innerHTML+='<br/><input type="text" id="'+count+'" placeholder="Input Field'+count+'"  /><br/>';
    e.prventDefault();
}


// Add your routes here - above the module.exports line
// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
  req.folder = req.originalUrl.split('/')[1];
  req.subfolder = req.originalUrl.split('/')[2];
  res.locals.currentURL = req.originalUrl;
  res.locals.prevURL = req.get('Referrer');
  res.locals.folder = req.folder;
  res.locals.subfolder = req.subfolder;
  res.locals.name = req.query.n
  res.locals.unallocated = req.query.ua

  console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );
  console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
  next();
});

// Start folder specific routes
router.use('/V12', require('./views/V12/_routes'));
router.use('/baseline-as-is', require('./views/baseline-as-is/_routes'));
router.use('/sprint-4', require('./views/sprint-4/_routes'));

module.exports = router
