import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule
    ]
})

export class MaterialModule { }