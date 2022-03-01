'use strict';

const {
  db,
  models: { User, Pot, PaymentInfo },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users

  const Ricky = await User.create({
    username: 'Ricky',
    password: '123',
    role: 'admin',
    email: 'test1@gmail.com',
  });

  const Jeffy = await User.create({
    username: 'Jeffy',
    password: '123',
    role: 'admin',
    email: 'test2@gmail.com',
  });

  const Evan = await User.create({
    username: 'Evan',
    password: '123',
    role: 'admin',
    email: 'test3@gmail.com',
  });

  const Rob = await User.create({
    username: 'Rob',
    password: '123',
    role: 'admin',
    email: 'test4@gmail.com',
  });

  const Customer1 = await User.create({
    username: 'Customer1',
    password: '123',
    email: 'test5@gmail.com',
  });

  const Pot1 = await Pot.create({
    description: 'Light blue bird',
    imageUrl: 'https://i.gyazo.com/ac10b0467068b82f0f6498326c139656.jpg',
    quantity: 6,
    price: 15.99,
    category: 'birds',
  });

  const Pot2 = await Pot.create({
    description: 'Headless light olive green bird',
    imageUrl: 'https://i.gyazo.com/647837c9bf347878d3d38577167d313d.jpg',
    quantity: 4,
    price: 13.99,
    category: 'birds',
  });

  const Pot3 = await Pot.create({
    description: 'Headless yellow-green bird',
    imageUrl: 'https://i.gyazo.com/f5d90040a093e7cf6f8f761e180d006a.jpg',
    quantity: 5,
    price: 13.99,
    category: 'birds',
  });

  const Pot4 = await Pot.create({
    description: 'Eastern Bluebird',
    imageUrl: 'https://i.gyazo.com/182994e897360bdff806f5009201875b.jpg',
    quantity: 8,
    price: 16.99,
    category: 'birds',
  });

  const Pot5 = await Pot.create({
    description: "Bird on a gnome's head",
    imageUrl: 'https://i.gyazo.com/189bdf51119fb1d5e25d8da65bcd4e9a.jpg',
    quantity: 3,
    price: 18.99,
    category: 'birds',
  });

  const Pot6 = await Pot.create({
    description: 'Yellow Brachiosaurus dinosaur',
    imageUrl: 'https://i.gyazo.com/d89dd95dd78d99860d00d97c8c658d1d.jpg',
    quantity: 4,
    price: 15.99,
    category: 'reptiles',
  });

  const Pot7 = await Pot.create({
    description: 'Blue Styracosaurus dinosaur with Dirk Nowitzki',
    imageUrl: 'https://i.gyazo.com/524de243d3c290506b87af0d17bbdab6.jpg',
    quantity: 2,
    price: 19.99,
    category: 'reptiles',
  });

  const Pot8 = await Pot.create({
    description: 'Light green Tyrannosaurus with Michael Jordan',
    imageUrl: 'https://i.gyazo.com/b4ff17d9acfad6c100dc9d2bdf6b6aea.jpg',
    quantity: 2,
    price: 19.99,
    category: 'birds',
  });

  const Pot9 = await Pot.create({
    description: 'Simple gnome',
    imageUrl: 'https://i.gyazo.com/be221a7684c924c768dc36dfa00a1c74.jpg',
    quantity: 9,
    price: 12.99,
    category: 'other',
  });

  const Pot10 = await Pot.create({
    description: 'Purple gnome with rabbit backpack',
    imageUrl: 'https://i.gyazo.com/695c0064f1b69c090e8dcbdb6d574960.jpg',
    quantity: 5,
    price: 17.99,
    category: 'other',
  });

  const Pot11 = await Pot.create({
    description: 'I AM GROOT',
    imageUrl: 'https://i.gyazo.com/b5fe578cdbf43f5a02248973a81e1fb1.jpg',
    quantity: 7,
    price: 17.99,
    category: 'other',
  });

  const Pot12 = await Pot.create({
    description: 'Yellow lion cat with custom patterns',
    imageUrl: 'https://i.gyazo.com/e30ba9be12bd5838097f6878a74bd0dd.jpg',
    quantity: 5,
    price: 16.99,
    category: 'other',
  });

  const Pot13 = await Pot.create({
    description: 'Headless Mr Incredible',
    imageUrl: 'https://i.gyazo.com/6c3e0d428ad0f6f5a3101425ca9cde23.jpg',
    quantity: 7,
    price: 18.99,
    category: 'wacky',
  });

  const Pot14 = await Pot.create({
    description: 'Sheep with Mr Incredible head',
    imageUrl: 'https://i.gyazo.com/9c290a0417ad6f385a89a3925a68135e.jpg',
    quantity: 7,
    price: 19.99,
    category: 'wacky',
  });

  const Pot15 = await Pot.create({
    description: 'Blue sleep owl',
    imageUrl: 'https://i.gyazo.com/f18eec6fa0d5d4e419695a414430ce4a.jpg',
    quantity: 4,
    price: 13.99,
    category: 'owls',
  });

  const Pot16 = await Pot.create({
    description: 'Green-brown owl with flower eyes',
    imageUrl: 'https://i.gyazo.com/4bbe04272d956957b7cd672c9c44fd29.jpg',
    quantity: 7,
    price: 14.99,
    category: 'owls',
  });

  const Pot17 = await Pot.create({
    description: 'Light green owl with leaf eyes',
    imageUrl: 'https://i.gyazo.com/a23ceb5e629246fc9b391603e4cedcdd.jpg',
    quantity: 8,
    price: 14.99,
    category: 'owls',
  });

  const Pot18 = await Pot.create({
    description: 'Sky blue owl',
    imageUrl: 'https://i.gyazo.com/4668afadb94b4f398f2dba70a614d000.jpg',
    quantity: 4,
    price: 14.99,
    category: 'owls',
  });

  const Pot19 = await Pot.create({
    description: 'Hornless great horn owl',
    imageUrl: 'https://i.gyazo.com/6606c1df05c9c8e842d7231c89d34324.jpg',
    quantity: 6,
    price: 14.99,
    category: 'birds',
  });

  const Pot20 = await Pot.create({
    description: 'Tan owl',
    imageUrl: 'https://i.gyazo.com/8d3f2a1fd3d1ba2d2701eb69a173ff93.jpg',
    quantity: 8,
    price: 14.99,
    category: 'owls',
  });

  const Pot21 = await Pot.create({
    description: 'Tan hornless great horn owl',
    imageUrl: 'https://i.gyazo.com/1cd02741a76b051776e2abd4b16fc4c3.jpg',
    quantity: 5,
    price: 14.99,
    category: 'owls',
  });

  const Pot22 = await Pot.create({
    description: 'Basic panda on four legs',
    imageUrl: 'https://i.gyazo.com/bee8b77caaa424345822a339e8166957.jpg',
    quantity: 9,
    price: 17.99,
    category: 'mammals',
  });

  const Pot23 = await Pot.create({
    description: 'Resting panda',
    imageUrl: 'https://i.gyazo.com/32f5172e1722f57fdb8454ebbd0e04ec.jpg',
    quantity: 7,
    price: 17.99,
    category: 'mammals',
  });

  const Pot24 = await Pot.create({
    description: 'Panda on its back',
    imageUrl: 'https://i.gyazo.com/9a0213cc6b60b8e34067754556c7ea8f.jpg',
    quantity: 8,
    price: 18.99,
    category: 'mammals',
  });

  const Pot25 = await Pot.create({
    description: 'Panda in a sweater',
    imageUrl: 'https://i.gyazo.com/c8e047c207b46feec6572557ff34cffd.jpg',
    quantity: 9,
    price: 19.99,
    category: 'mammals',
  });

  const Pot26 = await Pot.create({
    description: 'Conch shell with a small turtle',
    imageUrl: 'https://i.gyazo.com/484899a8d42da111beb19f5ab3b2db03.jpg',
    quantity: 5,
    price: 18.99,
    category: 'other',
  });

  const Pot27 = await Pot.create({
    description: 'Frog with turtle shell',
    imageUrl: 'https://i.gyazo.com/b7f5cbb10d22816d6b2c21abe6b0f0de.jpg',
    quantity: 5,
    price: 16.99,
    category: 'other',
  });

  const paymentinfo1 = await PaymentInfo.create({
    name: 'Test Dummy',
    cardNumber: 1234567890000000,
    expirationMonth: 1,
    expirationYear: 2024,
    zipcode: 11111,
  });

  // Customer1.addPot(Pot1);
  // Customer1.addPot(Pot7);
  // Customer1.addPot(Pot12);
  // Customer1.addPot(Pot24);
  // Customer1.addPaymentInfo(paymentinfo1);
  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
