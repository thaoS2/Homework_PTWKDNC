import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog-service';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  categories: any[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}