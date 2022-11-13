import { Component, OnInit } from '@angular/core';
import { Try } from '../try';
import { TryService } from '../try.service';

@Component({
  selector: 'app-view-try',
  templateUrl: './view-try.component.html',
  styleUrls: ['./view-try.component.css']
})
export class ViewTryComponent implements OnInit {

  try!: Try[];
  constructor(private tryService:TryService) { }

  ngOnInit(): void {
    this.tryService.getDataFromExpress().subscribe(data =>{
      this.try = data;
    })
  }

}
