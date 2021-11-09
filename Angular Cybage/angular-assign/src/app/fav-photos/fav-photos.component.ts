import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.scss']
})
export class FavPhotosComponent implements OnInit {

  title:string="Random Images";
  imagesURL:string[]=[
    'https://www.generatormix.com/images/cartoon/tom.jpg',
    'https://th.bing.com/th/id/OIP.k-OnkbpTpDV42Yyw3nXkGwHaEK?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.eCx2eS6iDQtwuk0hDjwdNAHaFj?pid=ImgDet&rs=1'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
