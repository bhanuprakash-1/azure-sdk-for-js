## API Report File for "@azure-rest/communication-messages"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { ErrorResponse } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import type { KeyCredential } from '@azure/core-auth';
import { Paged } from '@azure/core-paging';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PathUncheckedResponse } from '@azure-rest/core-client';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';
import type { TokenCredential } from '@azure/core-auth';

// @public
export interface AudioNotificationContent extends NotificationContentParent {
    kind: "audio";
    mediaUri: string;
}

// @public
export type CommunicationMessageKind = string;

// @public
export type CommunicationMessagesChannelOutput = string;

// @public
function createClient(connectionString: string, options?: ClientOptions): MessagesServiceClient;

// @public
function createClient(endpoint: string, credential: KeyCredential | TokenCredential, options?: ClientOptions): MessagesServiceClient;
export default createClient;

// @public
export interface DocumentNotificationContent extends NotificationContentParent {
    caption?: string;
    fileName?: string;
    kind: "document";
    mediaUri: string;
}

// @public
export type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

// @public (undocumented)
export interface GetMedia {
    get(options?: GetMediaParameters): StreamableMethod<GetMedia200Response | GetMediaDefaultResponse>;
}

// @public (undocumented)
export interface GetMedia200Headers {
    "content-type": "application/octet-stream";
    "x-ms-client-request-id"?: string;
}

// @public
export interface GetMedia200Response extends HttpResponse {
    body: Uint8Array;
    // (undocumented)
    headers: RawHttpHeaders & GetMedia200Headers;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface GetMediaDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface GetMediaDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & GetMediaDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export interface GetMediaHeaderParam {
    // (undocumented)
    headers?: RawHttpHeadersInput & GetMediaHeaders;
}

// @public (undocumented)
export interface GetMediaHeaders {
    "x-ms-client-request-id"?: string;
}

// @public (undocumented)
export type GetMediaParameters = GetMediaHeaderParam & RequestParameters;

// @public
export type GetPage<TPage> = (pageLink: string, maxPageSize?: number) => Promise<{
    page: TPage;
    nextPageLink?: string;
}>;

// @public
export interface ImageNotificationContent extends NotificationContentParent {
    caption?: string;
    kind: "image";
    mediaUri: string;
}

// @public (undocumented)
export function isUnexpected(response: GetMedia200Response | GetMediaDefaultResponse): response is GetMediaDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: Send202Response | SendDefaultResponse): response is SendDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ListTemplates200Response | ListTemplatesDefaultResponse): response is ListTemplatesDefaultResponse;

// @public (undocumented)
export interface ListTemplates {
    get(options?: ListTemplatesParameters): StreamableMethod<ListTemplates200Response | ListTemplatesDefaultResponse>;
}

// @public (undocumented)
export interface ListTemplates200Headers {
    "x-ms-client-request-id"?: string;
}

