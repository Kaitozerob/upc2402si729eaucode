import { Component } from '@angular/core';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {MatButton, MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    MatToolbar,
    RouterLink,
    TranslateModule,
    LanguageSwitcherComponent,
    MatButton,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

}
