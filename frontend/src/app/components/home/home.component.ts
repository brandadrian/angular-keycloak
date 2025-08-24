import { Component, OnInit, VERSION } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class HomepageComponent implements OnInit {
  angularVersion = VERSION.full;

  constructor() {}
  
  ngOnInit(): void {}
}