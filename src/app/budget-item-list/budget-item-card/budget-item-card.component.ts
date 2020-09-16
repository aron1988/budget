import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/mofules/budgetItem';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {
@Input() item:BudgetItem;
@Output() xButtonClick:EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();


  constructor() { }

  ngOnInit(): void {
    console.log(this.item.amount);

  }
  onXbuttonClick(){
  this.xButtonClick.emit()
  }

}
