import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character } from 'src/app/types/Character';
import { DataStore } from 'src/app/store/Character';

@Component({
  selector: 'form-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  name: string | undefined = undefined;
  status: boolean = false;

  constructor(
    private dataStore: DataStore,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public character: Character
  ) {}

  ngOnInit() {
    this.name = this.character.name;
    this.status = this.character.status == 'Alive' ? true : false;
  }

  editCharacter() {
    this.character = {
      ...this.character,
      name: this.name,
      status: this.status ? 'Alive' : 'Dead',
    };
    this.dataStore.editData(this.character);
    this.dialogRef.close();
  }
}
