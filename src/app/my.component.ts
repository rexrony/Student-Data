import { Component } from '@angular/core';

import {StudentData} from './student.module';
import {StddataService} from './stddata.service';


@Component({
  selector: 'app-root',
  templateUrl:'./my.component.html',

//   template:`
//   <h1>Demo Data check</h1>
// {{this.personlist[1].name}}
//   `,
  styleUrls: ['./app.component.css']
})
export class MyComponent {

personlist = [];
constructor (private stddata:StddataService){
  this.personlist = this.stddata.student;
  //console.log('personlist',this.personlist);

}
  onupdate(i) {
    //this.clickMessage = 'You are my hero!';
    let abc =  this.personlist;
    console.log('no',abc[i]);
    alert('Hi personlist[2]');
  }
  

// On Btn Add
getRegistered(Newname:string,stdage:any,eml:string){
  //alert(Newname+' - '+ stdage+'-'+eml);
  this.stddata.student.push(new StudentData(Newname,stdage,eml));

}
//delete
 delete(i){
        this.stddata.student.splice(i, 1);
    }

//Update
stdupdate(students, i, usrname, email, age){
        this.personlist[i].usrname = usrname.value;
        this.personlist[i].email = email.value;
        this.personlist[i].age = age.value
    }

//EDIT
 edit(studententry,i,username,email,age){
        username.value = studententry.name;
        email.value = studententry.email;
        age.value = studententry.age;
        console.log('Calling update inside edit',this.stdupdate)
    }
 }


  