import { transform } from "./utils/transform";
import { lerp } from "./utils/math";

const horizontalParallax = () => {
    const items = document.querySelectorAll(".js-horizontal-parallax");
    const imgParItems = [];

    class ImgParallax {
        constructor(item) {
          this.item = item;
          this.img = item.querySelector(".js-horizontal-parallax-img");
          this.lerpMovment = 0;
        }
    
        getCoords() {
          this.bounding = this.item.getBoundingClientRect();
          this.maxHeight = window.innerHeight + this.bounding.height;
          this.progress = window.innerHeight - this.bounding.top;
          this.precentage = this.progress / this.maxHeight;
        }
    
        moveImage() {
            if (this.bounding.top <= window.innerHeight && this.bounding.top > -this.bounding.height) {
                this.lerpMovment = lerp(this.lerpMovment, this.precentage, 0.080);
                transform(this.img, `translateX(-${this.lerpMovment * 250}px)`);
            }
        }
    
        update() {
            this.getCoords();
            this.moveImage();
        }
    }
    
    items.forEach((item) => {
        imgParItems.push(new ImgParallax(item));
    });

    const animate = () => {
        imgParItems.forEach((imgParItem) => {
            imgParItem.update();
        });
        requestAnimationFrame(animate);
    };

    animate();
}

export default horizontalParallax; 