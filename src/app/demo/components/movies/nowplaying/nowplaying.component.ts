import { Component, HostListener } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MoviesService } from 'src/app/demo/service/movies.service';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.scss']
})
export class NowplayingComponent {

  now_playing: any = []
  judul: any
  currentPage: number = 0
  nowplaying_dialog: boolean

  constructor(
    private messageService: MessageService,
    private movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this.initialAPI()
  }

  async initialAPI() {
    await this.get_movie()
  }

  @HostListener('window:scroll', ['event'])
  onScroll() {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    if (scrollPosition + windowSize >= bodyHeight - 100) {
      this.get_movie()
    }
  }

  get_movie() {
    this.currentPage++;
    this.movieService.get_movie_list(this.currentPage).then(
      (response) => {
        this.now_playing = Array.isArray(this.now_playing) ? this.now_playing.concat(response.results) : response.results
        this.judul = response.title
        console.log(this.now_playing);
      }).catch(
        (error) => {
          console.log(error);
        }
      )
  }

  open_dialog(item) {
    this.nowplaying_dialog = true
  }

}
