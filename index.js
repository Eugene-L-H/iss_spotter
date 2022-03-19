// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error.errno);
//     return;
//   }
//   // console.log('It worked! Returned IP:' , ip);
  
//   fetchCoordsByIP(ip, (error, coordinates) => {
//     if (error) {
//       console.log("It didn't work!" , error);
//       return;
//     }
  
//     // console.log('It worked! Returned coordinates:' , coordinates);

//     fetchISSFlyOverTimes(coordinates, (error, passTimes) => {
//       if (error) {
//         console.log("It didn't work!" , error);
//         return;
//       }
    
//       console.log('It worked! Returned flyover times:' , passTimes);
//     });
//   });

// });
