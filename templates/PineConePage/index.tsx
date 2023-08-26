'use client'

import { useState } from 'react';

const PineConePage = () => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  async function uploadPDF() {
    if (!file) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('pdf', file);

      const result = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      // Handle the response as needed
      console.log('Upload result:', result);
    } catch (err) {
      console.log('Error:', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setFile(file);
          }
        }}
      />
      <button
        className="px-7 py-1 rounded-2xl bg-white text-black mt-2 mb-2"
        onClick={uploadPDF}
      >
        Upload PDF
      </button>
      {loading && <p>Uploading PDF...</p>}
    </main>
  );
};

export default PineConePage;