import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
declare let mapbox: any;
@Component({
  selector: 'ptg-ui-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css'],
})
export class MapboxComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    new mapbox();
    this.cd.detectChanges();
  }
}
