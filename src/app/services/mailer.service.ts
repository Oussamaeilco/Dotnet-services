import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailerService {
  _http: HttpClient;
  msg_type: boolean = false; // false: contact; true: join
  email!: string;
  name!: string;
  societe!: string;
  message!: string;
  data!: FormData;
  endpoint: string = 'http://localhost:8000/sendEmail.php';
  endpoint_join: string = 'http://localhost:8000/sendEmail_join.php';

  constructor(_http: HttpClient) {
    this._http = _http;
  }
  sendEmail() {
    var headers;
    headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');

    let postVars = {};
    if (!this.msg_type) {
      postVars = {
        email: this.email,
        name: this.name,
        message: this.message,
        societe: this.societe,
      };
      this._http
        .post(this.endpoint, JSON.stringify(postVars), {
          headers: headers,
          responseType: 'text',
        })
        .subscribe(
          (response) => console.log(response),
          (response) => console.log(response)
        );
    } else {
      this.data.append('email', this.email);
      this.data.append('name', this.name);
      this.data.append('message', this.message);
      this._http
        .post(this.endpoint_join, this.data, {
          headers: headers,
          responseType: 'text',
        })
        .subscribe(
          (response) => console.log(response),
          (response) => console.log(response)
        );
    }
  }
}
