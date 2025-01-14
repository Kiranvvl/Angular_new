import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<string>('initial data');
  data$ = this.dataSubject.asObservable();

  updateData(newData: string) {
    this.dataSubject.next('newData');
  }
  constructor() {}
}
