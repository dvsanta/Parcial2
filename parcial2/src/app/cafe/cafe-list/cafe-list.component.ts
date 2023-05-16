import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafes.service';
import { Cafe } from '../cafe';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  getNumeroVariedades(tipo: string): number {
    return this.cafes.filter(cafe => cafe.tipo === tipo).length;
  }

  cafes: Array<Cafe> = [];

  constructor(private cafeService: CafeService) { }

  ngOnInit() {
    this.getCafes();
  }

  getCafes(): void {
    this.cafeService.getCafes().subscribe({
      next: (cafes: Cafe[]) => {
        this.cafes = cafes;
      },
      error: (e: any) => {
        console.error(e);
      }
    });
  }
}
