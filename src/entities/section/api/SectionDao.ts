import type { ProductPageSection } from "../../product/model/ProductType";
import type { SectionType } from "../model/SectionType";

export default class SectionDao {
    static cacheSections: Array<ProductPageSection> | undefined;

    static getSections() {
        return new Promise<Array<ProductPageSection>>((resolve, _) => {
            if (typeof SectionDao.cacheSections != 'undefined') {
                resolve(SectionDao.cacheSections);
            }
            else {
                setTimeout(() => {
                    SectionDao.cacheSections =
                        [
                            {
                                slug: "tropical-escape",
                                name: "Tropical Escape",
                                location: "Punta Cana, Dominican Republic",
                                price: "UAH 58,900",
                                date: "19.04 to 26.04 (7 nights)",
                                duration: "7 nights",
                                description: "Relax under palm trees, turquoise sea, and all-inclusive 5-star comfort.",
                                descriptionFull:
                                    "Experience the Caribbean at its finest with our “Tropical Escape” tour. Enjoy long beaches, warm turquoise waters, and a premium all-inclusive hotel. Ideal for couples or families looking for maximum comfort, relaxation, and unforgettable tropical memories.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "All-inclusive meals and drinks",
                                    "Guided beach walk and ocean viewpoints",
                                    "Free time for snorkeling and water activities",
                                    "Evening entertainment program",
                                    "24/7 travel assistant support"
                                ],
                                imageUrl: [
                                    "/img/Tropical.png",
                                ]
                            },

                            {
                                slug: "sun-diving",
                                name: "Sun & Diving",
                                location: "Sharm El Sheikh, Egypt",
                                price: "UAH 29,900",
                                date: "20.04 to 27.04 (7 nights)",
                                duration: "7 nights",
                                description: "Summer vibes in April: sea, coral reefs, and warm all-inclusive comfort.",
                                descriptionFull:
                                    "Dive into the underwater world of the Red Sea with our “Sun & Diving” package. Beautiful coral reefs, crystal-clear waters, and a warm climate make this the perfect early-summer getaway.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "Daily snorkeling opportunities",
                                    "Introductory diving session",
                                    "All-inclusive hotel accommodation",
                                    "Local attractions and evening shows",
                                    "Airport transfer"
                                ],
                                imageUrl: [
                                    "/img/Diving.png",

                                ]
                            },

                            {
                                slug: "balkan-romance",
                                name: "Balkan Romance",
                                location: "Budva, Montenegro",
                                price: "UAH 41,200",
                                date: "28.05 to 04.06 (7 nights)",
                                duration: "7 nights",
                                description: "The perfect week for two – sea, mountains, and incredible cuisine.",
                                descriptionFull:
                                    "Discover the charm of the Adriatic coastline with our “Balkan Romance” tour. Sun-drenched beaches, medieval towns, and breathtaking views make this trip ideal for couples or friends looking to explore Montenegro’s vibrant culture.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "Guided walking tour of Budva’s Old Town",
                                    "Full-day excursion to Kotor & Perast",
                                    "Free beach time and local experiences",
                                    "Travel assistant support throughout the trip",
                                    "Welcome drink & farewell dinner"
                                ],
                                imageUrl: [
                                    "/img/Balkan.png",
                                ]
                            },

                            {
                                slug: "spring-in-paris",
                                name: "Spring in Paris",
                                location: "Paris, France",
                                price: "UAH 36,500",
                                date: "28.05 to 04.06 (7 nights)",
                                duration: "7 nights",
                                description: "Walks along the Seine, croissants, and a weekend in the heart of Europe.",
                                descriptionFull:
                                    "Enjoy a romantic European escape in the iconic city of Paris. Explore historic landmarks, charming cafes, and world-class museums while experiencing the magic of spring in France.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "Guided tour of central Paris",
                                    "Visit to the Eiffel Tower viewpoint",
                                    "Seine River evening walk",
                                    "Free day for shopping and museums",
                                    "Local transportation included"
                                ],
                                imageUrl: [
                                    "/img/Paris.jpg",
                                ]
                            },

                            {
                                slug: "turkish-delight",
                                name: "Turkish Delight",
                                location: "Antalya, Turkey",
                                price: "UAH 21,500",
                                date: "14.05 to 19.05 (5 nights)",
                                duration: "5 nights",
                                description: "All-inclusive beach escape. Warm waters, luxury hotels, vibrant bazaars await.",
                                descriptionFull:
                                    "Enjoy beautiful beaches, warm weather, and top-notch hospitality in sunny Antalya. This offer is perfect for those seeking relaxation, comfort, and great food at a fantastic price.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "All-inclusive hotel stay",
                                    "Pool & spa access",
                                    "Visit to local markets",
                                    "Beach activities and guided walks",
                                    "Travel assistant support"
                                ],
                                imageUrl: [
                                    "/img/Turkey.jpg",
                                ]
                            },

                            {
                                slug: "aegean-weekend",
                                name: "Aegean Weekend",
                                location: "Thessaloniki, Greece",
                                price: "UAH 22,000",
                                date: "23.05 to 26.05 (3 nights)",
                                duration: "3 nights",
                                description: "Stroll the boardwalk, dine seaside, catch the sunset from Byzantine towers.",
                                descriptionFull:
                                    "A short but unforgettable Mediterranean experience. Explore Thessaloniki's historic charm, delicious cuisine, and long seaside promenades.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "City tour of Thessaloniki",
                                    "Sunset viewpoint visit",
                                    "Seaside dinner recommendations included",
                                    "Breakfast daily",
                                    "Travel assistant support"
                                ],
                                imageUrl: [
                                    "/img/Aegean.jpg",
                                ]
                            },

                            {
                                slug: "sunny-escape-egypt",
                                name: "Sunny Escape to Egypt",
                                location: "Hurghada, Egypt",
                                price: "UAH 44,600",
                                date: "29.05 to 03.06 (5 nights)",
                                duration: "5 nights",
                                description: "Crystal waters, coral reefs, and endless sun – the perfect summer jumpstart.",
                                descriptionFull:
                                    "Enjoy warm Red Sea waters, colorful reefs, and sunny days in beautiful Hurghada. Ideal for couples and families wanting an early-summer getaway.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "Snorkeling experience",
                                    "All-inclusive hotel stay",
                                    "Free beach time",
                                    "Airport transfer",
                                    "Travel assistant support"
                                ],
                                imageUrl: [
                                    "/img/Egypt.jpg",
                                ]
                            }
                        ];


                    resolve(SectionDao.cacheSections);
                }, 300)
            }
        }
        )

    }
}