// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { SendMessageRequest } from "../generated/src/models";
import type { SmsSendOptions, SmsSendRequest } from "../smsClient";
import { Uuid } from "./uuid";
import type { SmsSendOptions as InternalOptions } from "../generated/src/models";

export function generateSendMessageRequest(
  smsRequest: SmsSendRequest,
  options: SmsSendOptions = {},
): SendMessageRequest {
  const _smsSendOptions: InternalOptions = {
    enableDeliveryReport: options.enableDeliveryReport ?? false,
  };
  if (options.tag) {
    _smsSendOptions["tag"] = options.tag;
  }

  return {
    from: smsRequest.from,
    smsRecipients: smsRequest.to.map((phoneNumberStr) => {
      return {
        to: phoneNumberStr,
        repeatabilityFirstSent: new Date(Date.now()).toUTCString(),
        repeatabilityRequestId: Uuid.generateUuid(),
      };
    }),
    message: smsRequest.message,
    smsSendOptions: {
      enableDeliveryReport: options.enableDeliveryReport ?? false,
      ...(options.tag && { tag: options.tag }),
    },
  };
}
