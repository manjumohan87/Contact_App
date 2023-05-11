import { Component, OnInit } from '@angular/core';
import { ContactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit{
  contact:ContactSchema = {} 
  allGroups:any=[]
  errMsg:string = ""
  constructor(private api:ApiService,private addContactRouter:Router){
    this.contact.groupId = "Select A Group..."
  }
  ngOnInit(): void {
    this.api.getGroups().subscribe({
      next:(response:any)=>{
        console.log(response);
        this.allGroups = response
      },
      error:(err:any)=>{
        console.log(err.message);
        this.errMsg = err.message

      }
    })
  }

  addContact(contact:ContactSchema){
//call api
this.api.addContact(contact).subscribe({
  next:(response:any)=>{
console.log(response);
//navigate to allcontacts page
this.addContactRouter.navigateByUrl('')

  },
  error:(err:any)=>{
    console.log(err);
    
  }
})
  }

}
