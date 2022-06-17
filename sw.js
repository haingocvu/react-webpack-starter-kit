import { precacheAndRoute } from 'workbox-precaching';
// Add in additional imports here as needed.

// This line of code ensures that everything in your webpack
// compilation gets precache and served.
precacheAndRoute(self.__WB_MANIFEST);

// Your custom service worker code goes here.
