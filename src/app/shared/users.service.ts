import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class UsersService {

  users: any[] = [
    { id: 1, name: "Max0n", avatarUrl: 'https://avatars2.githubusercontent.com/u/14617911?s=460&v=4' },
    { id: 2, name: "Alex", avatarUrl: 'http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-11.png' },
    { id: 3, name: "John", avatarUrl: undefined },
    { id: 4, name: "Brown", avatarUrl: 'http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-12.png' },
    { id: 5, name: "GoldMan", avatarUrl: 'http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-14.png' },
    { id: 6, name: "Epicer", avatarUrl: 'http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-13.png' }
  ];
  prev: string;
  next: string;
  selected: any;

  constructor(private http: Http,
              private urlService: UrlService) { }

  getAvatar(user: any): string {
    if (user.avatarUrl) return user.avatarUrl;
    else return this.urlService.defaultAva;
  }

  get(url?: string) {
		let headers = new Headers({'Content-Type': 'application/json'}),
        options = new RequestOptions({headers});

		this.http.get(url ? url : this.urlService.baseurl + 'api/users', options)
					.map( res => {
            let response = res.json();
						this.users = response.result;
            this.prev = response.previousPageUrl ? response.previousPageUrl : undefined;
            this.next = response.nextPageUrl ? response.nextPageUrl : undefined;
						return response;
					})
					.catch(this.handleError)
					.subscribe();
	}

  update(user: any) {
    let headers = new Headers({'Content-Type': 'application/json'}),
        options = new RequestOptions({headers}),
        sendData: any = {
          name: user.name,
          avatarUrl: user.avatarUrl
        };

    this.http.post(this.urlService.baseurl + 'api/users/' + user.id, sendData, options)
          .map( res => { console.log('Data was updated', res.json()) })
          .catch(this.handleError)
          .subscribe();
}


  private handleError(error: any){
		console.error('Произошла ошибка', error);
		return Observable.throw(error.status);
	}


}
