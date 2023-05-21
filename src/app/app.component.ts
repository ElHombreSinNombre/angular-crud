import { Component } from '@angular/core';
import { DataStore } from './store/Character';
import { Character } from './types/Character';
import { DialogComponent } from '@/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import debounce from './utils/debounce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  exist: boolean = false;
  searchValue: string | undefined = undefined;
  allCharacters: Character[] | undefined = undefined;
  characters: Character[] | undefined = undefined;

  constructor(private dataStore: DataStore, public dialog: MatDialog) {
    this.dataStore.characters.subscribe((data: any) => {
      this.characters = data.characters;
    });
  }

  openDialog(character: Character): void {
    this.dialog.open(DialogComponent, {
      data: character,
    });
  }

  changed(newValue: string) {
    if (this.searchValue === '') {
      this.allCharacters = undefined;
    } else {
      const debouncedFetch = debounce(() => {
        this.dataStore.getAllData(newValue).subscribe((data) => {
          this.allCharacters = data.data.characters.results;
        });
      }, 300);
      debouncedFetch();
    }
  }

  addCharacter(character: Character) {
    const hasCharacter =
      this.characters &&
      this.characters.find((item: Character) => item.id === character.id);
    if (!!!hasCharacter) {
      this.searchValue = '';
      this.allCharacters = undefined;
      this.exist = false;
      this.dataStore.saveData(character);
    } else {
      this.exist = true;
    }
  }

  deleteCharacter(character: Character) {
    this.dataStore.removeData(character);
  }
}
