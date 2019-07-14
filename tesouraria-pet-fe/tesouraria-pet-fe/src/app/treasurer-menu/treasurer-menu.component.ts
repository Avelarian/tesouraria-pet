import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-treasurer-menu',
  templateUrl: './treasurer-menu.component.html',
  styleUrls: ['./treasurer-menu.component.css']
})
export class TreasurerMenuComponent implements OnInit {

  id;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
  }

}
