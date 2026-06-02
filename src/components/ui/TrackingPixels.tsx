'use client'

import Script from 'next/script'
import type { PixelConfig, PixelProvider } from '@/lib/pixels'
import { trackingAllowed } from './CookieConsent'

const SCRIPTS: Record<PixelProvider, (id: string) => React.ReactNode> = {
  meta: (id) => (
    <Script
      key={`meta-${id}`}
      id={`meta-pixel-${id}`}
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${id}');
          fbq('track', 'PageView');
        `,
      }}
    />
  ),
  ga: (id) => (
    <Script
      key={`ga-${id}`}
      src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      strategy="afterInteractive"
    />
  ),
  gads: (id) => (
    <Script
      key={`gads-${id}`}
      src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      strategy="afterInteractive"
    />
  ),
  tiktok: (id) => (
    <Script
      key={`tiktok-${id}`}
      id={`tiktok-pixel-${id}`}
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
          ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
          ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
          for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
          ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
          ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
          ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
          n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;
          e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
          ttq.load('${id}');
          ttq.page();
        }(window, document, 'ttq');
        `,
      }}
    />
  ),
  linkedin: (id) => (
    <Script
      key={`linkedin-${id}`}
      id={`linkedin-pixel-${id}`}
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          _linkedin_partner_id = "${id}";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];
          var b=document.createElement("script");b.type="text/javascript";b.async=true;
          b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b,s)})(window.lintrk);
        `,
      }}
    />
  ),
  clarity: (id) => (
    <Script
      key={`clarity-${id}`}
      id={`clarity-pixel-${id}`}
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})
          (window, document, "clarity", "script", "${id}");
        `,
      }}
    />
  ),
}

export default function TrackingPixels({ pixels }: { pixels?: PixelConfig | null }) {
  if (!pixels) return null
  if (!trackingAllowed()) return null

  const entries = Object.entries(pixels).filter(
    (entry): entry is [PixelProvider, string] => {
      const [, value] = entry
      return typeof value === 'string' && value.length > 0
    }
  )

  if (entries.length === 0) return null

  return (
    <>
      {entries.map(([provider, id]) => {
        const render = SCRIPTS[provider]
        if (!render) return null

        if (provider === 'ga' || provider === 'gads') {
          return [
            render(id),
            <Script
              key={`${provider}-init-${id}`}
              id={`${provider}-init-${id}`}
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${id}');
                `,
              }}
            />,
          ]
        }

        return render(id)
      })}
    </>
  )
}
