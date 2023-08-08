System.import('single-spa').then(({ registerApplication, start }) => {
  registerApplication({
    name: 'mf-angular-app',
    app: () => System.import('mf-angular-app'),
    activeWhen: () => true,
  });

  registerApplication({
    name: 'mf-angular-popup',
    app: () => System.import('mf-angular-popup'),
    activeWhen: location => location.pathname.startsWith('/mf-angular-popup'),
  });

  // registerApplication({
  //   name: 'chat',
  //   app: () => System.import('chat'),
  //   activeWhen: location => location.pathname.startsWith('/chat'),
  // });

  // registerApplication({
  //   name: 'noop-zone',
  //   app: () => System.import('noop-zone'),
  //   activeWhen: location => location.pathname.startsWith('/noop-zone'),
  // });

  // registerApplication({
  //   name: 'elements',
  //   app: () => System.import('elements'),
  //   activeWhen: location => location.pathname.startsWith('/elements'),
  // });

  // registerApplication({
  //   name: 'parcel',
  //   app: () => System.import('parcel'),
  //   activeWhen: location => location.pathname.startsWith('/parcel'),
  // });

  // registerApplication({
  //   name: 'standalone',
  //   app: () => System.import('standalone'),
  //   activeWhen: location => location.pathname.startsWith('/standalone'),
  // });

  start();
});
