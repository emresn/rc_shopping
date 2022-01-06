import { productRequestEnums } from '@/enums/productRequestEnums';
import { RequestOptions } from '@/model/RequestOptions';

export function generateRequestOptions(href: string) {
  const options: RequestOptions = {
    sort: productRequestEnums.created,
    direction: productRequestEnums.desc,
  };
  const hrefs = href.split('/');

  for (let index = 0; index < hrefs.length; index++) {
    switch (hrefs[index].split('&')[0]) {
      case productRequestEnums.sort:
        options.sort = hrefs[index].split('&')[1];
        break;
      case productRequestEnums.direction:
        options.direction = hrefs[index].split('&')[1];
        break;
      case productRequestEnums.limit:
        options.limit = hrefs[index].split('&')[1];
        break;
      case productRequestEnums.category:
        options.category = hrefs[index].split('&')[1];
        break;
      case productRequestEnums.offset:
        options.offset = hrefs[index].split('&')[1];
        break;
      default:
        break;
    }
  }
  // console.log(options);

  return options;
}
