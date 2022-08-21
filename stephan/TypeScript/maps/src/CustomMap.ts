// import { User } from "./User";
// import { Company } from "./Company";

// interface
interface Mapabble {
    location: {
        lat: number;
        lng: number;
    };

    // markerContent must return string
    markerContent(): string;
}

export class CustomMap {
    // property is private so that no one else can use it
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }

    // to add marker you must satisfy Mappable interface
    // User and Company Class must have a location property with lat lng as numbers
    addMarker(mappable: Mapabble): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });

            infoWindow.open(this.googleMap, marker);
        });
    }

    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng,
    //         },
    //     });
    // }
}
