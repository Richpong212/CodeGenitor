import { CategoryService } from './../service/category.service';
import { AddCategoryRequest } from './../models/add-category-request.model';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnDestroy {
  model: AddCategoryRequest;

  private addCategorySubscription?: Subscription;

  constructor(private CategoryService: CategoryService) {
    this.model = {
      name: '',
      urlHandle: '',
    };
  }

  onFormSubmit = () => {
    this.addCategorySubscription = this.CategoryService.addCategory(
      this.model
    ).subscribe({
      next: (response) => {
        console.log('worked');
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }
}
