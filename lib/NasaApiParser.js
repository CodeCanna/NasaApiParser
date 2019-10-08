"use strict"

const node = require('node');
const axios = require('axios');

class NasaApiParser {
    constructor() {
        // List of NASA apis
        const nasaApis = { 
            // Astronomy Picture of the Day
            apod: "https://api.nasa.gov/planetary/apod",

            // Near Earth Object Web Service
            asteroidsNeows: "https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY",

            // Space Weather Database of Notifications, Knowledge, Information
            donki: {
                donkiSubApis: {
                    cme: "https://api.nasa.gov/DONKI/CME",  // Coronal Mass Ejection
                    cmeAnalysis: "https://api.nasa.gov/DONKI/CMEAnalysis",  // Coronal Mass Ejection Analysis
                    geoMagStorm: "https://api.nasa.gov/DONKI/GST",  // Geomagnetic Storm
                    ips: "https://api.nasa.gov/DONKI/IPS", // Interplanetary Shock
                    solarFlare: "https://api.nasa.gov/DONKI/FLR", // Solar Flare
                    sep: "https://api.nasa.gov/DONKI/SEP", // Solar Energetic Particles
                }
            }

        }
    }

    getPicsByCategory(category) {
        // Create request url based on search
        let url = 
    }
}