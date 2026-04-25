> ## Documentation Index
> Fetch the complete documentation index at: https://docs.world.org/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Transaction

> Query transactions for their current status.



## OpenAPI

````yaml /openapi/developer-portal.json get /api/v2/minikit/transaction/{transaction_id}
openapi: 3.0.3
info:
  title: Developer Portal API
  version: 1.0.0
  description: >-
    OpenAPI reference for Developer Portal endpoints used across Mini Apps and
    World ID.
servers:
  - url: https://developer.world.org
    description: Primary
  - url: https://developer.worldcoin.org
    description: Legacy domain
  - url: https://staging-developer.worldcoin.org
    description: Staging domain
security: []
paths:
  /api/v2/minikit/transaction/{transaction_id}:
    get:
      summary: Get Transaction
      description: Query transactions for their current status.
      parameters:
        - name: transaction_id
          in: path
          required: true
          schema:
            type: string
          description: The transaction identifier returned by the API
        - name: app_id
          in: query
          required: true
          schema:
            type: string
          description: Your app ID from the Developer Portal
        - name: type
          in: query
          required: false
          schema:
            type: string
            enum:
              - payment
              - transaction
          description: >-
            Optional. `payment` (default) or `transaction` depending on the
            command you used.
      responses:
        '200':
          description: Transaction status
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/GetTransactionResponse'
components:
  schemas:
    GetTransactionResponse:
      type: object
      properties:
        reference:
          type: string
          description: Your unique reference for the transaction
        transaction_hash:
          type: string
          description: On-chain transaction hash
        transaction_status:
          type: string
          enum:
            - pending
            - mined
            - failed
          description: Current status of the transaction
        from:
          type: string
          description: Sender address
        chain:
          type: string
          description: Blockchain network name
        timestamp:
          type: string
          format: date-time
          description: ISO 8601 timestamp when created
        token_amount:
          type: string
          description: Amount transferred (BigInt with 6 decimals)
        token:
          type: string
          description: Token symbol
        to:
          type: string
          description: Receiver address
        app_id:
          type: string
          description: Your app ID

````