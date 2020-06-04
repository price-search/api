import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Product } from '../../products/product.entity';

export default class CreateProducts implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values([
        {
          name: 'Nescau',
          imageUrl:
            'https://http2.mlstatic.com/banco-de-imagens-de-produtos-para-supermercado-D_NQ_NP_612331-MLB31860257234_082019-F.jpg',
        },
        {
          name: 'Omo',
          imageUrl:
            'https://conteudo.imguol.com.br/c/noticias/2013/10/11/omo---sabao-em-po-1381506254111_300x200.jpg',
        },
        {
          name: 'Hellmanns',
          imageUrl:
            'https://pngimage.net/wp-content/uploads/2018/06/produtos-de-supermercado-png-5.png',
        },
        {
          name: 'Qualy',
          imageUrl:
            'https://http2.mlstatic.com/banco-de-imagens-de-produtos-para-supermercado-17500-itens-D_NQ_NP_265615-MLB25288619255_012017-F.jpg',
        },
        {
          name: 'Bombril',
          imageUrl:
            'https://conteudo.imguol.com.br/c/noticias/2013/10/11/bombril---esponja-de-aco-1381506271857_615x470.jpg',
        },
        {
          name: 'Garoto',
          imageUrl:
            'https://lh3.googleusercontent.com/proxy/Ecj4kV9UJI2H-s6OoT6-4P2MraYH_Y-4Cdm3BkKrGDnnOrf2kKn61o15YH3nwcWyRo2_C6YUZRj7NuVwm-PhLp2BFe8AxxXgDvF8VrDG1t-6DfPaMqOwo-vm3Gp2ICCh',
        },
        {
          name: 'Waffer Chocolate',
          imageUrl:
            'https://conteudo.imguol.com.br/c/noticias/2013/10/11/bauducco---biscoito-wafer-1381506274064_615x470.jpg',
        },
        {
          name: 'KiBom Carioca',
          imageUrl:
            'https://conteudo.imguol.com.br/c/noticias/2013/10/11/kibon---sorvete-1381506265717_615x470.jpg',
        },
        {
          name: 'Tial Light',
          imageUrl:
            'https://lh3.googleusercontent.com/proxy/bcNgTQ3qDqXxjuN0gtC5Poz7-TtZNHxn2uX7ymg19gW4yxGUfQ4grTRmTVZA7ukHltHVHnXxhrpkuOvGC9CvyfvFleU1pUAhShgaQiR4kXg227UAqB58RnmEhQmviBQF',
        },
        {
          name: 'Ades maça',
          imageUrl:
            'https://statig2.akamaized.net/bancodeimagens/9w/h7/2w/9wh72wst5eco0zxyf7un9ijdz.jpg',
        },
        {
          name: 'Veja',
          imageUrl:
            'https://dicasupermercado.com/wp-content/uploads/2019/05/desinfetantes-produtos-de-limpeza-300x300.png',
        },
        {
          name: 'Amaciante Klip',
          imageUrl:
            'https://supermercadocalifornia.com.br/wp-content/uploads/2018/10/AMACIANTE-KLIP-2L.jpg',
        },
        {
          name: 'Amaciante Ypê',
          imageUrl:
            'https://dicasupermercado.com/wp-content/uploads/2019/05/amaciantes-produtos-de-limpeza-300x179.png',
        },
        {
          name: 'Arroz Prato Fino',
          imageUrl:
            'https://statics.angeloni.com.br/super/files/produtos/1308304/1308304_1_zoom.jpg',
        },
        {
          name: 'Feijão Karaja',
          imageUrl:
            'https://static.pedidor.com/feijao-carioca-karaja-1kg-imgp-b1-4f8313455c04ff7905000018-4f89937a5c04ff0841000055-a021da60179618ee5280db9011561ba4.jpeg',
        },
        {
          name: 'Torrada Integral',
          imageUrl:
            'https://womenshealthbrasil-static-cdn.akamaized.net/wp-content/uploads/sites/6/2019/06/9-cafe-696x445.jpg',
        },
        {
          name: 'Bolacha Dalas',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGm9JLZ7Z6JFoBBTvf8AbanyT0FTd49EVdE6Sn1P9p7ljuoUcK&usqp=CAU',
        },
        {
          name: 'Pururuca Bacon',
          imageUrl:
            'https://i.pinimg.com/originals/2e/a6/7e/2ea67ec70e97a800352c4d5eef8d2a8f.png',
        },
        {
          name: 'Doritos',
          imageUrl:
            'https://i.pinimg.com/736x/7e/04/94/7e04947d5fd7d9d9623886614bef8f6c.jpg',
        },
        {
          name: 'Açai Acerola',
          imageUrl:
            'https://i.pinimg.com/originals/c5/d3/25/c5d325c31e5b7e52ca8630e73bdc53f0.png',
        },
        {
          name: 'Bolacha Maria Integral',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4KEgzGnFMUsq0AU1M2OidceR9knYm5LijukvJc92vVOyBcOoo&usqp=CAU',
        },
        {
          name: 'Mopenhagem',
          imageUrl: 'https://www.packfair.com.br/imagem/noticia52.jpg',
        },
        {
          name: 'Sabão em pó',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVLnzOhEbMsSdNAy3bbqEO9d8BE8N3iaesSW0W2P_w19pBWPdR&usqp=CAU',
        },
        {
          name: 'Tucs Tucs',
          imageUrl:
            'https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/wrexbs2oYc4gbNJ3K-biscoito-tucs.jpg',
        },
        {
          name: 'Lasanha Quatro Queijos',
          imageUrl:
            'https://www.supermercadorazia.com.br/storage/fotos_produtos/26084/a8120d5e4792648e832715b989252991.jpg',
        },
        {
          name: 'Nesfit',
          imageUrl:
            'https://i.pinimg.com/originals/a1/ac/a5/a1aca53e9d3119e7e0eac690b4664bc2.jpg',
        },
        {
          name: 'Nescal Cereal',
          imageUrl:
            'https://treichel-img.azureedge.net/product/76414-cereal-matinal-nestle-nescau-400g-g.jpg',
        },
        {
          name: 'Activia',
          imageUrl:
            'https://www.mundodomarketing.com.br/images/materias/funcionais_activia.jpg',
        },
      ])
      .execute();
  }
}
