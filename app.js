const CATEGORIAS = [
  "🚰 ESENCIALES",
  "🧻 Higiene",
  "🧴 Hogar",
  "🧂 Básicos cocina",
  "🥤 BEBIDAS",
  "🍝 COMIDA",
  "🍜 Pasta y básicos",
  "🥩 Proteína",
  "🧀 Lácteos",
  "🥫 Conservas y varios",
  "🌯 Otros",
  "🥔 Verdura",
  "🥑 Extras / desayuno / varios",
  "🍫 Dulces",
  "🍎 FRUTA",
  "🌿 ESPECIAS"
];

const botonCalcular = document.getElementById("calcular");
const botonCompraHecha = document.getElementById("compra-hecha");
const botonReset = document.getElementById("reset");
const botonCopiarLista = document.getElementById("copiar-lista");

const resultado = document.getElementById("resultado");
const listaProductos = document.getElementById("productos-lista");

const botonToggleEditor = document.getElementById("toggle-editor");
const editorCesta = document.getElementById("editor-cesta");
const listaProductosEditor = document.getElementById("lista-productos-editor");

const inputNuevoNombre = document.getElementById("nuevo-nombre");
const selectNuevaCategoria = document.getElementById("nueva-categoria");
const selectNuevaUnidad = document.getElementById("nueva-unidad");
const inputNuevoMaximo = document.getElementById("nuevo-maximo");
const botonAnadirProducto = document.getElementById("anadir-producto");

const ESTADO_CATEGORIAS_KEY = "estadoCategoriasStockCasa";
const PRODUCTOS_KEY = "productosCasa";

