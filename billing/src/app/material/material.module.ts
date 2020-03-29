import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatTabGroup, MatAutocompleteModule } from '@angular/material';


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
    MatNativeDateModule,
    MatTabsModule,
    MatAutocompleteModule
];

@NgModule({
  imports: [materialComponents]
  ,exports:[materialComponents]
})
export class MaterialModule { }
