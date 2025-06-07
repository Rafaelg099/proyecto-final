export function agregarLibro(libro: any) {
  console.log('Libro agregado:', libro);
  return Promise.resolve();
}

export function buscarLibros(filtros: any) {
  // Simulación de búsqueda con datos estáticos
  const mockData = [
    { id: 1, titulo: '1984', autor: 'George Orwell', categoria: 'Novela' },
    { id: 2, titulo: 'Vue 3', autor: 'Evan You', categoria: 'Tecnología' },
  ];

  // Filtro simple por coincidencia parcial
  const resultado = mockData.filter(libro =>
    (!filtros.titulo || libro.titulo.includes(filtros.titulo)) &&
    (!filtros.autor || libro.autor.includes(filtros.autor)) &&
    (!filtros.categoria || libro.categoria.includes(filtros.categoria))
  );

  return Promise.resolve({ data: resultado });
}

