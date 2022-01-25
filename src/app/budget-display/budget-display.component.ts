import { Component, Input, OnInit } from '@angular/core';
import { Currency } from '../models/currency.model';
import { BudgetserviceService } from '../services/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget-display.component.html',
  styleUrls: ['./budget-display.component.scss']
})
export class BudgetDisplayComponent implements OnInit {

  @Input() selectedCurrency:Currency= {
    symbol: '$',
    code: 'US',
    position:'start'
  };

  constructor(public _budgetservice: BudgetserviceService) {

  }

  ngOnInit(): void {
  }

}
