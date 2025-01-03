import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  // @Input() text: string = '';
  // text: string = 'blue';
  @Input() text!: string;
  // @Input() color: string = '';
  // color: string = 'Click Me';
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    // console.log('Add');
    this.btnClick.emit();
  }
}
