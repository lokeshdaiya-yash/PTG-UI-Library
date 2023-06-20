import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { Sidebar } from "ng-sidebar";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import{ MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from "@angular/material/divider";
import { SidebarModule } from "ng-sidebar";
import { GooglemapComponent } from '../modules/googlemap/googlemap.component'; 
import { LeafletComponent } from '../modules/leaflet/leaflet.component'; 
import { MapboxComponent } from "../modules/mapbox/mapbox.component";
@NgModule({
    declarations:[
     HeaderComponent,
     SidebarComponent,
     FooterComponent,
     GooglemapComponent,
     LeafletComponent,
     MapboxComponent
    ],
    imports: [
     CommonModule,
     RouterModule,
     FlexLayoutModule,
     MatSidenavModule,
     MatListModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     BrowserAnimationsModule,
     MatDividerModule,
     SidebarModule,
     AppRoutingModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ]

})
export class commonModule {}