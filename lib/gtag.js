export const GA_TRACKING_ID = 'UA-27850775-5'

export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
