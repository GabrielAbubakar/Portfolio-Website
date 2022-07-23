// Configuration for different media sizes for this App
// The most commonly used sizes for the app will be as follows:
// Phone: mobileL @ 425px
// Tablet: tablet @ 768px
// Small-Laptop: laptop @ 1024px
// Other sizes will be use for further fine tuning as required


const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};


export const devices = {
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(max-width: ${sizes.laptop})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
};