import { Component } from "@angular/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent {
  selectedIndex: number;
  images: Array<string>;

  constructor() {
    this.images = Array(
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-trucks.jpg",
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-pool.jpg",
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-cart.jpg",
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-go-carts.jpg",
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-empty-room.jpg",
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-hazard.jpg",
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-ferris-wheel.jpg",
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-room.jpg",
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-snow.jpg",
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-stairwell.jpg",
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-storefront.jpg",
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-dust.jpg",
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-gym.jpg",
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-masks.jpg",
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/12/abandoned-chernobyl-playroom.jpg"
    );

    this.selectedIndex = 0;
  }
  get selectedImage(): string {
    return this.images[this.selectedIndex];
  }
}
