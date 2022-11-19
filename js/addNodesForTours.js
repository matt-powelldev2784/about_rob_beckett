export const toggleNodesForTours = (tours) => {
  const toursContainer = document.getElementById('tours_container__ol')
  while (toursContainer.firstChild) {
    toursContainer.removeChild(toursContainer.firstChild)
  }

  tours.forEach((tourInfo) => {
    //create list item node
    const listItem = document.createElement('li')
    listItem.classList.add('tours_container__li')

    //add date node node
    const tourDate = document.createElement('div')
    tourDate.classList.add('tours__tour_date')
    const tourDateText = document.createTextNode(tourInfo.date)
    listItem.appendChild(tourDate)
    tourDate.appendChild(tourDateText)
    toursContainer.appendChild(listItem)

    //add city and venue container node
    const placeConatiner = document.createElement('div')
    placeConatiner.classList.add('tours_place__container')
    listItem.appendChild(placeConatiner)
    toursContainer.appendChild(listItem)

    //add city node
    const tourCity = document.createElement('div')
    tourCity.classList.add('tours_place__city')
    const city = tourInfo.city.toUpperCase()
    const tourCityText = document.createTextNode(city)
    placeConatiner.appendChild(tourCity)
    tourCity.appendChild(tourCityText)
    toursContainer.appendChild(listItem)

    //add venue node
    const tourVenue = document.createElement('div')
    tourVenue.classList.add('tours_place__tour_venue')
    const tourVenueText = document.createTextNode(tourInfo.venue)
    placeConatiner.appendChild(tourVenue)
    tourVenue.appendChild(tourVenueText)
    toursContainer.appendChild(listItem)
  })
}
