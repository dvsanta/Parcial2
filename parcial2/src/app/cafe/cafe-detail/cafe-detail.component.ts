import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cafe } from '../cafe';
import { CafeService } from '../../cafe/cafes.service'; // Corregido el path de importación

@Component({
  selector: 'app-cafe-detail',
  templateUrl: './cafe-detail.component.html',
  styleUrls: ['./cafe-detail.component.css']
})
export class CafeDetailComponent implements OnInit {
  cafe: Cafe = {
    id: 0,
    nombre: '',
    tipo: '',
    region: '',
    sabor: '',
    altura: 0,
    imagen: ''
  };

  constructor(
    private route: ActivatedRoute,
    private cafeService: CafeService
  ) { }

  ngOnInit() {
    this.getCafeDetail();
  }

  getCafeDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null && !isNaN(+id)) {
      this.cafeService.getCafe(+id)
        .subscribe((cafe: Cafe) => this.cafe = cafe);
    }
  }
}
