const dayToMonth = (day: number) => {
  let nameMonth: string;

  switch (day) {
    case 1:
      nameMonth = 'Janeiro';
      break;
    case 2:
      nameMonth = 'Fevereiro';
      break;
    case 3:
      nameMonth = 'Março';
      break;
    case 4:
      nameMonth = 'Abril';
      break;
    case 5:
      nameMonth = 'Maio';
      break;
    case 6:
      nameMonth = 'Junho';
      break;
    case 7:
      nameMonth = 'Julho';
      break;
    case 8:
      nameMonth = 'Agosto';
      break;
    case 9:
      nameMonth = 'Setembro';
      break;
    case 10:
      nameMonth = 'Outubro';
      break;
    case 11:
      nameMonth = 'Novembro';
      break;
    case 12:
      nameMonth = 'Dezembro';
      break;
    default:
      break;
  }

  return nameMonth;
};

export { dayToMonth };
