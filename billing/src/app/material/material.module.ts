import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatButtonModule, MatTableModule, MatPaginatorModule } from '@angular/material';


const materialComponents=[
    MatSnackBarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
];

@NgModule({
  imports: [materialComponents]
  ,exports:[materialComponents]
})
export class MaterialModule { }
