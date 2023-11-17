import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    // styles: [`
    //     :host ::ng-deep .pi-eye,
    //     :host ::ng-deep .pi-eye-slash {
    //         transform:scale(1.6);
    //         margin-right: 1rem;
    //         color: var(--primary-color) !important;
    //     }
    // `]
    styles: [`
    :host ::ng-deep .p-password input {
    width: 100%;
    padding:1rem;
    }
  
    :host ::ng-deep .pi-eye{
      transform:scale(1.6);
      margin-right: 1rem;
      color: rgba(0, 165, 135) !important;
    }
  
    :host ::ng-deep .pi-eye-slash{
      transform:scale(1.6);
      margin-right: 1rem;
      color: rgba(0, 165, 135) !important;
    }
  `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;

    constructor(
        public layoutService: LayoutService,
        private router: Router
    ) { }

    linked() {
        this.router.navigate(['/airday'])
    }
}
