import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user-service.service'
import {Contact} from '../../contact'

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contact: Contact = new Contact();
  submitted = false;

  constructor(private contactService: UserService) { }

  ngOnInit(): void {
  }

  newContact(): void {
    this.submitted = false;
    this.contact = new Contact();
  }

  save() {
    this.contactService.create(this.contact).subscribe((response:any) => {
      console.log(response);
    })
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
