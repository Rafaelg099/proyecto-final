export function obtenerHistorial(usuarioId: number) {
  return Promise.resolve([
    { libro: '1984', fechaPrestamo: '2025-05-01', fechaDevolucion: '2025-05-10' },
    { libro: 'Cien años de soledad', fechaPrestamo: '2025-04-15', fechaDevolucion: '2025-04-30' }
  ]);
}

export function obtenerNotificaciones(usuarioId: number) {
  return Promise.resolve([
    { mensaje: 'Tienes un libro pendiente de devolver', fecha: '2025-06-05' },
    { mensaje: 'Nuevo libro disponible: “El alquimista”', fecha: '2025-06-03' }
  ]);
}

export function bloquearUsuario(usuarioId: number) {
  return Promise.resolve({ mensaje: `Usuario ${usuarioId} bloqueado exitosamente` });
}




