console.log('we good?');

// pk.eyJ1Ijoibm9yYTEyMzQ1Njc4OTAiLCJhIjoiY2w3c3Y2bzBzMGN5dTN3bGV4d3V6dHZzMiJ9.saWrL3ZlOLQjwOasxiCkQg


	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'pk.eyJ1Ijoibm9yYTEyMzQ1Njc4OTAiLCJhIjoiY2w3c3g0ZXJoMHRydTN4cGx0N29qbTV3YSJ9.R6-0WC3MEzQrMGQnDnkGOQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/nora1234567890/cl7t9kfea000915n2gdyxmdyl',
        zoom: 14,
        center: [4.905070, 52.362556]
        // projection: 'globe' // display the map as a 3D globe
    });