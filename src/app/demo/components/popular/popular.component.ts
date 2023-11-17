import { Component, HostListener } from '@angular/core';
import { PopularService } from '../../service/popular.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {

  all_album: any
  popular: any[] = [];
  popular_dialog: boolean
  currentPage: number = 1
  selected: any
  data_details: any
  desc: any
  backdrop_path: any
  judul: any
  loading = true


  constructor(
    private popularService: PopularService
  ) { }

  ngOnInit(): void {
    this.initialAPI()
  }


  async initialAPI() {
    await this.loadNextPage()
  }

  loadNextPage() {
    this.loading = true
    this.currentPage++; // Increment the page number
    this.popularService.get_list(this.currentPage).then(
      (response) => {
        // Ensure airing is an array before calling concat
        this.popular = Array.isArray(this.popular) ? this.popular.concat(response.results) : response.results;
        console.log(this.popular);
        this.loading = false
      }
    ).catch((error) => {
      console.log(error);
    });
  }


  open_detail(detail) {
    this.popular_dialog = true
    this.selected = detail

    this.popularService.get_details(detail.id).then(
      (response: any) => {
        this.data_details = response;
        this.desc = response.overview
        this.judul = response.original_name
        console.log(this.desc);

      }
    ).catch((error) => {
      console.log(error);
    })
  }

  close_detail() {
    this.popular_dialog = false
    this.desc = null
    this.judul = null
    this.selected = null
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    // Check if the user has scrolled to the bottom
    if (scrollPosition + windowSize >= bodyHeight - 100) {
      this.loadNextPage();
    }
  }


}
