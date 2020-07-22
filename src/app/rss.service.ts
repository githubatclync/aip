import { Injectable } from  '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsRss } from './news-rss';
import * as xml2js from "xml2js";

@Injectable({ providedIn: 'root' })
export class RssService {
    RssData: NewsRss;
    constructor(private http: HttpClient) {}
    GetRssFeedData() {
      const requestOptions: Object = {
        observe: "body",
        responseType: "text"
      };
      return this.http
        .get<any>("https://aippodstorage.z13.web.core.windows.net/aip.xml", requestOptions)
        // .subscribe(data => {
        //   let parseString = xml2js.parseString;
        //   parseString(data, (err, result: NewsRss) => {
        //     this.RssData = result;
        //   });
        // });
    }
}