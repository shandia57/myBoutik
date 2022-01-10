import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TshirtsServiceService } from "../../../../services/tshirts/tshirts-service.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-tshirts',
  templateUrl: './update-tshirts.component.html',
  styleUrls: ['./update-tshirts.component.scss']
})
export class UpdateTshirtsComponent implements OnInit {

  product?: any;
  change: boolean = false;
  isImageChanged: boolean = false;

  imgSrc?: string;
  selectedImage: any = null;

  test?: string;

  urlToNavigate = "/admin/tshirts";


  constructor(private Product: TshirtsServiceService, private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.params.id;

    this.Product.path = "tshirts";
    this.Product.getProduct(id).subscribe((value: any) => {
      this.product = value;
    });

  }
  ngOnInit(): void {
  }

  showPreview(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.product.url = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.Product.file = this.selectedImage;
      this.product.imageName = this.selectedImage.name;
      this.isImageChanged = true;
    }
    else {
      this.product.url = '/assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }

  async update() {
    if (this.isImageChanged) {
      await this.Product.insertImage(this.product);
      this.product = await this.Product.updateUrlImage(this.product);
      this.router.navigateByUrl(this.urlToNavigate);
    } else {
      this.Product.update(this.product).subscribe(() => {
        this.change = true;
        setTimeout(() => {
          this.change = false;
          console.log("finished");
          this.router.navigateByUrl(this.urlToNavigate);
        }, 1000);
      })
    }


  }

  delete() {
    if (confirm("Are you sure you want to delete")) {
      this.Product.delete(this.product.id);
      this.router.navigateByUrl(this.urlToNavigate);
    }
  }


}
