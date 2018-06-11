const restaurant = {
  name: 'Pizza',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: (partySize) => {
    const seatsLeft = restaurant.guestCapacity - restaurant.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: (partySize) => {
    restaurant.guestCount = restaurant.guestCount + partySize;
  },
  removeParty: (partySize) => {
    restaurant.guestCount = restaurant.guestCount - partySize;
  }
};
// Arrow functions like below won't work. Using the function() syntax does, but that's shit.
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4));
// partySize => {
//   const seatsLeft = this.guestCapacity - this.guestCount;
//   return partySize <= seatsLeft;
// }