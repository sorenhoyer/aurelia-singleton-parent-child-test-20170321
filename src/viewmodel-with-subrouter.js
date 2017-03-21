import {bindable} from 'aurelia-framework';

export class ViewmodelWithSubrouter {
  @bindable router;
  heading = 'viewmodel-with-subrouter';
  configureRouter(config, router) {
    config.map([
      { route: ['','shared-parent/child-a'],  moduleId: './child-a' , nav: true, title: 'Shared Parent - child-a' },
        { route: 'shared-parent/child-b', moduleId: './child-b', nav: true, title: 'Shared Parent - child-b' },
    ]);

    this.router = router;
  }

  constructor() {}
}
