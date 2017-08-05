import { Injectable } from '@angular/core';
import{StudentData}from'./student.module';
@Injectable()
export class StddataService {
student:StudentData[];
  constructor() { 
    this.student = [
      new StudentData('rex',35,'rex.rony@gmail.com'),
      new StudentData('Fiona',35,'rex.rony@gmail.com'),
      new StudentData('Rachel',35,'rex.rony@gmail.com'),
    ]
  }

}
