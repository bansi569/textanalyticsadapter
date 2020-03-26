
function check(){

var json = {
  "swagger": "2.0",
  "info": {
    "title": "Text Analytics API (v3.0-preview.1)",
    "version": "v3.0-preview.1",
    "description": "The Text Analytics API is a suite of text analytics web services built with best-in-class Microsoft machine learning algorithms. \nThe API can be used to analyze unstructured text for tasks such as sentiment analysis, key phrase and entity extraction as well as language detection. \nNo training data is needed to use this API; just bring your text data. \nThis API uses advanced natural language processing techniques to deliver best in class predictions.\n\nFurther documentation can be found in https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/overview\n\nThis API is currently available in:\n\n* Australia East - australiaeast.api.cognitive.microsoft.com\n* Canada Central - canadacentral.api.cognitive.microsoft.com\n* Central US - centralus.api.cognitive.microsoft.com\n* East Asia - eastasia.api.cognitive.microsoft.com\n* East US - eastus.api.cognitive.microsoft.com\n* East US 2 - eastus2.api.cognitive.microsoft.com\n* North Europe - northeurope.api.cognitive.microsoft.com\n* South Central US - southcentralus.api.cognitive.microsoft.com\n* Southeast Asia - southeastasia.api.cognitive.microsoft.com\n* UK South - uksouth.api.cognitive.microsoft.com\n* West Europe - westeurope.api.cognitive.microsoft.com\n* West US 2 - westus2.api.cognitive.microsoft.com"
  },
  "host": "westus.api.cognitive.microsoft.com",
  "basePath": "/text/analytics/v3.0-preview.1",
  "schemes": [
    "https"
  ],
  "securityDefinitions": {
    "apiKeyHeader": {
      "type": "apiKey",
      "name": "Ocp-Apim-Subscription-Key",
      "in": "header"
    },
    "apiKeyQuery": {
      "type": "apiKey",
      "name": "subscription-key",
      "in": "query"
    }
  },
  "security": [
    {
      "apiKeyHeader": []
    },
    {
      "apiKeyQuery": []
    }
  ],
  "x-servers": [
    {
      "url": "https://westus.api.cognitive.microsoft.com"
    },
    {
      "url": "https://cognitive-wu.cognitiveservices.azure.com"
    },
    {
      "url": "https://api.ProjectOxford.ai"
    }
  ],
  "paths": {
    "/languages": {
      "post": {
        "description": "The API returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. A total of 120 languages are supported.",
        "operationId": "Languages",
        "summary": "Detect Language",
        "parameters": [
          {
            "name": "showStats",
            "in": "query",
            "description": "(optional) if set to true, response will contain input and document level statistics.",
            "type": "boolean"
          },
          {
            "name": "model-version",
            "in": "query",
            "description": "(optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.",
            "type": "string"
          },
          {
            "name": "languageBatchInput",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/LanguageBatchInput"
            },
            "description": "Collection of documents to analyze."
          }
        ],
        "consumes": [
          "application/json",
          "text/json"
        ],
        "produces": [
          "application/json",
          "text/json"
        ],
        "responses": {
          "200": {
            "description": "A successful call results in the detected language with the highest probability for each valid document",
            "schema": {
              "$ref": "#/definitions/LanguageBatchResult"
            },
            "examples": {
              "application/json": {
                "documents": [
                  {
                    "id": "1",
                    "detectedLanguages": [
                      {
                        "name": "English",
                        "iso6391Name": "en",
                        "score": 1
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "detectedLanguages": [
                      {
                        "name": "French",
                        "iso6391Name": "fr",
                        "score": 1
                      }
                    ]
                  },
                  {
                    "id": "3",
                    "detectedLanguages": [
                      {
                        "name": "Spanish",
                        "iso6391Name": "es",
                        "score": 1
                      }
                    ]
                  }
                ],
                "errors": [],
                "modelVersion": "2019-10-01"
              }
            }
          },
          "500": {
            "description": "Error Response",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          }
        }
      }
    },
    "/entities/recognition/general": {
      "post": {
        "description": "The API returns a list of general named entities (Person, Location, Organization etc) in a given document. General named entities are returned with entity types. See the <a href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/text-analytics-supported-languages\">Supported languages in Text Analytics API</a> for the list of enabled languages.\n",
        "operationId": "EntitiesRecognitionGeneral",
        "summary": "Entities",
        "parameters": [
          {
            "name": "showStats",
            "in": "query",
            "description": "(optional) if set to true, response will contain input and document level statistics.",
            "type": "boolean"
          },
          {
            "name": "model-version",
            "in": "query",
            "description": "(optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.",
            "type": "string"
          },
          {
            "name": "multiLanguageBatchInput",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/MultiLanguageBatchInput"
            },
            "description": "Collection of documents to analyze."
          }
        ],
        "consumes": [
          "application/json",
          "text/json"
        ],
        "produces": [
          "application/json",
          "text/json"
        ],
        "responses": {
          "200": {
            "description": "A successful call results in a list of recognized entities returned for each valid document",
            "schema": {
              "$ref": "#/definitions/EntitiesResult"
            },
            "examples": {
              "application/json": {
                "documents": [
                  {
                    "id": "1",
                    "entities": [
                      {
                        "text": "Seattle",
                        "type": "Location",
                        "offset": 26,
                        "length": 7,
                        "score": 0.80624294281005859
                      },
                      {
                        "text": "last week",
                        "type": "DateTime",
                        "subtype": "DateRange",
                        "offset": 34,
                        "length": 9,
                        "score": 0.8
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "entities": [
                      {
                        "text": "Microsoft",
                        "type": "Organization",
                        "offset": 10,
                        "length": 9,
                        "score": 0.99983596801757812
                      }
                    ]
                  },
                  {
                    "id": "3",
                    "entities": [
                      {
                        "text": "Space Needle",
                        "type": "Organization",
                        "offset": 10,
                        "length": 12,
                        "score": 0.75996512174606323
                      },
                      {
                        "text": "2",
                        "type": "Quantity",
                        "subtype": "Number",
                        "offset": 23,
                        "length": 1,
                        "score": 0.8
                      }
                    ]
                  }
                ],
                "errors": [],
                "modelVersion": "2019-10-01"
              }
            }
          },
          "500": {
            "description": "Error Response",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          }
        }
      }
    },
    "/entities/recognition/pii": {
      "post": {
        "description": "The API returns a list of PII entities (\"United States SSN\", \"Drivers license\", \"Credit card number\" etc) in a given document. See the <a href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/text-analytics-supported-languages\">Supported languages in Text Analytics API</a> for the list of enabled languages.\n",
        "operationId": "EntitiesRecognitionPii",
        "summary": "EntityPII",
        "parameters": [
          {
            "name": "showStats",
            "in": "query",
            "description": "(optional) if set to true, response will contain input and document level statistics.",
            "type": "boolean"
          },
          {
            "name": "model-version",
            "in": "query",
            "description": "(optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.",
            "type": "string"
          },
          {
            "name": "multiLanguageBatchInput",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/MultiLanguageBatchInput"
            },
            "description": "Collection of documents to analyze."
          }
        ],
        "consumes": [
          "application/json",
          "text/json"
        ],
        "produces": [
          "application/json",
          "text/json"
        ],
        "responses": {
          "200": {
            "description": "A successful call results in a list of recognized entities returned for each valid document",
            "schema": {
              "$ref": "#/definitions/EntitiesResult"
            },
            "examples": {
              "application/json": {
                "documents": [
                  {
                    "id": "0",
                    "entities": [
                      {
                        "text": "859-98-0987",
                        "type": "U.S. Social Security Number (SSN)",
                        "subtype": "",
                        "offset": 28,
                        "length": 11,
                        "score": 0.65
                      }
                    ]
                  },
                  {
                    "id": "1",
                    "entities": [
                      {
                        "text": "111000025",
                        "type": "ABA Routing Number",
                        "subtype": "",
                        "offset": 18,
                        "length": 9,
                        "score": 0.75
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "entities": [
                      {
                        "text": "998.214.865-68",
                        "type": "Brazil CPF Number",
                        "subtype": "",
                        "offset": 3,
                        "length": 14,
                        "score": 0.85
                      }
                    ]
                  }
                ],
                "errors": [],
                "modelVersion": "2019-10-01"
              }
            }
          },
          "500": {
            "description": "Error Response",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          }
        }
      }
    },
    "/entities/linking": {
      "post": {
        "description": "The API returns a list of recognized entities with links to a well-known knowledge base. See the <a href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/text-analytics-supported-languages\">Supported languages in Text Analytics API</a> for the list of enabled languages.\n",
        "operationId": "EntitiesLinking",
        "summary": "EntityLinking",
        "parameters": [
          {
            "name": "showStats",
            "in": "query",
            "description": "(optional) if set to true, response will contain input and document level statistics.",
            "type": "boolean"
          },
          {
            "name": "model-version",
            "in": "query",
            "description": "(optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.",
            "type": "string"
          },
          {
            "name": "multiLanguageBatchInput",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/MultiLanguageBatchInput"
            },
            "description": "Collection of documents to analyze."
          }
        ],
        "consumes": [
          "application/json",
          "text/json"
        ],
        "produces": [
          "application/json",
          "text/json"
        ],
        "responses": {
          "200": {
            "description": "A successful call results in a list of recognized entities returned for each valid document",
            "schema": {
              "$ref": "#/definitions/EntityLinkingResult"
            },
            "examples": {
              "application/json": {
                "documents": [
                  {
                    "id": "1",
                    "entities": [
                      {
                        "name": "Seattle",
                        "matches": [
                          {
                            "text": "Seattle",
                            "offset": 26,
                            "length": 7,
                            "score": 0.15046201222847677
                          }
                        ],
                        "language": "en",
                        "id": "Seattle",
                        "url": "https://en.wikipedia.org/wiki/Seattle",
                        "dataSource": "Wikipedia"
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "entities": [
                      {
                        "name": "Microsoft",
                        "matches": [
                          {
                            "text": "Microsoft",
                            "offset": 10,
                            "length": 9,
                            "score": 0.1869365971673207
                          }
                        ],
                        "language": "en",
                        "id": "Microsoft",
                        "url": "https://en.wikipedia.org/wiki/Microsoft",
                        "dataSource": "Wikipedia"
                      }
                    ]
                  },
                  {
                    "id": "3",
                    "entities": [
                      {
                        "name": "Space Needle",
                        "matches": [
                          {
                            "text": "Space Needle",
                            "offset": 10,
                            "length": 12,
                            "score": 0.155903620065595
                          }
                        ],
                        "language": "en",
                        "id": "Space Needle",
                        "url": "https://en.wikipedia.org/wiki/Space_Needle",
                        "dataSource": "Wikipedia"
                      }
                    ]
                  }
                ],
                "errors": [],
                "modelVersion": "2019-10-01"
              }
            }
          },
          "500": {
            "description": "Error Response",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          }
        }
      }
    },
    "/keyPhrases": {
      "post": {
        "description": "The API returns a list of strings denoting the key talking points in the input text. See the <a href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/text-analytics-supported-languages\">Supported languages in Text Analytics API</a> for the list of enabled languages.",
        "operationId": "KeyPhrases",
        "summary": "Key Phrases",
        "parameters": [
          {
            "name": "showStats",
            "in": "query",
            "description": "(optional) if set to true, response will contain input and document level statistics.",
            "type": "boolean"
          },
          {
            "name": "model-version",
            "in": "query",
            "description": "(optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.",
            "type": "string"
          },
          {
            "name": "multiLanguageBatchInput",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/MultiLanguageBatchInput"
            },
            "description": "Collection of documents to analyze. Documents can now contain a language field to indicate the text language"
          }
        ],
        "consumes": [
          "application/json",
          "text/json"
        ],
        "produces": [
          "application/json",
          "text/json"
        ],
        "responses": {
          "200": {
            "description": "A successful response results in 0 or more key phrases identified in each valid document",
            "schema": {
              "$ref": "#/definitions/KeyPhraseBatchResult"
            },
            "examples": {
              "application/json": {
                "documents": [
                  {
                    "id": "1",
                    "keyPhrases": [
                      "world",
                      "input text"
                    ]
                  },
                  {
                    "id": "2",
                    "keyPhrases": [
                      "monde"
                    ]
                  },
                  {
                    "id": "3",
                    "keyPhrases": [
                      "carretera",
                      "tráfico",
                      "día"
                    ]
                  }
                ],
                "errors": [],
                "modelVersion": "2019-10-01"
              }
            }
          },
          "500": {
            "description": "Error Response",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          }
        }
      }
    },
    "/sentiment": {
      "post": {
        "description": "The API returns a document sentiment prediction, as well as sentiment scores for each sentiment class (Positive, Negative, and Neutral).In addition, sentence level sentiment predictions are returned. See the <a href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/text-analytics-supported-languages\">Supported languages in Text Analytics API</a> for the list of enabled languages.",
        "operationId": "Sentiment",
        "summary": "Sentiment",
        "parameters": [
          {
            "name": "showStats",
            "in": "query",
            "description": "(optional) if set to true, response will contain input and document level statistics.",
            "type": "boolean"
          },
          {
            "name": "model-version",
            "in": "query",
            "description": "(optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.",
            "type": "string"
          },
          {
            "name": "multiLanguageBatchInput",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/MultiLanguageBatchInput"
            },
            "description": "Collection of documents to analyze."
          }
        ],
        "consumes": [
          "application/json",
          "text/json"
        ],
        "produces": [
          "application/json",
          "text/json"
        ],
        "responses": {
          "200": {
            "description": "A successful call results in a document sentiment prediction, as well as sentiment scores for each sentiment class (Positive, Negative, and Neutral)",
            "schema": {
              "$ref": "#/definitions/SentimentResponse"
            },
            "examples": {
              "application/json": "{\n  \"documents\": [\n    {\n      \"id\": \"1\",\n      \"sentiment\": \"positive\",\n      \"documentScores\": \n        {\n          \"positive\": 0.998519241809845,\n          \"neutral\": 0.0009635657188483,\n          \"negative\": 0.000517153472174\n        },\n      \"sentences\": [\n        {\n          \"sentiment\": \"neutral\",\n          \"sentenceScores\": \n            {\n              \"positive\": 0.070910170674324,\n              \"neutral\": 0.91240334510803223,\n              \"negative\": 0.0166865326464176\n            },\n          \"offset\": 0,\n          \"length\": 12\n        }, \n        {\n          \"sentiment\": \"positive\",\n          \"sentenceScores\": \n            {\n              \"positive\": 0.998519241809845,\n              \"neutral\": 0.0009635657188483,\n              \"negative\": 0.000517153472174\n            },\n          \"offset\": 13,\n          \"length\": 36\n        }\n      ]\n    }, \n    {\n      \"id\": \"2\",\n      \"sentiment\": \"positive\",\n      \"documentScores\": \n        {\n          \"positive\": 0.99545717239379883,\n          \"neutral\": 0.0034653299953789,\n          \"negative\": 0.0010774657130241\n        },\n      \"sentences\": [\n        {\n          \"sentiment\": \"neutral\",\n          \"sentenceScores\": \n            {\n              \"positive\": 0.0499138832092285,\n              \"neutral\": 0.93870127201080322,\n              \"negative\": 0.0113849258050323\n            },\n          \"offset\": 0,\n          \"length\": 30\n        }, \n        {\n          \"sentiment\": \"positive\",\n          \"sentenceScores\": \n            {\n              \"positive\": 0.99545717239379883,\n              \"neutral\": 0.0034653299953789,\n              \"negative\": 0.0010774657130241\n            },\n          \"offset\": 31,\n          \"length\": 13\n        }\n      ]\n    }, \n    {\n      \"id\": \"3\",\n      \"sentiment\": \"positive\",\n      \"documentScores\": \n        {\n          \"positive\": 0.99651283025741577,\n          \"neutral\": 0.0018965365597978,\n          \"negative\": 0.0015906029148027\n        },\n      \"sentences\": [\n        {\n          \"sentiment\": \"positive\",\n          \"sentenceScores\": \n            {\n              \"positive\": 0.99651283025741577,\n              \"neutral\": 0.0018965365597978,\n              \"negative\": 0.0015906029148027\n            },\n          \"offset\": 0,\n          \"length\": 52\n        }\n      ]\n    }\n  ],\n  \"modelVersion\": \"2019-10-01\"\n  \"errors\": []\n}"
            }
          },
          "500": {
            "description": "Error Response",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "MultiLanguageBatchInput": {
      "type": "object",
      "required": [
        "documents"
      ],
      "properties": {
        "documents": {
          "type": "array",
          "description": "The set of documents to process as part of this batch.",
          "items": {
            "$ref": "#/definitions/MultiLanguageInput"
          }
        }
      },
      "description": "Contains a set of input documents to be analyzed by the service.",
      "example": {
        "documents": [
          {
            "language": "en",
            "id": "1",
            "text": "Hello world. This is some input text that I love."
          },
          {
            "language": "en",
            "id": "2",
            "text": "It's incredibly sunny outside! I'm so happy."
          },
          {
            "language": "en",
            "id": "3",
            "text": "Pike place market is my favorite Seattle attraction."
          }
        ]
      }
    },
    "MultiLanguageInput": {
      "type": "object",
      "required": [
        "id",
        "text"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "A unique, non-empty document identifier."
        },
        "text": {
          "type": "string",
          "description": "The input text to process."
        },
        "language": {
          "type": "string",
          "description": "(Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use \"en\" for English; \"es\" for Spanish etc. If not set, use \"en\" for English as default."
        }
      },
      "description": "Contains an input document to be analyzed by the service."
    },
    "DocumentError": {
      "type": "object",
      "required": [
        "id",
        "error"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "Document Id."
        },
        "error": {
          "type": "object",
          "description": "Document Error.",
          "items": {
            "$ref": "#/definitions/Error"
          }
        }
      }
    },
    "Error": {
      "type": "object",
      "required": [
        "code",
        "message"
      ],
      "properties": {
        "code": {
          "type": "string",
          "enum": [
            "InvalidRequest",
            "InvalidArgument",
            "InternalServerError",
            "ServiceUnavailable"
          ],
          "description": "Error code."
        },
        "message": {
          "type": "string",
          "description": "Error message."
        },
        "target": {
          "type": "string",
          "description": "Error target."
        },
        "innererror": {
          "$ref": "#/definitions/InnerError",
          "description": "Inner error contains more specific information."
        },
        "details": {
          "type": "array",
          "description": "Details about specific errors that led to this reported error.",
          "items": {
            "$ref": "#/definitions/Error"
          }
        }
      }
    },
    "InnerError": {
      "type": "object",
      "required": [
        "code",
        "message"
      ],
      "properties": {
        "code": {
          "type": "string",
          "enum": [
            "InvalidParameterValue",
            "InvalidRequestBodyFormat",
            "EmptyRequest",
            "MissingInputRecords",
            "InvalidDocument",
            "ModelVersionIncorrect",
            "InvalidDocumentBatch",
            "UnsupportedLanguageCode",
            "InvalidCountryHint"
          ],
          "description": "Error code."
        },
        "message": {
          "type": "string",
          "description": "Error message."
        },
        "target": {
          "type": "string",
          "description": "Error target."
        },
        "innererror": {
          "$ref": "#/definitions/InnerError",
          "description": "Inner error contains more specific information."
        }
      }
    },
    "SentimentResponse": {
      "type": "object",
      "required": [
        "documents",
        "errors",
        "modelVersion"
      ],
      "properties": {
        "documents": {
          "type": "array",
          "description": "Sentiment analysis per document.",
          "items": {
            "$ref": "#/definitions/DocumentSentiment"
          }
        },
        "errors": {
          "type": "array",
          "description": "Errors by document id.",
          "items": {
            "$ref": "#/definitions/DocumentError"
          }
        },
        "statistics": {
          "$ref": "#/definitions/RequestStatistics"
        },
        "modelVersion": {
          "type": "string",
          "description": "This field indicates which model is used for scoring."
        }
      }
    },
    "DocumentSentiment": {
      "type": "object",
      "required": [
        "id",
        "sentiment",
        "documentScores",
        "sentences"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique, non-empty document identifier."
        },
        "sentiment": {
          "type": "string",
          "description": "Predicted sentiment for document (Negative, Neutral, Positive, or Mixed).",
          "enum": [
            "positive",
            "neutral",
            "negative",
            "mixed"
          ]
        },
        "statistics": {
          "$ref": "#/definitions/DocumentStatistics"
        },
        "documentScores": {
          "description": "Document level sentiment confidence scores between 0 and 1 for each sentiment class."
        },
        "sentences": {
          "type": "array",
          "description": "Sentence level sentiment analysis.",
          "items": {
            "$ref": "#/definitions/SentenceSentiment"
          }
        }
      }
    },
    "RequestStatistics": {
      "type": "object",
      "required": [
        "documentsCount",
        "validDocumentsCount",
        "erroneousDocumentsCount",
        "transactionsCount"
      ],
      "properties": {
        "documentsCount": {
          "type": "integer",
          "format": "int32",
          "description": "Number of documents submitted in the request."
        },
        "validDocumentsCount": {
          "type": "integer",
          "format": "int32",
          "description": "Number of valid documents. This excludes empty, over-size limit or non-supported languages documents."
        },
        "erroneousDocumentsCount": {
          "type": "integer",
          "format": "int32",
          "description": "Number of invalid documents. This includes empty, over-size limit or non-supported languages documents."
        },
        "transactionsCount": {
          "type": "integer",
          "format": "int64",
          "description": "Number of transactions for the request."
        }
      },
      "description": "if showStats=true was specified in the request this field will contain information about the request payload."
    },
    "DocumentStatistics": {
      "type": "object",
      "required": [
        "charactersCount",
        "transactionsCount"
      ],
      "properties": {
        "charactersCount": {
          "type": "integer",
          "format": "int32",
          "description": "Number of text elements recognized in the document."
        },
        "transactionsCount": {
          "type": "integer",
          "format": "int32",
          "description": "Number of transactions for the document."
        }
      },
      "description": "if showStats=true was specified in the request this field will contain information about the document payload."
    },
    "SentimentConfidenceScorePerLabel": {
      "type": "object",
      "required": [
        "positive",
        "neutral",
        "negative"
      ],
      "properties": {
        "positive": {
          "type": "number",
          "format": "double"
        },
        "neutral": {
          "type": "number",
          "format": "double"
        },
        "negative": {
          "type": "number",
          "format": "double"
        }
      },
      "description": "Represents the confidence scores between 0 and 1 across all sentiment classes: positive, neutral, negative."
    },
    "SentenceSentiment": {
      "type": "object",
      "required": [
        "sentiment",
        "sentenceScores",
        "offset",
        "length",
        "warnings"
      ],
      "properties": {
        "sentiment": {
          "type": "string",
          "description": "The predicted Sentiment for the sentence.",
          "enum": [
            "positive",
            "neutral",
            "negative"
          ]
        },
        "sentenceScores": {
          "description": "The sentiment confidence score between 0 and 1 for the sentence for all classes."
        },
        "offset": {
          "type": "integer",
          "format": "int32",
          "description": "The sentence offset from the start of the document."
        },
        "length": {
          "type": "integer",
          "format": "int32",
          "description": "The length of the sentence by Unicode standard."
        },
        "warnings": {
          "type": "array",
          "description": "The warnings generated for the sentence.",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "EntitiesResult": {
      "type": "object",
      "required": [
        "documents",
        "errors",
        "modelVersion"
      ],
      "properties": {
        "documents": {
          "type": "array",
          "description": "Response by document",
          "items": {
            "$ref": "#/definitions/DocumentEntities"
          }
        },
        "errors": {
          "type": "array",
          "description": "Errors by document id.",
          "items": {
            "$ref": "#/definitions/DocumentError"
          }
        },
        "statistics": {
          "$ref": "#/definitions/RequestStatistics"
        },
        "modelVersion": {
          "type": "string",
          "description": "This field indicates which model is used for scoring."
        }
      }
    },
    "DocumentEntities": {
      "type": "object",
      "required": [
        "id",
        "entities"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique, non-empty document identifier."
        },
        "entities": {
          "type": "array",
          "description": "Recognized entities in the document.",
          "items": {
            "$ref": "#/definitions/Entity"
          }
        },
        "statistics": {
          "description": "if showStats=true was specified in the request this field will contain information about the document payload.",
          "$ref": "#/definitions/DocumentStatistics"
        }
      }
    },
    "Entity": {
      "type": "object",
      "required": [
        "text",
        "type",
        "offset",
        "length",
        "score"
      ],
      "properties": {
        "text": {
          "type": "string",
          "description": "Entity text as appears in the request."
        },
        "type": {
          "type": "string",
          "description": "Entity type, such as Person/Location/Org/SSN etc"
        },
        "subType": {
          "type": "string",
          "description": "Entity sub type, such as Age/Year/TimeRange etc"
        },
        "offset": {
          "type": "integer",
          "format": "int32",
          "description": "Start position (in Unicode characters) for the entity text."
        },
        "length": {
          "type": "integer",
          "format": "int32",
          "description": "Length (in Unicode characters) for the entity text."
        },
        "score": {
          "type": "number",
          "format": "double",
          "description": "Confidence score between 0 and 1 of the extracted entity."
        }
      }
    },
    "EntityLinkingResult": {
      "type": "object",
      "required": [
        "documents",
        "errors",
        "modelVersion"
      ],
      "properties": {
        "documents": {
          "type": "array",
          "description": "Response by document",
          "items": {
            "$ref": "#/definitions/DocumentLinkedEntities"
          }
        },
        "errors": {
          "type": "array",
          "description": "Errors by document id.",
          "items": {
            "$ref": "#/definitions/DocumentError"
          }
        },
        "statistics": {
          "$ref": "#/definitions/RequestStatistics"
        },
        "modelVersion": {
          "type": "string",
          "description": "This field indicates which model is used for scoring."
        }
      }
    },
    "DocumentLinkedEntities": {
      "type": "object",
      "required": [
        "id",
        "entities"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique, non-empty document identifier."
        },
        "entities": {
          "type": "array",
          "description": "Recognized well-known entities in the document.",
          "items": {
            "$ref": "#/definitions/LinkedEntity"
          }
        },
        "statistics": {
          "description": "if showStats=true was specified in the request this field will contain information about the document payload.",
          "$ref": "#/definitions/DocumentStatistics"
        }
      }
    },
    "LinkedEntity": {
      "type": "object",
      "required": [
        "name",
        "matches",
        "language",
        "url",
        "dataSource"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "Entity Linking formal name."
        },
        "matches": {
          "type": "array",
          "description": "List of instances this entity appears in the text.",
          "items": {
            "$ref": "#/definitions/Match"
          }
        },
        "language": {
          "type": "string",
          "description": "Language used in the data source."
        },
        "id": {
          "type": "string",
          "description": "Unique identifier of the recognized entity from the data source."
        },
        "url": {
          "type": "string",
          "description": "URL for the entity's page from the data source."
        },
        "dataSource": {
          "type": "string",
          "description": "Data source used to extract entity linking, such as Wiki/Bing etc."
        }
      }
    },
    "Match": {
      "type": "object",
      "required": [
        "score",
        "text",
        "offset",
        "length"
      ],
      "properties": {
        "score": {
          "type": "number",
          "format": "double",
          "description": "If a well-known item is recognized, a decimal number denoting the confidence level between 0 and 1 will be returned."
        },
        "text": {
          "type": "string",
          "description": "Entity text as appears in the request."
        },
        "offset": {
          "type": "integer",
          "format": "int32",
          "description": "Start position (in Unicode characters) for the entity match text."
        },
        "length": {
          "type": "integer",
          "format": "int32",
          "description": "Length (in Unicode characters) for the entity match text."
        }
      }
    },
    "KeyPhraseResult": {
      "type": "object",
      "required": [
        "documents",
        "errors",
        "modelVersion"
      ],
      "properties": {
        "documents": {
          "type": "array",
          "description": "Response by document",
          "items": {
            "$ref": "#/definitions/DocumentKeyPhrases"
          }
        },
        "errors": {
          "type": "array",
          "description": "Errors by document id.",
          "items": {
            "$ref": "#/definitions/DocumentError"
          }
        },
        "statistics": {
          "$ref": "#/definitions/RequestStatistics"
        },
        "modelVersion": {
          "type": "string",
          "description": "This field indicates which model is used for scoring."
        }
      }
    },
    "DocumentKeyPhrases": {
      "type": "object",
      "required": [
        "id",
        "keyPhrases"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique, non-empty document identifier."
        },
        "keyPhrases": {
          "type": "array",
          "description": "A list of representative words or phrases. The number of key phrases returned is proportional to the number of words in the input document.",
          "items": {
            "type": "string"
          }
        },
        "statistics": {
          "description": "if showStats=true was specified in the request this field will contain information about the document payload.",
          "$ref": "#/definitions/DocumentStatistics"
        }
      }
    },
    "LanguageBatchInput": {
      "type": "object",
      "required": [
        "documents"
      ],
      "properties": {
        "documents": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/LanguageInput"
          }
        }
      },
      "example": {
        "documents": [
          {
            "countryHint": "US",
            "id": "1",
            "text": "Hello world"
          },
          {
            "id": "2",
            "text": "Bonjour tout le monde"
          },
          {
            "id": "3",
            "text": "La carretera estaba atascada. Había mucho tráfico el día de ayer."
          }
        ]
      }
    },
    "LanguageInput": {
      "type": "object",
      "required": [
        "id",
        "text"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique, non-empty document identifier."
        },
        "text": {
          "type": "string"
        },
        "countryHint": {
          "type": "string"
        }
      }
    },
    "LanguageResult": {
      "type": "object",
      "required": [
        "documents",
        "errors",
        "modelVersion"
      ],
      "properties": {
        "documents": {
          "type": "array",
          "description": "Response by document",
          "items": {
            "$ref": "#/definitions/DocumentLanguage"
          }
        },
        "errors": {
          "type": "array",
          "description": "Errors by document id.",
          "items": {
            "$ref": "#/definitions/DocumentError"
          }
        },
        "statistics": {
          "$ref": "#/definitions/RequestStatistics"
        },
        "modelVersion": {
          "type": "string",
          "description": "This field indicates which model is used for scoring."
        }
      }
    },
    "DocumentLanguage": {
      "type": "object",
      "required": [
        "id",
        "detectedLanguages"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique, non-empty document identifier."
        },
        "detectedLanguages": {
          "type": "array",
          "description": "A list of extracted languages.",
          "items": {
            "$ref": "#/definitions/DetectedLanguage"
          }
        },
        "statistics": {
          "description": "if showStats=true was specified in the request this field will contain information about the document payload.",
          "$ref": "#/definitions/DocumentStatistics"
        }
      }
    },
    "DetectedLanguage": {
      "type": "object",
      "required": [
        "name",
        "iso6391Name",
        "score"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "Long name of a detected language (e.g. English, French)."
        },
        "iso6391Name": {
          "type": "string",
          "description": "A two letter representation of the detected language according to the ISO 639-1 standard (e.g. en, fr)."
        },
        "score": {
          "type": "number",
          "format": "double",
          "description": "A confidence score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true."
        }
      }
    }
  },
  "tags": []
}

//let obj = JSON.parse(json);
var res=json['paths'];
var res_keys=Object.keys(res);
return res_keys;
}
var result=check();
//console.log('this is result');
//console.log(result);

module.exports= result;
