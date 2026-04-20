#!/bin/bash

# BrickBridge.io VPS Deployment Script
# Usage: ./deploy.sh

echo "馃殌 Starting BrickBridge Deployment..."

# 1. Pull latest code (ensure you've set up git SSH keys)
# git pull origin main

# 2. Install dependencies
echo "馃摝 Installing dependencies..."
npm install --production=false

# 3. Build the application
echo "馃彈锔?Building Next.js application..."
npm run build

# 4. Restart/Start the application with PM2
echo "馃攧 Restarting application with PM2..."
pm2 delete brick-bridge || true
pm2 start npm --name "brick-bridge" -- start -- -p 3000

# 5. Save PM2 configuration to persist after reboots
pm2 save

echo "鉁?Deployment successful! Your site is running on port 3000."
echo "鈩癸笍 Remember to configure Nginx to proxy port 80/443 to 3000."
