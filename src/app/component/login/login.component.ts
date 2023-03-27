import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
user:any={};
users:any[];

constructor(private formBuilder: FormBuilder , private router:Router, private userService:UserService) { }

  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      email:["",[Validators.required, Validators.email]],
      password:["",[Validators.required]]
    })
  }
  login() {
    console.log("clicked", this.loginForm.value);
  //   this.users=JSON.parse(localStorage.getItem("users")||"[]");
  //   for (let i = 0; i < this.users.length; i++) {
  // //  if ((this.users[i].email==this.loginForm.value.email)&&(this.users[i].password==this.loginForm.value.password)) {
  // //   if (this.users[i].role=="admin") {
  // //     this.router.navigate(["admin"])
  // //   } else {
  // //     this.router.navigate([""])
  //   (this.users[i].role=="admin")?this.router.navigate(["admin"]):this.router.navigate([""])
  //   }
let user= this.loginForm.value;
   this.userService.login(user).subscribe(
   (response)=>{
    console.log("response after login", response.message);
   }

   );
      
    }
  
  // }
}
