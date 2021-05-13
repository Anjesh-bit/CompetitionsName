import { CompetitionAuthService } from './competition-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CompetitionAuthguardService implements CanActivate {
  constructor(private autho: CompetitionAuthService) {}
  canActivate(): boolean {
    return this.autho.isAuthenticated();
  }
}
