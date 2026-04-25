> ## Documentation Index
> Fetch the complete documentation index at: https://docs.world.org/llms.txt
> Use this file to discover all available pages before exploring further.

# Send Notification

> Send notifications to users of your mini app.



## OpenAPI

````yaml /openapi/developer-portal.json post /api/v2/minikit/send-notification
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
  /api/v2/minikit/send-notification:
    post:
      summary: Send Notification
      description: Send notifications to users of your mini app.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/SendNotificationRequest'
            example:
              app_id: app_id
              wallet_addresses:
                - '0x123'
                - '0x456'
              title: title
              message: Hello ${username}, your transaction is complete!
              mini_app_path: mini_app_path
      responses:
        '200':
          description: Notification send status
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SendNotificationResponse'
components:
  schemas:
    SendNotificationRequest:
      oneOf:
        - type: object
          required:
            - wallet_addresses
            - title
            - message
            - mini_app_path
            - app_id
          properties:
            wallet_addresses:
              type: array
              items:
                type: string
              description: >-
                Array of wallet addresses to notify. Users must have opted in.
                Max 1000 per call.
            title:
              type: string
              maxLength: 30
            message:
              type: string
              maxLength: 200
            mini_app_path:
              type: string
            app_id:
              type: string
        - type: object
          required:
            - wallet_addresses
            - localisations
            - mini_app_path
            - app_id
          properties:
            wallet_addresses:
              type: array
              items:
                type: string
              description: >-
                Array of wallet addresses to notify. Users must have opted in.
                Max 1000 per call.
            localisations:
              type: array
              minItems: 1
              items:
                $ref: '#/components/schemas/SendNotificationLocalisation'
              description: Localized notification content. Include at least `en`.
            mini_app_path:
              type: string
            app_id:
              type: string
      description: >-
        Supports legacy payload (`title` + `message`) and localized payload
        (`localisations`). If both are provided, localized payload is used.
    SendNotificationResponse:
      type: object
      properties:
        success:
          type: boolean
        status:
          type: integer
        result:
          type: array
          items:
            $ref: '#/components/schemas/SendNotificationResultItem'
    SendNotificationLocalisation:
      type: object
      required:
        - language
        - title
        - message
      properties:
        language:
          type: string
        title:
          type: string
          maxLength: 30
        message:
          type: string
          maxLength: 200
    SendNotificationResultItem:
      type: object
      properties:
        walletAddress:
          type: string
        sent:
          type: boolean
        reason:
          type: string

````