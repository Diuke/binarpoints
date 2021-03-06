// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var baseURL = "http://192.168.1.115/binarpoints/public/api"
export const environment = {
  production: false,
  routes: {
    login: baseURL + "/login",
    lista: baseURL + "/lista",
    motivos: baseURL + "/listMotive",
    lista_trabajadores: baseURL + '/listWorkers',
    agregar: baseURL + '/createHistory',
    infoTrabajador: baseURL + '/workerId/',
    crearMotivo: baseURL + '/createMotive',
    actualizarMotivo: baseURL + '/motiveUpdate/',
    historial: baseURL + '/listHistory?id='
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
