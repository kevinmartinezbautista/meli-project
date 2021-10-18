const axios = require('axios');

const services = {}
const basePath = 'http://api.mercadolibre.com'
services.getItemsByQuery =  async ( query ) => {
    const response =  await axios.get(basePath + '/sites/MLA/search', { 
        'headers': {
            'Accept': 'application/json'
        },
        'params' : {
            q: query,
            paging:4
        }
    });
    let { data } = response;
  
    const resultado = data.results;

    const items = resultado.map((item) => {
        return  {
            id: item.id,
            title: item.title,
            price: {
                currency: item.prices.prices[0].currency_id,
                amount: item.prices.prices[0].amount,
                decimals: 0,
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
     
        }
    });

    const categories = resultado.map((itm) => {
        return itm.category_id;
    })
    const respData = {
        "autor" : {
            "name" : "Kevin",
            "lastname": "Martinez"
        },
        "categories": categories,
        "items": items

    }
    return respData;
}

services.getItemsById = async (id) => {
    const responseId =  await axios.get(basePath + '/items/'+id, { 
        'headers': {
            'Accept': 'application/json'
        }
    });
    const dataItem = responseId.data;
    
    const responseDesc =  await axios.get(basePath + '/items/'+ id +'/description', { 
        'headers': {
            'Accept': 'application/json'
        }
    });

    const dataDesc = responseDesc.data;
    const data = {
        "autor" : {
            "name" : "Kevin",
            "lastname": "Martinez"
        },
        "item": {
            id: dataItem.id,
            title: dataItem.title,
            price: {
                currency: dataItem.currency_id,
                amount: dataItem.price,
                decimals: 0,
            },
            picture: dataItem.pictures[0].url,
            condition: dataItem.condition,
            free_shipping: dataItem.shipping.free_shipping,
            sold_quantity: dataItem.sold_quantity,
            description: dataDesc.plain_text
        }

    }
    return data;
}


module.exports = services;