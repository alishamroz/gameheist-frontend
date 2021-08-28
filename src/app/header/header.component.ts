import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: String = '';
  email : String = '';
  password: String = '';
  mobile: String = '';
  status: boolean = false;
  constructor(private flashMessage: FlashMessagesService) {
    
  }

  ngOnInit(): void {
  }

  onRegisterSubmit(){
    // console.log(this.name);
    const user ={
      name: this.name,
      email: this.email,
      password: this.password,
      mobile: this.password
    }
    if(this.email=='' || this.name=='' || this.mobile=='' || this.password==''){
      this.flashMessage.show(`Please Fill All details`, {cssClass:'alert-danger', timeout:3000})
    }
    console.log(user);
  }

}
