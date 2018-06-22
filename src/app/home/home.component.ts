import { Component, OnInit } from '@angular/core';
import { StoresService } from '../services/stores.service';
import { HttpClient } from '@angular/common/http';
import { countryList } from '../flag-data/countries';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  country = Object.keys(countryList);
  countryList = countryList;

  isActiveItem: String = null;
  searchByIconName: String;


  constructor(private store: StoresService, private http: HttpClient ) { }
    getIcon(icon) {
      return `assets/flag-icons/png/${icon.toLocaleLowerCase()}.png`;
    }
  activeItem (icon, index) {
    this.isActiveItem = icon;
  }


  ngOnInit() {

    this.store.searchText.subscribe(str => {
      this.searchByIconName = str ? str : '' ;
    });
  }

}
