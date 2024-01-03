import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './color-page.component.html',
  styleUrl: './color-page.component.scss'
})
export class ColorPageComponent{
  buttonBgColor:string="";
  
  
}
