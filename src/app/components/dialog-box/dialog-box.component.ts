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
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    if (this.data) this.isNewProduct = false;
  }

  form: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    title: new FormControl(this.data?.title ?? ''),
    price: new FormControl(this.data?.price ?? ''),
    year: new FormControl(this.data?.year ?? ''),
    chip: new FormControl(this.data?.configure.chip ?? ''),
    SSD: new FormControl(this.data?.configure.SSD ?? ''),
    memory: new FormControl(this.data?.configure.memory ?? ''),
    display: new FormControl(this.data?.configure.display ?? ''),
  });

  isNewProduct: boolean = true;

  onNoClick(): void {
    this.dialogRef.close(this.form);
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
  }
}
