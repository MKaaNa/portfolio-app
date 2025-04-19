'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Ziyaretçi bilgilerini kaydet
    fetch('/api/visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      }),
    });
  }, []);

  return (
    <main className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Musa Kaan Altın - Portfolyo</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg mb-4 text-center text-gray-700">
            Merhaba! Ben Musa Kaan Altın. Portfolyoma hoş geldiniz.
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">PDF Portfolyom</h2>
            <p className="text-gray-600 mb-4">
              Aşağıda portfolyomu PDF formatında görüntüleyebilirsiniz.
            </p>
            <div className="border rounded-lg p-4">
              <embed
                src="/Musa_KaanAltin_Projeler.pdf"
                type="application/pdf"
                width="100%"
                height="600px"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
