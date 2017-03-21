
export class App {

  configureRouter(config, router) {
    config.map([
      { route: ['', 'viewmodel-with-subrouter'],  moduleId: './viewmodel-with-subrouter' , nav: true, title: 'viewmodel-with-subrouter' }
    ]);

    this.router = router;
  }
}
