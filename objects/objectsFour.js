const restaurant = {
  name: 'Pizza',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: ((partySize) => {
    return this.guestCapacity - this.guestCount
  })
};
const status = restaurant.checkAvailability(4)
console.log(status);

// partySize => {
//   const seatsLeft = this.guestCapacity - this.guestCount;
//   return partySize <= seatsLeft;
// }