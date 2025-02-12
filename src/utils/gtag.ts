import { GtagEventType } from "src/types";

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;
declare var window: any;

export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: GtagEventType) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
