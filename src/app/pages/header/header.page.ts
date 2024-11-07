import { Component, signal } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from "@angular/router";

import { MenuIcon, XIcon } from "../../components/lucide.component";

@Component({
    selector: 'app-header',
    templateUrl: 'header.page.html',
    styleUrls : ['header.page.scss'],
    standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet, MenuIcon, XIcon]
})
export class HeaderPage {
    title = signal<string>('');

    showMenu = false
}