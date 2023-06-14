import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../shared/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter();
  /* useEffect(() => {
    router.push("/slides/01");
  }); */

  /* useEffect(() => {
    const hasAcceptedTerms = localStorage.getItem('acceptedTerms');

    if (hasAcceptedTerms) {
      router.push('/slides/01/');
    }
  }, []);

  const [notificationAllowed, setNotificationAllowed] = useState(false); */

  const handleAgree = () => {
    // Request permission for push notifications
    /* if (isIOS()) {
      localStorage.setItem('acceptedTerms', 'true');
      router.push("/slides/01");
    }else { */

      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('Notification 1');
          // User allowed push notifications
         /*  setNotificationAllowed(true);
          localStorage.setItem('acceptedTerms', 'true');
          router.push("/slides/01"); */
        } else {
          // User denied push notifications
          //setNotificationAllowed(false);
        }
      });
    /* } */
  };

 /*  useEffect(() => {
    // Schedule push notifications after 15 and 20 minutes
    const scheduleNotifications = () => {
      const notificationOptions = {
        body: 'Custom message',
        icon: '/incrediwear_logo.webp',
      };

      setTimeout(() => {
        const notification1 = new Notification('Notification 1', {
          body: 'This is first notification',
          icon: '/incrediwear_logo.webp',
        });
      }, 10 * 1000);

      setTimeout(() => {
        const notification2 = new Notification('Notification 2', {
          body: 'This is second notification',
          icon: '/incrediwear_logo.webp',
        });
      }, 20 * 1000);
    };

    if (notificationAllowed == true) {
      // If push notifications are allowed, schedule them
     // scheduleNotifications();
    }
  }, [notificationAllowed]); */

  /* function isIOS() {
    const browserInfo = navigator.userAgent.toLowerCase();
    
    if (browserInfo.match('iphone') || browserInfo.match('ipad')) {
      return true;
    }
    if (['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform)) {
      return true;
    } 
    return false;
  } */


  /* const subscribeUser = async () => {
    const serviceWorkerPath = '/service-worker.js';
    const registration = await navigator.serviceWorkerContainer.register(serviceWorkerPath);
  
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.log('Notification permission denied');
      return;
    }
  
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'BOiMKG2yF_aKoHCRtlFzwrpf0mNmgUl22-cMx5cKl2GAwUVEH2108cPCNuEjMWY4Uwgeug78hgPzeYmvKI81_bc', // replace with your public key
    });
  
    // Send the subscription object to the server
    await fetch('/api/push', {
      method: 'POST',
      body: JSON.stringify({ subscription }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  useEffect(() => {
    subscribeUser();
  }, []); */
  
  return <>
  {/* <Loader/> */}
    <div style={{padding: "20px", color: "white"}}>
      <h1>Terms & Conditions</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br/>
      <input type="checkbox" /> Please check the box<br/><br/>
      <button onClick={handleAgree} style={{padding: "10px", fontWeight: "bold"}}>Agree</button>
    </div>
  </>;
}
