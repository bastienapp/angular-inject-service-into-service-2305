import { Component, OnInit } from '@angular/core';
import { FirstService } from 'src/app/services/first.service';
import { Stuff } from 'src/app/models/stuff.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  stuffList: string[] = ["foo", "bar"];
  stuffMapped: Stuff[] = [];

  constructor(private firstService: FirstService) { }

  ngOnInit(): void {
    this.stuffMapped = this.stuffList.map(this.firstService.mapStuff);
  }
}
