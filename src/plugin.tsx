import React from 'react';
import { createRoot } from 'react-dom/client';
import ShapeGenerator from './components/ShapeGenerator';
import './styles/base.scss';

// =============================================
// PLACEHOLDER FILE: React Entry Point
// Replace this with your own entry point when building your plugin.
// =============================================

const container = document.getElementById('react-page');
if (container) {
  const root = createRoot(container);
  root.render(<ShapeGenerator />);
} else {
  console.error('Container element not found');
}