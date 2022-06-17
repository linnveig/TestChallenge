const assert = require('assert');
const supertest = require('supertest');

//servicio 1, generación de token
const url = ('https://api.rebill.dev/v2');
const request = supertest(url);
const loginEndpoint = "auth/login/tatianaialtanskaiachallenge";
const responseErrorToken = {
     "statusCode": 404,
     "message": "Not found",
     "timestamp": "Mon, 01 Mar 2022 12:00:00 GMT",
     "path": "/the/path"
   }

//servicio 2, creación de producto
const productCreationEndpoint = "item";
var bodyProductCreation = {
    "prices": [
         {
              "amount": "200",
              "type": "fixed",
              "tiers": [
                   {
                        "amount": "500000",
                        "upTo": 0
                   },
                   {
                        "amount": "490000",
                        "upTo": 1000
                   },
                   {
                        "amount": "480000",
                        "upTo": 2000
                   }
              ],
              "frequency": {
                   "type": "days",
                   "quantity": 6
              },
              "freeTrial": {
                   "type": "days",
                   "quantity": 6
              },
              "repetitions": 2,
              "currency": "USD",
              "gatewayId": "abcdefgh-i1j2-3k4l-5m67-n8op9q012r34",
              "description": "description",
              "enabled": true
         }
    ],
    "name": "My custom item",
    "description": "Some description"
}

//servicio 3, creación de precio
const itemId = "abcdefgh-i1j2-3k4l-5m67-n8op9q012r34";
const priceCreationEndpoint = "item/{itemId}/price"
var bodyPriceCreation = {
    "amount": "200",
    "type": "fixed",
    "tiers": [
         {
              "amount": "500000",
              "upTo": 0
         },
         {
              "amount": "490000",
              "upTo": 1000
         },
         {
              "amount": "480000",
              "upTo": 2000
         }
    ],
    "frequency": {
         "type": "days",
         "quantity": 6
    },
    "freeTrial": {
         "type": "days",
         "quantity": 6
    },
    "repetitions": 2,
    "currency": "USD",
    "gatewayId": "abcdefgh-i1j2-3k4l-5m67-n8op9q012r34",
    "description": "description",
    "enabled": true
}

//servicio 4, configuración de precio
const priceID = "abcdefgh-i1j2-3k4l-5m67-n8op9q012r34";
const priceConfigurationEndpoint = "item/price/{priceId}/settings";
const priceConfigurationBody = {
    "documentRequired": true,
    "phoneRequired": true,
    "billingAddressRequired": true,
    "showImage": true,
    "coupons": [
         "freeTrial"
    ],
    "redirectUrl": "https://rebill.to/"
}
const param = {
    Headers: priceID
}

//servicio 5, checkout
const organizationId = "1";
const checkoutEndpoint = "checkout";
const checkoutBody = {
    "customer": {
         "id": "abcdefgh-i1j2-3k4l-5m67-n8op9q012r34",
         "firstName": "John",
         "lastName": "Doe",
         "email": "john.doe@gmail.com\"",
         "phone": {
              "countryCode": "54",
              "areaCode": "11",
              "phoneNumber": "12348765"
         },
         "personalId": {
              "type": "DNI",
              "value": "123456789"
         },
         "taxId": {
              "type": "CUIL",
              "value": "23-123456789-9"
         },
         "address": {
              "street": "Riverside St.",
              "city": "New York City",
              "state": "FL",
              "country": "USA",
              "zipCode": "90210",
              "number": "102",
              "floor": "2",
              "apt": "B",
              "description": "Home / Office"
         },
         "card": {
              "id": "abcdefgh-i1j2-3k4l-5m67-n8op9q012r34",
              "cardNumber": "5031755734530600",
              "cardHolder": {
                   "name": "John Doe",
                   "identification": {
                        "type": "DNI",
                        "value": "123456789"
                   }
              },
              "securityCode": "123",
              "expiration": {
                   "month": 11,
                   "year": "2022"
              },
              "deviceId": "armor.xxxx"
         }
    },
    "prices": [
         {
              "id": "abcdefgh-i1j2-3k4l-5m67-n8op9q012r34",
              "quantity": 2
         },
         {
              "id": "zxcvbnmq-i1j2-3k4l-5m67-n8op9q012r34",
              "quantity": 1
         }
    ],
    "orderId": "abcdefgh-i1j2-3k4l-5m67-n8op9q012r34"
}
const paramCheckout = {
    Headers: organizationId
}
const responseError = {
     "statusCode": 404,
     "message": "Not found",
     "timestamp": "Mon, 01 Mar 2022 12:00:00 GMT",
     "path": "/the/path"
   }
const isEqual = "";

//tests
describe('Challenge suite', () => {
    describe('POST /tatianaialtanskaiachallenge', () => {
        it('Successful login', async () => {

            const response = await
            
            request.post('{loginEndpoint}/${tatianaialtanskaiachallenge}')
             .send({email: 'tatianaialtanskaia@rebill.to', password: 'Password123!'});

        });

        it('Product creation', async () => {

            const response = await

            request.post('{productCreationEndpoint}/${item}')
            .send(bodyProductCreation);
        });

        it('Price creation', async () => {

            const response = await

            request.post('{priceCreationEndpoint}/${item/{itemId}/price}')
            .send(bodyPriceCreation);
        })

        it('Price configuration', async () => {

            const response = await

            request.post('{priceConfigurationEndpoint}/${item/price/{priceId}/settings}')
            .send(priceConfigurationBody, param);
        })

        it('Checkout', async () => {

            const response = await

            request.post('{checkoutEndpoint}/${checkout}')
            .send(checkoutBody, paramCheckout);
            
        })
        
    })

    describe('POST /tatianaialtanskaiachallenge', () => {

     it('Checkout err 400 without body', async () => {

          const response = await

          request.post('{checkoutEndpoint}/${checkout}')
          .send(paramCheckout);

          try{
               assert.equal(isEqual(responseError, true));
          }
          catch (err){
               console.error('fail');
          }
     
      })
    
    })

    it('Checkout err 400 without param', async () => {

     const response = await

     request.post('{checkoutEndpoint}/${checkout}')
     .send(checkoutBody);

     try{
          assert.equal(isEqual(responseError, true));
     }
     catch (err){
          console.error('fail');
     }
     
     })
    
     it('Token err 400 without body', async () => {

          const response = await

          request.post('{loginEndpoint}/${tatianaialtanskaiachallenge}')
          .send({email: 'tatianaialtanskaia@rebill.to', password: 'Password123!'});

          try{
               assert.equal(isEqual(responseErrorToken, true));
          }
          catch (err){
               console.error('fail');
          }
     
      })
    
    })
    
