import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Datos } from '../Interfaces.model'


@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit {

  datos: Datos[] = [];
  //datos : any;

  daily : boolean = false;
  weekly : boolean = true ;
  monthly : boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData('Weekly');
  }

  getData(option: any){
    this.getJSON().subscribe(res=>{
      this.datos = res;
      //console.log(this.datos)
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data.json");
  }

  clickEvent(option: string){
    if(option == 'daily'){
      this.daily = true
      this.weekly = false
      this.monthly = false
    }
    if(option == 'weekly'){
      this.daily = false
      this.weekly = true
      this.monthly = false
    }
    if(option == 'monthly'){
      this.daily = false
      this.weekly = false
      this.monthly = true
    }
    //console.log(option);

    this.getData(option)

  }

}
