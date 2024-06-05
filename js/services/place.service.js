'use strict'

// const place = {id: '1p2', lat: 32.1416, lng: 34.831213, name: 'Pukis house'}

const gPlaces = _createPlaces()

function getPlaces() {
    return gPlaces
}

function removePlace(placeId) {
    const idx = gPlaces.findIndex(place => place.id === placeId)
    return gPlaces.splice(idx,1)
}

function addPlace(name, lat, lng, zoom) {
    const place = _createPlace(name,lat,lng,zoom)
    gPlaces.unshift(place)
    return place
}

function getPlaceById(placeId) {
    return gPlaces.find(place => place.id === placeId)
}

function _createPlace(name, lat, lng, zoom) {
    const place ={
        id: makeId(3),
        lat,
        lng,
        name
    } 
    return place
}

function _createPlaces() {
    const places = [
        _createPlace('Mukis house', 33.1246 , 52.124686),
        _createPlace('Pukis house', 32.1246 , 49.124686)
    ]
    return places
}