import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { FormGroup, FormControl,Validators } from '@angular/forms';
import { BudgetItem } from 'src/shared/mofules/budgetItem';
import { NgForm } from '@angular/forms';
import { format } from 'url';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
 @Input() item:BudgetItem= new BudgetItem('',null)
 @Output() formatSubmit:EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.formatSubmit.emit(form.value)
    form.reset();
    
  }

}
