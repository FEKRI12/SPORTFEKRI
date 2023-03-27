import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { generateId } from 'src/app/shared/genericFunction';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // Form ID
  signupForm: FormGroup;
  // y:boolean=true;
  user: any = {}
  path: string;
messageError:String;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService:UserService) { }

  ngOnInit() {
    this.path = this.router.url;
    console.log("here path",this.path);
    
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]

    });
  }

  signup() {
    console.log("clicked", this.signupForm.value);
    // if (this.path=="/subscription") {
    //   this.signupForm.value.role="user"
    // } else {
    //   this.signupForm.value.role="admin" 
    // }
    this.signupForm.value.role=(this.path=="/subscription")? "user":"admin";
    this.userService.signup(this.signupForm.value).subscribe(
(response)=>{
console.log("here message",response.message);
if (response.message=="ERROR") {
  this.messageError="mail existant"
} else {
  this.router.navigate(["signin"]);
}


}





    );

    // let userListe = JSON.parse(localStorage.getItem("users") || "[]");
    // // notre objet this.signupForm.value
    // this.signupForm.value.id = generateId(userListe);
    // userListe.push(this.signupForm.value);
    // localStorage.setItem("users", JSON.stringify(userListe));
   



  }

}
