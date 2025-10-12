import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [RouterLink],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {
  showFullText = false;

  readonly TRUNCATE_LENGTH = 180;

  getTruncatedText(text: string): string {
    if (text.length > this.TRUNCATE_LENGTH) {
      return text.slice(0, this.TRUNCATE_LENGTH) + '...';
    }
    console.log(text);
    return text;
  }

  isTextOverflow(text: string): boolean {
    return text.length > this.TRUNCATE_LENGTH;
  }

  prevReview() {
    if (this.currentReview === 0) {
      this.currentReview = this.reviews.length - 1;
    } else {
      this.currentReview--;
    }
    this.showFullText = false;
  }

  nextReview() {
    if (this.currentReview === this.reviews.length - 1) {
      this.currentReview = 0;
    } else {
      this.currentReview++;
    }
    this.showFullText = false;
  }

  goToReview(index: number) {
    this.currentReview = index;
    this.showFullText = false;
  }
  reviews = [
    {
      text: '"The safety net from Safety nets and Grills is exactly what we needed for our balcony. It\'s incredibly sturdy and gives me peace of mind knowing my kids and pets are safe. The installation was quick and professional. Highly recommend!"',
      author: '- Priya S., Hyderabad'
    },
    {
      text: '"I was worried about the aesthetics, but the safety net is nearly invisible from a distance. The quality is top-notch, and the team was very friendly and efficient during the setup. Fantastic service!"',
      author: '— Rahul M., Hyderabad'
    },
    {
      text: '"Great value and excellent quality. The balcony grills we ordered were installed on time and look very elegant. The whole process, from consultation to installation, was smooth and hassle-free. Thank you!"',
      author: '— Arjun K., Uppal, Hyderabad'
    },
    {
      text: '"We got custom-designed window grills and they look amazing! The craftsmanship is excellent and they feel incredibly durable. The team listened to all our requirements and delivered exactly what we wanted."',
      author: '— Sneha P., Secenderabad'
    },
    {
      text: '"We recently moved into an apartment in Gachibowli and were worried about the open balcony for our two-year-old. SS ntes and Grills came highly recommended, and they lived up to the praise. The balcony safety net is so secure, and the team was incredibly professional. They were in and out in just a few hours. Absolutely thrilled with the result!"',
      author: '— Divya R., Gachibowli'
    },
    {
      text: '"Pigeons were a huge menace on our balcony in Kukatpally. The constant mess was a headache. We called SS nets for a pigeon net, and it was the best decision. The net is almost invisible, and our balcony is clean and bird-free now. Great job at a very reasonable price."',
      author: '— Suresh K., Kukatpally'
    },
    {
      text: '"We needed a safety solution for our high-rise apartment in Jubilee Hills. The team from SS safety nets was knowledgeable and helped us choose the right kind of net. The installation was seamless, and the quality of the net is excellent. Our view is completely unobstructed, and we feel much safer."',
      author: '— Anisha P., Jubilee Hills'
    }
  ];

  currentReview = 0;

  // Only keep the updated versions above that reset showFullText
}
