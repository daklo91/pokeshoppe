function findColor(type) {
  let color = "";
  switch (type) {
    case "normal":
      color = "#a9a878";
      break;
    case "fire":
      color = "#f07f2f";
      break;
    case "water":
      color = "#6890f0";
      break;
    case "grass":
      color = "#78c84f";
      break;
    case "electric":
      color = "#f8d030";
      break;
    case "poison":
      color = "#a54aa6";
      break;
    case "ice":
      color = "#98d8d8";
      break;
    case "fighting":
      color = "#c03028";
      break;
    case "ground":
      color = "#e0c069";
      break;
    case "flying":
      color = "#a890f0";
      break;
    case "rock":
      color = "#b7a038";
      break;
    case "psychic":
      color = " #f85888";
      break;
    case "ghost":
      color = "#705798";
      break;
    case "bug":
      color = "#a8b821";
      break;
    case "dragon":
      color = "#7038f9";
      break;
    default:
      color = "gray";
  }
  return color;
}

export default findColor;
