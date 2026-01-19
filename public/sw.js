// ============================================
// SERVICE WORKER - P.I.A. Mobile PWA
// Cache Strategy: Network First with Cache Fallback
// ============================================

const CACHE_VERSION = 'pia-mobile-v1.0';
const CACHE_NAME = `${CACHE_VERSION}`;

// Files to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/mobile.css',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/dashboards/artisan.html',
  '/dashboards/b2c.html',
  '/dashboards/do.html',
  '/dashboards/expert.html',
  '/actions/upload-photo.html',
  '/actions/questionnaire.html'
];

// API endpoints to cache (with network-first strategy)
const API_CACHE = 'pia-api-cache-v1';

// ============================================
// INSTALL EVENT
// ============================================

self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('✅ [SW] Installation complete');
        return self.skipWaiting(); // Activate immediately
      })
      .catch((error) => {
        console.error('❌ [SW] Installation failed:', error);
      })
  );
});

// ============================================
// ACTIVATE EVENT
// ============================================

self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // Delete old caches
              return cacheName.startsWith('pia-') && cacheName !== CACHE_NAME && cacheName !== API_CACHE;
            })
            .map((cacheName) => {
              console.log(`[SW] Deleting old cache: ${cacheName}`);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('✅ [SW] Activation complete');
        return self.clients.claim(); // Take control immediately
      })
  );
});

// ============================================
// FETCH EVENT - Network First Strategy
// ============================================

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // API requests (tables/*) - Network first, cache fallback
  if (url.pathname.startsWith('/tables/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone response before caching
          const responseClone = response.clone();
          
          caches.open(API_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
          
          return response;
        })
        .catch(() => {
          // Network failed, try cache
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              console.log(`[SW] Serving from cache (offline): ${url.pathname}`);
              return cachedResponse;
            }
            
            // No cache available
            return new Response('Offline - No cached data available', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: { 'Content-Type': 'text/plain' }
            });
          });
        })
    );
    return;
  }

  // Static assets - Cache first, network fallback
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log(`[SW] Serving from cache: ${url.pathname}`);
          return cachedResponse;
        }
        
        // Not in cache, fetch from network
        return fetch(request)
          .then((response) => {
            // Cache successful responses
            if (response.status === 200) {
              const responseClone = response.clone();
              
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseClone);
              });
            }
            
            return response;
          })
          .catch((error) => {
            console.error(`[SW] Fetch failed for ${url.pathname}:`, error);
            
            // Return offline page for HTML requests
            if (request.headers.get('accept').includes('text/html')) {
              return new Response(`
                <!DOCTYPE html>
                <html lang="fr">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>P.I.A. - Hors ligne</title>
                  <style>
                    body {
                      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      min-height: 100vh;
                      margin: 0;
                      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                      color: white;
                      padding: 20px;
                      text-align: center;
                    }
                    .offline-container {
                      max-width: 400px;
                    }
                    .offline-icon {
                      font-size: 64px;
                      margin-bottom: 20px;
                    }
                    h1 {
                      font-size: 24px;
                      margin-bottom: 12px;
                    }
                    p {
                      font-size: 16px;
                      opacity: 0.9;
                      line-height: 1.6;
                    }
                    button {
                      margin-top: 24px;
                      padding: 12px 24px;
                      background: white;
                      color: #667eea;
                      border: none;
                      border-radius: 8px;
                      font-size: 16px;
                      font-weight: 600;
                      cursor: pointer;
                    }
                  </style>
                </head>
                <body>
                  <div class="offline-container">
                    <div class="offline-icon">📡</div>
                    <h1>Vous êtes hors ligne</h1>
                    <p>P.I.A. nécessite une connexion internet pour cette page. Certaines fonctionnalités restent disponibles hors ligne.</p>
                    <button onclick="window.location.reload()">Réessayer</button>
                  </div>
                </body>
                </html>
              `, {
                headers: { 'Content-Type': 'text/html' }
              });
            }
            
            return new Response('Offline', { status: 503 });
          });
      })
  );
});

// ============================================
// BACKGROUND SYNC (for future use)
// ============================================

self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered:', event.tag);
  
  if (event.tag === 'sync-photos') {
    event.waitUntil(syncPhotos());
  }
});

async function syncPhotos() {
  console.log('[SW] Syncing pending photos...');
  // Implementation for syncing photos when back online
  return Promise.resolve();
}

// ============================================
// PUSH NOTIFICATIONS (for future use)
// ============================================

self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received');
  
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'P.I.A.';
  const options = {
    body: data.body || 'Nouvelle notification',
    icon: '/icons/icon-192.png',
    badge: '/icons/badge-72.png',
    vibrate: [200, 100, 200],
    data: data.url || '/',
    actions: [
      { action: 'open', title: 'Ouvrir' },
      { action: 'close', title: 'Fermer' }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'open' || !event.action) {
    const urlToOpen = event.notification.data || '/';
    
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then((clientList) => {
          // Check if already open
          for (const client of clientList) {
            if (client.url === urlToOpen && 'focus' in client) {
              return client.focus();
            }
          }
          
          // Open new window
          if (clients.openWindow) {
            return clients.openWindow(urlToOpen);
          }
        })
    );
  }
});

// ============================================
// MESSAGE HANDLER
// ============================================

self.addEventListener('message', (event) => {
  console.log('[SW] Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
    );
  }
});

console.log('✅ [SW] Service Worker loaded successfully');
