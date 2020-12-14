import { Component, OnInit } from '@angular/core';
import { UserService} from '../../service/user-service.service';
import { Contact } from '../../contact';
import { Router } from '@angular/router';
import { Observable } from "rxjs";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts:any;
  constructor(private contactService: UserService,
    private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.contactService.getContactList().subscribe((response:Response)=>{
      console.log("Response is ====> ",response)
       this.contacts = response;
      console.log(this.contacts)
    })
  }

  delete(id) {
    console.log(id)
     this.contactService.delete(id)
       .subscribe((response:any) => {
         console.log(response)
         this.reloadData();
       })
  }

}
