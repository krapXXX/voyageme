import type { TestimonialPageSection } from "../../testimonial/model/Testimonial";

export default class TestimonialDao {
    static cacheTestimonials: Array<TestimonialPageSection> | undefined;

    static getTestimonials() {
        return new Promise<Array<TestimonialPageSection>>((resolve, _) => {
            if (this.cacheTestimonials) {
                resolve(this.cacheTestimonials);
                return;
            }

            setTimeout(() => {
                this.cacheTestimonials = [
                    {
                        name: "Anna P.",
                        origin: "Kyiv",
                        trip: "Family Trip to Turkey",
                        message:
                            "Amazing service from start to finish! The team helped us pick a resort that was perfect for kids — with great food, animation, and a beautiful beach. Everything went smoothly, and we’re already planning our next vacation with them.",
                        imageUrl: "/img/Anna.jpg"
                    },
                    {
                        name: "Alexey and Marina",
                        origin: "Odesa",
                        trip: "Family Trip to Egypt",
                        message:
                            "The organization was impeccable! We didn’t worry about anything — we just enjoyed the sea and the scenery. Many thanks to the team!",
                        imageUrl: "/img/Alexey.jpg"
                    },
                    {
                        name: "Dmytro K.",
                        origin: "Lviv",
                        trip: "Honeymoon in the Maldives",
                        message:
                            "Amazing service from start to finish! The resort choice was perfect — luxury, privacy, and unforgettable views. We’ll definitely travel again with your agency.",
                        imageUrl: "/img/Dmytro.jpg"
                    },
                    {
                        name: "Maksym R.",
                        origin: "Kharkiv",
                        trip: "Last-minute trip to Egypt",
                        message:
                            "Booked a hot tour just two days before departure. Great price and perfect organization. Everything was smooth and fast — highly recommended!",
                        imageUrl: "/img/Maksym.jpg"
                    },
                    {
                        name: "Natalia M.",
                        origin: "Thailand",
                        trip: "Solo Trip",
                        message:
                            "Everything was fast, convenient, and very professional. The agency quickly understood what I wanted and offered options that matched my expectations and budget. I’m definitely booking my next trip with you!",
                        imageUrl: "/img/Natalia.jpg"
                    },
                    {
                        name: "Olha S.",
                        origin: "Dnipro",
                        trip: "Romantic Weekend in Greece",
                        message:
                            "A magical weekend! The agency arranged everything perfectly — from the seaside hotel to the sunset dinner in Thessaloniki. We felt taken care of every step of the way. Highly recommended!",
                        imageUrl: "/img/Olha.jpg"
                    },
                    {
                        name: "Serhii & Iryna",
                        origin: "Vinnytsia",
                        trip: "Family Vacation in Montenegro",
                        message:
                            "Our family vacation was amazing! Beautiful views, clean beaches, and very comfortable transfers. The kids loved it, and we enjoyed the stress-free planning. Thank you for making our holiday unforgettable!",
                        imageUrl: "/img/Iryna.jpg"
                    },
                    {
                        name: "Yulia T.",
                        origin: "Chernihiv",
                        trip: "Girls’ Trip to Paris",
                        message:
                            "We had the best time in Paris! Cozy hotel, delicious breakfast, and a great city tour. The agency helped us choose the perfect spots for photos and shopping. Already planning our next getaway!",
                        imageUrl: "/img/Yulia.jpg"
                    }

                ];

                resolve(this.cacheTestimonials);
            }, 300);
        });
    }
}
