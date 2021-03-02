// Legendas dos locais
const legendasLocais = {
  saude: { descricao: "Saúde", exibir: true },
  educacao: { descricao: "Educação", exibir: true },
  restaurantes: { descricao: "Restaurantes", exibir: true },
};

// Lista de localizações
const locais = {
  saude: [
    [-22.836912, -42.226628],
    [-22.836724, -42.225652],
    [-22.837337, -42.226497],
  ],
  educacao: [
    [-22.836685, -42.227937],
    [-22.837859, -42.22778],
  ],
  restaurantes: [
    [-22.837918, -42.228999],
    [-22.837632, -42.225353],
    [-22.836529, -42.228999],
  ],
};

// Esconde localizações que o Maps coloca por padrão
const hiddenFeatures = [
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
];

const markers = [];

// Inicializa o mapa
function initMap() {
  const posicaoProduto = { lat: -22.837153, lng: -42.227542 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: posicaoProduto,
    mapTypeControl: false,
    styles: hiddenFeatures,
  });

  criarMarcador(map, posicaoProduto, "Produto Vinx", "vinx", "lg");

  criarMarcadores(map);
  inicializarFiltros(map);
}

// Criar os marcadores para a lista de locais
function criarMarcadores(map) {
  for (localKey in locais) {
    const posicao = locais[localKey];
    const title = legendasLocais[localKey].descricao;

    posicao.forEach((pos) => {
      const [lat, lng] = pos;
      criarMarcador(map, { lat, lng }, title, localKey);
    });
  }
}

// Criar um marcador no mapa
function criarMarcador(map, position, title, category, size = "md") {
  const sizes = {
    md: new google.maps.Size(30, 30),
    lg: new google.maps.Size(60, 60),
  };
  var icon = {
    url: `http://localhost:5500/images/${category}.svg`,
    scaledSize: sizes[size],
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0),
  };

  const marker = new google.maps.Marker({
    position,
    map,
    title,
    icon,
  });
  markers.push({ category, marker });
}

// Inicializa os inputs dos filtros
function inicializarFiltros(map) {
  document.querySelectorAll("input[type=checkbox]").forEach((input) =>
    input.addEventListener("click", (event) => {
      const { category } = event.target.dataset;
      const { checked } = event.target;

      legendasLocais[category].exibir = checked;

      markers
        .filter((marker) => marker.category === category)
        .forEach(({ marker }) => marker.setMap(checked ? map : null));
    })
  );
}
