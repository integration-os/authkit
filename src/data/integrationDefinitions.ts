export const IntegrationDefinitions = {
    "rows": [
        {
            "_id": "6317cb9234e06e0012d92aa0",
            "frontend": {
                "spec": {
                    "title": "Adyen",
                    "description": "A payment company that allows businesses to accept e-commerce, mobile, and point-of-sale payments",
                    "type": "adyen",
                    "category": "finance",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/adyen.svg",
                    "tags": [
                        "payments",
                        "POS"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "adyen",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Adyen Connection"
                            },
                            {
                                "name": "ADYEN_COMPANY_ID",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Adyen Company ID",
                                "placeholder": "MyCompany"
                            },
                            {
                                "name": "ADYEN_API_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Adyen Personal API Key",
                                "placeholder": "AQEohmfxJo3MbxxFw0m/n3Q5qf3VbI5bKZxNRudnEoG/AEDsaKzj/YE0YxDBXVsNvuR83LVYjEgiTGAH"
                            },
                            {
                                "name": "ADYEN_VERIFICATION_USERNAME",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Adyen Verification Username",
                                "placeholder": "my-username"
                            },
                            {
                                "name": "ADYEN_VERIFICATION_PASSWORD",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Adyen Verification Password",
                                "placeholder": "my-password"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "live": "false",
                    "notificationItems": [
                        {
                            "NotificationRequestItem": {
                                "additionalData": {
                                    "expiryDate": "03/2030",
                                    "cardSummary": "0005",
                                    "hmacSignature": "YvCKx7b+aSiEH2eoZH8KEXWkSVQzZMCZyKC1glvHrBI="
                                },
                                "amount": {
                                    "currency": "USD",
                                    "value": 25647
                                },
                                "eventCode": "AUTHORISATION",
                                "eventDate": "2022-09-03T12:21:18+02:00",
                                "merchantAccountCode": "BestMerch",
                                "merchantReference": "PLAYGROUND-1662200466116",
                                "paymentMethod": "cartebancaire",
                                "pspReference": "CSRK99WWP5PFWR82",
                                "success": "true"
                            }
                        }
                    ]
                }
            },
            "integrationApiVersion": "NA",
            "events": [
                {
                    "name": "standard",
                    "description": "Standard set of events",
                    "group": ""
                },
                {
                    "name": "account-settings-notification",
                    "description": "Receive a notification when there is a status change related to your company account, merchant account, or store.",
                    "group": ""
                },
                {
                    "name": "banktransfer-notification",
                    "description": "Receive a notification when there is a bank transfer payment",
                    "group": ""
                },
                {
                    "name": "directdebit-notification",
                    "description": "Receive a notification when there is a direct debit payment",
                    "group": ""
                },
                {
                    "name": "pending-notification",
                    "description": "Receive a notification with eventCode: PENDING when there is a pending payment for any redirect payment method",
                    "group": ""
                },
                {
                    "name": "ideal-notification",
                    "description": "Receive a notification when there is an iDEAL payment",
                    "group": ""
                },
                {
                    "name": "ideal-pending-notification",
                    "description": "Receive a notification with eventCode: PENDING when there is a pending iDEAL payment",
                    "group": ""
                },
                {
                    "name": "report-notification",
                    "description": "Receive a notification with eventCode: REPORT_AVAILABLE when a new report is available",
                    "group": ""
                },
                {
                    "name": "rreq-notification",
                    "description": "Receive a notification when there is an RReq payment",
                    "group": ""
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showEvents": true,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source"
            ],
            "actions": null
        },
        {
            "_id": "630e552a45596c0013befe90",
            "frontend": {
                "spec": {
                    "title": "Alchemy",
                    "description": "The most powerful web3 development platform to build and scale your dApp with ease",
                    "type": "alchemy",
                    "category": "web3",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/alchemy.svg",
                    "tags": [
                        "blockchain",
                        "web3",
                        "nft"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "alchemy",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Alchemy Connection"
                            },
                            {
                                "name": "ALCHEMY_API_TOKEN",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Alchemy Notify Auth Token",
                                "placeholder": "FKiGK_rCVjFdnwA0CBo1L5CQIcPEM7Ot"
                            },
                            {
                                "name": "ALCHEMY_APP_ID",
                                "type": "input",
                                "rules": {},
                                "label": "Enter your Alchemy App ID",
                                "placeholder": "t35xc2wsrapxabd5"
                            },
                            {
                                "name": "ALCHEMY_NETWORK",
                                "type": "select",
                                "rules": {},
                                "label": "Select the Alchemy App Network",
                                "placeholder": "",
                                "options": [
                                    {
                                        "name": "ARB_MAINNET",
                                        "value": "ARB_MAINNET"
                                    },
                                    {
                                        "name": "ARB_RINKEBY",
                                        "value": "ARB_RINKEBY"
                                    },
                                    {
                                        "name": "MATIC_MAINNET",
                                        "value": "MATIC_MAINNET"
                                    },
                                    {
                                        "name": "MATIC_MUMBAI",
                                        "value": "MATIC_MUMBAI"
                                    },
                                    {
                                        "name": "OPT_MAINNET",
                                        "value": "OPT_MAINNET"
                                    },
                                    {
                                        "name": "OPT_KOVAN",
                                        "value": "OPT_KOVAN"
                                    },
                                    {
                                        "name": "ETH_MAINNET",
                                        "value": "ETH_MAINNET"
                                    },
                                    {
                                        "name": "ETH_GOERLI",
                                        "value": "ETH_GOERLI"
                                    },
                                    {
                                        "name": "ETH_ROPSTEN",
                                        "value": "ETH_ROPSTEN"
                                    },
                                    {
                                        "name": "ETH_RINKEBY",
                                        "value": "ETH_RINKEBY"
                                    },
                                    {
                                        "name": "ETH_KOVAN",
                                        "value": "ETH_KOVAN"
                                    }
                                ]
                            },
                            {
                                "name": "ALCHEMY_ADDRESSES",
                                "type": "input",
                                "rules": {},
                                "label": "Enter a list of Addresses to track",
                                "placeholder": "address_1, address_2, ..."
                            },
                            {
                                "name": "ALCHEMY_TOKEN_IDS",
                                "type": "input",
                                "rules": {},
                                "label": "Enter a list of pairs to track NFT Activity",
                                "placeholder": "address_1, token_id_1, address_2, token_id_2, ..."
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "webhookId": "wh_octjglnywaupz6th",
                    "id": "whevt_ogrc5v64myey69ux",
                    "createdAt": "2021-12-07T03:52:45.899Z",
                    "type": "MINED_TRANSACTION",
                    "event": {
                        "appId": "j6tqmhfxlu9pa5r7",
                        "network": "MATIC_MUMBAI",
                        "transaction": {
                            "blockHash": "0x0a50cb2068418da0d7746155be39cff624aaf6fca58fa7f86f139999947433db",
                            "blockNumber": "0x154f434",
                            "from": "0x829e20741ee472f628b260a591f9f78fb1a555f8",
                            "gas": "0x5208",
                            "gasPrice": "0xdf8475800",
                            "hash": "0xc981aed4304084ddf2b82859c80dd31334fad3bcf2aa7ee15dfd646af0889b7d",
                            "input": "0x",
                            "nonce": "0x8",
                            "to": "0x4577d79fc84838aee64ba8be8d250981dd4f3876",
                            "transactionIndex": "0x1",
                            "value": "0x0",
                            "type": "0x0",
                            "v": "0x27125",
                            "r": "0xc07a6670796726674e213c4cf61763b59490b1b1c992b9323a1aad5e3c2cea88",
                            "s": "0x22ce350c260b3dbd1ebc06ca00b18c127efd6c1b31136a104de1a6ea4aa3c0d2"
                        }
                    }
                }
            },
            "integrationApiVersion": "V2",
            "events": [
                {
                    "name": "MINED_TRANSACTION",
                    "description": "When your app's transactions are mined",
                    "group": ""
                },
                {
                    "name": "DROPPED_TRANSACTION",
                    "description": "When your app's transactions are dropped from the mempool",
                    "group": ""
                },
                {
                    "name": "ADDRESS_ACTIVITY",
                    "description": "When an address sends/recieves a token",
                    "group": ""
                },
                {
                    "name": "NFT_ACTIVITY",
                    "description": "When an NFT is transferred",
                    "group": ""
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showEvents": true,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source"
            ],
            "actions": null
        },
        {
            "_id": "631245355b55e0001353ad48",
            "frontend": {
                "spec": {
                    "title": "Checkout.com",
                    "description": "An international financial technology company that processes payments",
                    "type": "checkout",
                    "category": "finance",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/checkout.svg",
                    "tags": [
                        "payment",
                        "ecommerce"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "checkout",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Checkout.com Connection"
                            },
                            {
                                "name": "CHECKOUT_API_KEY_SECRET",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Checkout.com Secret Key",
                                "placeholder": "sk_sbox_wbs7zl5ijit4ay4198dkmasl12km"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "id": "evt_hbnxegj3dqyu5fsd4p2b4bxvpa",
                    "type": "payment_paid",
                    "created_on": "2019-12-11T08:59:39Z",
                    "data": {
                        "action_id": "act_fgmhgzodurievpxbdzgl3ftxce",
                        "auth_code": "924041",
                        "response_code": "10000",
                        "response_summary": "Approved",
                        "amount": 115,
                        "metadata": {
                            "coupon_code": "NY2018",
                            "partner_id": 123989
                        },
                        "destination": {
                            "id": "src_cdfv47bowvmezfdhjt7ibqrdxy",
                            "type": "card",
                            "expiry_month": 12,
                            "expiry_year": 2020,
                            "name": "John Smith",
                            "scheme": "Visa",
                            "last_4": "4242",
                            "fingerprint": "436d1eb12c4b92b9eeb1e798dea93a718c78f5362c7fb5d84b51c72a869b6101",
                            "bin": "424242",
                            "card_type": "Credit",
                            "card_category": "Consumer",
                            "issuer": "JPMORGAN CHASE BANK NA",
                            "issuer_country": "US",
                            "product_id": "A",
                            "product_type": "Visa Traditional",
                            "avs_check": "S",
                            "cvv_check": "Y"
                        },
                        "customer": {
                            "id": "cus_bv2khjtcah5uzimoi2qvniwnsm"
                        },
                        "id": "pay_fk234x52k6i4rmjmqnzx474fqi",
                        "currency": "DKK",
                        "processed_on": "2019-12-11T08:59:40Z"
                    },
                    "_links": {
                        "self": {
                            "href": "https://api.checkout.com/events/evt_hbnxegj3dqyu5fsd4p2b4bxvpa"
                        },
                        "subject": {
                            "href": "https://api.checkout.com/workflows/events/subject/pay_jlfj2ful7z3u5lbykhy5lzezvm"
                        }
                    }
                }
            },
            "integrationApiVersion": "2020-08-24",
            "events": [
                {
                    "name": "issuing.3ds_card_enrolled",
                    "description": "3ds card enrolled event.",
                    "group": "issuing"
                },
                {
                    "name": "issuing.authorization_approved",
                    "description": "Issuing authorization approved event.",
                    "group": "issuing"
                },
                {
                    "name": "issuing.authorization_declined",
                    "description": "Issuing authorization declined event.",
                    "group": "issuing"
                },
                {
                    "name": "issuing.presentment_received",
                    "description": "Presentment received event.",
                    "group": "issuing"
                },
                {
                    "name": "issuing.reversal_approved",
                    "description": "Reversal approved event.",
                    "group": "issuing"
                },
                {
                    "name": "issuing.reversal_declined",
                    "description": "Reversal declined event.",
                    "group": "issuing"
                },
                {
                    "name": "marketplace.payment_instrument_rejected",
                    "description": "Payment instrument rejected event.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.payment_instrument_verified",
                    "description": "Payment instrument verified event.",
                    "group": "marketplace"
                },
                {
                    "name": "card_payout.payment_approved",
                    "description": "Payment approved event.",
                    "group": "card_payout"
                },
                {
                    "name": "card_payout.payment_declined",
                    "description": "Payment declined event.",
                    "group": "card_payout"
                },
                {
                    "name": "accounts.full_dd_failed",
                    "description": "Full DD failed event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.full_dd_passed",
                    "description": "Full DD passed event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.match_failed",
                    "description": "Account match failed event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.match_passed",
                    "description": "Account match passed event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.payment_instrument_created",
                    "description": "Payment instrument created event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.payment_instrument_error",
                    "description": "Payment instrument error event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.payment_instrument_rejected",
                    "description": "Payment instrument rejected event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.payment_instrument_verification_failed",
                    "description": "Payment instrument verification failed event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.payment_instrument_verification_passed",
                    "description": "Payment instrument verification passed event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.payment_instrument_verified",
                    "description": "Payment instrument verified event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.payments_disabled",
                    "description": "Payment disabled event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.payments_enabled",
                    "description": "Payment enabled event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.payout_declined",
                    "description": "Payout declined event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.payout_paid",
                    "description": "Payout paid event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.payouts_disabled",
                    "description": "Payout disabled event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.payouts_enabled",
                    "description": "Payout enabled event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.status_changed",
                    "description": "Account status changed event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.sub_entity_created",
                    "description": "Account sub entity created event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.transfer_status_changed",
                    "description": "Account transfer status changed event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.vmss_failed",
                    "description": "Account VMSS failed event.",
                    "group": "accounts"
                },
                {
                    "name": "accounts.vmss_passed",
                    "description": "Account VMSS passed event.",
                    "group": "accounts"
                },
                {
                    "name": "gateway.payment_voided",
                    "description": "Occurs when a void is successful.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_void_declined",
                    "description": "Occurs when a submitted void request has been rejected by the scheme. This webhook can only happen after a successful authorisation and before the capture.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_returned",
                    "description": "Only occurs when a payment is returned by a Pay to Bank (PTB) payment, or by some alternative payment methods (APMs) that support a failure after success scenarios (such as Automated Clearing House (ACH)). These returns are triggered outside of Checkout.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_refunded",
                    "description": "Occurs when a refund is successful.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_refund_pending",
                    "description": "Occurs when a refund request has been successfully initiated.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_refund_declined",
                    "description": "Occurs when a refund is declined.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_pending",
                    "description": "Occurs when an asynchronous payment request has successfully initiated (e.g. a payment that requires an additional action to complete it, such as a cardholder completing a redirect to an alternative payment method's checkout page).",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_paid",
                    "description": "Only occurs for bank payout payments.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_expired",
                    "description": "Occurs when an APM payment has expired (not applicable to 3DS payment expiries).",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_declined",
                    "description": "Occurs when a payment authorization request times out, or if there is a rejection during authorization (e.g. insufficient_funds, do_not_honor, card_blocked_by_issuer).",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_captured",
                    "description": "Occurs when a capture is successful.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_capture_pending",
                    "description": "Occurs when the customer has approved the payment on the banking page.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_capture_declined",
                    "description": "Occurs when a capture is declined.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_canceled",
                    "description": "Occurs when the customer has canceled the payment via a provider's platform. This webhook is triggered in some APM flows.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_authorization_incremented",
                    "description": "Occurs when an authorization is successfully incremented.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_authorization_increment_declined",
                    "description": "Occurs when an authorization is declined.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_approved",
                    "description": "Occurs when an authorization for a payment is successfully approved. It can be followed by one of the following webhooks: payment_captured, payment_voided, payment_authorization_incremented, payment_authorization_increment_declined.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_authentication_failed",
                    "description": "Payment authentication failed event",
                    "group": "gateway"
                },
                {
                    "name": "gateway.payment_authorized",
                    "description": "Payment authorized event",
                    "group": "gateway"
                },
                {
                    "name": "gateway.card_verified",
                    "description": "Occurs when a card verification is successful.",
                    "group": "gateway"
                },
                {
                    "name": "gateway.card_verification_declined",
                    "description": "Occurs when a card verification is declined.",
                    "group": "gateway"
                },
                {
                    "name": "marketplace.sub_entity_created",
                    "description": "The sub-entity has been created successfully.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.payments_enabled",
                    "description": "Occurs when payment capabilities are enabled for a sub-entity.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.payments_disabled",
                    "description": "Occurs when payment capabilities are disabled for a sub-entity.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.payouts_enabled",
                    "description": "Occurs when payout capabilities are enabled for a sub-entity.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.payouts_disabled",
                    "description": "Occurs when payout capabilities are disabled for a sub-entity.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.vmss_passed",
                    "description": "Occurs when a sub-entity passes due diligence VMSS checks.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.vmss_failed",
                    "description": "Occurs when a sub-entity fails due diligence VMSS checks.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.match_passed",
                    "description": "The sub-entity has passed their MATCH check.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.match_failed",
                    "description": "The sub-entity has failed their MATCH check.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.full_dd_passed",
                    "description": "The sub-entity has passed their due diligence checks.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.full_dd_failed",
                    "description": "The sub-entity has failed their due diligence checks.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.status_changed",
                    "description": "Occurs when the status of a sub-entity has changed.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.payment_instrument_created",
                    "description": "Occurs when a payment instrument is created associated with a sub-entity.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.payment_instrument_error",
                    "description": "Occurs when a payment instrument has failed to be created.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.payment_instrument_verification_passed",
                    "description": "The payment instrument has passed verification.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.payment_instrument_verification_failed",
                    "description": "The payment instrument has failed verification.",
                    "group": "marketplace"
                },
                {
                    "name": "marketplace.transfer_status_changed",
                    "description": "A transfer you have requested has changed status. Read more about this on the checkout.com transfers documentation",
                    "group": "marketplace"
                },
                {
                    "name": "dispute.request_for_information_received",
                    "description": "Occurs when additional information has been requested for a given payment.",
                    "group": "dispute"
                },
                {
                    "name": "dispute.dispute_received",
                    "description": "Sent when a dispute notification has been received from the scheme before knowing if further action is possible.",
                    "group": "dispute"
                },
                {
                    "name": "dispute.dispute_resolved",
                    "description": "Occurs when a dispute is received but no further actions is required from you, because you've already refunded the customer.",
                    "group": "dispute"
                },
                {
                    "name": "dispute.dispute_canceled",
                    "description": "Occurs when a dispute is canceled by the issuing bank. If previously debited, the disputed amount has been credited back to you.",
                    "group": "dispute"
                },
                {
                    "name": "dispute.dispute_evidence_required",
                    "description": "Occurs when a dispute has been received for which evidence is required.",
                    "group": "dispute"
                },
                {
                    "name": "dispute.dispute_accepted",
                    "description": "Occurs when you have accepted a dispute. No further action is required.",
                    "group": "dispute"
                },
                {
                    "name": "dispute.dispute_expired",
                    "description": "Occurs when the time limit to take action against a dispute has been exceeded. No further action is possible.",
                    "group": "dispute"
                },
                {
                    "name": "dispute.dispute_evidence_submitted",
                    "description": "Occurs once you have submitted evidence for a given dispute. No further action is required from you.",
                    "group": "dispute"
                },
                {
                    "name": "dispute.dispute_evidence_acknowledged_by_scheme",
                    "description": "Occurs when the supporting documents you sent us have been forwarded to the scheme.",
                    "group": "dispute"
                },
                {
                    "name": "dispute.dispute_won",
                    "description": "Occurs when the issuing bank has accepted your evidence and you have won the dispute. If previously debited, the amount of the dispute has been credited back to you.",
                    "group": "dispute"
                },
                {
                    "name": "dispute.dispute_lost",
                    "description": "Occurs when the issuing bank has rejected your evidence and you have lost the dispute.",
                    "group": "dispute"
                },
                {
                    "name": "dispute.dispute_arbitration_sent_to_scheme",
                    "description": "Occurs when the documentation for an arbitration has been sent to the scheme.",
                    "group": "dispute"
                },
                {
                    "name": "dispute.dispute_arbitration_won",
                    "description": "Occurs when the arbitration has been won. Your account will be credited the disputed amount.",
                    "group": "dispute"
                },
                {
                    "name": "dispute.dispute_arbitration_lost",
                    "description": "Occurs when an arbitration has been lost. Your account will be debited any additional arbitration-related fees.",
                    "group": "dispute"
                },
                {
                    "name": "fincrime.payment_compliance_review",
                    "description": "Occurs when a payment is pending while under compliance review.",
                    "group": "fincrime"
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showEvents": true,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source"
            ],
            "actions": null
        },
        {
            "_id": "62e2d3f5230fb13baea78e58",
            "frontend": {
                "spec": {
                    "title": "CircleCI",
                    "description": "A continuous integration and delivery platform for modern software development",
                    "type": "circleci",
                    "category": "DevOps",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/circleci.svg",
                    "tags": [
                        "ci/cd",
                        "deployment"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "circleci",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My CircleCI Connection"
                            },
                            {
                                "name": "CIRCLECI_PERSONAL_API_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your CircleCI Personal API Key",
                                "placeholder": "c32dd2a434a835bc4dfd3692bacb8542875ee050"
                            },
                            {
                                "name": "CIRCLECI_PROJECT_ID",
                                "type": "input",
                                "rules": {},
                                "label": "Enter your CircleCI Project ID",
                                "placeholder": "e15b2f31-6791-435d-a244-153455d7a7b1"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "id": "3888f21b-eaa7-38e3-8f3d-75a63bba8895",
                    "type": "workflow-completed",
                    "happened_at": "2021-09-01T22:49:34.317Z",
                    "webhook": {
                        "id": "cf8c4fdd-0587-4da1-b4ca-4846e9640af9",
                        "name": "Sample Webhook"
                    },
                    "project": {
                        "id": "84996744-a854-4f5e-aea3-04e2851dc1d2",
                        "name": "webhook-service",
                        "slug": "github/circleci/webhook-service"
                    },
                    "organization": {
                        "id": "f22b6566-597d-46d5-ba74-99ef5bb3d85c",
                        "name": "circleci"
                    },
                    "workflow": {
                        "id": "fda08377-fe7e-46b1-8992-3a7aaecac9c3",
                        "name": "build-test-deploy",
                        "created_at": "2021-09-01T22:49:03.616Z",
                        "stopped_at": "2021-09-01T22:49:34.170Z",
                        "url": "https://app.circleci.com/pipelines/github/circleci/webhook-service/130/workflows/fda08377-fe7e-46b1-8992-3a7aaecac9c3",
                        "status": "success"
                    },
                    "pipeline": {
                        "id": "1285fe1d-d3a6-44fc-8886-8979558254c4",
                        "number": 130,
                        "created_at": "2021-09-01T22:49:03.544Z",
                        "trigger": {
                            "type": "webhook"
                        },
                        "vcs": {
                            "provider_name": "github",
                            "origin_repository_url": "https://github.com/circleci/webhook-service",
                            "target_repository_url": "https://github.com/circleci/webhook-service",
                            "revision": "1dc6aa69429bff4806ad6afe58d3d8f57e25973e",
                            "commit": {
                                "subject": "Description of change",
                                "body": "More details about the change",
                                "author": {
                                    "name": "Author Name",
                                    "email": "author.email@example.com"
                                },
                                "authored_at": "2021-09-01T22:48:53Z",
                                "committer": {
                                    "name": "Committer Name",
                                    "email": "committer.email@example.com"
                                },
                                "committed_at": "2021-09-01T22:48:53Z"
                            },
                            "branch": "main"
                        }
                    }
                }
            },
            "integrationApiVersion": "NA",
            "events": [
                {
                    "name": "workflow-completed",
                    "description": "A workflow has reached a terminal state",
                    "group": ""
                },
                {
                    "name": "job-completed",
                    "description": "A job has reached a terminal state",
                    "group": ""
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showEvents": true,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source"
            ],
            "actions": null
        },
        {
            "_id": "62eabeb45b9b09084d727843",
            "frontend": {
                "spec": {
                    "title": "Datadog",
                    "description": "A monitoring service for cloud-scale applications",
                    "type": "datadog",
                    "category": "observability",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/datadog.svg",
                    "tags": [
                        "metrics",
                        "monitoring",
                        "data"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "datadog",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Datadog Connection"
                            },
                            {
                                "name": "DATADOG_API_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Datadog API Key",
                                "placeholder": "09db593063b435d8b1c4d0e256b23846"
                            },
                            {
                                "name": "DATADOG_APP_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Datadog Application Key",
                                "placeholder": "c8014f35g5a22324956129176e8cb22975ba10f6"
                            },
                            {
                                "name": "DATADOG_REGION",
                                "type": "select",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Select your Datadog Server Region",
                                "placeholder": "",
                                "options": [
                                    {
                                        "name": "us1",
                                        "value": "us1"
                                    },
                                    {
                                        "name": "us3",
                                        "value": "us3"
                                    },
                                    {
                                        "name": "us5",
                                        "value": "us5"
                                    },
                                    {
                                        "name": "eu",
                                        "value": "eu"
                                    },
                                    {
                                        "name": "us1-fed",
                                        "value": "us1-fed"
                                    }
                                ]
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "body": "$EVENT_MSG",
                    "last_updated": "$LAST_UPDATED",
                    "event_type": "$EVENT_TYPE",
                    "title": "$EVENT_TITLE",
                    "date": "$DATE",
                    "org": {
                        "id": "$ORG_ID",
                        "name": "$ORG_NAME"
                    },
                    "id": "$ID"
                }
            },
            "integrationApiVersion": "NA",
            "events": [
                {
                    "name": "any",
                    "description": "Subscribe to all events (default behavior)",
                    "group": ""
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "autoSubscribeAllEvents": true,
                "autoAddAllEventsToPipeline": true,
                "showEvents": false,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source"
            ],
            "actions": null
        },
        {
            "_id": "conn_def_src_18c8b30434b44bb5a5f7dce755711903",
            "frontend": {
                "spec": {
                    "title": "FTP/FTPS",
                    "description": "Receive file manipulation events on an FTP server and extract relevant information from designated file types",
                    "type": "ftp",
                    "category": "storage",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/ftp.svg",
                    "tags": [
                        "files",
                        "csv",
                        "json"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        },
                        {
                            "name": "Extractor",
                            "color": "blue"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "ftp",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My FTP/FTPS Connection"
                            },
                            {
                                "name": "FTP_HOST",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter the hostname for your FTP server",
                                "placeholder": "ftp.example.com"
                            },
                            {
                                "name": "FTP_PORT",
                                "type": "number",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter the port number for your FTP server",
                                "placeholder": "21",
                                "value": "21"
                            },
                            {
                                "name": "FTP_USER",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your FTP username",
                                "placeholder": "root"
                            },
                            {
                                "name": "FTP_PASSWORD",
                                "type": "password",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your FTP password",
                                "placeholder": "password"
                            },
                            {
                                "name": "FTP_PATH",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter the FTP Directory Path",
                                "placeholder": "/path/to/directory",
                                "value": "."
                            },
                            {
                                "name": "FTP_SCAN_INTERVAL",
                                "type": "select",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Select the FTP Scan Interval",
                                "placeholder": "",
                                "options": [
                                    {
                                        "value": "*/15 * * * *",
                                        "name": "At every 15th minute"
                                    },
                                    {
                                        "value": "*/30 * * * *",
                                        "name": "At every 30th minute"
                                    },
                                    {
                                        "value": "0 * * * *",
                                        "name": "At every hour"
                                    },
                                    {
                                        "value": "0 */3 * * *",
                                        "name": "At every 3rd hour"
                                    },
                                    {
                                        "value": "0 */6 * * *",
                                        "name": "At every 6th hour"
                                    },
                                    {
                                        "value": "0 */12 * * *",
                                        "name": "At every 12th hour"
                                    },
                                    {
                                        "value": "0 0 */1 * *",
                                        "name": "At the start of every day"
                                    }
                                ],
                                "value": "*/15 * * * *"
                            },
                            {
                                "name": "FTP_EXTRACTOR_ENABLED",
                                "type": "select",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enable FTP File Content Extraction",
                                "placeholder": "",
                                "options": [
                                    {
                                        "value": "Y",
                                        "name": "Yes"
                                    },
                                    {
                                        "value": "N",
                                        "name": "No"
                                    }
                                ],
                                "value": "Y"
                            },
                            {
                                "name": "FTP_EXTRACTOR_FILE_TYPE",
                                "type": "select",
                                "rules": {},
                                "label": "Enter the Extractor File Type",
                                "placeholder": "",
                                "options": [
                                    {
                                        "name": "CSV",
                                        "value": "csv"
                                    }
                                ],
                                "value": "csv"
                            },
                            {
                                "name": "FTP_EXTRACTOR_RECORD_COUNT_LIMIT",
                                "type": "select",
                                "rules": {},
                                "label": "Select the Batch Size for Parsing Records",
                                "placeholder": "",
                                "options": [
                                    {
                                        "name": "25",
                                        "value": "25"
                                    },
                                    {
                                        "name": "100",
                                        "value": "100"
                                    },
                                    {
                                        "name": "1000",
                                        "value": "1000"
                                    }
                                ],
                                "value": "100"
                            },
                            {
                                "name": "FTP_EXTRACTOR_FILE_SIZE_LIMIT",
                                "type": "input",
                                "rules": {},
                                "label": "Enter the Maximum Allowed Extractor File Size",
                                "placeholder": "50mb",
                                "disabled": true,
                                "value": "50mb"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [
                {
                    "name": "connection.connected",
                    "description": "The connection to the FTP Server has been established.",
                    "group": ""
                },
                {
                    "name": "connection.disconnected",
                    "description": "The connection to the FTP Server has been closed.",
                    "group": ""
                },
                {
                    "name": "connection.failed",
                    "description": "The connection to the FTP Server has failed.",
                    "group": ""
                },
                {
                    "name": "files-metadata.scanned",
                    "description": "The metadata of the files has been scanned.",
                    "group": ""
                },
                {
                    "name": "files-metadata.state.processed",
                    "description": "The metadata of the files has been processed.",
                    "group": ""
                },
                {
                    "name": "file.added",
                    "description": "A new file has been added.",
                    "group": ""
                },
                {
                    "name": "file.updated",
                    "description": "A file has been updated.",
                    "group": ""
                },
                {
                    "name": "file.deleted",
                    "description": "A file has been deleted.",
                    "group": ""
                },
                {
                    "name": "file.parsed",
                    "description": "A file has been parsed.",
                    "group": ""
                },
                {
                    "name": "file.parsed.failed",
                    "description": "A file has failed to be parsed.",
                    "group": ""
                },
                {
                    "name": "record.parsed",
                    "description": "A record in a file has been parsed.",
                    "group": ""
                },
                {
                    "name": "record.unknown",
                    "description": "A record in a file has an unknown type.",
                    "group": ""
                },
                {
                    "name": "record.size.maximum-limit-exceeded",
                    "description": "A record in a file has exceeded the maximum size limit.",
                    "group": ""
                }
            ],
            "settings": {
                "createBuildableEnvVars": false,
                "autoSubscribeAllEvents": true,
                "showEvents": true,
                "secureAuthFields": true,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoAddAllEventsToPipeline": false,
                "allowCustomEvents": false
            },
            "connectionTypes": [
                "source",
                "extractor"
            ]
        },
        {
            "_id": "62d56b4f1b6b3fa97cb9a82a",
            "frontend": {
                "spec": {
                    "title": "GitHub Repos",
                    "description": "A managed hosting solution for repository management using Git",
                    "type": "github-repos",
                    "category": "git",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/github-repos.svg",
                    "tags": [
                        "version-control",
                        "code"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "github-repos",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My GitHub Repos Connection"
                            },
                            {
                                "name": "GITHUB_REPOS_REPOSITORY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your GitHub Repository Name",
                                "placeholder": "Hello-World"
                            },
                            {
                                "name": "GITHUB_REPOS_ACCOUNT_USERNAME",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter the GitHub Repo Owner's Username",
                                "placeholder": "buildable"
                            },
                            {
                                "name": "GITHUB_REPOS_ACCESS_TOKEN",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your GitHub Personal Access Token",
                                "placeholder": "ghp_7PqohaaQWid5WnTYLRa96oQ05aQ8BO12pLuy"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "ref": "refs/heads/main",
                    "before": "a32cdc435447c710e35d4fff21572c1f4b586c6a",
                    "after": "2b972f39e5afd28f8444d952e9dae4c695d910f2",
                    "repository": {
                        "id": 514309993,
                        "node_id": "R_kgDOHqe_aQ",
                        "name": "my-repo",
                        "full_name": "integrabot-gh/my-repo",
                        "private": false,
                        "owner": {
                            "name": "integrabot-gh",
                            "email": "109363244+integrabot-gh@users.noreply.github.com",
                            "login": "integrabot-gh",
                            "id": 109363244,
                            "node_id": "U_kgDOBoTALA",
                            "avatar_url": "https://avatars.githubusercontent.com/u/109363244?v=4",
                            "gravatar_id": "",
                            "url": "https://api.github.com/users/integrabot-gh",
                            "html_url": "https://github.com/integrabot-gh",
                            "followers_url": "https://api.github.com/users/integrabot-gh/followers",
                            "following_url": "https://api.github.com/users/integrabot-gh/following{/other_user}",
                            "gists_url": "https://api.github.com/users/integrabot-gh/gists{/gist_id}",
                            "starred_url": "https://api.github.com/users/integrabot-gh/starred{/owner}{/repo}",
                            "subscriptions_url": "https://api.github.com/users/integrabot-gh/subscriptions",
                            "organizations_url": "https://api.github.com/users/integrabot-gh/orgs",
                            "repos_url": "https://api.github.com/users/integrabot-gh/repos",
                            "events_url": "https://api.github.com/users/integrabot-gh/events{/privacy}",
                            "received_events_url": "https://api.github.com/users/integrabot-gh/received_events",
                            "type": "User",
                            "site_admin": false
                        },
                        "html_url": "https://github.com/integrabot-gh/my-repo",
                        "description": "my-repo",
                        "fork": false,
                        "url": "https://github.com/integrabot-gh/my-repo",
                        "forks_url": "https://api.github.com/repos/integrabot-gh/my-repo/forks",
                        "keys_url": "https://api.github.com/repos/integrabot-gh/my-repo/keys{/key_id}",
                        "collaborators_url": "https://api.github.com/repos/integrabot-gh/my-repo/collaborators{/collaborator}",
                        "teams_url": "https://api.github.com/repos/integrabot-gh/my-repo/teams",
                        "hooks_url": "https://api.github.com/repos/integrabot-gh/my-repo/hooks",
                        "issue_events_url": "https://api.github.com/repos/integrabot-gh/my-repo/issues/events{/number}",
                        "events_url": "https://api.github.com/repos/integrabot-gh/my-repo/events",
                        "assignees_url": "https://api.github.com/repos/integrabot-gh/my-repo/assignees{/user}",
                        "branches_url": "https://api.github.com/repos/integrabot-gh/my-repo/branches{/branch}",
                        "tags_url": "https://api.github.com/repos/integrabot-gh/my-repo/tags",
                        "blobs_url": "https://api.github.com/repos/integrabot-gh/my-repo/git/blobs{/sha}",
                        "git_tags_url": "https://api.github.com/repos/integrabot-gh/my-repo/git/tags{/sha}",
                        "git_refs_url": "https://api.github.com/repos/integrabot-gh/my-repo/git/refs{/sha}",
                        "trees_url": "https://api.github.com/repos/integrabot-gh/my-repo/git/trees{/sha}",
                        "statuses_url": "https://api.github.com/repos/integrabot-gh/my-repo/statuses/{sha}",
                        "languages_url": "https://api.github.com/repos/integrabot-gh/my-repo/languages",
                        "stargazers_url": "https://api.github.com/repos/integrabot-gh/my-repo/stargazers",
                        "contributors_url": "https://api.github.com/repos/integrabot-gh/my-repo/contributors",
                        "subscribers_url": "https://api.github.com/repos/integrabot-gh/my-repo/subscribers",
                        "subscription_url": "https://api.github.com/repos/integrabot-gh/my-repo/subscription",
                        "commits_url": "https://api.github.com/repos/integrabot-gh/my-repo/commits{/sha}",
                        "git_commits_url": "https://api.github.com/repos/integrabot-gh/my-repo/git/commits{/sha}",
                        "comments_url": "https://api.github.com/repos/integrabot-gh/my-repo/comments{/number}",
                        "issue_comment_url": "https://api.github.com/repos/integrabot-gh/my-repo/issues/comments{/number}",
                        "contents_url": "https://api.github.com/repos/integrabot-gh/my-repo/contents/{+path}",
                        "compare_url": "https://api.github.com/repos/integrabot-gh/my-repo/compare/{base}...{head}",
                        "merges_url": "https://api.github.com/repos/integrabot-gh/my-repo/merges",
                        "archive_url": "https://api.github.com/repos/integrabot-gh/my-repo/{archive_format}{/ref}",
                        "downloads_url": "https://api.github.com/repos/integrabot-gh/my-repo/downloads",
                        "issues_url": "https://api.github.com/repos/integrabot-gh/my-repo/issues{/number}",
                        "pulls_url": "https://api.github.com/repos/integrabot-gh/my-repo/pulls{/number}",
                        "milestones_url": "https://api.github.com/repos/integrabot-gh/my-repo/milestones{/number}",
                        "notifications_url": "https://api.github.com/repos/integrabot-gh/my-repo/notifications{?since,all,participating}",
                        "labels_url": "https://api.github.com/repos/integrabot-gh/my-repo/labels{/name}",
                        "releases_url": "https://api.github.com/repos/integrabot-gh/my-repo/releases{/id}",
                        "deployments_url": "https://api.github.com/repos/integrabot-gh/my-repo/deployments",
                        "created_at": 1657897319,
                        "updated_at": "2022-07-15T15:01:59Z",
                        "pushed_at": 1658155817,
                        "git_url": "git://github.com/integrabot-gh/my-repo.git",
                        "ssh_url": "git@github.com:integrabot-gh/my-repo.git",
                        "clone_url": "https://github.com/integrabot-gh/my-repo.git",
                        "svn_url": "https://github.com/integrabot-gh/my-repo",
                        "homepage": null,
                        "size": 1,
                        "stargazers_count": 0,
                        "watchers_count": 0,
                        "language": null,
                        "has_issues": true,
                        "has_projects": true,
                        "has_downloads": true,
                        "has_wiki": true,
                        "has_pages": false,
                        "forks_count": 0,
                        "mirror_url": null,
                        "archived": false,
                        "disabled": false,
                        "open_issues_count": 0,
                        "license": null,
                        "allow_forking": true,
                        "is_template": false,
                        "web_commit_signoff_required": false,
                        "topics": [],
                        "visibility": "public",
                        "forks": 0,
                        "open_issues": 0,
                        "watchers": 0,
                        "default_branch": "main",
                        "stargazers": 0,
                        "master_branch": "main"
                    },
                    "pusher": {
                        "name": "integrabot-gh",
                        "email": "109363244+integrabot-gh@users.noreply.github.com"
                    },
                    "sender": {
                        "login": "integrabot-gh",
                        "id": 109363244,
                        "node_id": "U_kgDOBoTALA",
                        "avatar_url": "https://avatars.githubusercontent.com/u/109363244?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/integrabot-gh",
                        "html_url": "https://github.com/integrabot-gh",
                        "followers_url": "https://api.github.com/users/integrabot-gh/followers",
                        "following_url": "https://api.github.com/users/integrabot-gh/following{/other_user}",
                        "gists_url": "https://api.github.com/users/integrabot-gh/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/integrabot-gh/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/integrabot-gh/subscriptions",
                        "organizations_url": "https://api.github.com/users/integrabot-gh/orgs",
                        "repos_url": "https://api.github.com/users/integrabot-gh/repos",
                        "events_url": "https://api.github.com/users/integrabot-gh/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/integrabot-gh/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "created": false,
                    "deleted": false,
                    "forced": false,
                    "base_ref": null,
                    "compare": "https://github.com/integrabot-gh/my-repo/compare/a32cdc435447...2b972f39e5af",
                    "commits": [
                        {
                            "id": "2b972f39e5afd28f8444d952e9dae4c695d910f2",
                            "tree_id": "700417f8d7a16df28ad99dd4467fcf138bab7f95",
                            "distinct": true,
                            "message": "change README.md",
                            "timestamp": "2022-07-18T15:50:17+01:00",
                            "url": "https://github.com/integrabot-gh/my-repo/commit/2b972f39e5afd28f8444d952e9dae4c695d910f2",
                            "author": {
                                "name": "integrabot-gh",
                                "email": "109363244+integrabot-gh@users.noreply.github.com",
                                "username": "integrabot-gh"
                            },
                            "committer": {
                                "name": "GitHub",
                                "email": "noreply@github.com",
                                "username": "web-flow"
                            },
                            "added": [],
                            "removed": [],
                            "modified": [
                                "README.md"
                            ]
                        }
                    ],
                    "head_commit": {
                        "id": "2b972f39e5afd28f8444d952e9dae4c695d910f2",
                        "tree_id": "700417f8d7a16df28ad99dd4467fcf138bab7f95",
                        "distinct": true,
                        "message": "change README.md",
                        "timestamp": "2022-07-18T15:50:17+01:00",
                        "url": "https://github.com/integrabot-gh/my-repo/commit/2b972f39e5afd28f8444d952e9dae4c695d910f2",
                        "author": {
                            "name": "integrabot-gh",
                            "email": "109363244+integrabot-gh@users.noreply.github.com",
                            "username": "integrabot-gh"
                        },
                        "committer": {
                            "name": "GitHub",
                            "email": "noreply@github.com",
                            "username": "web-flow"
                        },
                        "added": [],
                        "removed": [],
                        "modified": [
                            "README.md"
                        ]
                    }
                }
            },
            "integrationApiVersion": "NA",
            "events": [
                {
                    "name": "branch_protection_rule",
                    "description": "Branch protection rule created, deleted or edited.",
                    "group": ""
                },
                {
                    "name": "check_run",
                    "description": "Check run is created, requested, rerequested, or completed.",
                    "group": ""
                },
                {
                    "name": "check_suite",
                    "description": "Check suite is requested, rerequested, or completed.",
                    "group": ""
                },
                {
                    "name": "code_scanning_alert",
                    "description": "Code Scanning alert created, fixed in branch, or closed",
                    "group": ""
                },
                {
                    "name": "commit_comment",
                    "description": "Commit or diff commented on.",
                    "group": ""
                },
                {
                    "name": "create",
                    "description": "Branch or tag created.",
                    "group": ""
                },
                {
                    "name": "delete",
                    "description": "Branch or tag deleted.",
                    "group": ""
                },
                {
                    "name": "deployment",
                    "description": "Repository was deployed or a deployment was deleted.",
                    "group": ""
                },
                {
                    "name": "deployment_status",
                    "description": "Deployment status updated from the API.",
                    "group": ""
                },
                {
                    "name": "deploy_key",
                    "description": "A deploy key is created or deleted from a repository",
                    "group": ""
                },
                {
                    "name": "discussion",
                    "description": "Discussion created, edited, pinned, unpinned, locked, unlocked, transferred, answered, unanswered, labeled, unlabeled, had its category changed, or was deleted.",
                    "group": ""
                },
                {
                    "name": "discussion_comment",
                    "description": "Discussion comment created, edited, or deleted.",
                    "group": ""
                },
                {
                    "name": "fork",
                    "description": "Repository forked.",
                    "group": ""
                },
                {
                    "name": "gollum",
                    "description": "Wiki page updated.",
                    "group": ""
                },
                {
                    "name": "issues",
                    "description": "Issue opened, edited, deleted, transferred, pinned, unpinned, closed, reopened, assigned, unassigned, labeled, unlabeled, milestoned, demilestoned, locked, or unlocked.",
                    "group": ""
                },
                {
                    "name": "issue_comment",
                    "description": "Issue comment created, edited, or deleted.",
                    "group": ""
                },
                {
                    "name": "label",
                    "description": "Label created, edited, or deleted.",
                    "group": ""
                },
                {
                    "name": "member",
                    "description": "Collaborator added, removed or changed.",
                    "group": ""
                },
                {
                    "name": "meta",
                    "description": "This particular hook is deleted.",
                    "group": ""
                },
                {
                    "name": "milestone",
                    "description": "Milestone created, closed, opened, edited, or deleted.",
                    "group": ""
                },
                {
                    "name": "package",
                    "description": "GitHub Packages published or updated in a repository.",
                    "group": ""
                },
                {
                    "name": "page_build",
                    "description": "Pages site built.",
                    "group": ""
                },
                {
                    "name": "project",
                    "description": "Project created, updated, or deleted.",
                    "group": ""
                },
                {
                    "name": "project_card",
                    "description": "Project card created, updated, or deleted.",
                    "group": ""
                },
                {
                    "name": "project_column",
                    "description": "Project column created, updated, moved or deleted.",
                    "group": ""
                },
                {
                    "name": "pull_request",
                    "description": "Pull request opened, closed, reopened, edited, assigned, unassigned, review requested, review request removed, labeled, unlabeled, synchronized, ready for review, converted to draft, locked, unlocked, auto merge enabled, auto merge disabled, milestoned, or demilestoned.",
                    "group": ""
                },
                {
                    "name": "pull_request_review",
                    "description": "Pull request review submitted, edited, or dismissed.",
                    "group": ""
                },
                {
                    "name": "pull_request_review_comment",
                    "description": "Pull request diff comment created, edited, or deleted.",
                    "group": ""
                },
                {
                    "name": "pull_request_review_thread",
                    "description": "A pull request review thread was resolved or unresolved.",
                    "group": ""
                },
                {
                    "name": "push",
                    "description": "Git push to a repository.",
                    "group": ""
                },
                {
                    "name": "registry_package",
                    "description": "Registry package published or updated in a repository.",
                    "group": ""
                },
                {
                    "name": "release",
                    "description": "Release created, edited, published, unpublished, or deleted.",
                    "group": ""
                },
                {
                    "name": "repository",
                    "description": "Repository created, deleted, archived, unarchived, publicized, privatized, edited, renamed, or transferred.",
                    "group": ""
                },
                {
                    "name": "repository_import",
                    "description": "Repository import succeeded, failed, or cancelled.",
                    "group": ""
                },
                {
                    "name": "repository_vulnerability_alert",
                    "description": "Dependabot alert (aka dependency vulnerability alert) created, resolved, or dismissed on a repository.",
                    "group": ""
                },
                {
                    "name": "secret_scanning_alert",
                    "description": "Secrets scanning alert created, resolved, or reopened",
                    "group": ""
                },
                {
                    "name": "secret_scanning_alert_location",
                    "description": "Secrets scanning alert location created",
                    "group": ""
                },
                {
                    "name": "star",
                    "description": "A star is created or deleted from a repository.",
                    "group": ""
                },
                {
                    "name": "status",
                    "description": "Commit status updated from the API.",
                    "group": ""
                },
                {
                    "name": "team_add",
                    "description": "Team added or modified on a repository.",
                    "group": ""
                },
                {
                    "name": "public",
                    "description": "Repository changes from private to public.",
                    "group": ""
                },
                {
                    "name": "watch",
                    "description": "User stars a repository.",
                    "group": ""
                },
                {
                    "name": "workflow_job",
                    "description": "Workflow job queued, requested or completed on a repository.",
                    "group": ""
                },
                {
                    "name": "workflow_run",
                    "description": "Workflow run requested or completed on a repository.",
                    "group": ""
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showEvents": true,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source"
            ],
            "actions": null
        },
        {
            "_id": "62f41e0e41cd41314d3a5b02",
            "frontend": {
                "spec": {
                    "title": "GitLab",
                    "description": "A DevOps software package that combines the ability to develop, secure, and operate software in a single application",
                    "type": "gitlab",
                    "category": "devops",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/gitlab.svg",
                    "tags": [
                        "git",
                        "deployment"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "gitlab",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My GitLab Connection"
                            },
                            {
                                "name": "GITLAB_ACCESS_TOKEN",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your GitLab Personal API Key",
                                "placeholder": "glpat-MDsSCit_wit61jf2bJgv"
                            },
                            {
                                "name": "GITLAB_PROJECT_ID",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your GitLab Project ID",
                                "placeholder": "39811640"
                            },
                            {
                                "name": "GITLAB_WEBHOOK_SECRET",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your GitLab Webhook Secret",
                                "placeholder": "some-secret-value"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "object_kind": "push",
                    "event_name": "push",
                    "before": "04b313cae1b737f001e9706988f8abd2aeee4663",
                    "after": "04b313cae1b737f001e9706988f8abd2aeee4663",
                    "ref": "refs/heads/main",
                    "checkout_sha": "04b313cae1b737f001e9706988f8abd2aeee4663",
                    "message": null,
                    "user_id": 12258219,
                    "user_name": "Michael Schofield",
                    "user_username": "mike.onbike",
                    "user_email": null,
                    "user_avatar": "https://secure.gravatar.com/avatar/7fc156ca309234333a82c25b63574fb8?s=80&d=identicon",
                    "project_id": 38449140,
                    "project": {
                        "id": 38449140,
                        "name": "myproj",
                        "description": null,
                        "web_url": "https://gitlab.com/schoff1/myproj",
                        "avatar_url": null,
                        "git_ssh_url": "git@gitlab.com:schoff1/myproj.git",
                        "git_http_url": "https://gitlab.com/schoff1/myproj.git",
                        "namespace": "schoff",
                        "visibility_level": 0,
                        "path_with_namespace": "schoff1/myproj",
                        "default_branch": "main",
                        "ci_config_path": "",
                        "homepage": "https://gitlab.com/schoff1/myproj",
                        "url": "git@gitlab.com:schoff1/myproj.git",
                        "ssh_url": "git@gitlab.com:schoff1/myproj.git",
                        "http_url": "https://gitlab.com/schoff1/myproj.git"
                    },
                    "commits": [
                        {
                            "id": "04b313cae1b737f001e9706988f8abd2aeee4663",
                            "message": "Initial commit",
                            "title": "Initial commit",
                            "timestamp": "2022-08-09T10:25:08+00:00",
                            "url": "https://gitlab.com/schoff1/myproj/-/commit/04b313cae1b737f001e9706988f8abd2aeee4663",
                            "author": {
                                "name": "Michael Schofield",
                                "email": "mike.schoff@somemail.com"
                            },
                            "added": [
                                "README.md"
                            ],
                            "modified": [],
                            "removed": []
                        }
                    ],
                    "total_commits_count": 1,
                    "push_options": {},
                    "repository": {
                        "name": "myproj",
                        "url": "git@gitlab.com:schoff1/myproj.git",
                        "description": null,
                        "homepage": "https://gitlab.com/schoff1/myproj",
                        "git_http_url": "https://gitlab.com/schoff1/myproj.git",
                        "git_ssh_url": "git@gitlab.com:schoff1/myproj.git",
                        "visibility_level": 0
                    }
                }
            },
            "integrationApiVersion": "NA",
            "events": [
                {
                    "name": "confidential_issues_events",
                    "description": "A new confidential issue is created or an existing issue is updated, closed, or reopened.",
                    "group": ""
                },
                {
                    "name": "confidential_note_events",
                    "description": "A confidential note/comment is made or an existing note is updated, closed, or reopened.",
                    "group": ""
                },
                {
                    "name": "deployment_events",
                    "description": "A deployment starts, succeeds, fails, or is canceled.\n",
                    "group": ""
                },
                {
                    "name": "issues_events",
                    "description": "A new issue is created or an existing issue is updated, closed, or reopened.",
                    "group": ""
                },
                {
                    "name": "job_events",
                    "description": "A job status changes.",
                    "group": ""
                },
                {
                    "name": "merge_requests_events",
                    "description": "A merge request is created, updated, merged, or closed, or a commit is added in the source branch.",
                    "group": ""
                },
                {
                    "name": "note_events",
                    "description": "A note/comment is made or an existing note is updated, closed, or reopened.",
                    "group": ""
                },
                {
                    "name": "pipeline_events",
                    "description": "A pipeline status changes.",
                    "group": ""
                },
                {
                    "name": "push_events",
                    "description": "A push is made to the repository.",
                    "group": ""
                },
                {
                    "name": "releases_events",
                    "description": "A release is created or updated",
                    "group": ""
                },
                {
                    "name": "tag_push_events",
                    "description": "Tags are created or deleted in the repository.",
                    "group": ""
                },
                {
                    "name": "wiki_page_events",
                    "description": "A wiki page is created, updated, or deleted.",
                    "group": ""
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showEvents": true,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source"
            ],
            "actions": null
        },
        {
            "_id": "conn_def_src_4c1aeea20e5e494e97b70af5774ecc8a",
            "frontend": {
                "spec": {
                    "title": "Node.js",
                    "description": "Receive events emitted from your Node app",
                    "type": "nodejs",
                    "category": "nodejs",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/nodejs.svg",
                    "tags": [
                        "javascript",
                        "sdk"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "nodejs",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Node.js Connection"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": false,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "showSecret": true,
                "allowCustomEvents": true,
                "showEvents": false,
                "secureAuthFields": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showUrl": false,
                "hasEvents": true
            },
            "connectionTypes": [
                "source"
            ]
        },
        {
            "_id": "62fd13fbee38e400144999a4",
            "frontend": {
                "spec": {
                    "title": "PagerDuty",
                    "description": "A cloud computing company specializing in a SaaS incident responses",
                    "type": "pagerduty",
                    "category": "observability",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/pagerduty.svg",
                    "tags": [
                        "monitoring",
                        "incident"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "pagerduty",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My PagerDuty Connection"
                            },
                            {
                                "name": "PAGERDUTY_API_TOKEN",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your PagerDuty API Token",
                                "placeholder": "y_NbAkKc66ryYTWUXYEu"
                            },
                            {
                                "name": "PAGERDUTY_FILTER_TYPE",
                                "type": "select",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Select the Filter Type",
                                "placeholder": "",
                                "options": [
                                    {
                                        "name": "Account Reference",
                                        "value": "account_reference"
                                    },
                                    {
                                        "name": "Service Reference",
                                        "value": "service_reference"
                                    },
                                    {
                                        "name": "Team Reference",
                                        "value": "team_reference"
                                    }
                                ]
                            },
                            {
                                "name": "PAGERDUTY_FILTER_ID",
                                "type": "input",
                                "rules": {},
                                "label": "Enter your PagerDuty Filter ID",
                                "placeholder": "P393ZNQ"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "event": {
                        "id": "5ac64822-4adc-4fda-ade0-410becf0de4f",
                        "event_type": "incident.priority_updated",
                        "resource_type": "incident",
                        "occurred_at": "2020-10-02T18:45:22.169Z",
                        "agent": {
                            "html_url": "https://acme.pagerduty.com/users/PLH1HKV",
                            "id": "PLH1HKV",
                            "self": "https://api.pagerduty.com/users/PLH1HKV",
                            "summary": "Tenex Engineer",
                            "type": "user_reference"
                        },
                        "client": {
                            "name": "PagerDuty"
                        },
                        "data": {
                            "id": "PGR0VU2",
                            "type": "incident",
                            "self": "https://api.pagerduty.com/incidents/PGR0VU2",
                            "html_url": "https://acme.pagerduty.com/incidents/PGR0VU2",
                            "number": 2,
                            "status": "triggered",
                            "incident_key": "d3640fbd41094207a1c11e58e46b1662",
                            "created_at": "2020-04-09T15:16:27Z",
                            "title": "A little bump in the road",
                            "service": {
                                "html_url": "https://acme.pagerduty.com/services/PF9KMXH",
                                "id": "PF9KMXH",
                                "self": "https://api.pagerduty.com/services/PF9KMXH",
                                "summary": "API Service",
                                "type": "service_reference"
                            },
                            "assignees": [
                                {
                                    "html_url": "https://acme.pagerduty.com/users/PTUXL6G",
                                    "id": "PTUXL6G",
                                    "self": "https://api.pagerduty.com/users/PTUXL6G",
                                    "summary": "User 123",
                                    "type": "user_reference"
                                }
                            ],
                            "escalation_policy": {
                                "html_url": "https://acme.pagerduty.com/escalation_policies/PUS0KTE",
                                "id": "PUS0KTE",
                                "self": "https://api.pagerduty.com/escalation_policies/PUS0KTE",
                                "summary": "Default",
                                "type": "escalation_policy_reference"
                            },
                            "teams": [
                                {
                                    "html_url": "https://acme.pagerduty.com/teams/PFCVPS0",
                                    "id": "PFCVPS0",
                                    "self": "https://api.pagerduty.com/teams/PFCVPS0",
                                    "summary": "Engineering",
                                    "type": "team_reference"
                                }
                            ],
                            "priority": {
                                "html_url": "https://acme.pagerduty.com/account/incident_priorities",
                                "id": "PSO75BM",
                                "self": "https://api.pagerduty.com/priorities/PSO75BM",
                                "summary": "P1",
                                "type": "priority_reference"
                            },
                            "urgency": "high",
                            "conference_bridge": {
                                "conference_number": "+1 1234123412,,987654321#",
                                "conference_url": "https://example.com"
                            },
                            "resolve_reason": null
                        }
                    }
                }
            },
            "integrationApiVersion": "Webhooks v3",
            "events": [
                {
                    "name": "incident.acknowledged",
                    "description": "Sent when an incident is acknowledged.",
                    "group": ""
                },
                {
                    "name": "incident.annotated",
                    "description": "Sent when a note is added to an incident.",
                    "group": ""
                },
                {
                    "name": "incident.delegated",
                    "description": "Sent when an incident has been reassigned to another escalation policy.",
                    "group": ""
                },
                {
                    "name": "incident.escalated",
                    "description": "Sent when an incident has been escalated to another user in the same escalation level.",
                    "group": ""
                },
                {
                    "name": "incident.priority_updated",
                    "description": "Sent when the priority of an incident has changed.",
                    "group": ""
                },
                {
                    "name": "incident.reassigned",
                    "description": "Sent when an incident has been reassigned to another user.",
                    "group": ""
                },
                {
                    "name": "incident.reopened",
                    "description": "Sent when an incident is reopened.",
                    "group": ""
                },
                {
                    "name": "incident.resolved",
                    "description": "Sent when an incident has been resolved.",
                    "group": ""
                },
                {
                    "name": "incident.responder.added",
                    "description": "Sent when a responder has been added to an incident.",
                    "group": ""
                },
                {
                    "name": "incident.responder.replied",
                    "description": "Sent when a responder replies to a request.",
                    "group": ""
                },
                {
                    "name": "incident.status_update_published",
                    "description": "Sent when a status update is added to an incident.",
                    "group": ""
                },
                {
                    "name": "incident.triggered",
                    "description": "Sent when an incident is newly created/triggered.",
                    "group": ""
                },
                {
                    "name": "incident.unacknowledged",
                    "description": "Sent when an incident is unacknowledged.",
                    "group": ""
                },
                {
                    "name": "service.created",
                    "description": "Sent when a service is created.",
                    "group": ""
                },
                {
                    "name": "service.deleted",
                    "description": "Sent when a service is deleted.",
                    "group": ""
                },
                {
                    "name": "service.updated",
                    "description": "Sent when a service is updated.",
                    "group": ""
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showEvents": true,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source"
            ],
            "actions": null
        },
        {
            "_id": "631245355b55e0001353ad49",
            "frontend": {
                "spec": {
                    "title": "PayPal",
                    "description": "A multinational payment processing software",
                    "type": "paypal",
                    "category": "finance",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/paypal.svg",
                    "tags": [
                        "payment",
                        "ecommerce"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "paypal",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My PayPal Connection"
                            },
                            {
                                "name": "PAYPAL_CLIENT_ID",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Paypal Client ID",
                                "placeholder": "EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM"
                            },
                            {
                                "name": "PAYPAL_CLIENT_SECRET",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Paypal Client Secret",
                                "placeholder": "EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "id": "WH-2N1678257S892762B-8MC99539P4557624Y",
                    "event_version": "1.0",
                    "create_time": "2016-04-28T11:21:44Z",
                    "resource_type": "plan",
                    "event_type": "BILLING.PLAN.CREATED",
                    "summary": "A billing plan was created",
                    "resource": {
                        "id": "P-7LT50814996943336LSNDODY",
                        "merchant_preferences": {
                            "setup_fee": {
                                "currency": "USD",
                                "value": "1"
                            },
                            "return_url": "http://www.paypal.com",
                            "cancel_url": "http://www.yahoo.com",
                            "auto_bill_amount": "YES",
                            "initial_fail_amount_action": "CONTINUE",
                            "max_fail_attempts": "21"
                        },
                        "update_time": "2016-04-28T11:21:31.151Z",
                        "description": "test web new",
                        "payment_definitions": [
                            {
                                "name": "Payment Definition-1",
                                "type": "REGULAR",
                                "frequency": "Month",
                                "frequency_interval": "1",
                                "amount": {
                                    "currency": "USD",
                                    "value": "10"
                                },
                                "cycles": "15",
                                "charge_models": [
                                    {
                                        "type": "SHIPPING",
                                        "amount": {
                                            "currency": "USD",
                                            "value": "1"
                                        },
                                        "id": "CHM-29V063578B632154XLSNDODY"
                                    },
                                    {
                                        "type": "TAX",
                                        "amount": {
                                            "currency": "USD",
                                            "value": "2"
                                        },
                                        "id": "CHM-72N78855RJ303084YLSNDODY"
                                    }
                                ],
                                "id": "PD-28U66480VB469201XLSNDODY"
                            },
                            {
                                "name": "Payment Definition-2",
                                "type": "TRIAL",
                                "frequency": "Month",
                                "frequency_interval": "1",
                                "amount": {
                                    "currency": "USD",
                                    "value": "5"
                                },
                                "cycles": "5",
                                "charge_models": [
                                    {
                                        "type": "SHIPPING",
                                        "amount": {
                                            "currency": "USD",
                                            "value": "1"
                                        },
                                        "id": "CHM-4CT119433N5199501LSNDODY"
                                    },
                                    {
                                        "type": "TAX",
                                        "amount": {
                                            "currency": "USD",
                                            "value": "1"
                                        },
                                        "id": "CHM-38H015979N656741TLSNDODY"
                                    }
                                ],
                                "id": "PD-99B78670BE878604GLSNDODY"
                            }
                        ],
                        "name": "Fast Speed Plan",
                        "state": "CREATED",
                        "create_time": "2016-04-28T11:21:31.151Z",
                        "links": [
                            {
                                "href": "https://api.paypal.com/v1/payments/billing-plans/P-7LT50814996943336LSNDODY",
                                "rel": "self",
                                "method": "GET"
                            }
                        ],
                        "type": "FIXED"
                    },
                    "links": [
                        {
                            "href": "https://api.paypal.com/v1/notifications/webhooks-events/WH-2N1678257S892762B-8MC99539P4557624Y",
                            "rel": "self",
                            "method": "GET"
                        },
                        {
                            "href": "https://api.paypal.com/v1/notifications/webhooks-events/WH-2N1678257S892762B-8MC99539P4557624Y/resend",
                            "rel": "resend",
                            "method": "POST"
                        }
                    ]
                }
            },
            "integrationApiVersion": "NA",
            "events": [
                {
                    "name": "BILLING.PLAN.ACTIVATED",
                    "description": "A billing plan is activated.",
                    "group": "Subscriptions"
                },
                {
                    "name": "BILLING.PLAN.CREATED",
                    "description": "A billing plan is created.",
                    "group": "Billing plans and agreements"
                },
                {
                    "name": "BILLING.PLAN.DEACTIVATED",
                    "description": "A billing plan is deactivated.",
                    "group": "Subscriptions"
                },
                {
                    "name": "BILLING.PLAN.PRICING-CHANGE.ACTIVATED",
                    "description": "A price change for the plan is activated.",
                    "group": "Subscriptions"
                },
                {
                    "name": "BILLING.PLAN.PRICING-CHANGE.INPROGRESS",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "BILLING.PLAN.UPDATED",
                    "description": "A billing plan is updated.",
                    "group": "Billing plans and agreements"
                },
                {
                    "name": "BILLING.SUBSCRIPTION.ACTIVATED",
                    "description": "A subscription is activated.",
                    "group": "Subscriptions"
                },
                {
                    "name": "BILLING.SUBSCRIPTION.CANCELLED",
                    "description": "A billing agreement is canceled.",
                    "group": "Billing plans and agreements"
                },
                {
                    "name": "BILLING.SUBSCRIPTION.CREATED",
                    "description": "A subscription is created.",
                    "group": "Subscriptions"
                },
                {
                    "name": "BILLING.SUBSCRIPTION.EXPIRED",
                    "description": "A subscription expires.",
                    "group": "Subscriptions"
                },
                {
                    "name": "BILLING.SUBSCRIPTION.PAYMENT.FAILED",
                    "description": "Payment failed on subscription.",
                    "group": "Subscriptions"
                },
                {
                    "name": "BILLING.SUBSCRIPTION.RE-ACTIVATED",
                    "description": "A billing agreement is re-activated.",
                    "group": "Billing plans and agreements"
                },
                {
                    "name": "BILLING.SUBSCRIPTION.SUSPENDED",
                    "description": "A billing agreement is suspended.",
                    "group": "Billing plans and agreements"
                },
                {
                    "name": "BILLING.SUBSCRIPTION.UPDATED",
                    "description": "A billing agreement is updated.",
                    "group": "Billing plans and agreements"
                },
                {
                    "name": "CATALOG.PRODUCT.CREATED",
                    "description": "A product is created.",
                    "group": "Subscriptions"
                },
                {
                    "name": "CATALOG.PRODUCT.UPDATED",
                    "description": "A product is updated.",
                    "group": "Subscriptions"
                },
                {
                    "name": "CHECKOUT.CHECKOUT.BUYER-APPROVED",
                    "description": "Express checkout payment is created and approved by buyer.",
                    "group": "Checkout buyer approval"
                },
                {
                    "name": "CHECKOUT.ORDER.APPROVED",
                    "description": "See Orders.",
                    "group": "Checkout buyer approval"
                },
                {
                    "name": "CHECKOUT.ORDER.COMPLETED",
                    "description": "See CHECKOUT.ORDER.COMPLETED.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "CHECKOUT.ORDER.SAVED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "CHECKOUT.ORDER.VOIDED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "COLLECTION.ACTIVITY.EXECUTED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "COMPLIANCE.PROCESS.AGENT-ACTION-INITIATED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "COMPLIANCE.PROCESS.COMPLETED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "COMPLIANCE.PROCESS.END-USER-ACTION-REQUIRED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "COMPLIANCE.PROCESS.EXEMPTED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "COMPLIANCE.PROCESS.FAILED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "COMPLIANCE.PROCESS.NOT-APPLIED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "COMPLIANCE.PROCESS.SYSTEM-ACTION-INITIATED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "CUSTOMER-SUPPORT.CHARGEBACK.DECISION-RESPONDED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "CUSTOMER.DISPUTE.CREATED",
                    "description": "A dispute is created.",
                    "group": "Disputes"
                },
                {
                    "name": "CUSTOMER.DISPUTE.RESOLVED",
                    "description": "A dispute is resolved.",
                    "group": "Disputes"
                },
                {
                    "name": "CUSTOMER.DISPUTE.UPDATED",
                    "description": "A dispute is updated.",
                    "group": "Disputes"
                },
                {
                    "name": "CUSTOMER.MANAGED-ACCOUNT.CREATED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "CUSTOMER.MANAGED-ACCOUNT.RISK-ASSESSED",
                    "description": "Managed account has been risk assessed or the risk assessment has been changed.",
                    "group": "Merchant onboarding"
                },
                {
                    "name": "CUSTOMER.MANAGED-ACCOUNT.UPDATED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "CUSTOMER.MERCHANT-INTEGRATION.CAPABILITY-UPDATED",
                    "description": "PayPal must enable the merchant's account as PPCP for this webhook to work.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "CUSTOMER.MERCHANT-INTEGRATION.PRODUCT-SUBSCRIPTION-UPDATED",
                    "description": "The products available to the merchant have changed.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "CUSTOMER.MERCHANT-INTEGRATION.SELLER-ALREADY-INTEGRATED",
                    "description": "Merchant onboards again to a partner.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "CUSTOMER.MERCHANT-INTEGRATION.SELLER-CONSENT-GRANTED",
                    "description": "Merchant grants consents to a partner.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "CUSTOMER.MERCHANT-INTEGRATION.SELLER-EMAIL-CONFIRMED",
                    "description": "Merchant confirms the email and consents are granted.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "CUSTOMER.MERCHANT-INTEGRATION.SELLER-ERROR-BAD-REQUEST",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "CUSTOMER.MERCHANT-INTEGRATION.SELLER-ERROR-INTERNAL-SERVER-ERROR",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "CUSTOMER.MERCHANT-INTEGRATION.SELLER-ONBOARDING-INITIATED",
                    "description": "PayPal creates a merchant account from the partner's onboarding link.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "CUSTOMER.MERCHANT-INTEGRATION.SELLER-ONBOARDING-STARTED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "CUSTOMER.PARTNER-FINANCIAL-ACCOUNT.DEBITED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "CUSTOMER.PAYOUT.COMPLETED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "CUSTOMER.PAYOUT.FAILED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "CUSTOMER.USER-PROFILE.PASSWORD-CHANGED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "IDENTITY.AUTHORIZATION-CONSENT.GRANTED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "IDENTITY.AUTHORIZATION-CONSENT.REVOKED",
                    "description": "A user's consent token is revoked.",
                    "group": "Log in with PayPal"
                },
                {
                    "name": "INVOICING.INVOICE.CANCELLED",
                    "description": "A merchant or customer cancels an invoice.",
                    "group": "Invoicing"
                },
                {
                    "name": "INVOICING.INVOICE.CREATED",
                    "description": "An invoice is created.",
                    "group": "Invoicing"
                },
                {
                    "name": "INVOICING.INVOICE.PAID",
                    "description": "An invoice is paid, partially paid, or payment is made and is pending.",
                    "group": "Invoicing"
                },
                {
                    "name": "INVOICING.INVOICE.REFUNDED",
                    "description": "An invoice is refunded or partially refunded.",
                    "group": "Invoicing"
                },
                {
                    "name": "INVOICING.INVOICE.SCHEDULED",
                    "description": "An invoice is scheduled.",
                    "group": "Invoicing"
                },
                {
                    "name": "INVOICING.INVOICE.UPDATED",
                    "description": "An invoice is updated.",
                    "group": "Invoicing"
                },
                {
                    "name": "LOYALTY.REWARDS-PAYOUT.COMPLETED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "MERCHANT.ONBOARDING.COMPLETED",
                    "description": "Merchant completes setup.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "MERCHANT.PARTNER-CONSENT.REVOKED",
                    "description": "The consents for a merchant account setup are revoked or an account is closed.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "PAYMENT-NETWORKS.ALTERNATIVE-PAYMENT.COMPLETED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "PAYMENT.AUTHORIZATION.CREATED",
                    "description": "A payment authorization is created, approved, executed, or a future payment authorization is created.",
                    "group": "Authorized and captured payments"
                },
                {
                    "name": "PAYMENT.AUTHORIZATION.VOIDED",
                    "description": "A payment authorization is voided.",
                    "group": "Authorized and captured payments"
                },
                {
                    "name": "PAYMENT.CAPTURE.COMPLETED",
                    "description": "A payment capture completes.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "PAYMENT.CAPTURE.DENIED",
                    "description": "A payment capture is denied.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "PAYMENT.CAPTURE.PENDING",
                    "description": "The state of a payment capture changes to pending.",
                    "group": "Authorized and captured payments"
                },
                {
                    "name": "PAYMENT.CAPTURE.REFUNDED",
                    "description": "A merchant refunds a payment capture.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "PAYMENT.CAPTURE.REVERSED",
                    "description": "PayPal reverses a payment capture.",
                    "group": "Authorized and captured payments"
                },
                {
                    "name": "PAYMENT.ORDER.CANCELLED",
                    "description": "A payment order is canceled.",
                    "group": "Payment orders"
                },
                {
                    "name": "PAYMENT.ORDER.CREATED",
                    "description": "A payment order is created.",
                    "group": "Payment orders"
                },
                {
                    "name": "PAYMENT.PAYOUTS-ITEM.BLOCKED",
                    "description": "A payouts item is blocked.",
                    "group": "Batch payouts"
                },
                {
                    "name": "PAYMENT.PAYOUTS-ITEM.CANCELED",
                    "description": "A payouts item is canceled.",
                    "group": "Batch payouts"
                },
                {
                    "name": "PAYMENT.PAYOUTS-ITEM.DENIED",
                    "description": "A payouts item is denied.",
                    "group": "Batch payouts"
                },
                {
                    "name": "PAYMENT.PAYOUTS-ITEM.FAILED",
                    "description": "A payouts item fails.",
                    "group": "Batch payouts"
                },
                {
                    "name": "PAYMENT.PAYOUTS-ITEM.HELD",
                    "description": "A payouts item is held.",
                    "group": "Batch payouts"
                },
                {
                    "name": "PAYMENT.PAYOUTS-ITEM.REFUNDED",
                    "description": "A payouts item is refunded.",
                    "group": "Batch payouts"
                },
                {
                    "name": "PAYMENT.PAYOUTS-ITEM.RETURNED",
                    "description": "A payouts item is returned.",
                    "group": "Batch payouts"
                },
                {
                    "name": "PAYMENT.PAYOUTS-ITEM.SUCCEEDED",
                    "description": "A payouts item succeeds.",
                    "group": "Batch payouts"
                },
                {
                    "name": "PAYMENT.PAYOUTS-ITEM.UNCLAIMED",
                    "description": "A payouts item is unclaimed.",
                    "group": "Batch payouts"
                },
                {
                    "name": "PAYMENT.PAYOUTSBATCH.DENIED",
                    "description": "A batch payout payment is denied.",
                    "group": "Batch payouts"
                },
                {
                    "name": "PAYMENT.PAYOUTSBATCH.PROCESSING",
                    "description": "The state of a batch payout payment changes to processing.",
                    "group": "Batch payouts"
                },
                {
                    "name": "PAYMENT.PAYOUTSBATCH.SUCCESS",
                    "description": "A batch payout payment completes successfully.",
                    "group": "Batch payouts"
                },
                {
                    "name": "PAYMENT.REFUND.COMPLETED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "PAYMENT.SALE.COMPLETED",
                    "description": "A sale completes.",
                    "group": "Sales"
                },
                {
                    "name": "PAYMENT.SALE.DENIED",
                    "description": "The state of a sale changes from pending to denied.",
                    "group": "Sales"
                },
                {
                    "name": "PAYMENT.SALE.PENDING",
                    "description": "The state of a sale changes to pending.",
                    "group": "Sales"
                },
                {
                    "name": "PAYMENT.SALE.REFUNDED",
                    "description": "A merchant refunds a sale.",
                    "group": "Sales"
                },
                {
                    "name": "PAYMENT.SALE.REVERSED",
                    "description": "PayPal reverses a sale.",
                    "group": "Sales"
                },
                {
                    "name": "PAYMENTS.PAYMENT.CREATED",
                    "description": "Checkout payment is created and approved by buyer.",
                    "group": "Checkout buyer approval"
                },
                {
                    "name": "PAYMENT_NETWORKS.INSTRUMENT.LINKED-ACCOUNT-UPDATED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "PRICING.COMMISSION-CONFIG.CREATED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "PRICING.COMMISSION-CONFIG.PROVISIONED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "PRICING.COMMISSION-CONFIG.UPDATED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "RISK.DISPUTE.CREATED",
                    "description": "A risk dispute is created.",
                    "group": "Disputes"
                },
                {
                    "name": "TAXES.REPORTS.DELIVERED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "TAXES.REPORTS.GENERATED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "VAULT.CREDIT-CARD.CREATED",
                    "description": "A credit card is created.",
                    "group": "Vault"
                },
                {
                    "name": "VAULT.CREDIT-CARD.DELETED",
                    "description": "A credit card is deleted.",
                    "group": "Vault"
                },
                {
                    "name": "VAULT.CREDIT-CARD.UPDATED",
                    "description": "A credit card is updated.",
                    "group": "Vault"
                },
                {
                    "name": "VAULT.PAYMENT-TOKEN.CREATED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "VAULT.PAYMENT-TOKEN.DELETED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "VAULT.PAYMENT-TOKEN.DELETION-INITIATED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "CHECKOUT.ORDER.PROCESSED",
                    "description": "See CHECKOUT.ORDER.PROCESSED.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "CUSTOMER.ACCOUNT-LIMITATION.ADDED",
                    "description": "A limitation is added for a partner's managed account.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "CUSTOMER.ACCOUNT-LIMITATION.ESCALATED",
                    "description": "A limitation is escalated for a partner's managed account.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "CUSTOMER.ACCOUNT-LIMITATION.LIFTED",
                    "description": "A limitation was lifted for given merchant account.",
                    "group": "Merchant onboarding"
                },
                {
                    "name": "CUSTOMER.ACCOUNT-LIMITATION.UPDATED",
                    "description": "A limitation is updated for a partner's managed account.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "CUSTOMER.MANAGED-ACCOUNT.ACCOUNT-CREATED",
                    "description": "Managed account has been created.",
                    "group": "Merchant onboarding"
                },
                {
                    "name": "CUSTOMER.MANAGED-ACCOUNT.ACCOUNT-STATUS-CHANGED",
                    "description": "Capabilities and/or process status has been changed on a managed account.",
                    "group": "Merchant onboarding"
                },
                {
                    "name": "CUSTOMER.MANAGED-ACCOUNT.ACCOUNT-UPDATED",
                    "description": "Managed account has been updated.",
                    "group": "Merchant onboarding"
                },
                {
                    "name": "CUSTOMER.MANAGED-ACCOUNT.CREATION-FAILED",
                    "description": "Managed account creation failed.",
                    "group": "Merchant onboarding"
                },
                {
                    "name": "CUSTOMER.MANAGED-ACCOUNT.NEGATIVE-BALANCE-DEBIT-INITIATED",
                    "description": "Negative balance debit has been initiated on a managed account.",
                    "group": "Merchant onboarding"
                },
                {
                    "name": "CUSTOMER.MANAGED-ACCOUNT.NEGATIVE-BALANCE-NOTIFIED",
                    "description": "Negative balance debit has been notified on a managed account.",
                    "group": "Merchant onboarding"
                },
                {
                    "name": "PAYMENT.REFERENCED-PAYOUT-ITEM.COMPLETED",
                    "description": "Funds are disbursed to the seller and partner.",
                    "group": "Marketplaces and Platforms"
                },
                {
                    "name": "PAYMENT.REFERENCED-PAYOUT-ITEM.FAILED",
                    "description": "Attempt to disburse funds fails.",
                    "group": "Referenced payouts"
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showEvents": true,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source"
            ],
            "actions": null
        },
        {
            "_id": "630fb117d32a5f0012d39ada",
            "frontend": {
                "spec": {
                    "title": "ShipStation",
                    "description": "A multichannel sofware for managing shipping and tracking",
                    "type": "shipstation",
                    "category": "ecommerce",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/shipstation.svg",
                    "tags": [
                        "shipping",
                        "tracking"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "shipstation",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My ShipStation Connection"
                            },
                            {
                                "name": "SHIP_STATION_BASE_URL",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter ShipStation Base URL",
                                "placeholder": "https://ssapi.shipstation.com",
                                "value": "https://ssapi.shipstation.com"
                            },
                            {
                                "name": "SHIP_STATION_API_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your ShipStation API Key",
                                "placeholder": "15975fdsaasd"
                            },
                            {
                                "name": "SHIP_STATION_SECRET_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your ShipStation Secret Key",
                                "placeholder": "75945fdsaf97"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "resource_url": "https://ssapi11.shipstation.com/shipments?batchId=123456789&includeShipmentItems=False",
                    "resource_type": "SHIP_NOTIFY"
                }
            },
            "integrationApiVersion": "2020-03-02",
            "events": [
                {
                    "name": "ORDER_NOTIFY",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "ITEM_ORDER_NOTIFY",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "SHIP_NOTIFY",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "ITEM_SHIP_NOTIFY",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "FULFILLMENT_SHIPPED",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "FULFILLMENT_REJECTED",
                    "description": "",
                    "group": ""
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showEvents": true,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source"
            ],
            "actions": null
        },
        {
            "_id": "6296661448d9214b8e446de2",
            "frontend": {
                "spec": {
                    "title": "Shopify",
                    "description": "An e-commerce platform for online stores and retail point-of-sale systems",
                    "type": "shopify",
                    "category": "ecommerce",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/shopify.svg",
                    "tags": [
                        "business",
                        "ecommerce"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        },
                        {
                            "name": "Action",
                            "color": "blue"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "shopify",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Shopify Connection"
                            },
                            {
                                "name": "SHOPIFY_STORE_URL",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Shopify Store URL",
                                "placeholder": "your-store-name.myshopify.com"
                            },
                            {
                                "name": "SHOPIFY_ACCESS_TOKEN",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Shopify Access Token",
                                "placeholder": "shpat_38ba5a4236bd26a4244qfcd1ejf7l9v0"
                            },
                            {
                                "name": "SHOPIFY_API_SECRET_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Shopify API Secret Key",
                                "placeholder": "sk_test_Hrs6SAopgFPF0bZXSN3f6ELN"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "arguments": "IPod Nano - 8GB",
                    "body": null,
                    "created_at": "2015-04-20T08:33:57-11:00",
                    "id": 164748010,
                    "description": "Received a new order",
                    "path": "/admin/orders/406514653/transactions/#1145",
                    "message": "Received new order",
                    "subject_id": 406514653,
                    "subject_type": "Order",
                    "verb": "confirmed"
                }
            },
            "integrationApiVersion": "2022-04",
            "events": [
                {
                    "name": "app/uninstalled",
                    "group": "app",
                    "description": ""
                },
                {
                    "name": "carts/create",
                    "group": "carts",
                    "description": ""
                },
                {
                    "name": "carts/update",
                    "group": "carts",
                    "description": ""
                },
                {
                    "name": "checkouts/create",
                    "group": "checkouts",
                    "description": ""
                },
                {
                    "name": "checkouts/delete",
                    "group": "checkouts",
                    "description": ""
                },
                {
                    "name": "checkouts/update",
                    "group": "checkouts",
                    "description": ""
                },
                {
                    "name": "collection_listings/add",
                    "group": "collection_listings",
                    "description": ""
                },
                {
                    "name": "collection_listings/remove",
                    "group": "collection_listings",
                    "description": ""
                },
                {
                    "name": "collection_listings/update",
                    "group": "collection_listings",
                    "description": ""
                },
                {
                    "name": "collections/create",
                    "group": "collections",
                    "description": ""
                },
                {
                    "name": "collections/delete",
                    "group": "collections",
                    "description": ""
                },
                {
                    "name": "collections/update",
                    "group": "collections",
                    "description": ""
                },
                {
                    "name": "customer_groups/create",
                    "group": "customer_groups",
                    "description": ""
                },
                {
                    "name": "customer_groups/delete",
                    "group": "customer_groups",
                    "description": ""
                },
                {
                    "name": "customer_groups/update",
                    "group": "customer_groups",
                    "description": ""
                },
                {
                    "name": "customers/create",
                    "group": "customers",
                    "description": ""
                },
                {
                    "name": "customers/delete",
                    "group": "customers",
                    "description": ""
                },
                {
                    "name": "customers/disable",
                    "group": "customers",
                    "description": ""
                },
                {
                    "name": "customers/enable",
                    "group": "customers",
                    "description": ""
                },
                {
                    "name": "customers/update",
                    "group": "customers",
                    "description": ""
                },
                {
                    "name": "customers_marketing_consent/update",
                    "group": "customers_marketing_consent",
                    "description": ""
                },
                {
                    "name": "disputes/create",
                    "group": "disputes",
                    "description": ""
                },
                {
                    "name": "disputes/update",
                    "group": "disputes",
                    "description": ""
                },
                {
                    "name": "draft_orders/create",
                    "group": "draft_orders",
                    "description": ""
                },
                {
                    "name": "draft_orders/delete",
                    "group": "draft_orders",
                    "description": ""
                },
                {
                    "name": "draft_orders/update",
                    "group": "draft_orders",
                    "description": ""
                },
                {
                    "name": "fulfillment_events/create",
                    "group": "fulfillment_events",
                    "description": ""
                },
                {
                    "name": "fulfillment_events/delete",
                    "group": "fulfillment_events",
                    "description": ""
                },
                {
                    "name": "fulfillments/create",
                    "group": "fulfillments",
                    "description": ""
                },
                {
                    "name": "fulfillments/update",
                    "group": "fulfillments",
                    "description": ""
                },
                {
                    "name": "order_transactions/create",
                    "group": "order_transactions",
                    "description": ""
                },
                {
                    "name": "orders/cancelled",
                    "group": "orders",
                    "description": ""
                },
                {
                    "name": "orders/create",
                    "group": "orders",
                    "description": ""
                },
                {
                    "name": "orders/delete",
                    "group": "orders",
                    "description": ""
                },
                {
                    "name": "orders/edited",
                    "group": "orders",
                    "description": ""
                },
                {
                    "name": "orders/fulfilled",
                    "group": "orders",
                    "description": ""
                },
                {
                    "name": "orders/paid",
                    "group": "orders",
                    "description": ""
                },
                {
                    "name": "orders/partially_fulfilled",
                    "group": "orders",
                    "description": ""
                },
                {
                    "name": "orders/updated",
                    "group": "orders",
                    "description": ""
                },
                {
                    "name": "product_listings/add",
                    "group": "product_listings",
                    "description": ""
                },
                {
                    "name": "product_listings/remove",
                    "group": "product_listings",
                    "description": ""
                },
                {
                    "name": "product_listings/update",
                    "group": "product_listings",
                    "description": ""
                },
                {
                    "name": "scheduled_product_listings/add",
                    "group": "scheduled_product_listings",
                    "description": ""
                },
                {
                    "name": "scheduled_product_listings/update",
                    "group": "scheduled_product_listings",
                    "description": ""
                },
                {
                    "name": "scheduled_product_listings/remove",
                    "group": "scheduled_product_listings",
                    "description": ""
                },
                {
                    "name": "products/create",
                    "group": "products",
                    "description": ""
                },
                {
                    "name": "products/delete",
                    "group": "products",
                    "description": ""
                },
                {
                    "name": "products/update",
                    "group": "products",
                    "description": ""
                },
                {
                    "name": "refunds/create",
                    "group": "refunds",
                    "description": ""
                },
                {
                    "name": "shop/update",
                    "group": "shop",
                    "description": ""
                },
                {
                    "name": "themes/create",
                    "group": "themes",
                    "description": ""
                },
                {
                    "name": "themes/delete",
                    "group": "themes",
                    "description": ""
                },
                {
                    "name": "themes/publish",
                    "group": "themes",
                    "description": ""
                },
                {
                    "name": "themes/update",
                    "group": "themes",
                    "description": ""
                },
                {
                    "name": "inventory_levels/connect",
                    "group": "inventory_levels",
                    "description": ""
                },
                {
                    "name": "inventory_levels/update",
                    "group": "inventory_levels",
                    "description": ""
                },
                {
                    "name": "inventory_levels/disconnect",
                    "group": "inventory_levels",
                    "description": ""
                },
                {
                    "name": "inventory_items/create",
                    "group": "inventory_items",
                    "description": ""
                },
                {
                    "name": "inventory_items/update",
                    "group": "inventory_items",
                    "description": ""
                },
                {
                    "name": "inventory_items/delete",
                    "group": "inventory_items",
                    "description": ""
                },
                {
                    "name": "locations/create",
                    "group": "locations",
                    "description": ""
                },
                {
                    "name": "locations/update",
                    "group": "locations",
                    "description": ""
                },
                {
                    "name": "locations/delete",
                    "group": "locations",
                    "description": ""
                },
                {
                    "name": "tender_transactions/create",
                    "group": "tender_transactions",
                    "description": ""
                },
                {
                    "name": "locales/create",
                    "group": "locales",
                    "description": ""
                },
                {
                    "name": "locales/update",
                    "group": "locales",
                    "description": ""
                },
                {
                    "name": "domains/create",
                    "group": "domains",
                    "description": ""
                },
                {
                    "name": "domains/update",
                    "group": "domains",
                    "description": ""
                },
                {
                    "name": "domains/destroy",
                    "group": "domains",
                    "description": ""
                },
                {
                    "name": "profiles/create",
                    "group": "profiles",
                    "description": ""
                },
                {
                    "name": "profiles/update",
                    "group": "profiles",
                    "description": ""
                },
                {
                    "name": "profiles/delete",
                    "group": "profiles",
                    "description": ""
                },
                {
                    "name": "payment_terms/create",
                    "group": "payment_terms",
                    "description": ""
                },
                {
                    "name": "payment_terms/delete",
                    "group": "payment_terms",
                    "description": ""
                },
                {
                    "name": "payment_terms/update",
                    "group": "payment_terms",
                    "description": ""
                },
                {
                    "name": "selling_plan_groups/create",
                    "group": "selling_plan_groups",
                    "description": ""
                },
                {
                    "name": "selling_plan_groups/update",
                    "group": "selling_plan_groups",
                    "description": ""
                },
                {
                    "name": "selling_plan_groups/delete",
                    "group": "selling_plan_groups",
                    "description": ""
                },
                {
                    "name": "bulk_operations/finish",
                    "group": "bulk_operations",
                    "description": ""
                },
                {
                    "name": "markets/create",
                    "group": "markets",
                    "description": ""
                },
                {
                    "name": "markets/update",
                    "group": "markets",
                    "description": ""
                },
                {
                    "name": "markets/delete",
                    "group": "markets",
                    "description": ""
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": true,
                "subscriptionDelayMultiplier": 0.5,
                "showEvents": true,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source",
                "action"
            ],
            "actions": null
        },
        {
            "_id": "6310dd4e34d48b0013c58b0c",
            "frontend": {
                "spec": {
                    "title": "Square",
                    "description": "A multinational payment processing software",
                    "type": "square",
                    "category": "finance",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/square.svg",
                    "tags": [
                        "payment",
                        "POS"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "square",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Square Connection"
                            },
                            {
                                "name": "SQUARE_SECRET_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Square Secret Key",
                                "placeholder": "EAAAEBnbGWD5-ybNoEetUqm4ByyLLO4bNzfwnMx2v7skIBcaXVRsmUgWcvyb-tV7"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "merchant_id": "L602VB6EWFCV",
                    "type": "payment.updated",
                    "event_id": "1690c6ed-bf78-43b2-b15e-00bb9f324796",
                    "created_at": "2022-08-24T22:33:46.051Z",
                    "data": {
                        "type": "payment",
                        "id": "fnU8SnpNCZ3nyJXAW2ZMa9lVfMeZY",
                        "object": {}
                    }
                }
            },
            "integrationApiVersion": "2022-08-23",
            "events": [
                {
                    "name": "bank_account.created",
                    "description": "Published when you link an external bank account to a Square account in the Seller Dashboard.",
                    "group": "Bank Accounts"
                },
                {
                    "name": "bank_account.disabled",
                    "description": "Published when Square sets the status of a BankAccount to DISABLED.",
                    "group": "Bank Accounts"
                },
                {
                    "name": "bank_account.verified",
                    "description": "Published when Square sets the status of a BankAccount to VERIFIED.",
                    "group": "Bank Accounts"
                },
                {
                    "name": "booking.created",
                    "description": "Published when a booking is created.",
                    "group": "Bookings"
                },
                {
                    "name": "booking.updated",
                    "description": "Published when a booking is updated or cancelled.",
                    "group": "Bookings"
                },
                {
                    "name": "card.automatically_updated",
                    "description": "Published when a Card's expiration information or pan is automatically updated.",
                    "group": "Cards"
                },
                {
                    "name": "card.created",
                    "description": "Published when a Card is created or imported.",
                    "group": "Cards"
                },
                {
                    "name": "card.disabled",
                    "description": "Published when a Card is disabled.",
                    "group": "Cards"
                },
                {
                    "name": "card.forgotten",
                    "description": "Published when a Card is GDPR forgotten/vaulted.",
                    "group": "Cards"
                },
                {
                    "name": "card.updated",
                    "description": "Published when a Card is updated by the developer using the UpdateCard endpoint.",
                    "group": "Cards"
                },
                {
                    "name": "catalog.version.updated",
                    "description": "Published when the catalog is updated.",
                    "group": "Catalog"
                },
                {
                    "name": "customer.created",
                    "description": "Published when a customer is created.",
                    "group": "Customers"
                },
                {
                    "name": "customer.custom_attribute.deleted",
                    "description": "",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute.owned.deleted",
                    "description": "Published when a customer custom attribute owned by the subscribing application is deleted.",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute.owned.updated",
                    "description": "Published when a customer custom attribute owned by the subscribing application is created or updated.",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute.public.deleted",
                    "description": "",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute.public.updated",
                    "description": "",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute.updated",
                    "description": "",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute.visible.deleted",
                    "description": "Published when a customer custom attribute that is visible to the subscribing application is deleted.",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute.visible.updated",
                    "description": "Published when a customer custom attribute that is visible to the subscribing application is created or updated.",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute_definition.created",
                    "description": "",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute_definition.deleted",
                    "description": "",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute_definition.owned.created",
                    "description": "Published when a customer custom attribute definition is created by the subscribing application.",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute_definition.owned.deleted",
                    "description": "Published when a customer custom attribute definition created by the subscribing application is deleted.",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute_definition.owned.updated",
                    "description": "Published when a customer custom attribute definition created by the subscribing application is updated.",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute_definition.public.created",
                    "description": "",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute_definition.public.deleted",
                    "description": "",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute_definition.public.updated",
                    "description": "",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute_definition.updated",
                    "description": "",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute_definition.visible.created",
                    "description": "Published when a customer custom attribute definition that is visible to the subscribing application is created.",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute_definition.visible.deleted",
                    "description": "Published when a customer custom attribute definition that is visible to the subscribing application is deleted.",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.custom_attribute_definition.visible.updated",
                    "description": "Published when a customer custom attribute definition that is visible to the subscribing application is updated.",
                    "group": "Customer Custom Attributes"
                },
                {
                    "name": "customer.deleted",
                    "description": "Published when a customer is deleted.",
                    "group": "Customers"
                },
                {
                    "name": "customer.updated",
                    "description": "Published when a customer is updated.",
                    "group": "Customers"
                },
                {
                    "name": "device.code.paired",
                    "description": "Published when a Square Terminal has been paired with a Terminal API client and the device_id of the paired Square Terminal is available.",
                    "group": "Devices"
                },
                {
                    "name": "dispute.created",
                    "description": "Published when a Dispute is created.",
                    "group": "Disputes"
                },
                {
                    "name": "dispute.evidence.added",
                    "description": "",
                    "group": "Disputes"
                },
                {
                    "name": "dispute.evidence.created",
                    "description": "Published when evidence is added to a Dispute from the Disputes Dashboard in the Seller Dashboard, the Square Point of Sale app, or by calling either CreateDisputeEvidenceFile or CreateDisputeEvidenceText.",
                    "group": "Disputes"
                },
                {
                    "name": "dispute.evidence.deleted",
                    "description": "Published when evidence is removed from a Dispute from the Disputes Dashboard in the Seller Dashboard, the Square Point of Sale app, or by calling DeleteDisputeEvidence.",
                    "group": "Disputes"
                },
                {
                    "name": "dispute.evidence.removed",
                    "description": "",
                    "group": "Disputes"
                },
                {
                    "name": "dispute.state.changed",
                    "description": "",
                    "group": "Disputes"
                },
                {
                    "name": "dispute.state.updated",
                    "description": "Published when the state of a Dispute changes.",
                    "group": "Disputes"
                },
                {
                    "name": "gift_card.activity.created",
                    "description": "Published when a gift card activity is created.",
                    "group": "Gift Card Activities"
                },
                {
                    "name": "gift_card.activity.updated",
                    "description": "",
                    "group": "Gift Card Activities"
                },
                {
                    "name": "gift_card.created",
                    "description": "Published when a gift card is created.",
                    "group": "Gift Cards"
                },
                {
                    "name": "gift_card.customer_linked",
                    "description": "Published when a customer is linked to a gift card.",
                    "group": "Gift Cards"
                },
                {
                    "name": "gift_card.customer_unlinked",
                    "description": "Published when a customer is unlinked from a gift card.",
                    "group": "Gift Cards"
                },
                {
                    "name": "gift_card.updated",
                    "description": "Published when a gift card is updated.",
                    "group": "Gift Cards"
                },
                {
                    "name": "inventory.count.updated",
                    "description": "Published when the quantity is updated for a CatalogItemVariation.",
                    "group": "Inventory"
                },
                {
                    "name": "invoice.canceled",
                    "description": "Published when an Invoice is canceled.",
                    "group": "Invoices"
                },
                {
                    "name": "invoice.created",
                    "description": "Published when an Invoice is created.",
                    "group": "Invoices"
                },
                {
                    "name": "invoice.deleted",
                    "description": "Published when a draft Invoice is deleted.",
                    "group": "Invoices"
                },
                {
                    "name": "invoice.payment_made",
                    "description": "Published when a payment that is associated with an Invoice is completed.",
                    "group": "Invoices"
                },
                {
                    "name": "invoice.published",
                    "description": "Published when an Invoice transitions from a draft to a non-draft status.",
                    "group": "Invoices"
                },
                {
                    "name": "invoice.refunded",
                    "description": "Published when a refund is applied towards a payment of an Invoice.",
                    "group": "Invoices"
                },
                {
                    "name": "invoice.scheduled_charge_failed",
                    "description": "Published when an automatic scheduled payment for an Invoice has failed.",
                    "group": "Invoices"
                },
                {
                    "name": "invoice.updated",
                    "description": "Published when an Invoice is updated.",
                    "group": "Invoices"
                },
                {
                    "name": "labor.shift.created",
                    "description": "Published when a worker starts a Shift.",
                    "group": "Labor"
                },
                {
                    "name": "labor.shift.deleted",
                    "description": "Published when a Shift is deleted.",
                    "group": "Labor"
                },
                {
                    "name": "labor.shift.updated",
                    "description": "Published when a Shift is updated.",
                    "group": "Labor"
                },
                {
                    "name": "location.created",
                    "description": "Published when a Location is created.",
                    "group": "Locations"
                },
                {
                    "name": "location.updated",
                    "description": "Published when a Location is updated.",
                    "group": "Locations"
                },
                {
                    "name": "loyalty.account.created",
                    "description": "Published when a loyalty account is created.",
                    "group": "Loyalty"
                },
                {
                    "name": "loyalty.account.deleted",
                    "description": "Published when a loyalty account is deleted.",
                    "group": "Loyalty"
                },
                {
                    "name": "loyalty.account.updated",
                    "description": "Published when a loyalty account is updated.",
                    "group": "Loyalty"
                },
                {
                    "name": "loyalty.event.created",
                    "description": "Published when a loyalty event is created.",
                    "group": "Loyalty"
                },
                {
                    "name": "loyalty.program.created",
                    "description": "Published when a loyalty program is created.",
                    "group": "Loyalty"
                },
                {
                    "name": "loyalty.program.updated",
                    "description": "Published when a loyalty program is updated.",
                    "group": "Loyalty"
                },
                {
                    "name": "loyalty.promotion.created",
                    "description": "Published when a loyalty promotion is created.",
                    "group": "Loyalty"
                },
                {
                    "name": "loyalty.promotion.updated",
                    "description": "Published when a loyalty promotion is updated.",
                    "group": "Loyalty"
                },
                {
                    "name": "oauth.authorization.revoked",
                    "description": "Published when a merchant/application revokes all access tokens and refresh tokens granted to an application.",
                    "group": "OAuth"
                },
                {
                    "name": "order.created",
                    "description": "Published when an Order is created.",
                    "group": "Orders"
                },
                {
                    "name": "order.fulfillment.updated",
                    "description": "Published when an OrderFulfillment is created or updated.",
                    "group": "Orders"
                },
                {
                    "name": "order.updated",
                    "description": "Published when an Order is updated.",
                    "group": "Orders"
                },
                {
                    "name": "payment.created",
                    "description": "Published when a Payment is created.",
                    "group": "Payments"
                },
                {
                    "name": "payment.updated",
                    "description": "Published when a Payment is updated.",
                    "group": "Payments"
                },
                {
                    "name": "payout.failed",
                    "description": "Published when a Payout has failed.",
                    "group": "Payouts"
                },
                {
                    "name": "payout.paid",
                    "description": "Published when a Payout is complete.",
                    "group": "Payouts"
                },
                {
                    "name": "payout.sent",
                    "description": "Published when a Payout is sent.",
                    "group": "Payouts"
                },
                {
                    "name": "refund.created",
                    "description": "Published when a Refund is created.",
                    "group": "Refunds"
                },
                {
                    "name": "refund.updated",
                    "description": "Published when a Refund is updated.",
                    "group": "Refunds"
                },
                {
                    "name": "subscription.created",
                    "description": "Published when a Subscription is created.",
                    "group": "Subscriptions"
                },
                {
                    "name": "subscription.updated",
                    "description": "Published when a Subscription is updated.",
                    "group": "Subscriptions"
                },
                {
                    "name": "team_member.created",
                    "description": "Published when a Team Member is created.",
                    "group": "Team"
                },
                {
                    "name": "team_member.updated",
                    "description": "Published when a Team Member is updated.",
                    "group": "Team"
                },
                {
                    "name": "team_member.wage_setting.updated",
                    "description": "Published when a Wage Setting is updated.",
                    "group": "Team"
                },
                {
                    "name": "terminal.action.created",
                    "description": "Published when a TerminalAction is crated.",
                    "group": "Terminal"
                },
                {
                    "name": "terminal.action.updated",
                    "description": "Published when a TerminalAction is updated.",
                    "group": "Terminal"
                },
                {
                    "name": "terminal.checkout.created",
                    "description": "Published when a TerminalCheckout is created.",
                    "group": "Terminal"
                },
                {
                    "name": "terminal.checkout.updated",
                    "description": "Published when a TerminalCheckout is updated.",
                    "group": "Terminal"
                },
                {
                    "name": "terminal.refund.created",
                    "description": "Published when a Terminal API refund is created.",
                    "group": "Terminal"
                },
                {
                    "name": "terminal.refund.updated",
                    "description": "Published when a Terminal API refund is updated.",
                    "group": "Terminal"
                },
                {
                    "name": "vendor.created",
                    "description": "Published when a Vendor is created.",
                    "group": "Vendors"
                },
                {
                    "name": "vendor.updated",
                    "description": "Published when a Vendor is updated.",
                    "group": "Vendors"
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showEvents": true,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source"
            ],
            "actions": null
        },
        {
            "_id": "627aceaf971c67182d1d76ca",
            "frontend": {
                "spec": {
                    "title": "Stripe",
                    "description": "A suite of payment APIs that powers commerce for online businesses",
                    "type": "stripe",
                    "category": "finance",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/stripe.svg",
                    "tags": [
                        "payment",
                        "business"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        },
                        {
                            "name": "Action",
                            "color": "blue"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "stripe",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Stripe Connection"
                            },
                            {
                                "name": "STRIPE_SECRET_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Stripe Secret Key",
                                "placeholder": "sk_test_Hrs6SAopgFPF0bZXSN3f6ELN"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "id": "evt_1CiPtv2eZvKYlo2CcUZsDcO6",
                    "object": "event",
                    "api_version": "2018-05-21",
                    "created": 1530291411,
                    "data": {
                        "object": {
                            "id": "src_1CiPsl2eZvKYlo2CVVyt3LKy",
                            "object": "source",
                            "amount": 1000,
                            "client_secret": "src_client_secret_D8hHhtdrGWQyK8bLM4M3uFQ6",
                            "created": 1530291339,
                            "currency": "eur",
                            "flow": "redirect",
                            "livemode": false,
                            "metadata": {},
                            "owner": {
                                "address": null,
                                "email": null,
                                "name": null,
                                "phone": null,
                                "verified_address": null,
                                "verified_email": null,
                                "verified_name": "Jenny Rosen",
                                "verified_phone": null
                            },
                            "redirect": {
                                "failure_reason": null,
                                "return_url": "https://minkpolice.com",
                                "status": "succeeded",
                                "url": "https://hooks.stripe.com/redirect/authenticate/src_1CiPsl2eZvKYlo2CVVyt3LKy?client_secret=src_client_secret_D8hHhtdrGWQyK8bLM4M3uFQ6"
                            },
                            "sofort": {
                                "country": "DE",
                                "bank_code": "DEUT",
                                "bank_name": "Deutsche Bank",
                                "bic": "DEUTDE2H",
                                "iban_last4": "3000",
                                "statement_descriptor": null,
                                "preferred_language": null
                            },
                            "statement_descriptor": null,
                            "status": "chargeable",
                            "type": "sofort",
                            "usage": "single_use"
                        }
                    },
                    "livemode": false,
                    "pending_webhooks": 0,
                    "request": {
                        "id": null,
                        "idempotency_key": null
                    },
                    "type": "source.chargeable"
                }
            },
            "integrationApiVersion": "2020-03-02",
            "events": [
                {
                    "name": "account.application.authorized",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "account.application.deauthorized",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "account.external_account.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "account.external_account.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "account.external_account.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "account.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "application_fee.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "application_fee.refund.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "application_fee.refunded",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "balance.available",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "billing_portal.configuration.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "billing_portal.configuration.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "capability.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "cash_balance.funds_available",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "charge.captured",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "charge.dispute.closed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "charge.dispute.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "charge.dispute.funds_reinstated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "charge.dispute.funds_withdrawn",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "charge.dispute.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "charge.expired",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "charge.failed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "charge.pending",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "charge.refund.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "charge.refunded",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "charge.succeeded",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "charge.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "checkout.session.async_payment_failed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "checkout.session.async_payment_succeeded",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "checkout.session.completed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "checkout.session.expired",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "coupon.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "coupon.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "coupon.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "credit_note.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "credit_note.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "credit_note.voided",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.discount.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.discount.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.discount.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.source.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.source.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.source.expiring",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.source.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.subscription.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.subscription.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.subscription.pending_update_applied",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.subscription.pending_update_expired",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.subscription.trial_will_end",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.subscription.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.tax_id.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.tax_id.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.tax_id.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "customer.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "file.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "identity.verification_session.canceled",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "identity.verification_session.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "identity.verification_session.processing",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "identity.verification_session.redacted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "identity.verification_session.requires_input",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "identity.verification_session.verified",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoice.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoice.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoice.finalization_failed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoice.finalized",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoice.marked_uncollectible",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoice.paid",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoice.payment_action_required",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoice.payment_failed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoice.payment_succeeded",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoice.sent",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoice.upcoming",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoice.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoice.voided",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoiceitem.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoiceitem.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "invoiceitem.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "issuing_authorization.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "issuing_authorization.request",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "issuing_authorization.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "issuing_card.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "issuing_card.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "issuing_cardholder.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "issuing_cardholder.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "issuing_dispute.closed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "issuing_dispute.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "issuing_dispute.funds_reinstated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "issuing_dispute.submitted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "issuing_dispute.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "issuing_transaction.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "issuing_transaction.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "mandate.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "order.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "order.payment_failed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "order.payment_succeeded",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "order.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "order_return.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payment_intent.amount_capturable_updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payment_intent.canceled",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payment_intent.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payment_intent.partially_funded",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payment_intent.payment_failed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payment_intent.processing",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payment_intent.requires_action",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payment_intent.succeeded",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payment_link.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payment_link.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payment_method.attached",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payment_method.automatically_updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payment_method.detached",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payment_method.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payout.canceled",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payout.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payout.failed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payout.paid",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "payout.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "person.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "person.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "person.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "plan.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "plan.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "plan.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "price.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "price.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "price.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "product.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "product.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "product.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "promotion_code.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "promotion_code.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "quote.accepted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "quote.canceled",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "quote.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "quote.finalized",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "radar.early_fraud_warning.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "radar.early_fraud_warning.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "recipient.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "recipient.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "recipient.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "reporting.report_run.failed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "reporting.report_run.succeeded",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "reporting.report_type.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "review.closed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "review.opened",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "setup_intent.canceled",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "setup_intent.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "setup_intent.requires_action",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "setup_intent.setup_failed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "setup_intent.succeeded",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "sigma.scheduled_query_run.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "sku.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "sku.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "sku.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "source.canceled",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "source.chargeable",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "source.failed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "source.mandate_notification",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "source.refund_attributes_required",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "source.transaction.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "source.transaction.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "subscription_schedule.aborted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "subscription_schedule.canceled",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "subscription_schedule.completed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "subscription_schedule.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "subscription_schedule.expiring",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "subscription_schedule.released",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "subscription_schedule.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "tax_rate.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "tax_rate.updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "terminal.reader.action_failed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "terminal.reader.action_succeeded",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "test_helpers.test_clock.advancing",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "test_helpers.test_clock.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "test_helpers.test_clock.deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "test_helpers.test_clock.internal_failure",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "test_helpers.test_clock.ready",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "topup.canceled",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "topup.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "topup.failed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "topup.reversed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "topup.succeeded",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "transfer.created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "transfer.failed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "transfer.paid",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "transfer.reversed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "transfer.updated",
                    "description": "",
                    "group": ""
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showEvents": true,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source",
                "action"
            ]
        },
        {
            "_id": "6303f7b25c22ea6a17df56f7",
            "frontend": {
                "spec": {
                    "title": "Webflow",
                    "description": "A platform to build professional, custom websites in a completely visual canvas",
                    "type": "webflow",
                    "category": "cms",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/webflow.svg",
                    "tags": [
                        "website",
                        "cms"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        },
                        {
                            "name": "Action",
                            "color": "blue"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "webflow",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Webflow Connection"
                            },
                            {
                                "name": "WEBFLOW_BASE_URL",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter Webflow Base URL",
                                "placeholder": "https://api.webflow.com",
                                "value": "https://api.webflow.com"
                            },
                            {
                                "name": "WEBFLOW_API_TOKEN",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Webflow API Token",
                                "placeholder": "38ba5a4236bd26a4244qfcd1ejf7l9v0"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "name": "Email Form",
                    "site": "62fc82dcec97af368452d0fd",
                    "data": {
                        "Name": "fdsafdas",
                        "Email": "simun.romic@gmail.com",
                        "Message": "fdsafadsfdsafsdfdsafsdf"
                    },
                    "d": "2022-08-17T07:54:03.247Z",
                    "_id": "62fc9e9ba604cef05a17bf4b"
                }
            },
            "integrationApiVersion": "1.0.0",
            "events": [
                {
                    "name": "form_submission",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "site_publish",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "ecomm_new_order",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "ecomm_order_changed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "ecomm_inventory_changed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "memberships_user_account_added",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "memberships_user_account_updated",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "collection_item_created",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "collection_item_changed",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "collection_item_deleted",
                    "description": "",
                    "group": ""
                },
                {
                    "name": "collection_item_unpublished",
                    "description": "",
                    "group": ""
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showEvents": true,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source",
                "action"
            ],
            "actions": null
        },
        {
            "_id": "conn_def_src_d30bc20f756e452f936f4654cde158c7",
            "frontend": {
                "spec": {
                    "title": "Webhook",
                    "description": "Receive events emitted to a custom Webhook URL",
                    "type": "webhook",
                    "category": "webhook",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/webhook.svg",
                    "tags": [
                        "webhook",
                        "rest"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "webhook",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Webhook Connection"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [
                {
                    "name": "event.received",
                    "description": "Subscribe to all events (default behavior)",
                    "group": ""
                }
            ],
            "settings": {
                "createBuildableEnvVars": false,
                "showUrl": true,
                "autoSubscribeAllEvents": true,
                "autoAddAllEventsToPipeline": true,
                "showEvents": false,
                "secureAuthFields": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "hasEvents": true,
                "allowCustomEvents": false
            },
            "connectionTypes": [
                "source"
            ]
        },
        {
            "_id": "630549b97a81b588b9b2b3c2",
            "frontend": {
                "spec": {
                    "title": "WooCommerce",
                    "description": "A customizable, open-source e-commerce plugin for WordPress",
                    "type": "woocommerce",
                    "category": "ecommerce",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/woocommerce.svg",
                    "tags": [
                        "business",
                        "ecommerce"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Source",
                            "color": "green"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "woocommerce",
                                    "connectionType": "sources"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My WooCommerce Connection"
                            },
                            {
                                "name": "WOOCOMMERCE_WP_URL",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your WordPress Website URL",
                                "placeholder": "https://my-website.com"
                            },
                            {
                                "name": "WOOCOMMERCE_CONSUMER_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter the WooCommerce Consumer Key",
                                "placeholder": "ck_13e879fc387333d4bb74e5d6b1fb10ca5bb6f1e1"
                            },
                            {
                                "name": "WOOCOMMERCE_CONSUMER_SECRET",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Woocommerce Consumer Secret",
                                "placeholder": "cs_d15a728095e5b75779c85197498e9eaa25dda7e9"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {
                    "id": 15,
                    "name": "My Product",
                    "slug": "my-product",
                    "permalink": "https://mysite.local/product/my-product/",
                    "date_created": "2022-08-12T10:04:18",
                    "date_created_gmt": "2022-08-12T10:04:18",
                    "date_modified": "2022-08-12T10:04:18",
                    "date_modified_gmt": "2022-08-12T10:04:18",
                    "type": "simple",
                    "status": "publish",
                    "featured": false,
                    "catalog_visibility": "visible",
                    "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
                    "short_description": "",
                    "sku": "",
                    "price": "450",
                    "regular_price": "450",
                    "sale_price": "350",
                    "date_on_sale_from": null,
                    "date_on_sale_from_gmt": null,
                    "date_on_sale_to": null,
                    "date_on_sale_to_gmt": null,
                    "on_sale": false,
                    "purchasable": false,
                    "total_sales": 0,
                    "virtual": false,
                    "downloadable": false,
                    "downloads": [],
                    "download_limit": -1,
                    "download_expiry": -1,
                    "external_url": "",
                    "button_text": "",
                    "tax_status": "taxable",
                    "tax_class": "",
                    "manage_stock": false,
                    "stock_quantity": null,
                    "backorders": "no",
                    "backorders_allowed": false,
                    "backordered": false,
                    "low_stock_amount": null,
                    "sold_individually": false,
                    "weight": "",
                    "dimensions": {
                        "length": "",
                        "width": "",
                        "height": ""
                    },
                    "shipping_required": true,
                    "shipping_taxable": true,
                    "shipping_class": "",
                    "shipping_class_id": 0,
                    "reviews_allowed": true,
                    "average_rating": "0.00",
                    "rating_count": 0,
                    "upsell_ids": [],
                    "cross_sell_ids": [],
                    "parent_id": 0,
                    "purchase_note": "",
                    "categories": [
                        {
                            "id": 15,
                            "name": "Uncategorized",
                            "slug": "uncategorized"
                        }
                    ],
                    "tags": [],
                    "images": [],
                    "attributes": [],
                    "default_attributes": [],
                    "variations": [],
                    "grouped_products": [],
                    "menu_order": 0,
                    "price_html": "",
                    "related_ids": [],
                    "meta_data": [],
                    "stock_status": "instock",
                    "has_options": false,
                    "_links": {
                        "self": [
                            {
                                "href": "https://mysite.local/wp-json/wc/v3/webhooks/11"
                            }
                        ],
                        "collection": [
                            {
                                "href": "https://mysite.local/wp-json/wc/v3/webhooks"
                            }
                        ]
                    }
                }
            },
            "integrationApiVersion": "NA",
            "events": [
                {
                    "name": "coupon.created",
                    "description": "A coupon has been created",
                    "group": ""
                },
                {
                    "name": "coupon.updated",
                    "description": "A coupon has been updated",
                    "group": ""
                },
                {
                    "name": "coupon.deleted",
                    "description": "A coupon has been deleted",
                    "group": ""
                },
                {
                    "name": "customer.created",
                    "description": "A customer has been created",
                    "group": ""
                },
                {
                    "name": "customer.updated",
                    "description": "A customer has been updated",
                    "group": ""
                },
                {
                    "name": "customer.deleted",
                    "description": "A customer has been deleted",
                    "group": ""
                },
                {
                    "name": "order.created",
                    "description": "An order has been created",
                    "group": ""
                },
                {
                    "name": "order.updated",
                    "description": "An order has been updated",
                    "group": ""
                },
                {
                    "name": "order.deleted",
                    "description": "An order has been deleted",
                    "group": ""
                },
                {
                    "name": "product.created",
                    "description": "A product has been created",
                    "group": ""
                },
                {
                    "name": "product.updated",
                    "description": "A product has been updated",
                    "group": ""
                },
                {
                    "name": "product.deleted",
                    "description": "A product has been deleted",
                    "group": ""
                }
            ],
            "settings": {
                "parseWebhookBody": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showEvents": true,
                "dualEnv": true,
                "deleteWebhooksWithZeroEvents": false,
                "showSecret": false,
                "showUrl": false,
                "hasEvents": true,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "createBuildableEnvVars": true,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "source"
            ],
            "actions": null
        },
        {
            "_id": "62d851d90bd36f737a23f627",
            "frontend": {
                "spec": {
                    "title": "Airtable",
                    "description": "An easy-to-use platform for creating and sharing relational databases",
                    "category": "database",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/airtable.svg",
                    "tags": [
                        "database",
                        "CRUD"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Action",
                            "color": "blue"
                        }
                    ],
                    "type": "airtable"
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "connectionType": "sources",
                                    "type": "airtable"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Airtable Connection"
                            },
                            {
                                "name": "AIRTABLE_API_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "value": null,
                                "label": "Enter your Airtable API Key",
                                "placeholder": "keyyxH7wUGDw6NO1M"
                            },
                            {
                                "name": "AIRTABLE_BASE_ID",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "value": null,
                                "label": "Enter your Airtable Base ID",
                                "placeholder": "appCbxHRF3ADd2Zn2"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false
            },
            "connectionTypes": [
                "action"
            ],
            "actions": null
        },
        {
            "_id": "conn_def_dst_603f5ef14fcd447b8ca8ffd05c31efb5",
            "frontend": {
                "spec": {
                    "title": "BigQuery",
                    "description": "BigQuery is a fully-managed, serverless data warehouse provided by Google Cloud.",
                    "type": "bigquery",
                    "category": "database",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/bigquery.svg",
                    "tags": [
                        "database",
                        "db",
                        "warehouse",
                        "analytics",
                        "olap"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Target",
                            "color": "blue"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "bigquery",
                                    "connectionType": "destinations"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My BigQuery Connection"
                            },
                            {
                                "name": "GOOGLE_SERVICE_ACCOUNT_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Service Account Key content",
                                "placeholder": "{\"type\": \"service_account\", \"project_id\": \"my-gcp-project\", ..."
                            },
                            {
                                "name": "GCP_PROJECT_ID",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Project ID",
                                "placeholder": "my-gcp-project"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "showEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "target"
            ],
            "actions": [
                "insertData",
                "updateData",
                "deleteData",
                "executeRawQuery"
            ]
        },
        {
            "_id": "conn_def_dst_cc700cc6c83d4e6aa47f336ddda7e37d",
            "frontend": {
                "spec": {
                    "title": "ElasticSearch",
                    "description": "ElasticSearch is a distributed, free and open search and analytics engine",
                    "type": "elasticsearch",
                    "category": "database",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/elasticsearch.svg",
                    "tags": [
                        "database",
                        "db"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Target",
                            "color": "blue"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "elasticsearch",
                                    "connectionType": "destinations"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My ElasticSearch Connection"
                            },
                            {
                                "name": "ELASTICSEARCH_URL",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your ElasticSearch URL",
                                "placeholder": "https://ec47fc4d2c53414e1307e85726d4b9bb.us-east-1.aws.found.io:9243"
                            },
                            {
                                "name": "ELASTICSEARCH_API_KEY",
                                "type": "input",
                                "rules": {},
                                "label": "Enter your ElasticSearch API Key",
                                "placeholder": "base64EncodedKey"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": false,
                "hasEvents": false,
                "showEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "target"
            ],
            "actions": [
                "index",
                "delete",
                "update",
                "bulk"
            ]
        },
        {
            "_id": "conn_def_dst_74d80f4385ec4329b5e46afbe1dec409",
            "frontend": {
                "spec": {
                    "title": "Firestore",
                    "description": "A flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud",
                    "type": "firestore",
                    "category": "database",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/firestore.svg",
                    "tags": [
                        "firebase",
                        "database"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Target",
                            "color": "blue"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "firestore",
                                    "connectionType": "destinations"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Firestore Connection"
                            },
                            {
                                "name": "SERVICE_ACCOUNT_CONFIG",
                                "type": "textarea",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Firebase Service Account Config",
                                "placeholder": "{'type': 'service_account', 'project_id': 'buildable-destination', ...}"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "2020-08-27",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "showEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "target"
            ],
            "actions": [
                "insert",
                "update",
                "remove"
            ]
        },
        {
            "_id": "62dace890bd36f737a23f655",
            "frontend": {
                "spec": {
                    "title": "GitHub",
                    "description": "A managed hosting solution for version control using Git",
                    "category": "git",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/github-repos.svg",
                    "tags": [
                        "version-control",
                        "code"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Action",
                            "color": "blue"
                        }
                    ],
                    "type": "github"
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "connectionType": "sources",
                                    "type": "github"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My GitHub Connection"
                            },
                            {
                                "name": "GITHUB_ACCESS_TOKEN",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "value": null,
                                "label": "Enter your Github Access Token",
                                "placeholder": "ghp_qephG4agqy5cNJTkh7jb%ffJo2jG1mRo3"
                            },
                            {
                                "name": "GITHUB_ACCOUNT_USERNAME",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "value": null,
                                "label": "Enter your Github Account Username",
                                "placeholder": "buildable"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false
            },
            "connectionTypes": [
                "action"
            ],
            "actions": null
        },
        {
            "_id": "62d875900bd36f737a23f63e",
            "frontend": {
                "spec": {
                    "title": "JWT",
                    "description": "An open, industry standard RFC 7519 method for representing claims securely between two parties.",
                    "category": "authentication",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/jwt.svg",
                    "tags": [
                        "security",
                        "auth",
                        "user"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Destination",
                            "color": "blue"
                        }
                    ],
                    "type": "jwt"
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "jwt"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My JWT Connection"
                            },
                            {
                                "name": "environment",
                                "type": "radio",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "options": [
                                    {
                                        "name": "Development",
                                        "value": "test"
                                    },
                                    {
                                        "name": "Production",
                                        "value": "live"
                                    }
                                ],
                                "label": "Assign the Environment"
                            },
                            {
                                "name": "JWT_SECRET",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your JWT Secret",
                                "placeholder": "my-secret-value"
                            },
                            {
                                "name": "JWT_ISSUER",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your JWT Issuer",
                                "placeholder": "buildable"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {},
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "dualEnv": true,
                "createBuildableEnvVars": true,
                "hasEvents": false
            },
            "connectionTypes": [
                "action"
            ]
        },
        {
            "_id": "conn_def_dst_395eda6862f544ec9250fa4f342d20b8",
            "frontend": {
                "spec": {
                    "title": "MongoDB",
                    "description": "MongoDB is a general purpose, document-based, distributed database",
                    "type": "mongodb",
                    "category": "database",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/mongo.svg",
                    "tags": [
                        "database",
                        "db"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Target",
                            "color": "blue"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "mongodb",
                                    "connectionType": "destinations"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My MongoDB Connection"
                            },
                            {
                                "name": "MONGODB_URI",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your MongoDB URI",
                                "placeholder": "mongodb://username:password@mongodbhost:port/db-name-and-rest"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "showEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "target"
            ],
            "actions": [
                "insertOne",
                "insertMany",
                "updateOne",
                "updateMany",
                "deleteOne",
                "deleteMany"
            ]
        },
        {
            "_id": "62d8577d0bd36f737a23f62c",
            "frontend": {
                "spec": {
                    "title": "Notion",
                    "description": "A project management and note-taking platform",
                    "category": "cms",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/notion.svg",
                    "tags": [
                        "notes",
                        "database",
                        "productivity"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Action",
                            "color": "blue"
                        }
                    ],
                    "type": "notion"
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "connectionType": "sources",
                                    "type": "notion"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Notion Connection"
                            },
                            {
                                "name": "NOTION_API_TOKEN",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "value": null,
                                "label": "Enter your Notion API Token",
                                "placeholder": "627ace9771c6711c67182d1d76caaf982d1d76ca"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false
            },
            "connectionTypes": [
                "action"
            ],
            "actions": null
        },
        {
            "_id": "conn_def_dst_b297b04336df498e847a49ba874060b5",
            "frontend": {
                "spec": {
                    "title": "PostgreSQL",
                    "description": "PostgreSQL is an open-source relational database management system",
                    "type": "postgresql",
                    "category": "database",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/postgresql.svg",
                    "tags": [
                        "database",
                        "db",
                        "sql"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Target",
                            "color": "blue"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "postgresql",
                                    "connectionType": "destinations"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My PostgreSQL Connection"
                            },
                            {
                                "name": "POSTGRESQL_HOST",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your PostgreSQL Host",
                                "placeholder": "my-host"
                            },
                            {
                                "name": "POSTGRESQL_USERNAME",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your PostgreSQL Username",
                                "placeholder": "my-username"
                            },
                            {
                                "name": "POSTGRESQL_PASSWORD",
                                "type": "password",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your PostgreSQL Password",
                                "placeholder": "supersecretpassword"
                            },
                            {
                                "name": "POSTGRESQL_PORT",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your PostgreSQL Port",
                                "placeholder": "5432"
                            },
                            {
                                "name": "POSTGRESQL_DATABASE",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your PostgreSQL Database Name",
                                "placeholder": "my-db"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "showEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "target"
            ],
            "actions": [
                "insert",
                "update",
                "delete",
                "executeRawQuery"
            ]
        },
        {
            "_id": "62d85a850bd36f737a23f62e",
            "frontend": {
                "spec": {
                    "title": "SendGrid",
                    "description": "A customer communication platform for transactional and marketing email",
                    "category": "communication",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/sendgrid.svg",
                    "tags": [
                        "email",
                        "marketing"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Action",
                            "color": "blue"
                        }
                    ],
                    "type": "sendgrid"
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "connectionType": "sources",
                                    "type": "sendgrid"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My SendGrid Connection"
                            },
                            {
                                "name": "SENDGRID_API_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "value": null,
                                "label": "Enter your Sendgrid API Key",
                                "placeholder": "SG.UHysCSm-hgTh40rKsOp.oTtPxx9v6sH42Js9EJzr_E4090JBClyxGiI"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false
            },
            "connectionTypes": [
                "action"
            ],
            "actions": null
        },
        {
            "_id": "conn_def_dst_39f3cef1ea484f5088ed1c3cea22f472",
            "frontend": {
                "spec": {
                    "title": "Shopify",
                    "description": "Shopify is an online platform for creating and managing e-commerce stores",
                    "type": "shopify",
                    "category": "ecommerce",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/shopify.svg",
                    "tags": [
                        "ecommerce",
                        "business"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Target",
                            "color": "blue"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "shopify",
                                    "connectionType": "destinations"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Shopify Connection"
                            },
                            {
                                "name": "SHOPIFY_STORE_NAME",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter the name of your Shopify store",
                                "placeholder": "mystore"
                            },
                            {
                                "name": "SHOPIFY_ACCESS_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Shopify access key",
                                "placeholder": "shpat_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "showEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "target"
            ],
            "actions": [
                "reports.create",
                "reports.update",
                "reports.delete",
                "customers.create",
                "customers.account_activation_url.create",
                "customers.send_invite.create",
                "customers.update",
                "customers.delete",
                "inventory_items.update",
                "draft_orders.create",
                "draft_orders.send_invoice.create",
                "draft_orders.complete.create",
                "draft_orders.update",
                "draft_orders.delete",
                "orders.create",
                "orders.cancel.create",
                "orders.close.create",
                "orders.update",
                "orders.delete",
                "orders.risks.create",
                "orders.risks.update",
                "orders.risks.delete",
                "orders.refunds.create",
                "orders.refunds.calculate.create",
                "orders.transactions.create",
                "products.create",
                "products.update",
                "products.delete",
                "products.variants.create",
                "variants.update",
                "products.variants.delete",
                "checkouts.create",
                "checkouts.update",
                "checkouts.complete.create",
                "checkouts.payments.create",
                "fulfillment_orders.cancel.create",
                "fulfillment_orders.close.create",
                "fulfillment_orders.hold.create",
                "fulfillment_orders.move.create",
                "fulfillment_orders.open.create",
                "fulfillment_orders.release_hold.create",
                "fulfillment_orders.reschedule.create",
                "fulfillments.create",
                "fulfillments.cancel.create",
                "fulfillments.update_tracking.create"
            ]
        },
        {
            "_id": "62d865290bd36f737a23f632",
            "frontend": {
                "spec": {
                    "title": "Spotify",
                    "description": "A digital music streaming service giving access to millions of songs",
                    "category": "media",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/spotify.svg",
                    "tags": [
                        "music",
                        "podcasts"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Action",
                            "color": "blue"
                        }
                    ],
                    "type": "spotify"
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "connectionType": "sources",
                                    "type": "spotify"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Spotify Connection"
                            },
                            {
                                "name": "SPOTIFY_BASE_URI",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "value": "https://api.spotify.com/v1",
                                "label": "Enter your Spotify Base URI",
                                "placeholder": "https://api.spotify.com/v1"
                            },
                            {
                                "name": "SPOTIFY_CLIENT_ID",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "value": null,
                                "label": "Enter your Spotify Client ID",
                                "placeholder": "0940e616dbf54cf5a1415196as8r0157"
                            },
                            {
                                "name": "SPOTIFY_CLIENT_SECRET",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "value": null,
                                "label": "Enter your Spotify Client Secret",
                                "placeholder": "6e91as454g5f4s1a9205sf54d6f2c524"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false
            },
            "connectionTypes": [
                "action"
            ],
            "actions": null
        },
        {
            "_id": "conn_def_dst_85ede60f96ad4d00a1ac521ac639737a",
            "frontend": {
                "spec": {
                    "title": "Stripe",
                    "description": "A suite of payment APIs that powers commerce for online businesses",
                    "type": "stripe",
                    "category": "finance",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/stripe.svg",
                    "tags": [
                        "payment",
                        "business"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Target",
                            "color": "blue"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "stripe",
                                    "connectionType": "destinations"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Stripe Connection"
                            },
                            {
                                "name": "STRIPE_SECRET_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Stripe Secret Key",
                                "placeholder": "sk_test_Hrs6SAopgFPF0bZXSN3f6ELN"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "2020-08-27",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "showEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "allowCustomEvents": false,
                "secureAuthFields": true
            },
            "connectionTypes": [
                "target"
            ],
            "actions": [
                "customers.create",
                "customers.update",
                "customers.del",
                "charges.create",
                "charges.update",
                "charges.capture",
                "disputes.update",
                "disputes.close",
                "plans.create",
                "plans.update",
                "plans.del",
                "paymentIntents.create",
                "paymentIntents.update",
                "paymentIntents.confirm",
                "paymentIntents.capture",
                "payouts.create",
                "payouts.update",
                "payouts.cancel",
                "payouts.reverse",
                "products.create",
                "products.update",
                "products.del",
                "prices.create",
                "prices.update",
                "coupons.create",
                "coupons.update",
                "promotion_codes.create",
                "promotion_codes.update",
                "invoices.create",
                "invoices.update",
                "invoices.finalizeInvoice",
                "invoices.voidInvoice",
                "invoiceItems.create",
                "invoiceItems.update",
                "invoiceItems.delete",
                "quotes.create",
                "quotes.update",
                "quotes.finalizeQuote",
                "quotes.accept",
                "quotes.cancel",
                "subscriptions.create",
                "subscriptions.update",
                "subscriptions.cancel",
                "subscriptionItems.create",
                "subscriptionItems.update",
                "subscriptionItems.del",
                "accounts.create",
                "accounts.update",
                "accounts.del",
                "accounts.createPerson",
                "accounts.updatePerson",
                "accounts.deletePerson",
                "transfers.create",
                "transfers.update"
            ]
        },
        {
            "_id": "62d8668e0bd36f737a23f633",
            "frontend": {
                "spec": {
                    "title": "Supabase",
                    "description": "An open-source alternative to Firebase",
                    "category": "database",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/supabase.svg",
                    "tags": [
                        "PostgreSQL",
                        "auth"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Action",
                            "color": "blue"
                        }
                    ],
                    "type": "supabase"
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "connectionType": "sources",
                                    "type": "supabase"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Supabase Connection"
                            },
                            {
                                "name": "SUPABASE_URL",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "value": null,
                                "label": "Enter your Supabase URL",
                                "placeholder": "https://ahdwoftiseaspsuebwjd.supabase.co"
                            },
                            {
                                "name": "SUPABASE_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "value": null,
                                "label": "Enter your Supabase API Key",
                                "placeholder": "eyJhbGfiOhJIsUzS1NFIsGnR6IkSXVCF9.eyJyb2xdIjoisWfdsbiIshew5hdCIHd3Y3MzQbMTg23CwiZXhwIjoxOTU4OFc3ODYJGH5.zZ6dgfd4keY2UO4qhL6kMGtyxQB-3B3VR53GF_jqg"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false
            },
            "connectionTypes": [
                "action"
            ],
            "actions": null
        },
        {
            "_id": "62d868570bd36f737a23f634",
            "frontend": {
                "spec": {
                    "title": "Tatum",
                    "description": "The fastest blockchain development platform",
                    "category": "web3",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/tatum.svg",
                    "tags": [
                        "blockchain",
                        "crypto",
                        "nft"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Action",
                            "color": "blue"
                        }
                    ],
                    "type": "tatum"
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "connectionType": "sources",
                                    "type": "tatum"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Tatum Connection"
                            },
                            {
                                "name": "TATUM_API_URL",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "value": "https://api-us-west1.tatum.io",
                                "label": "Enter your Tatum API URL",
                                "placeholder": "https://api-us-west1.tatum.io"
                            },
                            {
                                "name": "TATUM_API_KEY",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "value": null,
                                "label": "Enter your Tatum API Key",
                                "placeholder": "a363j9ed-e13f-2a52-h03f-h14566h523d7"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false
            },
            "connectionTypes": [
                "action"
            ],
            "actions": null
        },
        {
            "_id": "62d86a790bd36f737a23f636",
            "frontend": {
                "spec": {
                    "title": "Twitter",
                    "description": "An online news and social networking site",
                    "category": "social",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/twitter.svg",
                    "tags": [
                        "news",
                        "tweet"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Action",
                            "color": "blue"
                        }
                    ],
                    "type": "twitter"
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "connectionType": "sources",
                                    "type": "twitter"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Twitter Connection"
                            },
                            {
                                "name": "TWITTER_BEARER_TOKEN",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "value": null,
                                "label": "Enter your Twitter Bearer Token",
                                "placeholder": "AAAAAAAAAAAAAAAAAAAAAMjsaQEAAAAAGH2JKg3S4sfO1gvhK1r5vSvSv4Y%5DPnNd3dsYRFI345BmNS43AFjMHsj32sdfSn3ycutYDytlHMXC"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false
            },
            "connectionTypes": [
                "action"
            ],
            "actions": null
        },
        {
            "_id": "conn_def_dst_cf9728f6160d4e7fa6dd7b6f85196447",
            "frontend": {
                "spec": {
                    "title": "Webhook",
                    "description": "Send automated events to a custom Webhook URL.",
                    "type": "webhook",
                    "category": "webhook",
                    "status": "enabled",
                    "image": "https://assets.buildable.dev/catalog/node-templates/webhook.svg",
                    "tags": [
                        "webhook",
                        "rest"
                    ],
                    "connectionTypes": [
                        {
                            "name": "Target",
                            "color": "blue"
                        }
                    ]
                },
                "features": {
                    "disabled": [],
                    "enabled": [
                        "subscribe",
                        "unsubscribe",
                        "delete",
                        "testConnection"
                    ],
                    "actions": {
                        "subscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/subscribe",
                                "append": {
                                    "_event": {
                                        "name": "subscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to subscribe to {{name}}?"
                            }
                        },
                        "unsubscribe": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "/integrations/unsubscribe",
                                "append": {
                                    "_event": {
                                        "name": "unsubscribed.event"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to unsubscribe from {{name}}?"
                            }
                        },
                        "delete": {
                            "enabled": true,
                            "trigger": {
                                "endpoint": "/integrations/delete",
                                "append": {
                                    "_event": {
                                        "name": "deleted.integration"
                                    }
                                }
                            },
                            "spec": {
                                "title": "Are you sure you want to delete {{name}}?",
                                "subTitle": "Deleting an integration cannot be reversed."
                            }
                        },
                        "testConnection": {
                            "enabled": false,
                            "trigger": {
                                "endpoint": "integrations/test-connection",
                                "append": {
                                    "_event": {
                                        "name": "test.connection"
                                    },
                                    "type": "webhook",
                                    "connectionType": "destinations"
                                }
                            },
                            "spec": {}
                        }
                    },
                    "append": {}
                },
                "options": [
                    {
                        "status": "enabled",
                        "name": "Instant Sync",
                        "description": "Securely connect your account",
                        "logo": null,
                        "selected": true,
                        "selectedName": "Instant Sync",
                        "formData": [
                            {
                                "name": "name",
                                "type": "input",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Name your Connection",
                                "placeholder": "My Webhook Connection"
                            },
                            {
                                "name": "WEBHOOK_URL",
                                "type": "input",
                                "rules": {
                                    "pattern": {
                                        "value": "^(?:http(s)?:\\/\\/)[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$",
                                        "message": "This field must be a valid URL"
                                    },
                                    "required": "This field is required"
                                },
                                "label": "Enter your Webhook URL",
                                "placeholder": "https://example.com/webhook"
                            },
                            {
                                "name": "WEBHOOK_METHOD",
                                "type": "select",
                                "rules": {
                                    "required": "This field is required"
                                },
                                "label": "Enter your Webhook Method Type",
                                "placeholder": "",
                                "options": [
                                    {
                                        "name": "POST",
                                        "value": "POST"
                                    },
                                    {
                                        "name": "PUT",
                                        "value": "PUT"
                                    },
                                    {
                                        "name": "PATCH",
                                        "value": "PATCH"
                                    },
                                    {
                                        "name": "GET",
                                        "value": "GET"
                                    },
                                    {
                                        "name": "DELETE",
                                        "value": "DELETE"
                                    }
                                ],
                                "value": "POST"
                            },
                            {
                                "name": "WEBHOOK_HEADERS",
                                "type": "input",
                                "rules": {},
                                "label": "Enter your Webhook Headers",
                                "placeholder": "",
                                "value": "{\"buildable-connection-type\":\"webhook\"}"
                            }
                        ],
                        "docs": "#### Securely Encrypted\n\nRest assured, your credentials are securely encrypted to keep your information safe."
                    }
                ]
            },
            "schemas": {
                "event": {}
            },
            "integrationApiVersion": "NA",
            "events": [],
            "settings": {
                "createBuildableEnvVars": true,
                "hasEvents": false,
                "showEvents": false,
                "secureAuthFields": false,
                "dualEnv": true,
                "parseWebhookBody": true,
                "deleteWebhooksWithZeroEvents": false,
                "hasSubscriptionDelay": false,
                "subscriptionDelayMultiplier": 0,
                "showSecret": false,
                "showUrl": false,
                "autoSubscribeAllEvents": false,
                "autoAddAllEventsToPipeline": false,
                "allowCustomEvents": false
            },
            "connectionTypes": [
                "target"
            ],
            "actions": [
                "generic"
            ]
        }
    ],
    "total": 35,
    "page": 1,
    "pageSize": 100,
    "totalPages": 1
}