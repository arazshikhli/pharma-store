import {Component, Input, OnInit} from '@angular/core';
import {Drug} from "../../app.component";

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.scss']
})
export class DrugsComponent implements OnInit {
@Input() drug!: Drug
  constructor() { }

  ngOnInit(): void {
  }

}
