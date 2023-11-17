import { Component, HostListener } from '@angular/core';
import { OtaService } from '../../service/ota.service';

@Component({
  selector: 'app-ota',
  templateUrl: './ota.component.html',
  styleUrls: ['./ota.component.scss']
})
export class OtaComponent {

  loading: boolean
  currentPage: number = 1
  ota: any[] = [];
  ota_dialog: boolean
  selected: any
  data_details: any
  genres: any = []
  seasons: any = []
  judul: any


  constructor(
    private otaService: OtaService
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
    this.otaService.get_list(this.currentPage).then(
      (response) => {
        // Ensure airing is an array before calling concat
        this.ota = Array.isArray(this.ota) ? this.ota.concat(response.results) : response.results;
        console.log(this.ota);
        this.loading = false
      }
    ).catch((error) => {
      console.log(error);
    });
  }

  open_detail(detail) {
    this.ota_dialog = true
    this.selected = detail

    this.otaService.get_details(detail.id).then(
      (response: any) => {
        this.genres = response.genres.map(genre => genre.name);
        this.seasons = response.seasons.map(seasons => seasons);
        this.judul = response.original_name
        console.log(this.seasons);

      }
    ).catch((error) => {
      console.log(error);
    })
  }

  close_detail() {
    this.ota_dialog = false
    this.genres = []
    this.seasons = []
    this.selected = null;
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
