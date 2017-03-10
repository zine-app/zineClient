let loader

const appId = FACEBOOK_APP_ID
const version = 'v2.5'
import fb = facebook;

export const load = () => {
    if (typeof window === 'undefined') {
      return Promise.reject(new Error('facebook: cannot get SDK in server side'))
    }

    if((<any>window).FB) {
      return FB
    }

    if(loader) {
      return loader
    }

    loader = new Promise(function (resolve, reject) {

      (<any>window).fbAsyncInit = () => {
          FB.init({ appId, version })
          resolve(FB)
      }

      (function(d, s, id){
          var fbRoot = document.createElement('div');
          fbRoot.setAttribute('id', 'fb-root');
          document.body.appendChild(fbRoot);
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'))
    })

    return loader
}
