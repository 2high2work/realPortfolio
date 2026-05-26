import React, { useEffect, useState } from 'react';
import {
  detectBrowser,
  getResolution,
  generateFingerprint,
  fetchPublicIPAndVPN,
} from '../utils/getUserSystemInfo';
import { PortfolioLanguageData } from '../data/portfolioData';

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

interface DynamicStatsGridProps {
  text: PortfolioLanguageData['STAT_GRID_TEXT'];
}

export const DynamicStatsGrid: React.FC<DynamicStatsGridProps> = ({ text }) => {
  const [stats, setStats] = useState<SystemStats>({
    ip: text.loading,
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
          ip: text.unavailable,
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
    if (stats.ip === text.loading || stats.ip === text.unavailable || stats.ip === text.private) {
      return stats.ip;
    }
    
    if (stats.isVPN) {
      return stats.vpnProvider ? `${stats.ip} [${stats.vpnProvider}]` : `${stats.ip} ${text.vpnLabel}`;
    }
    
    return stats.ip;
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-800 text-xs">
      {/* IP / VPN Status */}
      <div className="border border-white p-3">
        <span className="text-gray-400 block mb-1">{text.ip}</span>
        <span className="font-extrabold text-white text-sm break-words">{getIPStatus()}</span>
      </div>

      {/* Browser */}
      <div className="border border-white p-3">
        <span className="text-gray-400 block mb-1">{text.browser}</span>
        <span className="font-extrabold text-white text-sm">{stats.browser}</span>
      </div>

      {/* Resolution */}
      <div className="border border-white p-3">
        <span className="text-gray-400 block mb-1">{text.resolution}</span>
        <span className="font-extrabold text-white text-sm">
          {stats.resolution} <span className="text-gray-400">({stats.deviceType})</span>
        </span>
      </div>

      {/* Fingerprint */}
      <div className="border border-white p-3">
        <span className="text-gray-400 block mb-1">{text.fingerprint}</span>
        <span className="font-extrabold text-white text-sm font-mono">{stats.fingerprint}</span>
      </div>
    </div>
  );
};
