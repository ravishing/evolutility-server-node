/*
  ___         _      _   _ _ _ _         
 | __|_ _____| |_  _| |_(_) (_) |_ _  _  
 | _|\ V / _ \ | || |  _| | | |  _| || | 
 |___|\_/\___/_|\_,_|\__|_|_|_|\__|\_, | 
                                   |__/  
https://github.com/evoluteur/evolutility-models
*/

module.exports = {
  // --- Organizer
  todo: require('./organizer/todo'),
  contact: require('./organizer/contact'),
  comics: require('./organizer/comics'),
  restaurant: require('./organizer/restaurant'),
  winecellar: require('./organizer/winecellar'),
  winetasting: require('./organizer/winetasting'),
  // --- Music
  album: require('./music/album'),
  artist: require('./music/artist'),
  track: require('./music/track'),
  // --- Tests
  test: require('./tests/test'),
  // -- Designer
  world: require('./designer/world'),
  object: require('./designer/object'),
  field: require('./designer/field'),
  group: require('./designer/group'),
  collection: require('./designer/collection'),
};