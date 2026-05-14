// Get user's browser name
export const detectBrowser = (): string => {
  const ua = navigator.userAgent;
  
  if (ua.includes('Edg')) return 'EDGE';
  if (ua.includes('Chrome')) return 'CHROME';
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'SAFARI';
  if (ua.includes('Firefox')) return 'FIREFOX';
  if (ua.includes('Opera') || ua.includes('OPR')) return 'OPERA';
  if (ua.includes('Trident')) return 'IE';
  
  return 'UNKNOWN';
};

// Get window resolution and device type
export const getResolution = (): { resolution: string; deviceType: string } => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const deviceType = width <= 768 ? 'MOBILE' : 'DESKTOP';
  
  return {
    resolution: `${width}x${height}`,
    deviceType,
  };
};

// Generate a simple digital fingerprint based on device characteristics
export const generateFingerprint = (): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    ctx.textBaseline = 'top';
    ctx.font = '14px "Arial"';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    ctx.fillText('fingerprint', 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
    ctx.fillText('fingerprint', 4, 17);
  }
  
  const canvasString = canvas.toDataURL();
  
  // Combine multiple browser characteristics
  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    navigator.hardwareConcurrency,
    navigator.deviceMemory,
    screen.colorDepth,
    screen.width + 'x' + screen.height,
    new Date().getTimezoneOffset(),
    canvasString,
  ].join('|');
  
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  
  return Math.abs(hash).toString(16).substring(0, 8).toUpperCase();
};

// Interface for IP data
interface IPData {
  ip: string;
  isVPN: boolean;
  vpnProvider?: string;
}

// Fetch public IP and detect VPN
export const fetchPublicIPAndVPN = async (): Promise<IPData> => {
  try {
    // Using multiple IP APIs for redundancy
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    const ip = data.ip || 'UNAVAILABLE';
    
    // VPN detection heuristics based on ISP and service type
    const isVPN = checkVPNIndicators(data);
    const vpnProvider = detectVPNProvider(data);
    
    return {
      ip,
      isVPN,
      vpnProvider,
    };
  } catch {
    return {
      ip: 'PRIVATE',
      isVPN: false,
    };
  }
};

// Helper: Check VPN indicators
const checkVPNIndicators = (data: any): boolean => {
  const suspiciousOrgs = [
    'vpn',
    'proxy',
    'hosting',
    'datacenter',
    'cloud',
    'server',
  ];
  
  const org = (data.org || '').toLowerCase();
  const isp = (data.isp || '').toLowerCase();
  const asn = (data.asn || '').toLowerCase();
  
  const combined = `${org} ${isp} ${asn}`.toLowerCase();
  
  return suspiciousOrgs.some(term => combined.includes(term));
};

// Helper: Detect specific VPN provider
const detectVPNProvider = (data: any): string | undefined => {
  const org = (data.org || '').toLowerCase();
  
  const vpnProviders: Record<string, string> = {
    nordvpn: 'NORDVPN',
    expressvpn: 'EXPRESSVPN',
    surfshark: 'SURFSHARK',
    cyberghost: 'CYBERGHOST',
    windscribe: 'WINDSCRIBE',
    mullvad: 'MULLVAD',
    protonvpn: 'PROTONVPN',
    bitdefender: 'BITDEFENDER',
    avast: 'AVAST',
    kaspersky: 'KASPERSKY',
    ipvanish: 'IPVANISH',
    hotspotshield: 'HOTSPOTSHIELD',
    tunnelbear: 'TUNNELBEAR',
  };
  
  for (const [key, provider] of Object.entries(vpnProviders)) {
    if (org.includes(key)) {
      return provider;
    }
  }
  
  return undefined;
};
