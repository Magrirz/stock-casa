const botonCalcular = document.getElementById("calcular");
const botonCompraHecha = document.getElementById("compra-hecha");
const botonReset = document.getElementById("reset");
const resultado = document.getElementById("resultado");
const listaProductos = document.getElementById("productos-lista");

const botonToggleEditor = document.getElementById("toggle-editor");
const editorCesta = document.getElementById("editor-cesta");
const listaProductosEditor = document.getElementById("lista-productos-editor");

const inputNuevoNombre = document.getElementById("nuevo-nombre");
const selectNuevaUnidad = document.getElementById("nueva-unidad");
const inputNuevoMaximo = document.getElementById("nuevo-maximo");
const botonAnadirProducto = document.getElementById("anadir-producto");

const botonCopiarLista = document.getElementById("copiar-lista");

let productos = JSON.parse(localStorage.getItem("productosCasa")) || [
  { id: "agua", nombre: "Agua", unidad: "botellas", maximo: 6, minimo: 6, actual: 0, paso: 1 },
  { id: "aceite", nombre: "Aceite", unidad: "garrafas", maximo: 1, minimo: 1, actual: 0, paso: 1 },

  { id: "papel_vater", nombre: "Papel de váter", unidad: "rollos", maximo: 12, minimo: 5, actual: 0, paso: 1 },
  { id: "papel_cocina", nombre: "Papel de cocina", unidad: "rollos", maximo: 3, minimo: 1, actual: 0, paso: 1 },
  { id: "pasta_dientes", nombre: "Pasta de dientes", unidad: "unidades", maximo: 2, minimo: 1, actual: 0, paso: 1 },
  { id: "gel_ducha", nombre: "Gel de ducha", unidad: "unidades", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "champu", nombre: "Champú", unidad: "unidades", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "jabon_manos", nombre: "Jabón de manos", unidad: "unidades", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "enjuague_bucal", nombre: "Enjuague bucal", unidad: "unidades", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "cuchillas_depilar", nombre: "Cuchillas depilar", unidad: "unidades", maximo: 3, minimo: 2, actual: 0, paso: 1 },

  { id: "bolsas_basura", nombre: "Bolsas de basura", unidad: "rollos", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "papel_albal", nombre: "Papel albal", unidad: "unidades", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "papel_horno", nombre: "Papel de horno", unidad: "unidades", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "film_transparente", nombre: "Film transparente", unidad: "unidades", maximo: 1, minimo: 1, actual: 0, paso: 1 },

  { id: "sal", nombre: "Sal", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "azucar", nombre: "Azúcar", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },

  { id: "leche_vaca", nombre: "Leche de vaca", unidad: "bricks", maximo: 2, minimo: 2, actual: 0, paso: 1 },
  { id: "leche_avena", nombre: "Leche de avena", unidad: "bricks", maximo: 2, minimo: 2, actual: 0, paso: 1 },
  { id: "cafe", nombre: "Café", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },

  { id: "macarrones", nombre: "Macarrones", unidad: "gramos", maximo: 2000, minimo: 2000, actual: 0, paso: 100 },
  { id: "espaguetis", nombre: "Espaguetis", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "fideos_sopa", nombre: "Fideos sopa", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "arroz", nombre: "Arroz", unidad: "gramos", maximo: 1000, minimo: 1000, actual: 0, paso: 100 },
  { id: "harina", nombre: "Harina", unidad: "gramos", maximo: 1000, minimo: 1000, actual: 0, paso: 100 },

  { id: "huevos", nombre: "Huevos", unidad: "unidades", maximo: 12, minimo: 12, actual: 0, paso: 1 },
  { id: "filetes_pollo", nombre: "Filetes de pollo", unidad: "gramos", maximo: 1500, minimo: 1200, actual: 0, paso: 100 },
  { id: "filete_salmon", nombre: "Filete de salmón", unidad: "gramos", maximo: 400, minimo: 400, actual: 0, paso: 100 },
  { id: "carne_picada", nombre: "Carne picada", unidad: "gramos", maximo: 800, minimo: 800, actual: 0, paso: 100 },
  { id: "latas_atun", nombre: "Latas de atún", unidad: "unidades", maximo: 8, minimo: 8, actual: 0, paso: 1 },
  { id: "pavo_embutido", nombre: "Pavo (embutido)", unidad: "sobres", maximo: 2, minimo: 2, actual: 0, paso: 1 },

  { id: "yogures", nombre: "Yogures", unidad: "unidades", maximo: 6, minimo: 6, actual: 0, paso: 1 },
  { id: "queso_bloque", nombre: "Queso bloque", unidad: "tacos", maximo: 2, minimo: 2, actual: 0, paso: 1 },
  { id: "parmesano", nombre: "Parmesano", unidad: "sobres", maximo: 2, minimo: 2, actual: 0, paso: 1 },

  { id: "caldo", nombre: "Caldo", unidad: "bricks", maximo: 2, minimo: 2, actual: 0, paso: 1 },
  { id: "garbanzos", nombre: "Garbanzos", unidad: "tarros", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "lentejas", nombre: "Lentejas", unidad: "tarros", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "olivas", nombre: "Olivas", unidad: "latas", maximo: 6, minimo: 6, actual: 0, paso: 1 },
  { id: "salsa_tomate", nombre: "Salsa de tomate", unidad: "tarros", maximo: 2, minimo: 2, actual: 0, paso: 1 },

  { id: "fajitas", nombre: "Fajitas", unidad: "sobres", maximo: 1, minimo: 1, actual: 0, paso: 1 },

  { id: "boniatos", nombre: "Boniatos", unidad: "unidades", maximo: 4, minimo: 4, actual: 0, paso: 1 },
  { id: "patatas", nombre: "Patatas", unidad: "unidades", maximo: 6, minimo: 6, actual: 0, paso: 1 },
  { id: "cebollas", nombre: "Cebollas", unidad: "unidades", maximo: 4, minimo: 4, actual: 0, paso: 1 },
  { id: "berenjenas", nombre: "Berenjenas", unidad: "unidades", maximo: 2, minimo: 2, actual: 0, paso: 1 },
  { id: "pimientos", nombre: "Pimientos", unidad: "unidades", maximo: 2, minimo: 2, actual: 0, paso: 1 },
  { id: "pepinos", nombre: "Pepinos", unidad: "unidades", maximo: 2, minimo: 2, actual: 0, paso: 1 },
  { id: "tomates_cherry", nombre: "Tomates cherry", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "brotes_espinacas", nombre: "Brotes de espinacas", unidad: "sobres", maximo: 2, minimo: 2, actual: 0, paso: 1 },

  { id: "cereales", nombre: "Cereales", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "special_k", nombre: "Special K", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "pan_barra", nombre: "Pan barra", unidad: "unidades", maximo: 2, minimo: 2, actual: 0, paso: 1 },
  { id: "panecillos_trigo", nombre: "Panecillos de trigo", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "panecillos_centeno", nombre: "Panecillos de centeno", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "aguacates", nombre: "Aguacates", unidad: "unidades", maximo: 4, minimo: 4, actual: 0, paso: 1 },
  { id: "fuet", nombre: "Fuet", unidad: "unidades", maximo: 2, minimo: 2, actual: 0, paso: 1 },
  { id: "ligeresa", nombre: "Ligeresa", unidad: "botes", maximo: 1, minimo: 1, actual: 0, paso: 1 },

  { id: "chocolate_milka", nombre: "Chocolate Milka", unidad: "tabletas", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "nutella", nombre: "Nutella", unidad: "tarros", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "colacao", nombre: "ColaCao", unidad: "botes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "miel", nombre: "Miel", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },

  { id: "mandarinas", nombre: "Mandarinas", unidad: "unidades", maximo: 6, minimo: 6, actual: 0, paso: 1 },
  { id: "platanos", nombre: "Plátanos", unidad: "unidades", maximo: 4, minimo: 4, actual: 0, paso: 1 },
  { id: "kiwi", nombre: "Kiwi", unidad: "unidades", maximo: 4, minimo: 4, actual: 0, paso: 1 },

  { id: "pimenton_dulce", nombre: "Pimentón dulce", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "pimenton_picante", nombre: "Pimentón picante", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "ajo_polvo", nombre: "Ajo en polvo", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "cebolla_polvo", nombre: "Cebolla en polvo", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "hierbas_provenzales", nombre: "Hierbas provenzales", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "oregano", nombre: "Orégano", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "perejil", nombre: "Perejil", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "albahaca", nombre: "Albahaca", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "pimienta", nombre: "Pimienta", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "sazonador_pollo", nombre: "Sazonador pollo", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
  { id: "sazonador_bistec", nombre: "Sazonador bistec", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 }
];

function guardarProductos() {
  localStorage.setItem("productosCasa", JSON.stringify(productos));
}

function renderProductos() {
  listaProductos.innerHTML = "";

  productos.forEach((producto) => {
    listaProductos.innerHTML += `
      <div class="product">
        <div>
          <h2>${producto.nombre}</h2>
          <p>Stock ideal: ${producto.maximo} ${producto.unidad}</p>
        </div>
        <div class="controls">
          <button class="qty-btn" onclick="cambiarCantidad('${producto.id}', -${producto.paso})">-</button>
          <input type="number" id="${producto.id}" min="0" value="${producto.actual}" />
          <button class="qty-btn" onclick="cambiarCantidad('${producto.id}', ${producto.paso})">+</button>
        </div>
      </div>
    `;
  });

  productos.forEach((producto) => {
    const input = document.getElementById(producto.id);

    input.addEventListener("input", () => {
      producto.actual = Number(input.value);
      if (producto.actual < 0) producto.actual = 0;
      guardarProductos();
    });
  });
}

function renderEditorProductos() {
  listaProductosEditor.innerHTML = "";

  if (productos.length === 0) {
    listaProductosEditor.innerHTML = "<p>No hay productos.</p>";
    return;
  }

  productos.forEach((producto) => {
    listaProductosEditor.innerHTML += `
      <div class="editor-item">
        <div>
          <strong>${producto.nombre}</strong><br>
          <span>Máximo: ${producto.maximo} ${producto.unidad}</span>
        </div>
        <button class="delete-btn" onclick="eliminarProducto('${producto.id}')">Eliminar</button>
      </div>
    `;
  });
}

function cambiarCantidad(id, cambio) {
  const producto = productos.find((p) => p.id === id);
  if (!producto) return;

  producto.actual += cambio;

  if (producto.actual < 0) {
    producto.actual = 0;
  }

  guardarProductos();
  renderProductos();
}

function eliminarProducto(id) {
  productos = productos.filter((producto) => producto.id !== id);
  guardarProductos();
  renderProductos();
  renderEditorProductos();
  resultado.innerHTML = "<p>Producto eliminado.</p>";
}

botonToggleEditor.addEventListener("click", () => {
  editorCesta.classList.toggle("oculto");
});

botonCalcular.addEventListener("click", () => {
  let mensaje = "";

  productos.forEach((producto) => {
    const umbral = producto.minimo ?? producto.maximo;
    const falta = producto.maximo - producto.actual;

    if (producto.actual < umbral && falta > 0) {
        let unidadTexto = producto.unidad;

        if (unidadTexto === "gramos") unidadTexto = "g";
        if (unidadTexto === "unidades") unidadTexto = "uds";
        if (unidadTexto === "sobres") unidadTexto = "sobres";
        if (unidadTexto === "paquetes") unidadTexto = "paq";

        mensaje += `<p class="item-compra">${producto.nombre} · ${falta} ${unidadTexto}</p>`;
    }
  });

  if (mensaje === "") {
    mensaje = "<p>No hace falta comprar nada.</p>";
  }

  resultado.innerHTML = mensaje;
});

botonCopiarLista.addEventListener("click", async () => {
  const texto = resultado.innerText.trim();

  if (!texto || texto === "Aquí saldrá lo que falta por comprar.") {
    resultado.innerHTML = "<p>No hay ninguna lista para copiar todavía.</p>";
    return;
  }

  try {
    await navigator.clipboard.writeText(texto);
    resultado.innerHTML += "<p><em>Lista copiada al portapapeles.</em></p>";
  } catch (error) {
    resultado.innerHTML += "<p><em>No se pudo copiar la lista.</em></p>";
  }
});

botonCompraHecha.addEventListener("click", () => {
  productos.forEach((producto) => {
    producto.actual = producto.maximo;
  });

  guardarProductos();
  renderProductos();
  renderEditorProductos();
  resultado.innerHTML = "<p>Compra hecha. Stock actualizado al máximo.</p>";
});

botonReset.addEventListener("click", () => {
  productos.forEach((producto) => {
    producto.actual = 0;
  });

  guardarProductos();
  renderProductos();
  renderEditorProductos();
  resultado.innerHTML = "<p>Stock reiniciado a 0.</p>";
});

botonAnadirProducto.addEventListener("click", () => {
  const nombre = inputNuevoNombre.value.trim();
  const unidad = selectNuevaUnidad.value;
  const maximo = Number(inputNuevoMaximo.value);

  if (!nombre || maximo <= 0) {
    return;
  }

  const id = "producto_" + Date.now();
  const paso = unidad === "gramos" ? 100 : 1;

  productos.push({
        id,
        nombre,
        unidad,
        maximo,
        minimo: maximo,
        actual: 0,
        paso
    });

  guardarProductos();
  renderProductos();
  renderEditorProductos();

  inputNuevoNombre.value = "";
  inputNuevoMaximo.value = "";

  resultado.innerHTML = `<p>Producto añadido: ${nombre}</p>`;
});

renderProductos();
renderEditorProductos();