import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/mofules/budgetItem';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  budgetItems:BudgetItem[] = new Array<BudgetItem>();
  totalAmount:number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem:BudgetItem){
    this.budgetItems.push(newItem);
    this.totalAmount += newItem.amount;
    }
    deleteItem(item:BudgetItem){
      let index = this.budgetItems.indexOf(item)
      this.budgetItems.splice(index,1)
      this.totalAmount -= item.amount;


    }
}
