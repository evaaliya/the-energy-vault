> ## Documentation Index
> Fetch the complete documentation index at: https://docs.world.org/llms.txt
> Use this file to discover all available pages before exploring further.

# Get User Grant Cycle

> Retrieve the next grant claim date for a user of your mini app. Returns the user's humanity (orb-verified) grant cycle date if available, otherwise falls back to their document (passport-verified) grant cycle date.



## OpenAPI

````yaml /openapi/developer-portal.json get /api/v2/minikit/user-grant-cycle
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
  /api/v2/minikit/user-grant-cycle:
    get:
      summary: Get User Grant Cycle
      description: >-
        Retrieve the next grant claim date for a user of your mini app. Returns
        the user's humanity (orb-verified) grant cycle date if available,
        otherwise falls back to their document (passport-verified) grant cycle
        date.
      parameters:
        - name: wallet_address
          in: query
          required: true
          schema:
            type: string
            minLength: 42
            maxLength: 42
          description: >-
            The `wallet_address` of the user to query. Must be exactly 42
            characters long.
        - name: app_id
          in: query
          required: true
          schema:
            type: string
          description: The `app_id` of your mini app.
      responses:
        '200':
          description: Next grant date
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserGrantCycleResponse'
        '400':
          description: User not found / app not installed / no active cycles
components:
  schemas:
    UserGrantCycleResponse:
      type: object
      properties:
        success:
          type: boolean
        status:
          type: integer
        result:
          type: object
          properties:
            nextGrantClaimUTCDate:
              type: string
              format: date-time

````