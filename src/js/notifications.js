import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';

import {info} from '@pnotify/core';

import '@pnotify/bootstrap4/dist/PNotifyBootstrap4.css';
import { defaultModules } from '@pnotify/core';
import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';
defaultModules.set(PNotifyBootstrap4, {});


function noImagesMessage() {
  info({
    title: 'Sorry',
    text: `We haven't images matching your request`,
    delay: 1000,
  });
}


export { noImagesMessage };