const OPEN_STREET_MAPS = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

const madrizCoordinates = L.latLng(40.4233873,-3.6927541,15)

const zoom = 14

const map = L.map('map')

map.setView(madrizCoordinates, zoom)

L.tileLayer(OPEN_STREET_MAPS).addTo(map)