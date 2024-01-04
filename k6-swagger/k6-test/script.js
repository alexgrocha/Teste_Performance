/*
 * EBAC Demo Store
 * Autenticação JWT.
 * OpenAPI spec version: 4kuvflfu
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://github.com/OpenAPITools/openapi-generator
 * OpenAPI generator version: 7.0.0-SNAPSHOT
 */

import http from "k6/http";
import { group, check, sleep } from "k6";

const BASE_URL = "/";
// Sleep duration between successive requests.
// You might want to edit the value of this variable or remove calls to the sleep function on the script.
const SLEEP_DURATION = 0.1;
// Global variables should be initialized.

export default function() {
    group("/api/addresses", () => {
        let take = 'TODO_EDIT_THE_TAKE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let orderBy = 'TODO_EDIT_THE_ORDERBY'; // specify value as there is no example value for this parameter in OpenAPI spec
        let where = 'TODO_EDIT_THE_WHERE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let skip = 'TODO_EDIT_THE_SKIP'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: AddressController_findMany
        {
            let url = BASE_URL + `/api/addresses?where=${where}&orderBy=${orderBy}&skip=${skip}&take=${take}`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: AddressController_create
        {
            let url = BASE_URL + `/api/addresses`;
            // TODO: edit the parameters of the request body.
            let body = {"address1": "string", "address2": "string", "city": "string", "state": "string", "zip": "bigdecimal"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "": (r) => r.status === 201
            });
        }
    });

    group("/api/customers/{id}/orders", () => {
        let product = 'TODO_EDIT_THE_PRODUCT'; // specify value as there is no example value for this parameter in OpenAPI spec
        let quantity = 'TODO_EDIT_THE_QUANTITY'; // specify value as there is no example value for this parameter in OpenAPI spec
        let totalPrice = 'TODO_EDIT_THE_TOTALPRICE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let discount = 'TODO_EDIT_THE_DISCOUNT'; // specify value as there is no example value for this parameter in OpenAPI spec
        let id = 'TODO_EDIT_THE_ID'; // specify value as there is no example value for this parameter in OpenAPI spec
        let customer = 'TODO_EDIT_THE_CUSTOMER'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: CustomerController_findManyOrders
        {
            let url = BASE_URL + `/api/customers/${id}/orders?customer=${customer}&discount=${discount}&id=${id}&product=${product}&quantity=${quantity}&totalPrice=${totalPrice}`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: CustomerController_updateOrders
        {
            let url = BASE_URL + `/api/customers/${id}/orders`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.patch(url, params);

            check(request, {
                "": (r) => r.status === 200
            });
        }
    });

    group("/api/users/{id}", () => {
        let id = 'TODO_EDIT_THE_ID'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: UserController_findOne
        {
            let url = BASE_URL + `/api/users/${id}`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: UserController_update
        {
            let url = BASE_URL + `/api/users/${id}`;
            // TODO: edit the parameters of the request body.
            let body = {"firstName": "string", "lastName": "string", "password": "string", "roles": "list", "username": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.patch(url, JSON.stringify(body), params);

            check(request, {
                "": (r) => r.status === 200
            });
        }
    });

    group("/api/orders", () => {
        let take = 'TODO_EDIT_THE_TAKE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let orderBy = 'TODO_EDIT_THE_ORDERBY'; // specify value as there is no example value for this parameter in OpenAPI spec
        let where = 'TODO_EDIT_THE_WHERE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let skip = 'TODO_EDIT_THE_SKIP'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: OrderController_findMany
        {
            let url = BASE_URL + `/api/orders?where=${where}&orderBy=${orderBy}&skip=${skip}&take=${take}`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: OrderController_create
        {
            let url = BASE_URL + `/api/orders`;
            // TODO: edit the parameters of the request body.
            let body = {"customer": {"id": "string"}, "discount": "bigdecimal", "product": {"id": "string"}, "quantity": "bigdecimal", "totalPrice": "bigdecimal"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "": (r) => r.status === 201
            });
        }
    });

    group("/api/addresses/{id}", () => {
        let id = 'TODO_EDIT_THE_ID'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: AddressController_findOne
        {
            let url = BASE_URL + `/api/addresses/${id}`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: AddressController_update
        {
            let url = BASE_URL + `/api/addresses/${id}`;
            // TODO: edit the parameters of the request body.
            let body = {"address1": "string", "address2": "string", "city": "string", "state": "string", "zip": "bigdecimal"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.patch(url, JSON.stringify(body), params);

            check(request, {
                "": (r) => r.status === 200
            });
        }
    });

    group("/api/_health/live", () => {

        // Request No. 1: HealthController_healthLive
        {
            let url = BASE_URL + `/api/_health/live`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });
        }
    });

    group("/api/addresses/{id}/customers", () => {
        let firstName = 'TODO_EDIT_THE_FIRSTNAME'; // specify value as there is no example value for this parameter in OpenAPI spec
        let lastName = 'TODO_EDIT_THE_LASTNAME'; // specify value as there is no example value for this parameter in OpenAPI spec
        let address = 'TODO_EDIT_THE_ADDRESS'; // specify value as there is no example value for this parameter in OpenAPI spec
        let phone = 'TODO_EDIT_THE_PHONE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let id = 'TODO_EDIT_THE_ID'; // specify value as there is no example value for this parameter in OpenAPI spec
        let email = 'TODO_EDIT_THE_EMAIL'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: AddressController_findManyCustomers
        {
            let url = BASE_URL + `/api/addresses/${id}/customers?address=${address}&email=${email}&firstName=${firstName}&id=${id}&lastName=${lastName}&phone=${phone}`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: AddressController_updateCustomers
        {
            let url = BASE_URL + `/api/addresses/${id}/customers`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.patch(url, params);

            check(request, {
                "": (r) => r.status === 200
            });
        }
    });

    group("/api/products", () => {
        let take = 'TODO_EDIT_THE_TAKE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let orderBy = 'TODO_EDIT_THE_ORDERBY'; // specify value as there is no example value for this parameter in OpenAPI spec
        let where = 'TODO_EDIT_THE_WHERE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let skip = 'TODO_EDIT_THE_SKIP'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: ProductController_findMany
        {
            let url = BASE_URL + `/api/products?where=${where}&orderBy=${orderBy}&skip=${skip}&take=${take}`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: ProductController_create
        {
            let url = BASE_URL + `/api/products`;
            // TODO: edit the parameters of the request body.
            let body = {"description": "string", "itemPrice": "bigdecimal", "name": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "": (r) => r.status === 201
            });
        }
    });

    group("/api/login", () => {

        // Request No. 1: AuthController_login
        {
            let url = BASE_URL + `/api/login`;
            // TODO: edit the parameters of the request body.
            let body = {"username": "string", "password": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "": (r) => r.status === 201
            });
        }
    });

    group("/api/users", () => {
        let take = 'TODO_EDIT_THE_TAKE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let orderBy = 'TODO_EDIT_THE_ORDERBY'; // specify value as there is no example value for this parameter in OpenAPI spec
        let where = 'TODO_EDIT_THE_WHERE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let skip = 'TODO_EDIT_THE_SKIP'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: UserController_findMany
        {
            let url = BASE_URL + `/api/users?where=${where}&orderBy=${orderBy}&skip=${skip}&take=${take}`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: UserController_create
        {
            let url = BASE_URL + `/api/users`;
            // TODO: edit the parameters of the request body.
            let body = {"firstName": "string", "lastName": "string", "password": "string", "roles": "list", "username": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "": (r) => r.status === 201
            });
        }
    });

    group("/api/customers/{id}", () => {
        let id = 'TODO_EDIT_THE_ID'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: CustomerController_findOne
        {
            let url = BASE_URL + `/api/customers/${id}`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: CustomerController_update
        {
            let url = BASE_URL + `/api/customers/${id}`;
            // TODO: edit the parameters of the request body.
            let body = {"address": {"id": "string"}, "email": "string", "firstName": "string", "lastName": "string", "phone": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.patch(url, JSON.stringify(body), params);

            check(request, {
                "": (r) => r.status === 200
            });
        }
    });

    group("/api/_health/ready", () => {

        // Request No. 1: HealthController_healthReady
        {
            let url = BASE_URL + `/api/_health/ready`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });
        }
    });

    group("/api/products/{id}/orders", () => {
        let product = 'TODO_EDIT_THE_PRODUCT'; // specify value as there is no example value for this parameter in OpenAPI spec
        let quantity = 'TODO_EDIT_THE_QUANTITY'; // specify value as there is no example value for this parameter in OpenAPI spec
        let totalPrice = 'TODO_EDIT_THE_TOTALPRICE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let discount = 'TODO_EDIT_THE_DISCOUNT'; // specify value as there is no example value for this parameter in OpenAPI spec
        let id = 'TODO_EDIT_THE_ID'; // specify value as there is no example value for this parameter in OpenAPI spec
        let customer = 'TODO_EDIT_THE_CUSTOMER'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: ProductController_findManyOrders
        {
            let url = BASE_URL + `/api/products/${id}/orders?customer=${customer}&discount=${discount}&id=${id}&product=${product}&quantity=${quantity}&totalPrice=${totalPrice}`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: ProductController_updateOrders
        {
            let url = BASE_URL + `/api/products/${id}/orders`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.patch(url, params);

            check(request, {
                "": (r) => r.status === 200
            });
        }
    });

    group("/api/orders/{id}", () => {
        let id = 'TODO_EDIT_THE_ID'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: OrderController_findOne
        {
            let url = BASE_URL + `/api/orders/${id}`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: OrderController_update
        {
            let url = BASE_URL + `/api/orders/${id}`;
            // TODO: edit the parameters of the request body.
            let body = {"customer": {"id": "string"}, "discount": "bigdecimal", "product": {"id": "string"}, "quantity": "bigdecimal", "totalPrice": "bigdecimal"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.patch(url, JSON.stringify(body), params);

            check(request, {
                "": (r) => r.status === 200
            });
        }
    });

    group("/api/customers", () => {
        let take = 'TODO_EDIT_THE_TAKE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let orderBy = 'TODO_EDIT_THE_ORDERBY'; // specify value as there is no example value for this parameter in OpenAPI spec
        let where = 'TODO_EDIT_THE_WHERE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let skip = 'TODO_EDIT_THE_SKIP'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: CustomerController_findMany
        {
            let url = BASE_URL + `/api/customers?where=${where}&orderBy=${orderBy}&skip=${skip}&take=${take}`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: CustomerController_create
        {
            let url = BASE_URL + `/api/customers`;
            // TODO: edit the parameters of the request body.
            let body = {"address": {"id": "string"}, "email": "string", "firstName": "string", "lastName": "string", "phone": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "": (r) => r.status === 201
            });
        }
    });

    group("/api/products/{id}", () => {
        let id = 'TODO_EDIT_THE_ID'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: ProductController_findOne
        {
            let url = BASE_URL + `/api/products/${id}`;
            let request = http.get(url);

            check(request, {
                "": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: ProductController_update
        {
            let url = BASE_URL + `/api/products/${id}`;
            // TODO: edit the parameters of the request body.
            let body = {"description": "string", "itemPrice": "bigdecimal", "name": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.patch(url, JSON.stringify(body), params);

            check(request, {
                "": (r) => r.status === 200
            });
        }
    });

}
