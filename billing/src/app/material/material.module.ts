import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatIconModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';


const materialComponents=[
    MatSnackBarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
];

@NgModule({
  imports: [materialComponents]
  ,exports:[materialComponents]
})
export class MaterialModule { }
