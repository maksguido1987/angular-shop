import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.type';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    year: new FormControl(''),
    chip: new FormControl(''),
    SSD: new FormControl(''),
    memory: new FormControl(''),
    display: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.data = {
      title: this.form.value.title,
      price: this.form.value.price,
      year: this.form.value.year,
      image: 'assets/images/air.webp',
      configure: {
        chip: this.form.value.chip,
        SSD: this.form.value.SSD,
        memory: this.form.value.memory,
        display: this.form.value.display,
      },
    };
    this.dialogRef.close(this.data);
    console.log(this.data);
  }
}
