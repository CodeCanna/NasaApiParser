"use strict"

const node = require('node');
const axios = require('axios');

class NasaApiParser {
    constructor() {
        // List of NASA apis
        const nasaApis = {
            apod: "https://api.nasa.gov/planetary/apod",  // Astronomy Picture of the Day
            asteroidsNeows: "https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY",  // Near Earth Object Web Service

            // Space Weather Database of Notifications, Knowledge, Information
            donki: {
                donkiSubApis: {
                    cme: "https://api.nasa.gov/DONKI/CME",  // Coronal Mass Ejection
                    cmeAnalysis: "https://api.nasa.gov/DONKI/CMEAnalysis",  // Coronal Mass Ejection Analysis
                    geoMagStorm: "https://api.nasa.gov/DONKI/GST",  // Geomagnetic Storm
                    ips: "https://api.nasa.gov/DONKI/IPS", // Interplanetary Shock
                    solarFlare: "https://api.nasa.gov/DONKI/FLR", // Solar Flare
                    sep: "https://api.nasa.gov/DONKI/SEP", // Solar Energetic Particles
                    mpc: "https://api.nasa.gov/DONKI/MPC", // Magnetopause Crossing
                    rbe: "https://api.nasa.gov/DONKI/RBE", // Radiation Belt Enhancement
                    hss: "https://api.nasa.gov/DONKI/HSS", // High Speed Stream
                    wsaEnlil: "https://api.nasa.gov/DONKI/WSAEnlilSimulations", // WSA + EnlilSimulation
                    notifications: "https://api.nasa.gov/DONKI/notifications" // NASA API Notifications
                }
            },
            earthImages: "https://api.nasa.gov/planetary/earth/imagery",
            eonet: "NO_API_URL", // Earth Observatory Natural Event Tracker

            // Earth Plychromatic Imaging Camera
            epic: {
                enhancedImageByDate: "https://epic.gsfc.nasa.gov/api/enhanced/date/", // Search enhanced images by date
                naturalImageByDate: "https://epic.gsfc.nasa.gov/archive/natural/",  // Search natural images by date
                allNaturalImages: "https://epic.gsfc.nasa.gov/api/natural",  // Get all natural images
            },

            // Exoplanet sub API
            exoplanet: {
                allExoPlanets: "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&where=*",  // Get all confirmed exo-planets and columns
                keplerExoPlanets: "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=ipac&where=pl_kepflag=1",  // Confirmed planets in the Kepler field
                adoptedExoPlanets: "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&select=distinct pl_hostname&order=pl_hostname&format=ipac",  // Stars known to host exoplanets listed in ascending order
            }
        }
    }

    getPicsByCategory(category) {
        // Create request url based on search
        let url = 
    }
}