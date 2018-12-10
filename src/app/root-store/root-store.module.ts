import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MyFeatureStoreModule } from './my-feature-store/my-feature-store.module';
import { MyFeatureStore2Module } from './my-feature-store2/my-feature-store2.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyFeatureStoreModule,
    MyFeatureStore2Module,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
