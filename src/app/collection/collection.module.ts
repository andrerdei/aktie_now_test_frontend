import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CollectionComponent } from './collection.component';
import { CollectionService } from './services/collection.service';

@NgModule({
  declarations: [CollectionComponent],

  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],

  exports: [],

  providers: [
    HttpClientModule,
    CollectionService
  ]
})

export class CollectionModule { }
