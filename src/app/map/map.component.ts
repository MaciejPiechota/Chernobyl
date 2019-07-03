import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  lat: number = 51.405479;
  lng: number = 30.04702;
  constructor() {}

  ngOnInit() {}
}
