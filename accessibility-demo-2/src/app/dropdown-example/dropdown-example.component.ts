import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown-example',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dropdown-example.component.html',
  styleUrl: './dropdown-example.component.scss',
})
export class DropdownExampleComponent {
  ALBUMS_INFO: any = {
    rollingStones: {
      title: 'Exile on Main St',
      description:
        'Exile on Main St. is the tenth studio album by the Rolling Stones, released as a double album on May 12, 1972. It is widely regarded as one of the greatest albums in the history of rock music.',
    },
    pinkFloyd: {
      title: 'The Dark Side of the Moon',
      description:
        'The Dark Side of the Moon is the eighth studio album by Pink Floyd, released on March 1, 1973. It is one of the best-selling albums in the world and is often considered one of the greatest albums of all time.',
    },
    ledZeppelin: {
      title: 'IV',
      description:
        "Led Zeppelin IV is the untitled fourth studio album by Led Zeppelin, released on November 8, 1971. It is one of the best-selling albums in the history of music and includes iconic tracks like 'Stairway to Heaven'.",
    },
    direStraits: {
      title: 'Brothers in Arms',
      description:
        "Brothers in Arms is the fifth studio album by Dire Straits, released on May 13, 1985. It is one of the world's best-selling albums and features hits like 'Money for Nothing' and 'Walk of Life'.",
    },
  };

  selectedAlbum = '';
  albumTitle: string = 'No album selected';
  albumDescription: string = 'Select a album to view its description';

  renderAlbumInfo() {
    if (this.selectedAlbum in this.ALBUMS_INFO) {
      this.albumTitle = this.ALBUMS_INFO[this.selectedAlbum].title;
      this.albumDescription = this.ALBUMS_INFO[this.selectedAlbum].description;
    } else {
      this.albumTitle = 'No album selected';
      this.albumDescription = 'Select a album to view its description';
    }
  }
}
