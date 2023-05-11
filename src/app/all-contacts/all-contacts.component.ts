import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit{
// to get 
  allContacts:any=[]
  isLoading:boolean = true
  errorMsg = ''
  searchkey = ''

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAllcontacts()
  }

  getAllcontacts(){
    this.api.getAllcontacts().subscribe({
      next:(response:any)=>{
        console.log(response)   
        setTimeout(()=>{
          this.allContacts = response   
        this.isLoading = false  
        },2000)
      },
      error:(err:any)=>{
        console.log(err.message);
        this.errorMsg = err.message
        this.isLoading = false
      }
    }    
    )
  }


  deleteContact(id:any){
    //call api
   this.api.deleteContact(id).subscribe({
    next:(response:any)=>{
      this.getAllcontacts()
    }
   })

  }
    



}
