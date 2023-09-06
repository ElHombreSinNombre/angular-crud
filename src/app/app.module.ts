import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CharacterReducer } from '../app/store/reducer/Character';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '@/components/dialog/dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, DialogComponent],
  imports: [
    MatFormFieldModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    MatListModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot({ characters: CharacterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
