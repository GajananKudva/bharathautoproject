const express = require('express');
const path    = require('path');
const os      = require('os');
const app     = express();

// ── API Key loading ───────────────────────────────────────────────────────────
// Priority 1: environment variable (used on Render — set in their dashboard)
// Priority 2: config.local.js  (your PC only — this file is NEVER uploaded to GitHub)
let GROQ_API_KEY = process.env.GROQ_API_KEY;

if (!GROQ_API_KEY) {
  try {
    const localCfg = require('./config.local.js');
    GROQ_API_KEY = localCfg.GROQ_API_KEY;
  } catch (e) {
    console.error('\n  ERROR: No Groq API key found.');
    console.error('  Create a config.local.js file with your key, or');
    console.error('  set the GROQ_API_KEY environment variable.\n');
    process.exit(1);
  }
}

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const PORT     = process.env.PORT || 3000;

app.use(express.json({ limit: '2mb' }));
app.use(express.static(__dirname));

// ── Groq proxy endpoint ───────────────────────────────────────────────────────
app.post('/api/groq', async (req, res) => {
  try {
    const { messages, maxTokens, temperature } = req.body;
    const response = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model:       'llama-3.3-70b-versatile',
        messages,
        temperature: temperature ?? 0.7,
        max_tokens:  maxTokens  ?? 1024
      })
    });
    const data = await response.json();
    if (data.error) return res.json({ success: false, error: data.error.message });
    res.json({ success: true, content: data.choices[0].message.content });
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// ── Start ─────────────────────────────────────────────────────────────────────
function getLocalIP() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets))
    for (const net of nets[name])
      if (net.family === 'IPv4' && !net.internal) return net.address;
  return 'localhost';
}

app.listen(PORT, '0.0.0.0', () => {
  const ip = getLocalIP();
  console.log('\n========================================');
  console.log('  🚗  Bharath Auto Trainer — Web Server');
  console.log('========================================\n');
  console.log('  On this PC:    http://localhost:' + PORT);
  console.log('  On your phone: http://' + ip + ':' + PORT);
  console.log('\n  Keep this window open while using the app.');
  console.log('  Press Ctrl+C to stop.\n');
});
