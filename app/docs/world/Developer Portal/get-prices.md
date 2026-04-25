> ## Documentation Index
> Fetch the complete documentation index at: https://docs.world.org/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Prices

> Query latest prices of tokens in various fiat currencies.



## OpenAPI

````yaml /openapi/developer-portal.json get /public/v1/miniapps/prices
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
  /public/v1/miniapps/prices:
    get:
      summary: Get Prices
      description: Query latest prices of tokens in various fiat currencies.
      parameters:
        - name: fiatCurrencies
          in: query
          required: true
          schema:
            type: string
          description: Comma-separated ISO4217 fiat codes, e.g. USD,EUR,JPY
        - name: cryptoCurrencies
          in: query
          required: true
          schema:
            type: string
          description: Comma-separated crypto codes, e.g. USDC,WLD
      responses:
        '200':
          description: Prices response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/GetPricesResponse'
      servers:
        - url: https://app-backend.toolsforhumanity.com
components:
  schemas:
    GetPricesResponse:
      type: object
      properties:
        result:
          type: object
          properties:
            prices:
              type: object
              description: Nested object keyed by currency codes with price details

````