import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cafe } from './cafe';

@Injectable({
  providedIn: 'root'
})
export class CafeService {
  private apiUrl = 'https://gist.githubusercontent.com/josejbocanegra/fe9511b47ddb335bb0da97ff9ba7462e/raw/a9601bdb1cb26abc1dabec48b7f2417440143541/cafes.json';

  constructor(private http: HttpClient) { }

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl)
      .pipe(
        catchError((err) => throwError(new Error('Error en el servicio')))
      );
  }

  getCafe(id: number): Observable<Cafe> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cafe>(url);
  }
}
