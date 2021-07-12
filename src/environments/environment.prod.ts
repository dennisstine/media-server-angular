export const environment = {
  production: true,

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
