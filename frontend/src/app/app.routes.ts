import { Routes } from '@angular/router';
import { PlantsComponent } from './components/plants/plants.component';
import { UpdateplantComponent } from './components/updateplant/updateplant.component';
import { AddnewplantComponent } from './components/addnewplant/addnewplant.component';
import { TableComponent } from './components/table/table.component';
import { WateringComponent } from './components/watering/watering.component';
import { AddnewwateringComponent } from './components/addnewwatering/addnewwatering.component';

export const routes: Routes = [

  {
    path: 'plants', component: PlantsComponent
  },
  {
    path: 'plants/:id', component: UpdateplantComponent
  },

  {
    path: 'addnewplant', component: AddnewplantComponent
  },

  {
    path: 'table', component: TableComponent
  },

  {
    path: 'watering', component: WateringComponent
  },

  {
    path: 'addnewwatering', component: AddnewwateringComponent
  },

  
];