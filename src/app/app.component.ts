
import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable} from 'rxjs';

import { GitHubService } from './github.service';
import { repos } from './repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  pageNo  = ' 1';
  sortOn = 'description';
  userName: string = ""
  repos: repos[] | undefined;

  loading: boolean = false;
  errorMessage: '' | undefined;

  constructor(private githubService: GitHubService) {
  }

  public getRepos() {
      this.loading = true;
      this.errorMessage = '';
      this.githubService.getRepos(this.userName,this.pageNo,this.sortOn)
          .subscribe((response) => {this.repos = response;},
                     (error) => {
                         this.errorMessage = error.message; this.loading = false;
                      },
                      () => {this.loading = false;})

  }
}