function crearProductosBase() {
  return [
    { id: "papel_vater", nombre: "Papel de váter", categoria: "🧻 Higiene", unidad: "rollos", maximo: 12, minimo: 5, actual: 0, paso: 1 },
    { id: "papel_cocina", nombre: "Papel de cocina", categoria: "🧻 Higiene", unidad: "rollos", maximo: 3, minimo: 1, actual: 0, paso: 1 },
    { id: "pasta_dientes", nombre: "Pasta de dientes", categoria: "🧻 Higiene", unidad: "unidades", maximo: 2, minimo: 1, actual: 0, paso: 1 },
    { id: "gel_ducha", nombre: "Gel de ducha", categoria: "🧻 Higiene", unidad: "unidades", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "champu", nombre: "Champú", categoria: "🧻 Higiene", unidad: "unidades", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "jabon_manos", nombre: "Jabón de manos", categoria: "🧻 Higiene", unidad: "unidades", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "enjuague_bucal", nombre: "Enjuague bucal", categoria: "🧻 Higiene", unidad: "unidades", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "cuchillas_depilar", nombre: "Cuchillas depilar", categoria: "🧻 Higiene", unidad: "unidades", maximo: 3, minimo: 2, actual: 0, paso: 1 },

    { id: "agua", nombre: "Agua", categoria: "🧴 Hogar", unidad: "botellas", maximo: 6, minimo: 6, actual: 0, paso: 1 },
    { id: "aceite", nombre: "Aceite", categoria: "🧴 Hogar", unidad: "garrafas", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "bolsas_basura", nombre: "Bolsas basura", categoria: "🧴 Hogar", unidad: "rollos", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "papel_albal", nombre: "Papel albal", categoria: "🧴 Hogar", unidad: "unidades", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "papel_horno", nombre: "Papel horno", categoria: "🧴 Hogar", unidad: "unidades", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "film_transparente", nombre: "Film transparente", categoria: "🧴 Hogar", unidad: "unidades", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "pastillas_lavaplatos", nombre: "Pastillas Lavaplatos", categoria: "🧴 Hogar", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },

    { id: "sal", nombre: "Sal", categoria: "🧂 Básicos cocina", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "azucar", nombre: "Azúcar", categoria: "🧂 Básicos cocina", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },

    { id: "leche_vaca", nombre: "Leche de vaca", categoria: "🥤 BEBIDAS", unidad: "bricks", maximo: 2, minimo: 2, actual: 0, paso: 1 },
    { id: "leche_avena", nombre: "Leche de avena", categoria: "🥤 BEBIDAS", unidad: "bricks", maximo: 2, minimo: 2, actual: 0, paso: 1 },
    { id: "cafe", nombre: "Café", categoria: "🥤 BEBIDAS", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },

    { id: "macarrones", nombre: "Macarrones", categoria: "🍜 Pasta y básicos", unidad: "gramos", maximo: 2000, minimo: 2000, actual: 0, paso: 100 },
    { id: "espaguetis", nombre: "Espaguetis", categoria: "🍜 Pasta y básicos", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "fideos_sopa", nombre: "Fideos sopa", categoria: "🍜 Pasta y básicos", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "arroz", nombre: "Arroz", categoria: "🍜 Pasta y básicos", unidad: "gramos", maximo: 1000, minimo: 1000, actual: 0, paso: 100 },
    { id: "harina", nombre: "Harina", categoria: "🍜 Pasta y básicos", unidad: "gramos", maximo: 1000, minimo: 1000, actual: 0, paso: 100 },

    { id: "huevos", nombre: "Huevos", categoria: "🥩 Proteína", unidad: "unidades", maximo: 12, minimo: 12, actual: 0, paso: 1 },
    { id: "filetes_pollo", nombre: "Filetes de pollo", categoria: "🥩 Proteína", unidad: "gramos", maximo: 1500, minimo: 1200, actual: 0, paso: 100 },
    { id: "filete_salmon", nombre: "Filete de salmón", categoria: "🥩 Proteína", unidad: "gramos", maximo: 400, minimo: 400, actual: 0, paso: 100 },
    { id: "carne_picada", nombre: "Carne picada", categoria: "🥩 Proteína", unidad: "gramos", maximo: 800, minimo: 800, actual: 0, paso: 100 },
    { id: "latas_atun", nombre: "Latas de atún", categoria: "🥩 Proteína", unidad: "unidades", maximo: 8, minimo: 8, actual: 0, paso: 1 },
    { id: "pavo_embutido", nombre: "Pavo (embutido)", categoria: "🥩 Proteína", unidad: "sobres", maximo: 2, minimo: 2, actual: 0, paso: 1 },

    { id: "yogures", nombre: "Yogures", categoria: "🧀 Lácteos", unidad: "unidades", maximo: 6, minimo: 6, actual: 0, paso: 1 },
    { id: "queso_bloque", nombre: "Queso bloque", categoria: "🧀 Lácteos", unidad: "tacos", maximo: 2, minimo: 2, actual: 0, paso: 1 },
    { id: "parmesano", nombre: "Parmesano", categoria: "🧀 Lácteos", unidad: "sobres", maximo: 2, minimo: 2, actual: 0, paso: 1 },

    { id: "caldo", nombre: "Caldo", categoria: "🥫 Conservas y varios", unidad: "bricks", maximo: 2, minimo: 2, actual: 0, paso: 1 },
    { id: "garbanzos", nombre: "Garbanzos", categoria: "🥫 Conservas y varios", unidad: "tarros", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "lentejas", nombre: "Lentejas", categoria: "🥫 Conservas y varios", unidad: "tarros", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "olivas", nombre: "Olivas", categoria: "🥫 Conservas y varios", unidad: "latas", maximo: 6, minimo: 6, actual: 0, paso: 1 },
    { id: "salsa_tomate", nombre: "Salsa de tomate", categoria: "🥫 Conservas y varios", unidad: "tarros", maximo: 2, minimo: 2, actual: 0, paso: 1 },

    { id: "fajitas", nombre: "Fajitas", categoria: "🌯 Otros", unidad: "sobres", maximo: 1, minimo: 1, actual: 0, paso: 1 },

    { id: "boniatos", nombre: "Boniatos", categoria: "🥔 Verdura", unidad: "unidades", maximo: 4, minimo: 4, actual: 0, paso: 1 },
    { id: "patatas", nombre: "Patatas", categoria: "🥔 Verdura", unidad: "unidades", maximo: 6, minimo: 6, actual: 0, paso: 1 },
    { id: "cebollas", nombre: "Cebollas", categoria: "🥔 Verdura", unidad: "unidades", maximo: 4, minimo: 4, actual: 0, paso: 1 },
    { id: "berenjenas", nombre: "Berenjenas", categoria: "🥔 Verdura", unidad: "unidades", maximo: 2, minimo: 2, actual: 0, paso: 1 },
    { id: "pimientos", nombre: "Pimientos", categoria: "🥔 Verdura", unidad: "unidades", maximo: 2, minimo: 2, actual: 0, paso: 1 },
    { id: "pepinos", nombre: "Pepinos", categoria: "🥔 Verdura", unidad: "unidades", maximo: 2, minimo: 2, actual: 0, paso: 1 },
    { id: "tomates_cherry", nombre: "Tomates cherry", categoria: "🥔 Verdura", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "brotes_espinacas", nombre: "Brotes de espinacas", categoria: "🥔 Verdura", unidad: "sobres", maximo: 2, minimo: 2, actual: 0, paso: 1 },

    { id: "cereales", nombre: "Cereales", categoria: "🥑 Extras / desayuno / varios", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "special_k", nombre: "Special K", categoria: "🥑 Extras / desayuno / varios", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "pan_barra", nombre: "Pan barra", categoria: "🥑 Extras / desayuno / varios", unidad: "unidades", maximo: 2, minimo: 2, actual: 0, paso: 1 },
    { id: "panecillos_trigo", nombre: "Panecillos de trigo", categoria: "🥑 Extras / desayuno / varios", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "panecillos_centeno", nombre: "Panecillos de centeno", categoria: "🥑 Extras / desayuno / varios", unidad: "paquetes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "aguacates", nombre: "Aguacates", categoria: "🥑 Extras / desayuno / varios", unidad: "unidades", maximo: 4, minimo: 4, actual: 0, paso: 1 },
    { id: "fuet", nombre: "Fuet", categoria: "🥑 Extras / desayuno / varios", unidad: "unidades", maximo: 2, minimo: 2, actual: 0, paso: 1 },
    { id: "ligeresa", nombre: "Ligeresa", categoria: "🥑 Extras / desayuno / varios", unidad: "botes", maximo: 1, minimo: 1, actual: 0, paso: 1 },

    { id: "chocolate_milka", nombre: "Chocolate Milka", categoria: "🍫 Dulces", unidad: "tabletas", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "nutella", nombre: "Nutella", categoria: "🍫 Dulces", unidad: "tarros", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "colacao", nombre: "ColaCao", categoria: "🍫 Dulces", unidad: "botes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "miel", nombre: "Miel", categoria: "🍫 Dulces", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },

    { id: "mandarinas", nombre: "Mandarinas", categoria: "🍎 FRUTA", unidad: "unidades", maximo: 6, minimo: 6, actual: 0, paso: 1 },
    { id: "platanos", nombre: "Plátanos", categoria: "🍎 FRUTA", unidad: "unidades", maximo: 4, minimo: 4, actual: 0, paso: 1 },
    { id: "kiwi", nombre: "Kiwi", categoria: "🍎 FRUTA", unidad: "unidades", maximo: 4, minimo: 4, actual: 0, paso: 1 },

    { id: "pimenton_dulce", nombre: "Pimentón dulce", categoria: "🌿 ESPECIAS", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "pimenton_picante", nombre: "Pimentón picante", categoria: "🌿 ESPECIAS", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "ajo_polvo", nombre: "Ajo en polvo", categoria: "🌿 ESPECIAS", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "cebolla_polvo", nombre: "Cebolla en polvo", categoria: "🌿 ESPECIAS", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "hierbas_provenzales", nombre: "Hierbas provenzales", categoria: "🌿 ESPECIAS", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "oregano", nombre: "Orégano", categoria: "🌿 ESPECIAS", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "perejil", nombre: "Perejil", categoria: "🌿 ESPECIAS", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "albahaca", nombre: "Albahaca", categoria: "🌿 ESPECIAS", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "pimienta", nombre: "Pimienta", categoria: "🌿 ESPECIAS", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "sazonador_pollo", nombre: "Sazonador pollo", categoria: "🌿 ESPECIAS", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 },
    { id: "sazonador_bistec", nombre: "Sazonador bistec", categoria: "🌿 ESPECIAS", unidad: "potes", maximo: 1, minimo: 1, actual: 0, paso: 1 }
  ];
}

let productos = JSON.parse(localStorage.getItem(PRODUCTOS_KEY)) || crearProductosBase();
let estadoCategorias = JSON.parse(localStorage.getItem(ESTADO_CATEGORIAS_KEY)) || {};

function guardarProductos() {
  localStorage.setItem(PRODUCTOS_KEY, JSON.stringify(productos));
}

function guardarEstadoCategorias() {
  localStorage.setItem(ESTADO_CATEGORIAS_KEY, JSON.stringify(estadoCategorias));
}

function poblarSelectCategorias() {
  selectNuevaCategoria.innerHTML = "";
  CATEGORIAS.forEach((categoria) => {
    const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    selectNuevaCategoria.appendChild(option);
  });
}

function agruparPorCategoria(lista) {
  const grupos = {};

  CATEGORIAS.forEach((categoria) => {
    grupos[categoria] = [];
  });

  lista.forEach((producto) => {
    const categoria = producto.categoria || "🚰 ESENCIALES";
    if (!grupos[categoria]) {
      grupos[categoria] = [];
    }
    grupos[categoria].push(producto);
  });

  return grupos;
}

function nombreCortoUnidad(unidad) {
  if (unidad === "gramos") return "g";
  if (unidad === "unidades") return "uds";
  if (unidad === "paquetes") return "paq";
  if (unidad === "rollos") return "rollos";
  if (unidad === "sobres") return "sobres";
  if (unidad === "bricks") return "bricks";
  if (unidad === "tarros") return "tarros";
  if (unidad === "latas") return "latas";
  if (unidad === "botes") return "botes";
  if (unidad === "potes") return "potes";
  if (unidad === "garrafas") return "garrafas";
  if (unidad === "tabletas") return "tab";
  if (unidad === "tacos") return "tacos";
  if (unidad === "botellas") return "botellas";
  return unidad;
}

function toggleCategoria(categoria) {
  estadoCategorias[categoria] = !estadoCategorias[categoria];
  guardarEstadoCategorias();
  renderProductos();
}

window.toggleCategoria = toggleCategoria;

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

window.cambiarCantidad = cambiarCantidad;

function eliminarProducto(id) {
  productos = productos.filter((producto) => producto.id !== id);
  guardarProductos();
  renderProductos();
  renderEditorProductos();
  resultado.innerHTML = "<p>Producto eliminado.</p>";
}

window.eliminarProducto = eliminarProducto;

function renderProductos() {
  const grupos = agruparPorCategoria(productos);
  listaProductos.innerHTML = "";

  CATEGORIAS.forEach((categoria) => {
    const items = grupos[categoria] || [];
    if (items.length === 0) return;

    const abierta = estadoCategorias[categoria] === true;

    let productosHTML = "";
    items.forEach((producto) => {
      productosHTML += `
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

    listaProductos.innerHTML += `
      <div class="category-block">
        <button class="category-toggle" onclick="toggleCategoria('${categoria.replace(/'/g, "\\'")}')">
          <span>${categoria}</span>
          <span>${abierta ? "−" : "+"}</span>
        </button>
        <div class="category-products ${abierta ? "" : "oculto"}">
          ${productosHTML}
        </div>
      </div>
    `;
  });

  productos.forEach((producto) => {
    const input = document.getElementById(producto.id);
    if (!input) return;

    input.addEventListener("input", () => {
      producto.actual = Number(input.value);
      if (producto.actual < 0) producto.actual = 0;
      guardarProductos();
    });
  });
}

function renderEditorProductos() {
  const grupos = agruparPorCategoria(productos);
  listaProductosEditor.innerHTML = "";

  CATEGORIAS.forEach((categoria) => {
    const items = grupos[categoria] || [];
    if (items.length === 0) return;

    let htmlItems = `<div class="editor-category-title">${categoria}</div>`;

    items.forEach((producto) => {
      htmlItems += `
        <div class="editor-item">
          <div class="editor-item-info">
            <strong>${producto.nombre}</strong>
            <span>Máximo: ${producto.maximo} ${producto.unidad}</span>
          </div>
          <button class="delete-btn" onclick="eliminarProducto('${producto.id}')">Eliminar</button>
        </div>
      `;
    });

    listaProductosEditor.innerHTML += htmlItems;
  });
}

function generarListaCompraHTML() {
  const grupos = agruparPorCategoria(productos);
  let html = "";
  let hayAlgo = false;

  CATEGORIAS.forEach((categoria) => {
    const items = grupos[categoria] || [];
    let bloque = "";

    items.forEach((producto) => {
      const umbral = producto.minimo ?? producto.maximo;
      const falta = producto.maximo - producto.actual;

      if (producto.actual < umbral && falta > 0) {
        bloque += `<p class="item-compra">${producto.nombre} · ${falta} ${nombreCortoUnidad(producto.unidad)}</p>`;
        hayAlgo = true;
      }
    });

    if (bloque) {
      html += `<div class="category-title-result">${categoria}</div>${bloque}`;
    }
  });

  if (!hayAlgo) {
    return "<p>No hace falta comprar nada.</p>";
  }

  return html;
}

function generarListaCompraTexto() {
  const grupos = agruparPorCategoria(productos);
  let texto = "";
  let hayAlgo = false;

  CATEGORIAS.forEach((categoria) => {
    const items = grupos[categoria] || [];
    let bloque = "";

    items.forEach((producto) => {
      const umbral = producto.minimo ?? producto.maximo;
      const falta = producto.maximo - producto.actual;

      if (producto.actual < umbral && falta > 0) {
        bloque += `${producto.nombre} · ${falta} ${nombreCortoUnidad(producto.unidad)}\n`;
        hayAlgo = true;
      }
    });

    if (bloque) {
      texto += `${categoria}\n${bloque}\n`;
    }
  });

  if (!hayAlgo) {
    return "No hace falta comprar nada.";
  }

  return texto.trim();
}

botonToggleEditor.addEventListener("click", () => {
  editorCesta.classList.toggle("oculto");
});

botonCalcular.addEventListener("click", () => {
  resultado.innerHTML = generarListaCompraHTML();
});

botonCopiarLista.addEventListener("click", async () => {
  const texto = generarListaCompraTexto();

  try {
    await navigator.clipboard.writeText(texto);
    resultado.innerHTML += `<p><em>Lista copiada.</em></p>`;
  } catch (error) {
    resultado.innerHTML += `<p><em>No se pudo copiar.</em></p>`;
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
  const categoria = selectNuevaCategoria.value;
  const unidad = selectNuevaUnidad.value;
  const maximo = Number(inputNuevoMaximo.value);

  if (!nombre || !categoria || maximo <= 0) {
    return;
  }

  const id = "producto_" + Date.now();
  const paso = unidad === "gramos" ? 100 : 1;

  productos.push({
    id,
    nombre,
    categoria,
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

poblarSelectCategorias();
renderProductos();
renderEditorProductos();
