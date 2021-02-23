import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';

import '@pnotify/bootstrap4/dist/PNotifyBootstrap4.css';
import { info, Stack, defaultModules } from '@pnotify/core';
import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';
defaultModules.set(PNotifyBootstrap4, {});

import * as PNotifyFontAwesome5Fix from '@pnotify/font-awesome5-fix';
import * as PNotifyFontAwesome5 from '@pnotify/font-awesome5';
defaultModules.set(PNotifyFontAwesome5Fix, {});
defaultModules.set(PNotifyFontAwesome5, {});
// defaults.styling = 'bootstrap4';
// defaults.icons = 'font-awesome';

// function noImagesMessage() {
//   info({
//     title: 'Sorry',
//     text: `We haven't images matching your request`,
//     delay: 3000,
//   });
// }
const myStack = new Stack({
  dir1: 'down',
  dir2: 'left',
  firstpos1: 25,
  firstpos2: 30,
  context: document.body,
});
const noticeOptions = {
  title: 'Serching for images',
  text: 'Awaiting while downloading images from server',
  stack: myStack,
  delay: 2000,
};

function noImagesMessage() {
  info({
    ...noticeOptions,
    title: 'Sorry',
    text: `We haven't images matching your request`,
    delay: 2000,
  });
}

export { noImagesMessage };
