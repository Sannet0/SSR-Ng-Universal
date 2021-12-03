import { Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { ITask } from '../interface/task-interface';
import { ApiService } from '../services/api.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  constructor(private apiService: ApiService,
              @Inject(PLATFORM_ID) private platformId: Object) {
  }

  tasks: ITask[];
  isDataLoad: boolean;
  taskTemplate: any[] = [0, 1, 2, 3, 4, 5];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.onInitOnBrowser();
    }
  }

  onInitOnBrowser() {
    this.apiService.loadAllTasks().subscribe(task => {
      this.tasks = task;
      this.isDataLoad = isPlatformBrowser(this.platformId);
    });
  }
}
