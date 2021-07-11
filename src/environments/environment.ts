// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  mediaServerHost: 'http://192.168.1.200',

  sabnzbdApi: '/api?output=json&mode=fullstatus',
  radarrSonarrApi: '/api/v3/system/status',
  dockerWebApiContainersInfo: '/containers/json',
  dockerWebApiSystemInfo: '/info',
  dockerWebApiVersionInfo: '/version',
  dockerWebApiPlexInfo: '/containers/plex/json',
  dockerWebApiSabnzbdInfo: '/containers/sabnzbd/json',
  dockerWebApiRadarrInfo: '/containers/radarr/json',
  dockerWebApiSonarrInfo: '/containers/sonarr/json',

  plexPort: ':32400',
  sabnzbdPort: ':8080',
  radarrPort: ':7878',
  sonarrPort: ':8989',
  dockerWebPort: ':2375',
  cadvisorPort: ':8282',

  sabnzbdApiKey: '404e10e4918e4878b5250496db6f3443',
  radarrApiKey: '93eb39c79f58480b9b2b94d4b309766e',
  sonarrApiKey: 'd47ba2bf40ad43ed82bbda935bb16fb8',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
