import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {DatabaseService} from "../shared/database-service";
import {ListsService} from "../shared/lists-service";
import {TodoService} from "../shared/todo-service";
import {AddTaskModalPage} from "../pages/add-task-modal/add-task-modal";
import {ListsPage} from "../pages/lists/lists";
import {TodosPage} from "../pages/todos/todos";
import {IonicStorageModule} from "@ionic/storage";
import {HttpModule} from "@angular/http";
import {DoneTodosPipe} from "../pipes/done-todos.pipe";
import {PrioritizedTodosPipe} from "../pipes/prioritixed-todos-pipe";

@NgModule({
  declarations: [
    MyApp,
    TodosPage,
    ListsPage,
    AddTaskModalPage,
    PrioritizedTodosPipe,
    DoneTodosPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodosPage,
    ListsPage,
    AddTaskModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoService,
    ListsService,
    SQLite,
    DatabaseService
  ]
})
export class AppModule {}
