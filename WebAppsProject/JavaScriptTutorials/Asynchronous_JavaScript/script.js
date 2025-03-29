/* Asynchronous Code: some lines of code takes time to run. these tasks are run in the background while the 
Javascript engine keeps executing other lines of code. when the results of the 
Asynchronous code is available, it is then used in the program.


setInterval
clearInterval
*/

// const myInterval = setInterval (() => console.log("test Interval"), 1000);

// clearInterval(myInterval);

/* setTimeout
cearTimeout*/


// const myInterval = setTimeout (() => console.log("test Interval"), 5000);

// clearTimeout(myInterval);


/* What is Synchronous Javascript? : is where code in executed line by line and their task are completed instantly 

*/

// const functionOne = () => {
//     console.log('Function One');

//     functionTwo();

//     console.log('Function One, Part 2')
// }

// const functionTwo = () => {
//     console.log('Function Two');
// }

// functionOne();

/* now try the same code Asynchronous way */


// const functionOne = () => {
//     console.log('Function One');

//     functionTwo();

//     console.log('Function One, Part 2')
// }

// const functionTwo = () => {
//     setTimeout(() => console.log('Function Two'), 2000);
// }
// functionOne();


/* Data Fetching: 
   API: 
   
   CallBack Functions:pass a callback function to run when the data is fetched */
   

   // const fetchUser = (username, callback) => {
   //     console.log('Fetching ...');

   //     setTimeout(() =>{
   //         console.log(' now we have the user');

   //         callback({ username });
   //     }, 2000);
   // }

   // const fetchUserPhotos = (username, callback) => {
   //    setTimeout(() => {
   //       console.log(`[Now we have the photos for ${username}]`);
         

   //       callback(['photo1', 'photo2']);
   //    }, 2000);
   // }
   // const fetchPhotoDetails = (photo, callback) => {
   //    setTimeout(() => {
   //       console.log(`[Now we have the photos details ${photo}]`);
         

   //       callback(['Details ...']);
   //    }, 2000);
   // }
   /* the infamous callback hell becuase you will end up fetching 
   so many callbacks that the code becomes unreadeable after a short period  */
   // fetchUser('Mike', (user) => {
   //     console.log(`Your name is : ${user.username}`);

   //  fetchUserPhotos(user.username, (userPhotos) => {
   //     console.log(`your photos are : ${userPhotos}`);

   //     fetchPhotoDetails(userPhotos [0], (details) => {
   //        console.log(`your photo details are: ${details}`);
   //     })
   //  });   
   // });   
   
   /* Promises: Objects that either return the succesfully fetched data
   or the error.*/

// const fetchUser = (username) => {
//    return new Promise((resolve, reject) => {

//    setTimeout(() => {
//       console.log('[now we have the user]');

//       resolve({ username});
//    }, 2000)
// });
// }

//  const fetchUserPhotos = (username) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          console.log(`[Now we have the photos for ${username}]`);

//             resolve(['photo1', 'photo2']);
//    }, 2000);
// });
//  } 
//  const fetchPhotoDetails = (photo) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          console.log(`[Now we have the photos details ${photo}]`);
            
   
//           resolve(['Details ...']);
//       }, 2000);
//     })
   
// }
//    fetchUser('Michael')
//       .then((user) => fetchUserPhotos(user.username))
//       .then((photos) => fetchPhotoDetails(photos[0]))
//       .then((details) => console.log(`your photo details are: ${details}`))
   
/* Async/Await: Addition to Promises it is a easier and cleaner way top work with Promises, the main advantage of Asinchronous functions
 is that they look and behave more like synchronous functions therefore easier top work with. 
 
 Async functions return Promises !!!!*/


// const fetchUser = (username) => {
//    return new Promise((resolve, reject) => {

//    setTimeout(() => {
//       console.log('[now we have the user]');

//       resolve({ username});
//    }, 2000)
// });
// }

//  const fetchUserPhotos = (username) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          console.log(`[Now we have the photos for ${username}]`);

//             resolve(['photo1', 'photo2']);
//    }, 2000);
// });
//  } 
//  const fetchPhotoDetails = (photo) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          console.log(`[Now we have the photos details ${photo}]`);
            
   
//           resolve(['Details ...']);
//       }, 2000);
//     })
   
// }
//    // fetchUser('Michael')
//    //    .then((user) => fetchUserPhotos(user.username))
//    //    .then((photos) => fetchPhotoDetails(photos[0]))
//    //    .then((details) => console.log(`your photo details are: ${details}`))

// const displayData = async () => {
//    const user = fetchUser('michael');
//    const photos = await fetchUserPhotos(user.username);
//    const details = await fetchPhotoDetails(photos [0]);

//    console.log(details);
// }

// displayData();



