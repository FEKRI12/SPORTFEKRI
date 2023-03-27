import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blogTab:any=[
  {id:1,img:"assets/images/img_1.jpg",title:"asma",date:"15/02/23",description:"description"},
  {id:2,img:"assets/images/img_2.jpg",title:"asma",date:"15/02/23",description:"description"},
  {id:3,img:"assets/images/img_3.jpg",title:"asma",date:"15/02/23",description:"description"},
  {id:4,img:"assets/images/img_1.jpg",title:"asma",date:"15/02/23",description:"description"},
]
  constructor() { }

  ngOnInit() {
  }

}
