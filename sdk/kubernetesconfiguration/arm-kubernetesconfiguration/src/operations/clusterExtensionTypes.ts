/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ClusterExtensionTypes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SourceControlConfigurationClient } from "../sourceControlConfigurationClient";
import {
  ExtensionType,
  Enum0,
  Enum1,
  ClusterExtensionTypesListNextOptionalParams,
  ClusterExtensionTypesListOptionalParams,
  ClusterExtensionTypesListResponse,
  ClusterExtensionTypesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ClusterExtensionTypes operations. */
export class ClusterExtensionTypesImpl implements ClusterExtensionTypes {
  private readonly client: SourceControlConfigurationClient;

  /**
   * Initialize a new instance of the class ClusterExtensionTypes class.
   * @param client Reference to the service client
   */
  constructor(client: SourceControlConfigurationClient) {
    this.client = client;
  }

  /**
   * Get Extension Types
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS clusters) or
   *                  Microsoft.Kubernetes (for OnPrem K8S clusters).
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for AKS
   *                            clusters) or connectedClusters (for OnPrem K8S clusters).
   * @param clusterName The name of the kubernetes cluster.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    clusterRp: Enum0,
    clusterResourceName: Enum1,
    clusterName: string,
    options?: ClusterExtensionTypesListOptionalParams
  ): PagedAsyncIterableIterator<ExtensionType> {
    const iter = this.listPagingAll(
      resourceGroupName,
      clusterRp,
      clusterResourceName,
      clusterName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          resourceGroupName,
          clusterRp,
          clusterResourceName,
          clusterName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    clusterRp: Enum0,
    clusterResourceName: Enum1,
    clusterName: string,
    options?: ClusterExtensionTypesListOptionalParams
  ): AsyncIterableIterator<ExtensionType[]> {
    let result = await this._list(
      resourceGroupName,
      clusterRp,
      clusterResourceName,
      clusterName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    clusterRp: Enum0,
    clusterResourceName: Enum1,
    clusterName: string,
    options?: ClusterExtensionTypesListOptionalParams
  ): AsyncIterableIterator<ExtensionType> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      clusterRp,
      clusterResourceName,
      clusterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get Extension Types
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS clusters) or
   *                  Microsoft.Kubernetes (for OnPrem K8S clusters).
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for AKS
   *                            clusters) or connectedClusters (for OnPrem K8S clusters).
   * @param clusterName The name of the kubernetes cluster.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    clusterRp: Enum0,
    clusterResourceName: Enum1,
    clusterName: string,
    options?: ClusterExtensionTypesListOptionalParams
  ): Promise<ClusterExtensionTypesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        options
      },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS clusters) or
   *                  Microsoft.Kubernetes (for OnPrem K8S clusters).
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for AKS
   *                            clusters) or connectedClusters (for OnPrem K8S clusters).
   * @param clusterName The name of the kubernetes cluster.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    clusterRp: Enum0,
    clusterResourceName: Enum1,
    clusterName: string,
    nextLink: string,
    options?: ClusterExtensionTypesListNextOptionalParams
  ): Promise<ClusterExtensionTypesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        nextLink,
        options
      },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensionTypes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionTypeList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionTypeList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