// @public
export interface ListTemplates200Response extends HttpResponse {
    // (undocumented)
    body: PagedMessageTemplateItemOutput;
    // (undocumented)
    headers: RawHttpHeaders & ListTemplates200Headers;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ListTemplatesDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ListTemplatesDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ListTemplatesDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export interface ListTemplatesHeaderParam {
    // (undocumented)
    headers?: RawHttpHeadersInput & ListTemplatesHeaders;
}

// @public (undocumented)
export interface ListTemplatesHeaders {
    "x-ms-client-request-id"?: string;
}

// @public (undocumented)
export type ListTemplatesParameters = ListTemplatesQueryParam & ListTemplatesHeaderParam & RequestParameters;

// @public (undocumented)
export interface ListTemplatesQueryParam {
    // (undocumented)
    queryParameters?: ListTemplatesQueryParamProperties;
}

// @public (undocumented)
export interface ListTemplatesQueryParamProperties {
    maxpagesize?: number;
}

// @public @deprecated (undocumented)
export interface MediaNotificationContent extends NotificationContentParent {
    content?: string;
    kind: "image_v0";
    mediaUri: string;
}

// @public
export interface MessageReceiptOutput {
    messageId: string;
    to: string;
}

// @public (undocumented)
export type MessagesServiceClient = Client & {
    path: Routes;
};

// @public
export interface MessagesServiceClientOptions extends ClientOptions {
    apiVersion?: string;
}

// @public
export interface MessageTemplate {
    bindings?: MessageTemplateBindings;
    language: string;
    name: string;
    values?: Array<MessageTemplateValue>;
}

// @public
export type MessageTemplateBindings = MessageTemplateBindingsParent | WhatsAppMessageTemplateBindings;

// @public
export type MessageTemplateBindingsKind = string;

// @public
export interface MessageTemplateBindingsParent {
    // (undocumented)
    kind: MessageTemplateBindingsKind;
}

// @public
export interface MessageTemplateDocument extends MessageTemplateValueParent {
    caption?: string;
    fileName?: string;
    kind: "document";
    url: string;
}

// @public
export interface MessageTemplateImage extends MessageTemplateValueParent {
    caption?: string;
    fileName?: string;
    kind: "image";
    url: string;
}

// @public
export type MessageTemplateItemOutput = MessageTemplateItemOutputParent | WhatsAppMessageTemplateItemOutput;

// @public
export interface MessageTemplateItemOutputParent {
    // (undocumented)
    kind: CommunicationMessagesChannelOutput;
    language: string;
    readonly name: string;
    status: MessageTemplateStatusOutput;
}

// @public
export interface MessageTemplateLocation extends MessageTemplateValueParent {
    address?: string;
    kind: "location";
    latitude: number;
    locationName?: string;
    longitude: number;
}

// @public
export interface MessageTemplateQuickAction extends MessageTemplateValueParent {
    kind: "quickAction";
    payload?: string;
    text?: string;
}

// @public
export type MessageTemplateStatusOutput = string;

// @public
export interface MessageTemplateText extends MessageTemplateValueParent {
    kind: "text";
    text: string;
}

// @public
export type MessageTemplateValue = MessageTemplateValueParent | MessageTemplateText | MessageTemplateImage | MessageTemplateDocument | MessageTemplateVideo | MessageTemplateLocation | MessageTemplateQuickAction;

// @public
export type MessageTemplateValueKind = string;

// @public
export interface MessageTemplateValueParent {
    // (undocumented)
    kind: MessageTemplateValueKind;
    name: string;
}

// @public
export interface MessageTemplateVideo extends MessageTemplateValueParent {
    caption?: string;
    fileName?: string;
    kind: "video";
    url: string;
}

// @public
export type NotificationContent = NotificationContentParent | TextNotificationContent | MediaNotificationContent | ImageNotificationContent | DocumentNotificationContent | VideoNotificationContent | AudioNotificationContent | TemplateNotificationContent;

// @public
export interface NotificationContentParent {
    channelRegistrationId: string;
    // (undocumented)
    kind: CommunicationMessageKind;
    to: string[];
}

// @public
export type PagedMessageTemplateItemOutput = Paged<MessageTemplateItemOutput>;

// @public
export function paginate<TResponse extends PathUncheckedResponse>(client: Client, initialResponse: TResponse, options?: PagingOptions<TResponse>): PagedAsyncIterableIterator<PaginateReturn<TResponse>>;

// @public
export type PaginateReturn<TResult> = TResult extends {
    body: {
        value?: infer TPage;
    };
} ? GetArrayType<TPage> : Array<unknown>;

// @public
export interface PagingOptions<TResponse> {
    customGetPage?: GetPage<PaginateReturn<TResponse>[]>;
}

// @public
export type RepeatabilityResultOutput = "accepted" | "rejected";

// @public (undocumented)
export interface Routes {
    (path: "/messages/streams/{id}", id: string): GetMedia;
    (path: "/messages/notifications:send"): Send;
    (path: "/messages/channels/{channelId}/templates", channelId: string): ListTemplates;
}

// @public (undocumented)
export interface Send {
    post(options: SendParameters): StreamableMethod<Send202Response | SendDefaultResponse>;
}

// @public (undocumented)
export interface Send202Headers {
    "repeatability-result"?: RepeatabilityResultOutput;
    "x-ms-client-request-id"?: string;
}

// @public
export interface Send202Response extends HttpResponse {
    // (undocumented)
    body: SendMessageResultOutput;
    // (undocumented)
    headers: RawHttpHeaders & Send202Headers;
    // (undocumented)
    status: "202";
}

// @public (undocumented)
export interface SendBodyParam {
    body: NotificationContent;
}

// @public (undocumented)
export interface SendDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface SendDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & SendDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export interface SendHeaderParam {
    // (undocumented)
    headers?: RawHttpHeadersInput & SendHeaders;
}

// @public (undocumented)
export interface SendHeaders {
    "Repeatability-First-Sent"?: string;
    "Repeatability-Request-ID"?: string;
    "x-ms-client-request-id"?: string;
}

// @public
export interface SendMessageResultOutput {
    receipts: Array<MessageReceiptOutput>;
}

// @public (undocumented)
export type SendParameters = SendHeaderParam & SendBodyParam & RequestParameters;

// @public
export interface TemplateNotificationContent extends NotificationContentParent {
    kind: "template";
    template: MessageTemplate;
}

// @public
export interface TextNotificationContent extends NotificationContentParent {
    content: string;
    kind: "text";
}

// @public
export interface VideoNotificationContent extends NotificationContentParent {
    caption?: string;
    kind: "video";
    mediaUri: string;
}

// @public
export type WhatsAppMessageButtonSubType = string;

// @public
export interface WhatsAppMessageTemplateBindings extends MessageTemplateBindingsParent {
    body?: Array<WhatsAppMessageTemplateBindingsComponent>;
    buttons?: Array<WhatsAppMessageTemplateBindingsButton>;
    footer?: Array<WhatsAppMessageTemplateBindingsComponent>;
    header?: Array<WhatsAppMessageTemplateBindingsComponent>;
    kind: "whatsApp";
}

// @public
export interface WhatsAppMessageTemplateBindingsButton {
    refValue: string;
    subType: WhatsAppMessageButtonSubType;
}

// @public
export interface WhatsAppMessageTemplateBindingsComponent {
    refValue: string;
}

// @public
export interface WhatsAppMessageTemplateItemOutput extends MessageTemplateItemOutputParent {
    content?: any;
    kind: "whatsApp";
}

// (No @packageDocumentation comment for this package)

```
