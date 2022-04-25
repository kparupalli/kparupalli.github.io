import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clothing } from 'src/app/clothing';
import { ClothService } from 'src/app/cloth.service';

@Component({
  selector: 'app-removedialog',
  templateUrl: './removedialog.component.html',
  styleUrls: ['./removedialog.component.css']
})
export class RemovedialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemovedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private clothService: ClothService) { }

  ngOnInit(): void {
  }

  removeItem(): void{
    this.dialogRef.close();

  }

  onCancel(): void {
    this.dialogRef.backdropClick();
  }

}
