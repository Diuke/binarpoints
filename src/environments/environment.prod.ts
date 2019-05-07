var baseURL = "http://sistemas.binar10.co/binarpoints/binarpoints_back/public/api"

export const environment = {
  production: true,
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
