import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-header',
    templateUrl: 'home-header.html'
})
export class HomeHeaderComponent implements OnInit {
    constructor() { 
        this.title = "My Header";
    }

    title: string;

    ngOnInit() { }
}