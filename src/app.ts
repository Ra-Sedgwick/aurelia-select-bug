import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public userList = [
    new User('Zulu', 0),
    new User('Lima', 1),
    new User('Bravo', 1)
  ];

  public sortDirection = 'ascending';
  public selectedUser = 1;

  public setSortDirection(direction) {
    this.sortDirection = direction;
  }

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }

}

class User {

 public Id: number;
 public name: string;

 constructor(name: string, id:number) {
   this.Id = id;
   this.name = name;
 }
}
