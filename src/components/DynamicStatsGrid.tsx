import React, { useEffect, useState } from 'react';
import {
  detectBrowser,
  getResolution,
  generateFingerprint,
  fetchPublicIPAndVPN,
} from '../utils/getUserSystemInfo';

interface SystemStats {
  ip: string;
  isVPN: boolean;
  vpnProvider?: string;
  browser: string;
  resolution: string;
  deviceType: string;
  fingerprint: string;
  loading: boolean;
}

export const DynamicStatsGrid: React.FC = () => {
  const [stats, setStats] = useState<SystemStats>({
    ip: 'LOADING...',
    isVPN: false,
    browser: detectBrowser(),
    resolution: getResolution().resolution,
    deviceType: getResolution().deviceType,
    fingerprint: generateFingerprint(),
    loading: true,
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const ipData = await fetchPublicIPAndVPN();
        
        setStats(prev => ({
          ...prev,
          ip: ipData.ip,
          isVPN: ipData.isVPN,
          vpnProvider: ipData.vpnProvider,
          loading: false,
        }));
      } catch (error) {
        console.error('Error loading system stats:', error);
        setStats(prev => ({
          ...prev,
          ip: 'UNAVAILABLE',
          loading: false,
        }));
      }
    };

    loadStats();

    // Update resolution on window resize
    const handleResize = () => {
      const res = getResolution();
      setStats(prev => ({
        ...prev,
        resolution: res.resolution,
        deviceType: res.deviceType,
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Format IP status message
  const getIPStatus = () => {
    if (stats.ip === 'LOADING...' || stats.ip === 'UNAVAILABLE' || stats.ip === 'PRIVATE') {
      return stats.ip;
    }
    
    if (stats.isVPN) {
      return stats.vpnProvider ? `${stats.ip} [${stats.vpnProvider}]` : `${stats.ip} [VPN]`;
    }
    
    return stats.ip;
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-800 text-xs">
      {/* IP / VPN Status */}
      <div className="border border-white p-3">
        <span className="text-gray-400 block mb-1">// IP</span>
        <span className="font-extrabold text-white text-sm break-words">{getIPStatus()}</span>
      </div>

      {/* Browser */}
      <div className="border border-white p-3">
        <span className="text-gray-400 block mb-1">// BROWSER</span>
        <span className="font-extrabold text-white text-sm">{stats.browser}</span>
      </div>

      {/* Resolution */}
      <div className="border border-white p-3">
        <span className="text-gray-400 block mb-1">// RESOLUTION</span>
        <span className="font-extrabold text-white text-sm">
          {stats.resolution} <span className="text-gray-400">({stats.deviceType})</span>
        </span>
      </div>

      {/* Fingerprint */}
      <div className="border border-white p-3">
        <span className="text-gray-400 block mb-1">// FINGERPRINT</span>
        <span className="font-extrabold text-white text-sm font-mono">{stats.fingerprint}</span>
      </div>
    </div>
  );
};
