document.addEventListener("DOMContentLoaded", () => {
    makeValidation('form-contact-us', ['name', 'phone', 'email']);
    contactMap();
});
 const contactMap = () => {
    let selector = document.querySelectorAll('.map');
    selector.forEach(item => contactMap(item));
    function contactMap(item) {
        let container = item;
        let map;
        let marker;
        let marketIcon = {
            url: '/assets/images/map/location.svg'
            // size: new google.maps.Size(49, 65),
            // origin: new google.maps.Point(-3, 0),
            // anchor: new google.maps.Point(-40, 140)
        };
        let coordinates = {
            lat: +container.dataset.lat,
            lng: +container.dataset.lng,
        }
        let mapStyle = [
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#878787"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f9f5ed"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#aee0f4"
                    }
                ]
            }
        ]
        if(container)initMap();
        function initMap() {

            map = new google.maps.Map(container, {
                center: coordinates,
                // disableDefaultUI: true,
                zoom: 12,
                styles: mapStyle,
            });

            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                icon: marketIcon,
                // animation: google.maps.Animation.DROP
            });
        }
    }
}
