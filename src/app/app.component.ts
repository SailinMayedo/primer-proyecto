import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  
  cities= ['barcelona','madrid','lima'];
  name!:string;
  title = 'reto05';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change->', changes);
  }
    ngOnInit(): void {
      console.log('OnInit->');
    }
 
  ngOnDestroy(): void {
    console.log('destroy');
  }



}

