import { Component, OnInit } from '@angular/core';
import { Comments } from './comments';
import { HttpService } from './http.service';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
  providers: [HttpService]
})
export class OneComponent implements OnInit {

  comments: Comments []=[];
  
  constructor(private http: HttpService){}

  ngOnInit(): void {
    // this.http.getData().subscribe((data)=> console.log(data))
    this.http.getData().subscribe((data: any) => this.comments = data["commentsList"])
    console.log(123)
  }

  function(){
    
  }

}
