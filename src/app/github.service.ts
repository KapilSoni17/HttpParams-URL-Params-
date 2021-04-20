

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { repos} from './repo';

@Injectable()
export class GitHubService {

  baseURL= "https://api.github.com/";

  constructor(private httpClient: HttpClient){
  }

  getRepos(userName: string, PageNo: string, SortOn: string): Observable<repos[]> {


       let params = new HttpParams()
               .set('page', PageNo)
               .set('sort', SortOn);

       console.log(params.toString());

       return this.httpClient.get<repos[]>(this.baseURL + 'users/' + userName + '/repos', {params});
  }
 

}
