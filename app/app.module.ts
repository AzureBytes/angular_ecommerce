import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { HeaderComponent } from './header.component';
import { TestimonyComponent } from './testimony.component';
import { MarketingComponent } from './marketing.component';
import { PurchaseComponent } from './purchase.component';
import { AddressComponent } from './address.component';
import { ConfirmationComponent } from './confirmation.component';

@NgModule({
    imports:      [ 
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [ 
        AppComponent,
        HeaderComponent,
        TestimonyComponent,
        MarketingComponent,
        PurchaseComponent,
        AddressComponent,
        ConfirmationComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
