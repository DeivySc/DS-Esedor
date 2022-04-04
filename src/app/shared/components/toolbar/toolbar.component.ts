import {Component, HostListener, OnInit, Input} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() colorWhite: any;

  constructor(private router: Router) { }

  header_variable=false;
  @HostListener("document:scroll")
  scrollFuntion(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable = true;
    }else {
      this.header_variable = false;
    }
  }

  public redirectProject() {
    this.router.navigateByUrl('/proyectos');
  }

  ngOnInit(): void {
  }

}
