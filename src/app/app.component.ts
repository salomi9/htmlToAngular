import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demoAngular';
  ngOnInit(): void {
    console.log("INITED")
    // this.demoServiceObject.getDemo().subscribe(data => {
    //   console.log("datttaaa", data)
    // })
  }
}
