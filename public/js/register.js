
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((reg) => {
    console.log('register a service worker: ', reg);
  }).catch((err) => {
    console.log('err: ', err);
  });
}
