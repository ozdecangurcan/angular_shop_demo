import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { AccountService } from "../services/account.service";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let loggedIn = this.accountService.isLoggedIn();
    if (loggedIn) {
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
}
