//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const util = require('util')

// Add your routes here

router.post('/3-section', function(request, response) {

    var sites = request.session.data['sites']

    if (sites == "Yes"){
        response.redirect("/3a-section")
    } else if (sites == "No"){
        response.redirect("/3b-section")
    } else {
        response.redirect("/2-section")
    }
})

router.post('/4-section', function(request, response) {

    var sites = request.session.data['settlement']

    if (sites == "Yes"){
        response.redirect("/6-section")
    } else if (sites == "No"){
        response.redirect("/4-section")
    } else {
        response.redirect("/3-section")
    }
})

router.post('/5-section', function(request, response) {

    var sites = request.session.data['1000']

    if (sites == "Yes"){
        response.redirect("/6-section")
    } else if (sites == "No"){
        response.redirect("/5-section")
    } else {
        response.redirect("/4-section")
    }
})

router.post('/6-section', function(request, response) {

    var sites = request.session.data['critical']

    if (sites == "Yes"){
        response.redirect("/6-section")
    } else if (sites == "No"){
        response.redirect("/6-section")
    } else {
        response.redirect("/5-section")
    }
})

router.post('/7-section', function(request, response) {

    var sites = request.session.data['multiple']

    if (sites == "Yes"){
        response.redirect("/7-section")
    } else if (sites == "No"){
        response.redirect("/7-section")
    } else {
        response.redirect("/6-section")
    }
})

router.post('/8-section', function(request, response) {

    var sites = request.session.data['london']

    if (sites == "Yes"){
        response.redirect("/8-section")
    } else if (sites == "No"){
        response.redirect("/8-section")
    } else {
        response.redirect("/7-section")
    }
})

router.post('/9-section', function(request, response) {

    var sites = request.session.data['greenbelt']

    if (sites == "Yes"){
        response.redirect("/9-section")
    } else if (sites == "No"){
        response.redirect("/10-section")
    } else {
        response.redirect("/8-section")
    }
})

router.post('/10-section', function(request, response) {

    var sites = request.session.data['alter']

    if (sites == "Yes"){
        response.redirect("/review")
    } else if (sites == "No"){
        response.redirect("/10-section")
    } else {
        response.redirect("/9-section")
    }
})

router.post('/11-section', function(request, response) {

    var sites = request.session.data['newgreenbelt']

    if (sites == "Yes"){
        response.redirect("/review")
    } else if (sites == "No"){
        response.redirect("/review")
    } else {
        response.redirect("/review")
    }
})

//router.post('/5-section', function(request, response) {

    
  //  let localConsiderations = request.session.data['localConsiderations']

  //  localConsiderations = Array.isArray(localConsiderations) ? localConsiderations : []

 //   if (localConsiderations.includes("Coastal areas") && (localConsiderations.includes("Proximity to an airport") && (localConsiderations.includes("Heavy tourism based")))){
  //      response.redirect("/10a-section")
  //  } else if (localConsiderations.includes("Proximity to an airport") && (localConsiderations.includes("Heavy tourism based"))){
  //      response.redirect("/9a-section")
 //   } else if (localConsiderations.includes("Coastal areas") && (localConsiderations.includes("Heavy tourism based"))){
  //      response.redirect("/8a-section")
    //} else if (localConsiderations.includes("Coastal areas") && (localConsiderations.includes("Proximity to an airport"))){
      //  response.redirect("/7a-section")
    //} else if (localConsiderations.includes("Coastal areas")){
    //    response.redirect("/6a-section")
    //} else if (localConsiderations.includes("Proximity to an airport")){
    //    response.redirect("/6b-section")
    //} else if (localConsiderations.includes("Heavy tourism based")){
      //  response.redirect("/6c-section")
    //} else {
      //  response.redirect("/4-section")
    //}
//})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/docsToUpload', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['documentsToUpload']

  // Check whether the variable matches a condition
  if (howManyBalls == "uploadDocs"){
    // Send user to next page
    res.redirect('/SoC3-edit-reg2')
  } else {
    // Send user to ineligible page
    res.redirect('/SoC3-edit-reg3')
  }

})