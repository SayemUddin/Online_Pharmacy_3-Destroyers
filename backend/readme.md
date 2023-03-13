# DOBYBOX API
    link :- https://young-beach-37066.herokuapp.com
# DOBYBOX Live site
    https://dobybox-dff3a.web.app/
## Functionality and End points;
    1) /products -> return all the products
    2) /products/:id -> return single product by :id
    3) /productsby/:id -> reutrn product by supplier ( Secure with middleWare)
    4) /updates -> update a All the product attribuites (Post request)
    5) /update -> update product restock and order quantity (Post request, Secure with middleware)
    6) /products -> Delete a single product (DELETE Request with ID , Secure with MiddleWare)
    ** Add product
        1) /addproduct -> Add a single product to database (POST Request);
        2) /productcount/?email=ayt.ullah.dev@gmail.com (with email querry parameter)
        3) /productcount/ -> Return all the product count

## User Functiionality with token
    1) /login -> provide a Valide User Token (JWT TOKEN);

# Features 
    This API provide :-
    1) Secure API Connection to the server
    2) User can Add there Data Securely
    3) Visitor can access All the products Details
    4) Visitor can't access products By suppliers
    5) Single supplier can't Update Other supplier Product which is secure by middle ware
    6) Any user can order product and Restok Product of Any supplier. 