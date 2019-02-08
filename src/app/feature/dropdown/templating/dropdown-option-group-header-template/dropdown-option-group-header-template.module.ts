import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownOptionGroupHeaderTemplateRoutingModule } from './dropdown-option-group-header-template-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DropdownOptionGroupHeaderTemplateComponent,
  OptionGroupHeaderTemplateUsageComponent
} from './index';

/**
 * Module class for containing dropdown option group header template module.
 */
@NgModule({
  declarations: [
    DropdownOptionGroupHeaderTemplateComponent,
    OptionGroupHeaderTemplateUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownOptionGroupHeaderTemplateRoutingModule
  ],
  providers: []
})
export class DropdownOptionGroupHeaderTemplateModule {
}
