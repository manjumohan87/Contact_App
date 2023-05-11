import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {

  contact:any = {}
  errMsg:string = ""
  group:string = ""
  constructor(private api:ApiService, private viewRouter:ActivatedRoute){}

  ngOnInit(): void {
    //get contact id from its url
    this.viewRouter.params.subscribe((data:any)=>{
      //destructuring data object( javascript method)
      const {id} = data
      console.log(id);
      this.api.viewContact(id).subscribe({
        next:(response:any)=>{
          console.log(response);       
          const {groupId} = response
          this.api.getGroup(groupId).subscribe((data:any)=>{
          console.log(data);
            const {name} = data
            this.group = name
          })

          this.contact = response   
        },
        error:(err:any)=>{
          console.log(err.message);    
          this.errMsg = err.message      
        }

      })
      
    })




  }
}
