import { Component, OnInit } from '@angular/core';
import { RssService } from '../rss.service';
import { NewsRss } from '../news-rss';
import * as xml2js from "xml2js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rssService: RssService) { }

  ngOnInit(): void {
    this.rssService.GetRssFeedData().subscribe((x) =>{
      let parseString = xml2js.parseString;
      console.log(parseString);
          // parseString(x, (err, result: NewsRss) => {
          //   //this.RssData = result;
          //   console.log(result);
          // });
      //console.log(x);
    });
  }

}
