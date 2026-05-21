export interface LocationInfo {
  name: string;
  type: 'Hospital ER' | 'Specialist' | 'Telehealth' | 'Online Doctor';
  distanceMiles: number;
  status: 'Open Now' | 'Closes soon' | '24/7';
  phone: string;      // use tel: URI for clickable calling, e.g. "tel:+911234567890"
  lat?: number;
  lon?: number;
  website?: string;
}

export class LocationService {

  // ── Haversine formula — distance between two coordinates in miles ──

  static calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 3958.8; // Radius of Earth in miles
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  // ── Format phone for tel: URI ─────────────────────

  private static formatPhoneForTel(rawPhone: string): string {
    // If already a tel: link, return as-is
    if (rawPhone.startsWith('tel:')) return rawPhone;

    // Strip non-digit characters (keep leading +)
    const cleaned = rawPhone.replace(/[^\d+]/g, '');

    // Indian numbers: if 10 digits and no country code, prefix +91
    if (/^\d{10}$/.test(cleaned)) {
      return `tel:+91${cleaned}`;
    }

    return `tel:${cleaned}`;
  }

  // ── Online Doctors — Indian telemedicine platforms ──

  static getOnlineDoctors(): LocationInfo[] {
    return [
      {
        name: 'Practo — Online Consultation',
        type: 'Online Doctor',
        distanceMiles: 0,
        status: '24/7',
        phone: 'tel:+912071177117',
        website: 'https://www.practo.com',
      },
      {
        name: 'Apollo 24|7 — Video Consult',
        type: 'Online Doctor',
        distanceMiles: 0,
        status: '24/7',
        phone: 'tel:+18605001066',
        website: 'https://www.apollo247.com',
      },
      {
        name: 'Tata 1mg — Doctor Consultation',
        type: 'Online Doctor',
        distanceMiles: 0,
        status: '24/7',
        phone: 'tel:+911166809192',
        website: 'https://www.1mg.com/online-doctor-consultation',
      },
      {
        name: 'MediBuddy — Instant Consult',
        type: 'Online Doctor',
        distanceMiles: 0,
        status: '24/7',
        phone: 'tel:+918010994994',
        website: 'https://www.medibuddy.in',
      },
    ];
  }

  // ── Nearby hospitals via OpenStreetMap Overpass API ──

  static async getNearbyHelp(lat: number, lon: number): Promise<LocationInfo[]> {
    try {
      // Overpass API query: hospitals within 8 km (~5 miles)
      const overpassQuery = `
        [out:json];
        (
          node["amenity"="hospital"](around:8000, ${lat}, ${lon});
          way["amenity"="hospital"](around:8000, ${lat}, ${lon});
        );
        out center;
      `;

      const response = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        body: overpassQuery,
      });

      const data = await response.json();

      const hospitals: LocationInfo[] = data.elements.slice(0, 3).map((el: any) => {
        const elLat = el.lat || el.center?.lat;
        const elLon = el.lon || el.center?.lon;
        const dist = this.calculateDistance(lat, lon, elLat, elLon);
        const rawPhone = el.tags?.phone || el.tags?.['contact:phone'] || '112';

        return {
          name: el.tags?.name || 'Local Emergency Center',
          type: 'Hospital ER' as const,
          distanceMiles: Math.round(dist * 10) / 10,
          status: 'Open Now' as const,
          phone: this.formatPhoneForTel(rawPhone),
          lat: elLat,
          lon: elLon,
          website: el.tags?.website || el.tags?.['contact:website'] || undefined,
        };
      });

      // Always append Telehealth fallback
      hospitals.push({
        name: 'MedSafe 24/7 Telehealth Consult',
        type: 'Telehealth',
        distanceMiles: 0,
        status: '24/7',
        phone: 'tel:+911800MEDSAFE',
      });

      // Append online doctor options
      hospitals.push(...this.getOnlineDoctors());

      return hospitals;

    } catch (error) {
      console.error('Failed to fetch real hospitals, falling back to defaults', error);

      // Fallback: mock hospital + telehealth + online doctors
      return [
        {
          name: 'Nearest Hospital ER (Enable location for real results)',
          type: 'Hospital ER',
          distanceMiles: 0,
          status: 'Open Now',
          phone: 'tel:112',
        },
        {
          name: 'MedSafe 24/7 Telehealth Consult',
          type: 'Telehealth',
          distanceMiles: 0,
          status: '24/7',
          phone: 'tel:+911800MEDSAFE',
        },
        ...this.getOnlineDoctors(),
      ];
    }
  }

  // ── Browser geolocation permission ──────────────

  static requestLocationPermission(): Promise<{ lat: number; lon: number }> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser'));
      } else {
        navigator.geolocation.getCurrentPosition(
          (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
          (err) => reject(err),
          { timeout: 10000, enableHighAccuracy: false },
        );
      }
    });
  }
}
