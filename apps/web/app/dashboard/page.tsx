"use client";

import { useState } from 'react';
import { CameraComponent } from '../components/Camera';
import { PacksComponent } from '../components/Pack';
import { GenerateComponent } from '../components/Generate';
import { TrainComponent } from '../components/Train';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('train');

  const renderContent = () => {
    switch (activeTab) {
      case 'train':
        return <TrainComponent />;
      case 'camera':
        return <CameraComponent setActiveTab={setActiveTab} />;
      case 'packs':
        return <PacksComponent />;
      case 'generate':
        return <GenerateComponent />;
      default:
        return <TrainComponent />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-16">

      {/* Navigation Tabs */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'train', label: 'Train Model' },
              { id: 'camera', label: 'Camera' },
              { id: 'packs', label: 'Packs' },
              { id: 'generate', label: 'Generate' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-500'
                    : 'border-transparent text-slate-300 hover:text-white hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
}
