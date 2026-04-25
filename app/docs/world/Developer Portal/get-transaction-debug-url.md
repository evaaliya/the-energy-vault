> ## Documentation Index
> Fetch the complete documentation index at: https://docs.world.org/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Transaction Debug URL

> Debug transactions that failed during the prepare stage. Returns Tenderly URLs when applicable.



## OpenAPI

````yaml /openapi/developer-portal.json get /api/v2/minikit/transaction/debug
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
  /api/v2/minikit/transaction/debug:
    get:
      summary: Get Transaction Debug URL
      description: >-
        Debug transactions that failed during the prepare stage. Returns
        Tenderly URLs when applicable.
      parameters:
        - name: app_id
          in: query
          required: true
          schema:
            type: string
          description: The `app_id` corresponding to the transaction that is being queried.
      responses:
        '200':
          description: Debug information list
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/GetDebugUrlResponse'
              example:
                transactions:
                  - debugUrl: https://dashboard.tenderly.co/tx/...
                    createdAt: '2024-03-21T10:30:00.000Z'
                    block: 12345678
                    simulationRequestId: sim_abc123def456
                    simulationError: Permit signature expired
                    walletAddress: 0x1234...
components:
  schemas:
    GetDebugUrlResponse:
      type: object
      properties:
        transactions:
          type: array
          items:
            $ref: '#/components/schemas/GetDebugUrlItem'
    GetDebugUrlItem:
      type: object
      properties:
        debugUrl:
          type: string
          description: Tenderly URL for debugging
        createdAt:
          type: string
          format: date-time
          description: Creation timestamp
        block:
          type: integer
          description: Block number
        simulationRequestId:
          type: string
          description: Simulation request ID
        simulationError:
          type: string
          description: Simulation error message if any
        walletAddress:
          type: string
          description: Associated wallet address

````