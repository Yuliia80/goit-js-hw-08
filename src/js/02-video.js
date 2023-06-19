
import vimeo from '@vimeo/player'
import throttle from 'lodash.throttle'

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframeEl = document.querySelector('iframe');
    const player = new vimeo(iframeEl);

    const onIframe = function (evt) {
        const seconds = evt.seconds;
        // console.log(seconds);
        localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
      };
      
      player.on('timeupdate', throttle(onIframe, 1000));
      
      player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)));
      
  