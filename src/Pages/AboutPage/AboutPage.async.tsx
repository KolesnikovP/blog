import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    setTimeout(() => {
        // @ts-ignore
        // don't do this in real life. It's just for example how to use lazy loading
        resolve(import('./AboutPage'))
    }, 1500)
}));