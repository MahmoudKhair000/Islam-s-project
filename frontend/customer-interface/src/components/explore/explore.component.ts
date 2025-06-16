import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explore',
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterLink,
    FormsModule,
    CommonModule
  ],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})

export class ExploreComponent {
  ngOnInit() {
    this.viewResults(1);
  }

  apartments = [
    {
      gender: "ذكر",
      description: "شقة مكونة من 4 غرف نوم و2 حمام، تقع في الطابق الثالث من مبنى حديث مع مصعد. الشقة مفروشة بالكامل وتحتوي على جميع المرافق الأساسية.",
      price: 1000,
      address: {
        region: "الإقليم",
        description: "بجوار كلية الهندسة"
      },
      beds: 10,
      rooms: 4,
      bathrooms: 2,
      floor: 3,
      elevator: true,
      furniture: "مفروشة بالكامل",
      available: true,
      utilities: {
        electricity: "على المالك",
        gas: "على المالك",
        wifi: "موجود"
      },
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg",
      ],
    },
    {
      price: 2000,
      address: {
        region: "الإقليم",
        description: "بجوار كلية الهندسة"
      },
      beds: 10,
      rooms: 4,
      bathrooms: 2,
      floor: 3,
      elevator: true,
      furniture: "مفروشة بالكامل",
      available: true,
      utilities: {
        electricity: "على المالك",
        gas: "على المالك",
        wifi: "موجود"
      },
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg",
      ],
    },
  ]

  // Gender options
  genderOptions: string[] = ['Male', 'Female'];
  // Location options
  locationOptions: string[] = ['Location 1',
    'Location 2',
    'Location 3',
    'Location 4',
    'Location 5',
    'Location 6'];
  // Estate code
  estateCode: string = '1234567890';
  // Price range
  priceRange: { min: number, max: number } = { min: 0, max: 5000 };
  // Rooms filter
  roomsFilter: { min: number, max: number } = { min: 0, max: 10 };
  // Beds filter
  bedsFilter: { min: number, max: number } = { min: 0, max: 10 };

  estateTypes: string[] = ['rent', 'sale'];

  estates = [
    { name: 'Estate 1', gender: 'Male', description: 'Description of Estate 1', location: 'Location 1', type: 'rent', price: 100, duration: 'month', link: 'https://example.com/Estate1', imageUrl: 'assets/Estate1.jpg' },
    { name: 'Estate 2', gender: 'Female', description: 'Description of Estate 2', location: 'Location 2', type: 'sale', price: 200, duration: '2 months', link: 'https://example.com/Estate2', imageUrl: 'assets/Estate2.jpg' },
    { name: 'Estate 3', gender: 'Male', description: 'Description of Estate 3', location: 'Location 3', type: 'rent', price: 300, duration: '3 months', link: 'https://example.com/Estate3', imageUrl: 'assets/Estate3.jpg' },
    { name: 'Estate 4', gender: 'Male', description: 'Description of Estate 4', location: 'Location 4', type: 'sale', price: 4000, duration: 'year', link: 'https://example.com/Estate4', imageUrl: 'assets/Estate4.jpg' },
    { name: 'Estate 5', gender: 'Female', description: 'Description of Estate 5', location: 'Location 5', type: 'rent', price: 4500, duration: 'year', link: 'https://example.com/Estate5', imageUrl: 'assets/Estate5.jpg' },
    { name: 'Estate 6', gender: 'Female', description: 'Description of Estate 6', location: 'Location 6', type: 'sale', price: 4600, duration: '6 months', link: 'https://example.com/Estate6', imageUrl: 'assets/Estate6.jpg' },
    { name: 'Estate 7', gender: 'Male', description: 'Description of Estate 7', location: 'Location 1', type: 'sale', price: 4700, duration: '3 months', link: 'https://example.com/Estate7', imageUrl: 'assets/Estate7.jpg' },
    { name: 'Estate 8', gender: 'Male', description: 'Description of Estate 3', location: 'Location 3', type: 'rent', price: 300, duration: '3 months', link: 'https://example.com/Estate3', imageUrl: 'assets/Estate3.jpg' },
    { name: 'Estate 9', gender: 'Male', description: 'Description of Estate 4', location: 'Location 4', type: 'sale', price: 4000, duration: 'year', link: 'https://example.com/Estate4', imageUrl: 'assets/Estate4.jpg' },
    { name: 'Estate 10', gender: 'Female', description: 'Description of Estate 5', location: 'Location 5', type: 'rent', price: 4500, duration: 'year', link: 'https://example.com/Estate5', imageUrl: 'assets/Estate5.jpg' },
    { name: 'Estate 11', gender: 'Female', description: 'Description of Estate 6', location: 'Location 6', type: 'sale', price: 4600, duration: '6 months', link: 'https://example.com/Estate6', imageUrl: 'assets/Estate6.jpg' },
    { name: 'Estate 12', gender: 'Male', description: 'Description of Estate 7', location: 'Location 1', type: 'sale', price: 4700, duration: '3 months', link: 'https://example.com/Estate7', imageUrl: 'assets/Estate7.jpg' },
    { name: 'Estate 13', gender: 'Male', description: 'Description of Estate 8', location: 'Location 3', type: 'rent', price: 4800, duration: '2 months', link: 'https://example.com/Estate8', imageUrl: 'assets/Estate8.jpg' },
    { name: 'Estate 14', gender: 'Female', description: 'Description of Estate 9', location: 'Location 2', type: 'rent', price: 4900, duration: '3 months', link: 'https://example.com/Estate9', imageUrl: 'assets/Estate9.jpg' },
    { name: 'Estate 15', gender: 'Female', description: 'Description of Estate 6', location: 'Location 6', type: 'sale', price: 4600, duration: '6 months', link: 'https://example.com/Estate6', imageUrl: 'assets/Estate6.jpg' },
    { name: 'Estate 16', gender: 'Male', description: 'Description of Estate 7', location: 'Location 1', type: 'sale', price: 4700, duration: '3 months', link: 'https://example.com/Estate7', imageUrl: 'assets/Estate7.jpg' },
    { name: 'Estate 17', gender: 'Male', description: 'Description of Estate 8', location: 'Location 3', type: 'rent', price: 4800, duration: '2 months', link: 'https://example.com/Estate8', imageUrl: 'assets/Estate8.jpg' },
    { name: 'Estate 18', gender: 'Female', description: 'Description of Estate 9', location: 'Location 2', type: 'rent', price: 4900, duration: '3 months', link: 'https://example.com/Estate9', imageUrl: 'assets/Estate9.jpg' },
    { name: 'Estate 19', gender: 'Female', description: 'Description of Estate 10', location: 'Location 4', type: 'sale', price: 5000, duration: '2 months', link: 'https://example.com/Estate10', imageUrl: 'assets/Estate10.jpg' },
  ];

  searchTerm: string = '';
  selectedType: string = '';
  selectedLocation: string = '';
  selectedGender: string = '';
  selectedMinPrice: number = 0;
  selectedMaxPrice: number = this.priceRange.max;

  filteredEstates: any[] = [];
  filterEstates() {
    this.filteredEstates = [];
    this.filteredEstates = this.estates.filter((estate) => {
      return estate.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        estate.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        estate.price.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
    }).filter((estate) => {
      return estate.type.toLowerCase().includes(this.selectedType.toLowerCase());
    }).filter((estate) => {
      return estate.gender.toLowerCase().startsWith(this.selectedGender.toLowerCase());
    }).filter((estate) => {
      return estate.location.toLowerCase().startsWith(this.selectedLocation.toLowerCase());
    }).filter((estate) => {
      return estate.price <= this.selectedMaxPrice && estate.price >= this.selectedMinPrice;
    });
    console.log(this.filteredEstates);
  }

  onePageResults: number = 6;
  totalPages: number = 0;
  pages: any[] = [];
  curruntPage: number = 1;

  viewedResults: any[] = [];
  viewResults(start: number) {
    this.pages = [];
    
    this.totalPages = Math.ceil(this.filteredEstates.length / this.onePageResults);
    for (let i = 1; i < this.totalPages + 1; i++) {
      this.pages.push(`${i}`);
    };
    
    this.viewedResults = [];
    this.filterEstates();
    for (let i = ((start - 1) * 6); i < ((start - 1) * 6) + 6; i++) {
      this.viewedResults.push(this.filteredEstates[i]);
    };
    console.log(this.viewedResults);
    console.log(this.totalPages);
    console.log(this.pages);
  }
}