import { Component, HostListener } from '@angular/core';
import { AirdayService } from '../../service/airday.service';

@Component({
  selector: 'app-airday',
  templateUrl: './airday.component.html',
  styleUrls: ['./airday.component.scss']
})
export class AirdayComponent {

  client_id = "391daa2b0d92463bb708607053d08cf2"
  client_secret = "2fcd577fabd84c40b37f30e40829078a"

  all_album: any
  airing: any[] = [];
  airing_dialog: boolean
  currentPage: number = 1
  selected: any
  data_details: any
  genres: any = []
  seasons: any = []
  loading = true
  judul: any


  constructor(
    private airday: AirdayService
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
    this.airday.get_list(this.currentPage).then(
      (response) => {
        // Ensure airing is an array before calling concat
        this.airing = Array.isArray(this.airing) ? this.airing.concat(response.results) : response.results;
        console.log(this.airing);
        this.loading = false
      }
    ).catch((error) => {
      console.log(error);
    });
  }


  open_detail(detail) {
    this.airing_dialog = true
    this.selected = detail

    this.airday.get_details(detail.id).then(
      (response: any) => {
        // this.data_details = response;
        this.genres = response.genres.map(genre => genre.name);
        this.seasons = response.seasons.map(seasons => seasons)
        this.judul = response.original_name
        // console.log(this.seasons);

      }
    ).catch((error) => {
      console.log(error);
    })
  }

  close_detail() {
    this.airing_dialog = false
    this.genres = []
    this.seasons = []
    this.selected = null
    this.judul = null
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
