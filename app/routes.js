//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const util = require('util')

// Add your routes here

router.post('/3-section', function(request, response) {

    var typology = request.session.data['typology']

    if (typology == "Urban dense"){
        response.redirect("/3a-section")
    } else if (typology == "Rural and dispersed"){
        response.redirect("/3b-section")
    } else if (typology == "Mixed-use or urban fringe"){
        response.redirect("/3c-section")
    } else if (typology == "Notable heritage or conservation designations"){
        response.redirect("/3d-section")
    } else if (typology == "Rapidly growing/expanding"){
        response.redirect("/3e-section")
    } else {
        response.redirect("/2-section")
    }
})

router.post('/5-section', function(request, response) {

    
    let localConsiderations = request.session.data['localConsiderations']

    localConsiderations = Array.isArray(localConsiderations) ? localConsiderations : []

    if (localConsiderations.includes("Coastal areas") && (localConsiderations.includes("Proximity to an airport") && (localConsiderations.includes("Heavy tourism based")))){
        response.redirect("/10a-section")
    } else if (localConsiderations.includes("Proximity to an airport") && (localConsiderations.includes("Heavy tourism based"))){
        response.redirect("/9a-section")
    } else if (localConsiderations.includes("Coastal areas") && (localConsiderations.includes("Heavy tourism based"))){
        response.redirect("/8a-section")
    } else if (localConsiderations.includes("Coastal areas") && (localConsiderations.includes("Proximity to an airport"))){
        response.redirect("/7a-section")
    } else if (localConsiderations.includes("Coastal areas")){
        response.redirect("/6a-section")
    } else if (localConsiderations.includes("Proximity to an airport")){
        response.redirect("/6b-section")
    } else if (localConsiderations.includes("Heavy tourism based")){
        response.redirect("/6c-section")
    } else {
        response.redirect("/4-section")
    }
})
