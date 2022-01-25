import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Currency } from '../models/currency.model';
import { BudgetserviceService } from '../services/budget.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  @Input() currencies: Currency[];

  public selectedCurrency:Currency=null;

  @Output() onChangeCurrency = new EventEmitter<any>();

  constructor(public _budgetservice: BudgetserviceService) { }

  ngOnInit(): void {
  }

  handleChange() {
    this.onChangeCurrency.emit(this.selectedCurrency);
  }
}


