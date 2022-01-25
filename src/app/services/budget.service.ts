import { EventEmitter, Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetserviceService {
  public budget$ = new BehaviorSubject<number>(1000);

  constructor() { }

  changeBudget(funds: number) {
    this.budget$.next(this.budget$.getValue() + funds);
  }
}
