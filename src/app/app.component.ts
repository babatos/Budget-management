import { Component } from '@angular/core';
import { Currency } from './models/currency.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Budget-management';

  currencies: Currency[];
  selectedCurrency: Currency;

  constructor() {
    this.currencies = [
      { symbol: '$', code: 'US' ,position:'start'},
      { symbol: '£', code: 'UK' ,position:'start'},
      { symbol: 'đ', code: 'VN' ,position:'end'},

    ];
    this.selectedCurrency = {
      symbol: '$',
      code: 'US',
      position:'start'
    };
  }

  onChangeCurrency(currency:any): void {
    this.selectedCurrency = currency;
  }
}
