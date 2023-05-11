import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // base_url = 'http://localhost:4000' 
  base_url = 'https://contactapp-szo9.onrender.com' 
  constructor(private http:HttpClient) { }


//handle error

// handleError(error:HttpErrorResponse){
//   let errorMsg:string=''
//   // errorMsg= `Error: ${error.message}`
//   if(error.error){
//     //client error
//   errorMsg = `Error : ${error.message}`
//   }
//   else{
//     errorMsg = `Status: ${error.status} \n Error: ${error.message}`
//   }
//   return throwError(()=>errorMsg)
// }





  //get all contacts api
  getAllcontacts(){
  //api call: http://localhost:4000/contacts req:get
    return this.http.get(`${this.base_url}/contacts`)
  }

  //view a contact

  viewContact(id:any){
   //api call: http://localhost:4000/contacts/id req:get
     return this.http.get(`${this.base_url}/contacts/${id}`)
  }

  //get a  particular group

  getGroup(id:any){
    //api call: http://localhost:4000/groups/id req:get
    return this.http.get(`${this.base_url}/groups/${id}`)
  }

  //get all groups
  getGroups(){
     //api call: http://localhost:4000/groups   req:get
     return this.http.get(`${this.base_url}/groups`)
  }
  //add contact
  
  addContact(contact:ContactSchema){
//reQ:post
    return this.http.post(`${this.base_url}/contacts`,contact)
  }

  //delete contact
  deleteContact(id:any){
//api call server req:delete
    return this.http.delete(`${this.base_url}/contacts/${id}`)
  }

//edit a contact

editContact(id:any,contact:ContactSchema){
  return this.http.put(`${this.base_url}/contacts/${id}`,contact)

}



}
