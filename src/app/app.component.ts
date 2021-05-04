import { Component } from '@angular/core';
import { WeekService, MonthService, WorkWeekService, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import {Datasource} from './datasource'

@Component({
  selector: 'app-root',
   providers: [WeekService, MonthService, WorkWeekService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Schedule';

  public selectedDate: Date = new Date(2018, 7, 1);
  public showWeekend: boolean = false;
  public eventSettings: EventSettingsModel = { dataSource: Datasource, 
    fields:{
      subject: { title: 'Patient Name', name: 'Name' },
      startTime: { title: 'From', name: 'StartTime' },
      endTime: { title: 'To', name: 'EndTime' },
      description: { title: 'Reason', name: 'Description' }
    }
  };

}
