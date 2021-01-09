import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatCardModule
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatCardModule
    ]
})

export class MaterialModule{ }