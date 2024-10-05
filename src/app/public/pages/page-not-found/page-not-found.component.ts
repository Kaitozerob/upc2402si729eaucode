import { Component } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    TranslateModule,
    MatButtonModule

  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  invalidUrl: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.invalidUrl = '';
  }

  onNavigateToHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url.join('/');
  }
}
