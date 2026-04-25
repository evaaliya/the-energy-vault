> ## Documentation Index
> Fetch the complete documentation index at: https://docs.world.org/llms.txt
> Use this file to discover all available pages before exploring further.

# Verify (Legacy)

> Verify a World ID proof for a Cloud action.



## OpenAPI

````yaml /openapi/developer-portal.json post /api/v2/verify/{app_id}
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
  /api/v2/verify/{app_id}:
    post:
      summary: Verify (Legacy)
      description: Verify a World ID proof for a Cloud action.
      parameters:
        - name: app_id
          in: path
          required: true
          schema:
            type: string
          description: Your app ID from the Developer Portal
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/VerifyProofRequest'
            example:
              nullifier_hash: >-
                0x2bf8406809dcefb1486dadc96c0a897db9bab002053054cf64272db512c6fbd8
              merkle_root: >-
                0x2264a66d162d7893e12ea8e3c072c51e785bc085ad655f64c10c1a61e00f0bc2
              proof: >-
                0x1aa8b8f3b2d2de5ff452c0e1a83e29d6bf46fb83ef35dc5957121ff3d3698a1119090fb...
              verification_level: orb
              action: my_action
              signal_hash: >-
                0x00c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4
              max_age: 3600
      responses:
        '200':
          description: Verified
          content:
            application/json:
              example:
                success: true
                action: my_action
                nullifier_hash: >-
                  0x2bf8406809dcefb1486dadc96c0a897db9bab002053054cf64272db512c6fbd8
                created_at: '2023-02-18T11:20:39.530041+00:00'
        '400':
          description: Invalid or already verified
          content:
            application/json:
              examples:
                invalid_proof:
                  value:
                    code: invalid_proof
                    detail: >-
                      The provided proof is invalid and it cannot be verified.
                      Please check all inputs and try again.
                    attribute: null
                invalid_merkle_root:
                  value:
                    code: invalid_merkle_root
                    detail: >-
                      The provided Merkle root is invalid. User appears to be
                      unverified.
                    attribute: null
                root_too_old:
                  value:
                    code: root_too_old
                    detail: >-
                      The provided merkle root is too old. Please generate a new
                      proof and try again.
                    attribute: null
                invalid_credential_type:
                  value:
                    code: invalid
                    detail: Invalid credential type.
                    attribute: credential_type
                exceeded_max_verifications:
                  value:
                    code: exceeded_max_verifications
                    detail: >-
                      This user has exceeded the maximum number of verifications
                      allowed for this proof.
                    attribute: null
                already_verified:
                  value:
                    code: already_verified
                    detail: This person has already verified for this action.
                    attribute: null
components:
  schemas:
    VerifyProofRequest:
      type: object
      required:
        - nullifier_hash
        - proof
        - merkle_root
        - verification_level
        - action
      properties:
        nullifier_hash:
          type: string
          description: >-
            The unique user identifier (called the nullifier hash in the ZKP),
            as provided by [IDKit](/world-id/idkit/integrate).
        proof:
          type: string
          description: >-
            The zero-knowledge proof, as provided by
            [IDKit](/world-id/idkit/integrate).
        merkle_root:
          type: string
          description: >-
            Part of the ZKP, the hash of the Merkle root that proves membership
            to the set of credentials. As provided by
            [IDKit](/world-id/idkit/integrate).
        verification_level:
          type: string
          description: >-
            The verification level, as provided by
            [IDKit](/world-id/idkit/integrate).
        action:
          type: string
          description: >-
            Same action identifier as passed to
            [IDKit](/world-id/idkit/integrate).
        signal_hash:
          type: string
          description: >-
            The hash of the signal that was used to generate the proof. Defaults
            to the hash of an empty string.
        max_age:
          type: integer
          minimum: 3600
          maximum: 604800
          default: 7200
          description: >-
            The maximum age of the root in seconds. This parameter controls how
            old the Merkle root used in the proof can be. Minimum value is 3600
            (1 hour) and maximum value is 604800 (7 days). Defaults to 7200 (2
            hours).

````