import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/core/snackbar.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private auth:AuthService,
    private router: Router,
    private snackbarService:SnackbarService
    ){}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }

  onSubmit(): void {
   console.log(this.loginForm.value)

   if (this.loginForm.valid) {
    this.auth.login(this.loginForm.value).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/admin']);
      },
      (err: Error) => {
        //this.snackbarService.openSnackBar(err.message)
        alert(err.message);
      }
    );
  } 
  }


  
 
}


//https://www.youtube.com/watch?v=ibn2yAomxp8
//https://www.youtube.com/watch?v=ibn2yAomxp8