import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


import { Currency } from '../models/currency.model';
import { Error } from '../models/errors.model';
import { BudgetserviceService } from '../services/budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent implements OnInit{

  @Input() selectedCurrency: Currency = {
    symbol: '$',
    code: 'US',
    position:'start'
  };

  public error: Error;
  public inputDebitForm: FormGroup;
  public inputCreditForm: FormGroup;

  constructor(public _budgetService:BudgetserviceService,private fb: FormBuilder) {
      this.error = {
      type: '',
      message: ''
    };
  }

  ngOnInit(): void {
    this.inputDebitForm = this.fb.group({
      debitFund: [0,[Validators.required,this.debitValidator().bind(this)]]
    });

    this.inputCreditForm = this.fb.group({
      creditFund: [0,Validators.required],
    });
  }

  handleDebit(): void {
    const debitAmount=this.inputDebitForm.value.debitFund;
    if (debitAmount > 0) {
      const newAmount = this._budgetService.budget$.getValue() - debitAmount;
      if (newAmount >=0) {
        this._budgetService.changeBudget(-debitAmount);
      }
    }
  }

  handleCredit(): void {
    const creditAmount=this.inputCreditForm.value.creditFund;
    if (creditAmount > 0) {
      this._budgetService.changeBudget(creditAmount);
    }
  }

  debitValidator(){
    return (c:AbstractControl)=>{
      return((c.value>(this._budgetService.budget$.getValue())))?{
        invalidDebit:true
      }:null;
    }
  }
}


