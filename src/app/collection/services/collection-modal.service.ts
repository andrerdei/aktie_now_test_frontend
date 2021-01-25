import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionModalService {

  public currentBookId: string;

  constructor() { }

  public toggleCreateModal(): void {
    const form = document.querySelector(".register-update-form-div");
    const formRealButton = document.querySelector(".real-create-button");
    const formCancelButton = document.querySelector(".cancel-create-button");

    form.classList.toggle("visible-form-index");
    
    setTimeout(() => {
      form.classList.toggle("visible-form-opacity")
      formRealButton.classList.toggle("visible-button");
      formCancelButton.classList.toggle("visible-button");
    }, 200);
  }

  public toggleEditModal(): void {
    const form = document.querySelector(".register-update-form-div");
    const formRealButton = document.querySelector(".real-edit-button");
    const formCancelButton = document.querySelector(".cancel-edit-button");

    form.classList.toggle("visible-form-index");
    
    setTimeout(() => {
      form.classList.toggle("visible-form-opacity")
      formRealButton.classList.toggle("visible-button");
      formCancelButton.classList.toggle("visible-button");
    }, 200);
  }
}
