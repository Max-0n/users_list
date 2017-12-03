export class NavigationService {

  curBot: any;

  navigation: any = {
    bots: true,
    settings: false
  }

  isNav(name: string): boolean {
    if (name in this.navigation) {
      return this.navigation[name];
    }
    return false;
  }

  selectNav(name: string): boolean {
    if (name in this.navigation) {
      this.clearNav();
      return this.navigation[name] = true;
    }
    return false;
  }

  clearNav() {
    for (let item in this.navigation) {
      if (this.navigation[item]) this.navigation[item] = false;
    }
  }

}
