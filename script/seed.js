'use strict';

const {
  db,
  models: { User, Pot, Payment },
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
    price: 27.99,
    category: 'wacky',
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
    price: 41.99,
    category: 'reptiles',
  });

  const Pot8 = await Pot.create({
    description: 'Light green Tyrannosaurus with Michael Jordan',
    imageUrl: 'https://i.gyazo.com/b4ff17d9acfad6c100dc9d2bdf6b6aea.jpg',
    quantity: 2,
    price: 45.99,
    category: 'reptiles',
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
    price: 21.99,
    category: 'wacky',
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
    category: 'mammals',
  });

  const Pot13 = await Pot.create({
    description: 'Headless Mr Incredible',
    imageUrl: 'https://i.gyazo.com/6c3e0d428ad0f6f5a3101425ca9cde23.jpg',
    quantity: 7,
    price: 34.99,
    category: 'wacky',
  });

  const Pot14 = await Pot.create({
    description: 'Sheep with Mr Incredible head',
    imageUrl: 'https://i.gyazo.com/9c290a0417ad6f385a89a3925a68135e.jpg',
    quantity: 7,
    price: 27.99,
    category: 'wacky',
  });

  const Pot15 = await Pot.create({
    description: 'Blue sleep owl',
    imageUrl: 'https://i.gyazo.com/f18eec6fa0d5d4e419695a414430ce4a.jpg',
    quantity: 4,
    price: 18.99,
    category: 'owls',
  });

  const Pot16 = await Pot.create({
    description: 'Green-brown owl with flower eyes',
    imageUrl: 'https://i.gyazo.com/4bbe04272d956957b7cd672c9c44fd29.jpg',
    quantity: 7,
    price: 17.99,
    category: 'owls',
  });

  const Pot17 = await Pot.create({
    description: 'Light green owl with leaf eyes',
    imageUrl: 'https://i.gyazo.com/a23ceb5e629246fc9b391603e4cedcdd.jpg',
    quantity: 8,
    price: 17.99,
    category: 'owls',
  });

  const Pot18 = await Pot.create({
    description: 'Sky blue owl',
    imageUrl: 'https://i.gyazo.com/4668afadb94b4f398f2dba70a614d000.jpg',
    quantity: 4,
    price: 17.99,
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
    description: 'Froggy the turtle',
    imageUrl: 'https://i.gyazo.com/b7f5cbb10d22816d6b2c21abe6b0f0de.jpg',
    quantity: 5,
    price: 16.99,
    category: 'reptiles',
  });

  // rob started adding below

  const Pot28 = await Pot.create({
    description: 'Giant panda',
    imageUrl: 'https://i.gyazo.com/7873c116d9ffd53cc178845ab53df775.jpg',
    quantity: 5,
    price: 29.99,
    category: 'mammals',
  });

  const Pot29 = await Pot.create({
    description: 'The green house effect',
    imageUrl: 'https://i.gyazo.com/fabfe7884c07e8e92af323e54b025fb1.jpg',
    quantity: 6,
    price: 25.99,
    category: 'other',
  });

  const Pot30 = await Pot.create({
    description: 'Silver brontosaurus',
    imageUrl: 'https://i.gyazo.com/37c7ed686e5ab065b439fe78c8150239.jpg',
    quantity: 7,
    price: 29.99,
    category: 'mammals',
  });

  const Pot31 = await Pot.create({
    description: 'Cat with glasses',
    imageUrl: 'https://i.gyazo.com/b894fdbacd255f98b12b753714953a1e.jpg',
    quantity: 4,
    price: 31.99,
    category: 'mammals',
  });

  const Pot32 = await Pot.create({
    description: 'Reindeer includes reindeer food pot',
    imageUrl: 'https://i.gyazo.com/ab70d0bef5c556c41ec67e499312c14c.jpg',
    quantity: 8,
    price: 23.99,
    category: 'mammals',
  });

  const Pot33 = await Pot.create({
    description: 'Hanging bird with nest',
    imageUrl: 'https://i.gyazo.com/0b6edc07541e9f08aafdbe2bcafdffab.jpg',
    quantity: 5,
    price: 29.99,
    category: 'mammals',
  });

  const Pot34 = await Pot.create({
    description: 'Cool santa clause',
    imageUrl: 'https://i.gyazo.com/8406f7caf23a0d8e2894a10cfb59e8a7.jpg',
    quantity: 9,
    price: 28.99,
    category: 'other',
  });

  const Pot35 = await Pot.create({
    description: 'Panda welcome rock',
    imageUrl: 'https://i.gyazo.com/6b9ee14f455fb593b70010b765006af8.jpg',
    quantity: 10,
    price: 24.99,
    category: 'other',
  });

  const Pot36 = await Pot.create({
    description: 'Yellow bird with purple nest',
    imageUrl: 'https://i.gyazo.com/5dab2f3041962a74adb013f9b729f18c.jpg',
    quantity: 8,
    price: 27.99,
    category: 'birds',
  });

  const Pot37 = await Pot.create({
    description: 'Blue brontosaurus aka little foot',
    imageUrl: 'https://i.gyazo.com/c6989491ecf904b4dc84212911141b81.jpg',
    quantity: 11,
    price: 21.99,
    category: 'reptiles',
  });

  const Pot38 = await Pot.create({
    description: 'Frog prince on lily pad',
    imageUrl: 'https://i.gyazo.com/f5bd3ca73fafb9d52023e0304b1da326.jpg',
    quantity: 3,
    price: 33.99,
    category: 'wacky',
  });

  const Pot39 = await Pot.create({
    description: 'Three stars',
    imageUrl: 'https://i.gyazo.com/633d1529dc4a5db7cfa153f52851b581.jpg',
    quantity: 14,
    price: 16.99,
    category: 'other',
  });

  const Pot40 = await Pot.create({
    description: 'Sluggy the slug',
    imageUrl: 'https://i.gyazo.com/c88664a4a6a7bc63ad50fd8f2148f41f.jpg',
    quantity: 11,
    price: 18.99,
    category: 'other',
  });

  const Pot41 = await Pot.create({
    description: 'Gnome with purple headband',
    imageUrl: 'https://i.gyazo.com/2217f190829a85ba182828f8115421c7.jpg',
    quantity: 10,
    price: 15.99,
    category: 'other',
  });

  const Pot42 = await Pot.create({
    description: 'Angry bird aka Sunshine',
    imageUrl: 'https://i.gyazo.com/2f54c753d51740bf5beb603700ca094e.jpg',
    quantity: 12,
    price: 19.99,
    category: 'birds',
  });

  const Pot43 = await Pot.create({
    description: 'Serious blue owl',
    imageUrl: 'https://i.gyazo.com/a1286865a27d5e269d751720c80fe504.jpg',
    quantity: 15,
    price: 14.99,
    category: 'owls',
  });


  const Pot44 = await Pot.create({
    description: 'Colorful owl on nest looking up',
    imageUrl: 'https://i.gyazo.com/48e91eaa8ff2c465462d2542b5ddfba2.jpg',
    quantity: 7,
    price: 26.99,
    category: 'owls',
  });

  const Pot45 = await Pot.create({
    description: 'Red triceratops',
    imageUrl: 'https://i.gyazo.com/c4c1121937b1874c358b391ea413911f.jpg',
    quantity: 9,
    price: 22.99,
    category: 'reptiles',
  });

  const Pot46 = await Pot.create({
    description: 'Green serious owl',
    imageUrl: 'https://i.gyazo.com/34f57b744e01b5e45ecf7af553d34e08.jpg',
    quantity: 11,
    price: 16.99,
    category: 'mammals',
  });

  const Pot47 = await Pot.create({
    description: 'Fish plant fountain',
    imageUrl: 'https://i.gyazo.com/c1dce01ec7d0ee1fa7aa38a6a812d63b.jpg',
    quantity: 11,
    price: 22.99,
    category: 'wacky',
  });

  const Pot48 = await Pot.create({
    description: 'Light blue pterodactyl',
    imageUrl: 'https://i.gyazo.com/264444ba74befc9e495d5bfb3dcc1724.jpg',
    quantity: 8,
    price: 21.99,
    category: 'mammals',
  });

  const Pot49 = await Pot.create({
    description: 'Orange confident bird',
    imageUrl: 'https://i.gyazo.com/3708b0b2ed8082084f0b02dd91837dee.jpg',
    quantity: 7,
    price: 20.99,
    category: 'birds',
  });

  const Pot50 = await Pot.create({
    description: 'Green elephant resting',
    imageUrl: 'https://i.gyazo.com/e2f7c0916abca689cdf9fd9af9ffccad.jpg',
    quantity: 9,
    price: 27.99,
    category: 'mammals',
  });

  const Pot51 = await Pot.create({
    description: 'Pterodactyl with a giraffe neck and head',
    imageUrl: 'https://i.gyazo.com/313bf0cc787fb4d5e7edb1f1cff625c8.jpg',
    quantity: 6,
    price: 28.99,
    category: 'wacky',
  });

  const Pot52 = await Pot.create({
    description: 'Squirl king holding a nut',
    imageUrl: 'https://i.gyazo.com/9d135baa038af12c6da07ada4efddc20.jpg',
    quantity: 7,
    price: 24.99,
    category: 'mammals',
  });

  const Pot53 = await Pot.create({
    description: 'The old wise frog',
    imageUrl: 'https://i.gyazo.com/f87ef47957207f21c596f8c354920836.jpg',
    quantity: 11,
    price: 18.99,
    category: 'other',
  });

  const Pot54 = await Pot.create({
    description: 'Owl showing off his shades of green',
    imageUrl: 'https://i.gyazo.com/09a6bdf39a30da5925a93caf8c546027.jpg',
    quantity: 5,
    price: 17.99,
    category: 'owls',
  });

  const Pot55 = await Pot.create({
    description: 'Small colorful owl named Pepper',
    imageUrl: 'https://i.gyazo.com/d987a29b657027316ab825964404d686.jpg',
    quantity: 15,
    price: 16.99,
    category: 'owls',
  });

  // rob added above ^^

  const Payment1 = await Payment.create({
    name: 'Test Dummy',
    cardNumber: 1234567890000000,
    expirationMonth: 1,
    expirationYear: 2024,
    zipcode: 11111,
  });

  await Customer1.addPot(Pot1);
  await Customer1.addPot(Pot7);
  await Customer1.addPot(Pot12);
  await Customer1.addPot(Pot24);
  await Customer1.addPayment(Payment1);
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
