import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class AppFooterComponent implements OnInit {

  footerTitle: string = "@KQ 2020";
  myUrl: string = "https://yiqu.github.io/";
  footerUrls = [
    {
      display: "Products",
      list: [
        {
          display: "AA",
          url: "#"
        },
        {
          display: "BB",
          url: "#"
        },
        {
          display: "CC",
          url: "#"
        }
      ]
    },
    {
      display: "Developers",
      list: [
        {
          display: "Getting Started",
          url: "#"
        },
        {
          display: "Community",
          url: "#"
        },
        {
          display: "Documentation",
          url: "#"
        }
      ]
    },
    {
      display: "Company",
      list: [
        {
          display: "About Us",
          url: "#"
        },
        {
          display: "Blog",
          url: "#"
        },
        {
          display: "Customers",
          url: "#"
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() { }


}
