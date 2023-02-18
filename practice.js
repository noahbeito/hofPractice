// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var count = 0;

  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      count++;
    }
  });

  return count;
};

// use _.each to build an array containing only tweets belonging to a specified user.

// input: array of objects, string
// output: array of tweets
// constraints: use _.each
// edge cases:

// create userTweets array
// iterate array
  // if current obj at prop 'user' equals given user
    // push obj value at prop 'message' to userTweets
// return userTweets


var getUserTweets = function(tweets, user) {
  var userTweets = [];
  _.each(tweets, function(tweet, index, collection) {
    if (tweet.user === user) {
      userTweets.push(tweet);
    }
  });
  return userTweets;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.

// input: array of fruits
// output: array with only the target Fruit
// constraints: use _.filter
// edge cases:

// use filter to apply condition that current fruit equals target fruit

var onlyOneFruit = function (fruits, targetFruit) {
  var onlyFruit = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
  return onlyFruit;
};
console.log(onlyOneFruit(fruits, 'apple'));

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.

// input: array of fruits, target letter
// output: array of fruits starting with target letter
// constraints: use filter
// edge cases:

var startsWith = function (fruits, letter) {
  var startsWithLetter = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
  return startsWithLetter;
};

// return a filtered array containing only cookie-type desserts.

// input: array of dessert objects
// output: array of cookie type desserts
// constraints:
// edge cases:
var cookiesOnly = function (desserts) {
  var cookieDesserts = _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });
  return cookieDesserts;
};

// rebuild the getUserTweets function from above with _.filter instead

// input: array of objects, string
// output: array of tweet objects for user
// constraints: use filter
// edge cases:

var filterUserTweets = function(tweets, user) {
  var userTweets = _.filter(tweets, function(tweet) {
    return tweet.user === user;
  });
  return userTweets;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.

// input: array of dessert objects
// output: array of objects with new property, 'glutenFree' and corresponding boolean val
// constraints:
// edge cases:

// create glutenList
// iterate dessert objects
  // add gluten free prop, set value to true
  // if ingredients array includes 'flour'
    // set gluten free value to false
  // push current dessert obj to gluten list
// return glutenList


var glutenFree = function (desserts) {
  return _.map(desserts, function(dessert) {
    if (dessert.ingredients.includes('flour')) {
      dessert.glutenFree = false;
      console.log(dessert);
    } else {
      dessert.glutenFree = true;
      console.log(dessert);
    }
    return dessert;
  });
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.

// input: array of tweet objects
// output: array of message strings
// constraints:
// edge cases:

var allUserMessages = function(tweets) {
  return _.map(tweets, function(tweet) {
    return tweet.message;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/

// input: array of grocery objects
// output: array of items with new prop (salePrice: $price(round to two decimals))
// constraints:
// edge cases:

// map array of grocery objs
  // create discountedPrice var set to price minus (price multiplied by coupon (% off))
  // creat new prop in grocery called salePrice and equal to discounted price
  // return grocery obj
// return mapped array

var applyCoupon = function (groceries, coupon) {
  return _.map(groceries, function(grocery) {
    var price = grocery.price.slice(1);
    var discountedPrice = '$' + (price - (price * coupon)).toFixed(2);
    grocery.salePrice = discountedPrice;
    return grocery;
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.

// input: array of grocery objects
// output: total price of all products
// constraints: use redude
// edge cases:

var sumTotal = function (products) {
  return _.reduce(products, function(sum, product) {
    price = parseFloat(product.price.slice(1));
    return sum + price;
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }

// input: array of dessert objects
// output: object with how many of each desert type
// constraints: use reduce
// edge cases:

// create result obj
// reduce array
  // if current dessertType is not defined in result obj
    // create prop with desert type and set val to 1;
  // else
    // increment val by 1
// return obj

var dessertCategories = function (desserts) {
  return _.reduce(desserts, function(dessertCounts, dessert) {
    if (dessertCounts[dessert.type] === undefined) {
      dessertCounts[dessert.type] = 0;
    }
    dessertCounts[dessert.type]++;
    return dessertCounts;
  }, {});
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/

// input: array of tweet objects
// output: object with usernames as keys and number of tweets as values
// constraints: use reduce
// edge cases:

// create result obj
// iterate the given array of objects
  // if current obj username in result obj is undefined
    // add username to result obj as the key and set value equal to 1
  // else
    // increment the username count
// return result obj

var countMessagesPerUser = function(tweets) {
  // var tweetCounts = {};
  // _.reduce(tweets, function(memo, tweet) {
  //   if (tweetCounts[tweet.user] === undefined) {
  //     tweetCounts[tweet.user] = 1;
  //   } else {
  //     tweetCounts[tweet.user]++;
  //   }
  // }, 0);
  // return tweetCounts;
  return _.reduce(tweets, function(accumulator, tweet) {
    if (!accumulator[tweet.user]) {
      accumulator[tweet.user] = 0;
    }
    accumulator[tweet.user] += 1;
    return accumulator;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!

// input: array of movie objects
// output: array of movies released between 1990 and 2000
// constraints: use array as accumulator
// edge cases:

// iterate array of movies
  // if current movie's release date is >= to 1990 and <= 2000
    // push movie object to accumulator array

var ninetiesKid = function (movies) {
  return _.reduce(movies, function(ninetiesMovies, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      ninetiesMovies.push(movie.title);
    }
    return ninetiesMovies;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.

// input: array of movie objects, integer (timeLimit in minutes)
// output: boolean value, if there is at least one movie that is equal or shorter than timeLimit
// constraints: use reduce
// edge cases:


// use reduce to iterate movies array, set accumulator value to false
  // if current movie run time is equal or less than timeLimit
    // update acccumulator to true
  // return accumulator

var movieNight = function (movies, timeLimit) {
  return _.reduce(movies, function(enoughTime, movie) {
    if (movie.runtime <= timeLimit) {
      return enoughTime = true;
    }
    return enoughTime;
  }, false);
};
