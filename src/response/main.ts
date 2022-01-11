import { constants } from "http2";

import { HttpResponse } from "../annotations/api-handler";

import { ResponseValues } from "./types";

const {
  HTTP_STATUS_INTERNAL_SERVER_ERROR,
  HTTP_STATUS_OK,
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_UNAUTHORIZED,
  HTTP_STATUS_FORBIDDEN,
} = constants;

export function okResponse(values: ResponseValues = {}): HttpResponse {
  return {
    headers: values.headers,
    multiValueHeaders: values.multiValueHeaders,
    isBase64Encoded: values.isBase64Encoded,
    statusCode: HTTP_STATUS_OK,
    body: values.body,
  };
}

export function internalError(values: ResponseValues = {}): HttpResponse {
  return {
    headers: values.headers,
    multiValueHeaders: values.multiValueHeaders,
    isBase64Encoded: values.isBase64Encoded,
    statusCode: HTTP_STATUS_INTERNAL_SERVER_ERROR,
    body: values.body ?? {
      statusCode: HTTP_STATUS_INTERNAL_SERVER_ERROR,
      error: "InternalServerError",
      message: "Internal server error.",
    },
  };
}

export function badRequest(values: ResponseValues = {}): HttpResponse {
  return {
    headers: values.headers,
    multiValueHeaders: values.multiValueHeaders,
    isBase64Encoded: values.isBase64Encoded,
    statusCode: HTTP_STATUS_BAD_REQUEST,
    body: values.body ?? {
      statusCode: HTTP_STATUS_BAD_REQUEST,
      error: "BadRequest",
      message: "Invalid request.",
    },
  };
}

export function unauthorized(values: ResponseValues = {}): HttpResponse {
  return {
    headers: values.headers,
    multiValueHeaders: values.multiValueHeaders,
    isBase64Encoded: values.isBase64Encoded,
    statusCode: HTTP_STATUS_UNAUTHORIZED,
    body: values.body ?? {
      statusCode: HTTP_STATUS_UNAUTHORIZED,
      error: "Unauthorized",
      message: "Request requires authentication.",
    },
  };
}

export function forbidden(values: ResponseValues = {}): HttpResponse {
  return {
    headers: values.headers,
    multiValueHeaders: values.multiValueHeaders,
    isBase64Encoded: values.isBase64Encoded,
    statusCode: HTTP_STATUS_FORBIDDEN,
    body: values.body ?? {
      statusCode: HTTP_STATUS_FORBIDDEN,
      error: "Forbidden",
      message: "Request entitlements not met.",
    },
  };
}
