# HTTP: Hyper Text Transfer Protocol
different methods of http - GET, POST, PUT, Patch, DELETE
- npm = Node Package Manager
## Status Codes of website
1. 200 - ok
2. 201 - Created
3. 202 - Accepted
4. 204 - No Content
5.  400 - Bad Request
6.  401 - Unauthorized
7. 403 - Forbidden
8. 404 - Not found
9. 500 - Internal Server error
10. 503 = Service Unavailable
# API
any api can be of four types:
1. Git -> 
2. post -> create
3. put and patch -> update
4. delete -> delete
API can be responsed by server with status code and json data, api generally starts with api/version.
###### Ex:- 
- /api/v1/products
- /api/v1/users
- /api/v2/products/2169 
### by default browser can check only getrequest, to check other three request type, we requires
- frontend
- 3rd api testers like: POSTMAN, THUNDERCLIENT, ECHOAPI
## Server can send data
1. html content
2. html files
3. json data
4. plain text
5. css
6. jss
7. file
## Server can set header to send data
- res.writeHeader()
- res.setHeader()
## Server can set statuscode
1. res.statusCode()
2. res.writeHeader()
## Request Methods
1. Get
2. Post
3. Put/Patch
4. Delete
