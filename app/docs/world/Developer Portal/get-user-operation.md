> ## Documentation Index
> Fetch the complete documentation index at: https://docs.world.org/llms.txt
> Use this file to discover all available pages before exploring further.

# Get User Operation

> Query a MiniKit user operation by `userOpHash` and resolve the final on-chain transaction hash when it becomes available.



## OpenAPI

````yaml /openapi/developer-portal.json get /api/v2/minikit/userop/{user_op_hash}
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
  /api/v2/minikit/userop/{user_op_hash}:
    get:
      summary: Get User Operation
      description: >-
        Query a MiniKit user operation by `userOpHash` and resolve the final
        on-chain transaction hash when it becomes available.
      parameters:
        - name: user_op_hash
          in: path
          required: true
          schema:
            type: string
            pattern: ^0x[a-fA-F0-9]{64}$
          description: >-
            The MiniKit `userOpHash` returned by `MiniKit.sendTransaction()` or
            `eth_sendTransaction` through the World App provider.
      responses:
        '200':
          description: User operation status
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/GetUserOperationResponse'
              examples:
                pending:
                  value:
                    status: pending
                    userOpHash: >-
                      0x8004b63530b968a2a2c9ff414e01fc06a3ec5e4068d36d923df6aa4334744369
                    sender: null
                    transaction_hash: null
                    nonce: null
                success:
                  value:
                    status: success
                    userOpHash: >-
                      0x8004b63530b968a2a2c9ff414e01fc06a3ec5e4068d36d923df6aa4334744369
                    sender: '0x1234567890123456789012345678901234567890'
                    transaction_hash: >-
                      0x1111111111111111111111111111111111111111111111111111111111111111
                    nonce: '0x2a'
                failed:
                  value:
                    status: failed
                    userOpHash: >-
                      0x8004b63530b968a2a2c9ff414e01fc06a3ec5e4068d36d923df6aa4334744369
                    sender: '0x1234567890123456789012345678901234567890'
                    transaction_hash: >-
                      0x2222222222222222222222222222222222222222222222222222222222222222
                    nonce: '0x2a'
        '400':
          description: Invalid user operation hash
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
              example:
                code: invalid_parameter
                detail: Invalid user operation hash
                attribute: user_op_hash
        '500':
          description: Failed to fetch user operation status
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
              example:
                code: internal_api_error
                detail: Failed to fetch user operation status
                attribute: user_op_hash
components:
  schemas:
    GetUserOperationResponse:
      type: object
      properties:
        status:
          type: string
          enum:
            - pending
            - success
            - failed
          description: Current user operation status.
        userOpHash:
          type: string
          description: The MiniKit user operation hash.
        sender:
          type: string
          nullable: true
          description: The sender address when known.
        transaction_hash:
          type: string
          nullable: true
          description: Final on-chain transaction hash, if available.
        nonce:
          type: string
          nullable: true
          description: User operation nonce, if available.
    ErrorResponse:
      type: object
      properties:
        code:
          type: string
        detail:
          type: string
        attribute:
          type: string
          nullable: true

````