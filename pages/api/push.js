// push.js

import webpush from 'web-push';

webpush.setVapidDetails(
  'mailto:mistricool@gmail.com', // replace with your email
  'BOiMKG2yF_aKoHCRtlFzwrpf0mNmgUl22-cMx5cKl2GAwUVEH2108cPCNuEjMWY4Uwgeug78hgPzeYmvKI81_bc', // replace with your public key
  'hJBL1cVulZloEuq0a1-zivydDqnygR6hrxaTCpukKn8' // replace with your private key
);


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { subscription } = req.body;

    const payload = JSON.stringify({
      title: 'Example Push Notification',
      body: 'This is a push notification from your app!',
    });

    try {
      await webpush.sendNotification(subscription, payload);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending push notification:', error);
      res.status(500).json({ success: false });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
