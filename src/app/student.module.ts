import { Component } from '@angular/core';

export class StudentData{
    name : string;
    age : number;
    email : any;
    constructor(name : string,age : number,email : any){
this.name = name;
this.age = age;
this.email  = email;
    }
}